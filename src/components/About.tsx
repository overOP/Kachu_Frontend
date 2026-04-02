import React from "react";

const About: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-10">
        About Us
      </h1>

      <div className="relative max-w-7xl w-full h-96 md:h-105 lg:h-125 rounded-2xl overflow-hidden">
        
        {/* Background Image */}
        <img
          src="/about.jpg"
          alt="About"
          className="w-full h-full object-cover "
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="ml-6 md:ml-10 max-w-xl p-6 md:p-8 text-white 
                          bg-white/10 backdrop-blur-lg rounded-xl shadow-lg 
                           border-l-10 border-green-500">

            {/* Title */}
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-green-400">
              Welcome to Kachu Kart
            </h2>

            <p className="text-sm md:text-base leading-relaxed text-gray-200">
              Welcome to Kachu Kart, your one-stop destination for a seamless and
              enjoyable online shopping experience. We bring you high-quality
              products at affordable prices, all in one place.
            </p>

            <p className="text-sm md:text-base mt-4 leading-relaxed text-gray-200">
              At Kachu Kart, we believe shopping should be simple, fast, and
              reliable. Whether you're looking for the latest trends or everyday
              essentials, our platform is designed for your convenience.
            </p>

            <p className="text-sm md:text-base mt-4 leading-relaxed text-gray-200">
              Our mission is to make online shopping accessible for everyone with
              secure payments and fast delivery services.
            </p>

            <p className="text-sm md:text-base mt-4 leading-relaxed text-gray-200">
              Customer satisfaction is at the heart of everything we do. We
              continuously improve our services to give you the best experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;