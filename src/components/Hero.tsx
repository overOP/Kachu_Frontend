import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const slides = [
  { type: "video", src: "/coco-video.mp4" },
  { type: "image", src: "/Sprite.jpg" },
  { type: "image", src: "/pepsi.jpg" },
];

const Hero: React.FC = () => {
  return (
    <div className="w-full flex justify-center">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full max-w-335 h-100 md:h-125 lg:h-171.25 -mt-10 rounded-2xl overflow-hidden relative "
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full relative" >
              
              {/* IMAGE */}
              {slide.type === "image" && (
                <div
                  className="w-full h-full bg-cover bg-center relative "
                  style={{ backgroundImage: `url(${slide.src})` }}
                >
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute inset-0 bg-linear-to-r from-black/70 via-transparent to-black/40"></div>

                  <div className="absolute bottom-10 md:bottom-20 left-6 md:left-10 text-white z-10 max-w-xl">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]">
                      Refresh Your Taste
                    </h1>
                    <p className="mt-3 md:mt-4 text-sm md:text-lg text-gray-200">
                      Experience the premium drink vibe
                    </p>
                  </div>
                </div>
              )}



hello
              {/* VIDEO */}
              {slide.type === "video" && (
                <div className="w-full h-full relative">
                  <video
                    className="w-full h-full object-cover"
                    src={slide.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />

                  <div className="absolute inset-0 bg-black/50"></div>
                  <div className="absolute inset-0 bg-linear-to-r from-black/70 via-transparent to-black/40"></div>

                  <div className="absolute bottom-10 md:bottom-20 left-6 md:left-10 text-white z-10 max-w-xl">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]">
                      Refresh Your Taste
                    </h1>
                    <p className="mt-3 md:mt-4 text-sm md:text-lg text-gray-200">
                      Experience the premium drink vibe
                    </p>
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;