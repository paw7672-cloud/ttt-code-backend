import React from "react";
import { FaBullseye, FaLightbulb, FaCogs } from "react-icons/fa";
import bigimage from "../assets/bigimage.jpeg";
import ThreeSectionBubble from "../layout/threeSectionBubble";

const ThreeSection = () => {
  return (
    <div className="relative overflow-hidden">
  <ThreeSectionBubble />
    <div className="bg-white py-24">

      {/* ================= TOP 3 SECTION ================= */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 items-start text-center relative">

        {/* Divider Lines */}
        <div className="hidden md:block absolute left-1/3 top-20 h-40 w-[1px] bg-gray-300"></div>
        <div className="hidden md:block absolute right-1/3 top-20 h-40 w-[1px] bg-gray-300"></div>

        {/* ================= MISSION ================= */}
        <div className="px-8">
          <div className="relative flex justify-center mb-16">
            <div className="absolute w-44 h-44 bg-red-200 rounded-full opacity-40 blur-xl"></div>

            <div className="relative w-40 h-40 rounded-full bg-white shadow-xl flex items-center justify-center border-[10px] border-red-500">
              <FaBullseye className="text-red-500 text-6xl" />
            </div>

            <div className="absolute -bottom-8 w-6 h-10 bg-red-500 rounded-b-full"></div>
          </div>

          <h2 className="text-4xl font-extrabold">
            OUR <span className="text-red-500">MISSION</span>
          </h2>

          <p className="text-base sm:text-lg md:text-l lg:text-xl 
              text-gray-600 font-semibold leading-relaxed">
          Welcome to the world of TTT !
Or if we may say, the world as seen by TTT.
It's a world that is full of success, happiness and love
of your loved ones; without any tension, stress
and physical or mental ailments.
          </p>
        </div>

        {/* ================= VISION ================= */}
        <div className="px-8">
          <div className="relative flex justify-center mb-16">
            <div className="absolute w-44 h-44 bg-blue-200 rounded-full opacity-40 blur-xl"></div>

            <div className="relative w-40 h-40 rounded-full bg-white shadow-xl flex items-center justify-center border-[10px] border-blue-500">
              <FaLightbulb className="text-blue-500 text-6xl" />
            </div>

            <div className="absolute -bottom-8 w-6 h-10 bg-blue-500 rounded-b-full"></div>
          </div>

          <p className="text-4xl font-extrabold">
            OUR <span className="text-blue-500">VISION</span>
          </p>

          <h1 className="text-base sm:text-lg md:text-l lg:text-xl 
              text-gray-600 font-semibold leading-relaxed">
            The current system focuses on just
one aspect: the Academic Success so that we can
have good money. And it ignores other important
aspects like Physical Health, Mental Health,
Family Health and Relationships,
          </h1>
        </div>

        {/* ================= CONCEPT ================= */}
        <div className="px-8">
          <div className="relative flex justify-center mb-16">
            <div className="absolute w-44 h-44 bg-green-200 rounded-full opacity-40 blur-xl"></div>

            <div className="relative w-40 h-40 rounded-full bg-white shadow-xl flex items-center justify-center border-[10px] border-green-500">
              <FaCogs className="text-green-500 text-6xl" />
            </div>

            <div className="absolute -bottom-8 w-6 h-10 bg-green-500 rounded-b-full"></div>
          </div>

          <h2 className="text-4xl font-extrabold">
            OUR <span className="text-green-500">CONCEPT</span>
          </h2>

          <h1 className="text-base sm:text-lg md:text-l lg:text-xl 
              text-gray-600 font-semibold leading-relaxed">
           The Mission of the TTT is to conquer this
challenge by making you and every student "top
the Real Exam" And the Real Exam is "Exam of Life"!
This will ensure not only Academic and
Materialistic success for everyone.
          </h1>
        </div>
      </div>

      {/* ================= ENHANCED BIG IMAGE SECTION ================= */}
      <div className="mt-32 flex justify-center px-6">

        <div className="relative flex justify-center items-center w-full max-w-6xl">

          {/* Rotating Outer Circle */}
        
          {/* Main Image */}
      <div className="mt-32 w-full">

  <div className="relative w-full">

    <img
      src={bigimage}
      alt="How TTT is Different"
      className="w-full 
                 h-[300px] sm:h-[450px] md:h-[550px] lg:h-[650px] 
                 object-cover
                 transition duration-500 ease-in-out
                 cursor-pointer"
    />

  </div>
    <div className="flex justify-center mt-8">
    <button
      className="bg-yellow-500 hover:bg-yellow-600 
                 text-black font-semibold
                 px-8 py-3 
                 rounded-full 
                 shadow-lg
                 transition duration-300
                 hover:scale-105"
    >
      Know More
    </button>
  </div>

</div>
</div>
</div>
</div>
</div>
  );
};

export default ThreeSection;
