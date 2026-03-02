import React from "react";
import { FaUserGraduate, FaBuilding, FaSchool, FaUsers } from "react-icons/fa";

const WhyJoin = () => {
  return (
    <div className="relative bg-cyan-400 py-36 overflow-hidden">

      {/* TOP WAVE */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#ffffff"
            d="M0,0 C400,100 1000,0 1440,80 L1440,0 L0,0 Z"
          ></path>
        </svg>
      </div>

      {/* BOTTOM WAVE */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#ffffff"
            d="M0,80 C400,0 1000,120 1440,40 L1440,120 L0,120 Z"
          ></path>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-20">
          Why Join TTT ?
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* CARD 1 */}
          <div className="relative bg-white rounded-3xl shadow-2xl p-10 pt-20 transform transition duration-500 hover:-translate-y-6 hover:scale-105 hover:shadow-3xl">
            
            <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-24 h-24 bg-cyan-500 rounded-full flex items-center justify-center shadow-xl border-8 border-white">
              <FaUserGraduate className="text-white text-4xl" />
            </div>

            <h3 className="text-cyan-600 font-bold text-2xl mb-6">
              For Students
            </h3>

            <p className="text-gray-600 text-base leading-relaxed">
              We would like to ask few questions to all the hardworking
              students who are the future of this Nation...
            </p>
          </div>

          {/* CARD 2 */}
          <div className="relative bg-white rounded-3xl shadow-2xl p-10 pt-20 transform transition duration-500 hover:-translate-y-6 hover:scale-105 hover:shadow-3xl">
            
            <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center shadow-xl border-8 border-white">
              <FaBuilding className="text-white text-4xl" />
            </div>

            <h3 className="text-blue-600 font-bold text-2xl mb-6">
              For Corporates
            </h3>

            <p className="text-gray-600 text-base leading-relaxed">
              TTT cares for educational institutions, management and teachers.
              We understand that majority of you...
            </p>
          </div>

          {/* CARD 3 */}
          <div className="relative bg-white rounded-3xl shadow-2xl p-10 pt-20 transform transition duration-500 hover:-translate-y-6 hover:scale-105 hover:shadow-3xl">
            
            <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center shadow-xl border-8 border-white">
              <FaSchool className="text-white text-4xl" />
            </div>

            <h3 className="text-yellow-600 font-bold text-2xl mb-6">
              For Schools
            </h3>

            <p className="text-gray-600 text-base leading-relaxed">
              The strength of any company or organization lies in the quality
              of its human resource...
            </p>
          </div>

          {/* CARD 4 */}
          <div className="relative bg-white rounded-3xl shadow-2xl p-10 pt-20 transform transition duration-500 hover:-translate-y-6 hover:scale-105 hover:shadow-3xl">
            
            <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-24 h-24 bg-red-500 rounded-full flex items-center justify-center shadow-xl border-8 border-white">
              <FaUsers className="text-white text-4xl" />
            </div>

            <h3 className="text-red-600 font-bold text-2xl mb-6">
              For Parents
            </h3>

            <p className="text-gray-600 text-base leading-relaxed">
              Do you suffer from questions like: What if my child ends up
              stressed or mentally exhausted...
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhyJoin;
