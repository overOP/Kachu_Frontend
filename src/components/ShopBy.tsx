"use client";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(MotionPathPlugin);
}

interface Brand {
  bg: string;
  Brand: string;
  size: number;
  name: string;
  description: string; // ✅ new field
  render: () => React.ReactNode;
}

const imgStyle: React.CSSProperties = {
  width: "65%",
  height: "65%",
  objectFit: "contain",
  pointerEvents: "none",
};

const brands: Brand[] = [
  { name: "pg", bg: "#1B3A8C", size: 120, Brand:"P&G",description: "Procter & Gamble products", render: () => <img src="../shop/p&g.png" style={imgStyle} /> },
  { name: "loreal", bg: "#f5d4dd", size: 120, Brand:"L'Oréal",description: "L'Oréal Paris cosmetics", render: () => <img src="../shop/L’Oreal Paris.png" style={imgStyle} /> },
  { name: "coco", bg: "#E8001C", size: 120, Brand:"Coca-Cola",description: "Coca-Cola beverages", render: () => <img src="../shop/coco.png" style={imgStyle} /> },
  { name: "kraft", bg: "white", size: 120, Brand:"Kraft",description: "Kraft dairy & food products", render: () => <img src="../shop/kraft.png" style={imgStyle} /> },
  { name: "nestle", bg: "#D0021B", size: 120, Brand:"Nestlé",description: "Nestlé food and drinks", render: () => <img src="../shop/nestle.webp" style={imgStyle} /> },
  { name: "pepsi", bg: "white", size: 120, Brand:"Pepsi",description: "Pepsi beverages", render: () => <img src="../shop/pepsi.png" style={imgStyle} /> },
];

const W = 2000;
const H = 400;

function buildCurve(): string {
  const padding = 100;
  const usableWidth = W - padding * 2;

  const xs = brands.map((_, i) => padding + i * (usableWidth / (brands.length - 1)));
  const ys = brands.map((_, i) => (i % 2 === 0 ? 120 : 260));

  let d = `M${xs[0]},${ys[0]}`;
  for (let i = 0; i < xs.length - 1; i++) {
    const cx = (xs[i] + xs[i + 1]) / 2;
    d += ` C ${cx},${ys[i]} ${cx},${ys[i + 1]} ${xs[i + 1]},${ys[i + 1]}`;
  }
  return d;
}

const ShopBy: React.FC = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState<number | null>(null);

  const step = 1 / (brands.length - 1);
  const positions = useRef<number[]>(brands.map((_, i) => i * step));

  useEffect(() => {
    brands.forEach((_, i) => {
      gsap.set(`.brand-node-${i}`, {
        motionPath: {
          path: "#factoryPath",
          align: "#factoryPath",
          alignOrigin: [0.5, 0.5],
          start: positions.current[i],
          end: positions.current[i],
        },
      });

      animateNode(i, positions.current[i]);
    });
  }, []);

  const animateNode = (index: number, startPos: number) => {
    const step = 1 / (brands.length - 1);
    const endPos = startPos + step;

    gsap.to(`.brand-node-${index}`, {
      duration: 5,
      ease: "none",
      motionPath: {
        path: "#factoryPath",
        align: "#factoryPath",
        alignOrigin: [0.5, 0.5],
        start: startPos,
        end: endPos > 1 ? 1 : endPos,
      },

      // ✅ ZOOM EFFECT
      onUpdate: function () {
        const progress = (this as gsap.core.Tween).progress();
        const current = startPos + progress * (endPos - startPos);

        const isCenter = Math.abs(current - 0.5) < 0.1;

        gsap.to(this.targets()[0], {
          scale: isCenter ? 1.6 : 1,
          zIndex: isCenter ? 50 : 10,
          borderRadius: isCenter ? 8 : "50%",
          duration: 0.3,
        });
      },

      onComplete: () => {
        animateNode(index, endPos > 1 ? 0 : endPos);
      },
    });
  };

  const handleEnter = (i: number) => {
    setHovered(i);
    gsap.globalTimeline.pause();
  };

  const handleLeave = () => {
    setHovered(null);
    gsap.globalTimeline.resume();
  };

  return (
    <div className="flex flex-col items-center bg-gray-200 py-6">
      <h2 className="text-2xl font-bold text-[#1a5c3c]">Shop by Factories</h2>

      <div className="relative mt-6" style={{ width: W, height: H }}>
        <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 w-full h-full">
          <path id="factoryPath" d={buildCurve()} fill="none" stroke="#ccc" />
        </svg>

        {brands.map((b, i) => (
          <div
            key={i}
            className={`brand-node-${i} flex items-center justify-center cursor-pointer relative`}
            style={{
              width: b.size,
              height: b.size,
              backgroundColor: b.bg,
              borderRadius: 8, // ✅ SQUARE
              zIndex: 10,
            }}
            onMouseEnter={() => handleEnter(i)}
            onMouseLeave={handleLeave}
            onClick={() => navigate(`/shop/${b.name}`)}
          >
            {b.render()}

            {hovered === i && (
              <div className="absolute bottom-full mb-2 flex flex-col items-center z-[999]">
                {/* Name */}
                <div className="bg-gray-600 text-white text-xs px-3 py-1 rounded-md shadow-lg whitespace-nowrap">
                  {b.Brand}
                </div>
                {/* Arrow */}
                <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black"></div>
                {/* Description */}
                <div className="mt-1 bg-gray-700 text-white text-xs px-2 py-1 rounded-md shadow-md whitespace-nowrap">
                  {b.description}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopBy;