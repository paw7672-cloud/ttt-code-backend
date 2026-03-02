import React from "react";
import { useNavigate } from "react-router-dom";
import { FaLaptopCode } from "react-icons/fa";

const SubjectCards = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/ieeo-payment", {
      state: { classRange: "6-12" },
    });
  };

  return (
    <div
      id="olympiad-section"
   className="min-h-[20vh] bg-gradient-to-r from-[#FFD42A] to-[#FFC107] 
py-12 sm:py-16 lg:py-20 px-4 sm:px-6"
    >

      {/* Heading */}
      <div className="text-center mb-12 sm:mb-16 lg:mb-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
        font-extrabold text-gray-900 mb-4 tracking-wide drop-shadow-lg">
          Online Olympiad++
        </h1>

        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl 
        font-bold text-gray-800 opacity-90">
          International Ethical Entrepreneurship Olympiad++
        </h2>

        <div className="w-24 sm:w-32 lg:w-40 h-1 bg-black mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Single Card */}
      <div className="flex justify-center">
        <div
          onClick={handleClick}
          className="relative group cursor-pointer 
          bg-white/40 backdrop-blur-2xl 
          border border-white/40 
          rounded-3xl sm:rounded-[40px]
          shadow-2xl 
          p-8 sm:p-12 lg:p-16 
          text-center 
          transition-all duration-500 
          hover:-translate-y-4 sm:hover:-translate-y-6 
          hover:shadow-yellow-500/40 
          hover:bg-white/60 
          active:scale-95 
          w-full max-w-md sm:max-w-xl lg:max-w-2xl"
        >

          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-3xl sm:rounded-[40px] 
          bg-gradient-to-br from-yellow-300/30 to-transparent 
          opacity-0 group-hover:opacity-100 transition duration-500"></div>

          {/* Premium Badge */}
          <div className="absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2 
          bg-gradient-to-r from-black to-gray-800 
          text-yellow-400 px-5 sm:px-8 py-1 sm:py-2 
          rounded-full text-xs sm:text-sm font-bold 
          shadow-lg tracking-wider">
            IEEO++
          </div>

          {/* Icon */}
          <div className="flex justify-center mb-6 sm:mb-8 
          text-yellow-600 group-hover:scale-110 sm:group-hover:scale-125 
          transition duration-500 mt-6">
            <FaLaptopCode size={50} className="sm:hidden" />
            <FaLaptopCode size={60} className="hidden sm:block lg:hidden" />
            <FaLaptopCode size={70} className="hidden lg:block" />
          </div>

          {/* Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl 
          font-extrabold text-gray-900 mb-4 tracking-wide">
            Online Olympiad (Classes 6–12)
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg 
          text-gray-700 mb-6 leading-relaxed">
            Participate in the International Ethical Entrepreneurship Olympiad++
            from anywhere in the world through our secure online platform.
          </p>

          {/* Bottom Line */}
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-yellow-500 mx-auto 
          rounded-full group-hover:w-28 sm:group-hover:w-36 
          lg:group-hover:w-40 transition-all duration-500"></div>

        </div>
      </div>
    </div>
  );
};

export default SubjectCards;
