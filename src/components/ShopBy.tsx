import React, { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

interface Factory {
  src: string;
  name: string;
}

const ShopBy: React.FC = () => {
  const navigate = useNavigate();
  const scope = useRef<HTMLDivElement>(null); // Scoped ref for GSAP

  const factories: Factory[] = [
    { src: "/shop/pg.png", name: "pg" },
    { src: "/shop/loreal.png", name: "loreal" },
    { src: "/shop/coco.png", name: "coco" },
    { src: "/shop/kraft.png", name: "kraft" },
    { src: "/shop/nestle.png", name: "nestle" },
  ];

  useLayoutEffect(() => {
    // GSAP context for this component
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".factory-item");

      // Reset any previous animation props
      gsap.set(items, { clearProps: "all" });

      gsap.to(items, {
        duration: 2,
        ease: "expo.out",
        stagger: 0.1,
        motionPath: {
          path: "#arcPath",
          align: "#arcPath",
          alignOrigin: [0.5, 0.5],
          autoRotate: false,
          start: (i: number) => i / (items.length - 1),
          end: (i: number) => i / (items.length - 1),
        },
      });
    }, scope);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div ref={scope} className="relative w-full py-20 bg-white overflow-hidden">
      <h1 className="text-center text-2xl font-bold mb-20">Shop by Factories</h1>

      <div className="relative max-w-5xl mx-auto h-[300px]">
        {/* Visible Path */}
        <svg
          viewBox="0 0 1000 300"
          className="absolute inset-0 w-full h-full"
          style={{ overflow: "visible" }}
        >
          <path
            id="arcPath"
            d="M50,250 Q500,0 950,250"
            stroke="#e5e7eb"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        {/* Logos */}
        {factories.map((f, i) => (
          <div
            key={i}
            className="factory-item absolute w-20 h-20 md:w-24 md:h-24 cursor-pointer"
            onClick={() => navigate(`/shop/${f.name}`)}
          >
            <div className="w-full h-full rounded-full bg-white shadow-xl border flex items-center justify-center p-4 hover:scale-110 transition-transform">
              <img src={f.src} alt={f.name} className="max-w-full h-auto" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopBy;