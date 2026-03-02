import React from "react";
import { Link } from "react-router-dom";

const Testimonial = () => {
  return (
    <section className="bg-gray-100 min-h-screen py-5 px-6">

      <div className="max-w-5xl mx-auto">

        {/* Page Title */}
        <h1 className="text-5xl font-bold mb-6 text-gray-900">
          Testimonial
        </h1>

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-5">
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          <span>›</span>
          <span className="text-gray-500">Testimonial</span>
        </div>

        {/* ================= Testimonial 1 ================= */}
        <div className="mb-5">

          <h2 className="text-3xl font-semibold text-gray-900">
            Navaneet Jaiswal 
            <span className="text-gray-600 font-normal">
              {" "} (Professional)
            </span>
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed text-lg">
            It works.
          </p>

        </div>

        {/* ================= Testimonial 2 ================= */}
        <div>

          <h2 className="text-3xl font-semibold text-gray-900">
            Jatin Sharma 
            <span className="text-gray-600 font-normal">
              {" "} (Student)
            </span>
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed text-lg">
            This is the best place to find yourself and upgrade as well.
          </p>

          <p className="mt-2 text-gray-600 leading-relaxed text-lg">
            Here I learnt so much things which modified me.
          </p>

        </div>

      </div>

    </section>
  );
};

export default Testimonial;
