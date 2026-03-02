import React from "react";
import { FaRocket, FaBrain, FaGraduationCap } from "react-icons/fa";
import { GiPencilRuler } from "react-icons/gi";
import img1 from "../assets/home.jpeg";
import AboutBubble from "../layout/aboutBubble";

const AboutSection = () => {
  return (
  
    
<div className="relative overflow-hidden">
  <AboutBubble />

<section className="relative bg-[#f7f7f7] py-16 md:py-24 lg:py-28 overflow-auto">


      {/* Top Yellow Curve */}
      <div className="absolute top-0 right-0 
                      w-[200px] h-[120px] 
                      md:w-[300px] md:h-[150px] 
                      lg:w-[400px] lg:h-[200px] 
                      bg-yellow-400 rounded-bl-[200px] -z-10" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 
                      flex flex-col lg:flex-row 
                      items-center gap-12 lg:gap-20">

        {/* ================= LEFT IMAGE SECTION ================= */}
        <div className="relative flex-1 
                        flex justify-center items-center 
                        min-h-[400px] sm:min-h-[500px] lg:min-h-[650px]">

          {/* OUTER ROTATING CIRCLE */}
          <div className="absolute 
                          w-[350px] h-[350px] 
                          sm:w-[460px] sm:h-[460px] 
                          lg:w-[660px] lg:h-[660px]
                          border-2 border-dashed border-gray-400 
                          rounded-full opacity-20 
                          animate-[spin_25s_linear_infinite] 
                          z-0" />

          {/* INNER ROTATING CIRCLE */}
          <div className="absolute 
                          w-[250px] h-[250px] 
                          sm:w-[400px] sm:h-[400px] 
                          lg:w-[550px] lg:h-[550px]
                          border-2 border-dashed border-gray-400 
                          rounded-full opacity-25 
                          animate-[spin_18s_linear_infinite_reverse] 
                          z-0" />

          {/* RESPONSIVE IMAGE */}
          <div className="relative 
                          w-[280px] h-[200px] 
                          sm:w-[380px] sm:h-[260px] 
                          lg:w-[520px] lg:h-[340px] 
                          rotate-[-6deg] z-20 
                          transition-all duration-500 
                          hover:scale-105 hover:rotate-0">

            <img
              src={img1}
              alt="About The True Topper"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </div>

          {/* FLOATING ICONS */}
          <FaRocket className="absolute text-xl sm:text-3xl lg:text-4xl text-blue-500 
                               top-6 sm:top-10 lg:top-[60px] 
                               right-10 sm:right-16 lg:right-[120px] 
                               animate-bounce drop-shadow-md" />

          <GiPencilRuler className="absolute text-xl sm:text-3xl lg:text-4xl text-yellow-500 
                                    rotate-45 
                                    top-24 sm:top-36 lg:top-[220px] 
                                    right-2 sm:right-6 lg:right-[20px] 
                                    animate-pulse drop-shadow-md" />

          <FaGraduationCap className="absolute text-xl sm:text-3xl lg:text-4xl text-black 
                                      bottom-16 sm:bottom-24 lg:bottom-[140px] 
                                      right-8 sm:right-12 lg:right-[60px] 
                                      animate-bounce drop-shadow-md" />

          <FaBrain className="absolute text-xl sm:text-3xl lg:text-4xl text-red-400 
                              bottom-6 sm:bottom-10 lg:bottom-[60px] 
                              left-6 sm:left-10 lg:left-[40px] 
                              animate-pulse drop-shadow-md" />

        </div>

        {/* ================= RIGHT TEXT SECTION ================= */}
        <div className="flex-1 text-center lg:text-left">

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                         font-semibold mb-6 md:mb-8 font-serif">
            About The True Topper
          </h2>

          <p className="text-base sm:text-xl font-semibold text-gray-700 leading-relaxed mb-6">
            Hello! We are The True Topper and people call us TTT.
            <span className="block mt-2 font-semibold text-gray-900">
              TTT is a movement which aims to harness the true potential of every human being with particular focus on students.
            </span>
          </p>

          <p className="text-base sm:text-xl   font-semibold text-gray-700 leading-relaxed mb-6">
            TTT provides students with the required skill set which will not only
            ensure their academic and materialistic excellence, but also ensure
            their all-round development so that they can truly enjoy their success.
          </p>

          <p className="text-base sm:text-xl  font-semibold  text-gray-700 leading-relaxed mb-10">
            TTT achieves this through different sessions, workshops, and activities
            delivered through our unique concept of{" "}
            <span className="font-bold text-gray-500">TTT CUP</span>.
          </p>

          <div className="flex flex-col sm:flex-row 
                          justify-center lg:justify-start 
                          items-center gap-6">

            <button className="bg-pink-500 hover:bg-pink-600 
                               text-white px-6 sm:px-8 py-3 
                               rounded-lg shadow-lg 
                               transition text-base sm:text-lg">
              Learn More About Us
            </button>

          </div>

        </div>
      </div>
    
    </section>
      </div>
  );
};

export default AboutSection;
