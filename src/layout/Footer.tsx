import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import logo from "../assets/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#002018] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">

        {/* Left Section */}
        <div className="flex flex-col -mt-16">
          {/* Logo */}
          <img src={logo} alt="KachuKart Logo" className="h-50 w-50 mb-3" />

          {/* Description */}
          <p className="text-sm md:text-base leading-relaxed mb-3 -mt-10">
            Your trusted partner for wholesale and bulk shipping inquiries.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-2">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-[#1877F2] transition-colors">
              <FaFacebookF className="text-white w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-[#E4405F] transition-colors">
              <FaInstagram className="text-white w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-black transition-colors">
              <FaXTwitter className="text-white w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col gap-2 items-start md:items-center">
          <h2 className="font-semibold text-lg">Ready to Place Your Bulk Order?</h2>
          <p className="text-sm">Get Quote in 24 Hours</p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors cursor-pointer">
            <FaWhatsapp /> Talk to Sales Expert
          </button>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-6 items-start md:items-end">
          <h2 className="font-semibold text-lg mr-10">Contact Us</h2>
          <div className="flex text-center gap-4 text-sm">
            <FaPhone className="text-white text-[18px]" />
            <span className="mr-8">9876549087</span>
          </div>
          <div className="flex text-center gap-4 text-sm">
            <FaEnvelope className="text-white text-[18px]" />
            <span>logo@gmail.com</span>
          </div>
          <div className="flex text-center gap-4 text-sm">
            <FaWhatsapp className="text-white text-[18px]" />
            <span className="mr-7">9087462091</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;