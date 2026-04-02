import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineFactory, MdOutlineLock } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";

interface Feature {
  icon: JSX.Element;
  title: string;
  desc: string;
}

const Chooseus: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <TbTruckDelivery size={28} />,
      title: "Fast Bulk Delivery",
      desc: "Efficient logistics and optimized shipping lanes for large-scale enterprise orders."
    },
    {
      icon: <MdOutlineFactory size={28} />,
      title: "Direct Factory Pricing",
      desc: "Cut out the middleman and maximize your margins with direct manufacturer sourcing."
    },
    {
      icon: <AiOutlineMessage size={28} />,
      title: "Easy Negotiation",
      desc: "Direct communication channels for custom wholesale deals and volume discounts."
    },
    {
      icon: <MdOutlineLock size={28} />,
      title: "Secure Payments",
      desc: "Industry-standard encryption and protected escrow transactions for complete peace of mind."
    }
  ];

  return (
    <div className="bg-gray-100 py-12 px-4">
      <div className="bg-[#0A5C4A] max-w-7xl mx-auto rounded-2xl py-10 px-6">
        {/* Title */}
        <h1 className="text-white text-2xl md:text-3xl font-semibold text-center mb-10">
          Why Choose Us
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="bg-[#0A5C4A] text-white w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chooseus;