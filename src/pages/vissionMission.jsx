import React from "react";
import { Link } from "react-router-dom";
import visionImg from "../assets/vission.jpeg";  // spelling check karo

const VisionMission = () => {
  return (
    <section className="bg-gray-100 min-h-screen py-20 px-6">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT TEXT SECTION ================= */}
        <div>

          {/* Title */}
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            Vision and Mission
          </h1>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
            <Link to="/" className="text-blue-600 hover:underline">
              Home
            </Link>
            <span>›</span>
            <span className="text-gray-500">Vision and Mission</span>
          </div>

          {/* Paragraphs */}
          <p className="text-base sm:text-xl text-gray-600 font-semibold leading-relaxed">
            Hello! We are The True Topper. And people call us as TTT.
          </p>

          <p className="text-base sm:text-xl text-gray-600 font-semibold leading-relaxed">
            TTT is a movement which aims to harness the true potential
            of every human being with particular focus on students.
          </p>

          <p className="text-base sm:text-xl text-gray-600 font-semibold leading-relaxed">
            TTT provides students with the required skill set which ensures
            academic and all-round excellence.
          </p>

          <p className="text-base sm:text-xl text-gray-600 font-semibold leading-relaxed">
            TTT achieves this through different sessions, workshops, and activities
            delivered through our unique concept of CUP.
          </p>

        </div>

        {/* ================= RIGHT IMAGE SECTION ================= */}
        <div className="flex justify-center w-full">
          <img
            src={visionImg}
            alt="Vision Illustration"
            className="max-w-lg w-full object-contain drop-shadow-2xl"
          />
        </div>

      </div>

    </section>
  );
};

export default VisionMission;
