import React from "react";

const coursesData = [
  {
    title: "Academic Excellence Program",
    duration: "6 Months",
    price: "₹4,999",
    description:
      "Boost your academic performance with structured guidance and smart learning techniques.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Mental Strength Mastery",
    duration: "3 Months",
    price: "₹2,999",
    description:
      "Improve focus, reduce stress, and build mental resilience for exams and life.",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Leadership & Personality Development",
    duration: "4 Months",
    price: "₹3,999",
    description:
      "Enhance communication skills, leadership qualities, and self-confidence.",
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "TTT Ultimate Success Blueprint",
    duration: "1 Year",
    price: "₹9,999",
    description:
      "Complete transformation program covering academics, health, mindset, and career growth.",
    color: "from-yellow-500 to-orange-600",
  },
];

const Courses = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white text-center py-24">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Our Courses
        </h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Explore our specially designed programs to unlock your true potential
          and achieve academic & life success.
        </p>
      </div>

      {/* COURSE CARDS */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {coursesData.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg overflow-hidden transform transition duration-500 hover:-translate-y-4 hover:shadow-2xl"
          >
            {/* Top Gradient Bar */}
            <div className={`h-3 bg-gradient-to-r ${course.color}`}></div>

            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                {course.title}
              </h2>

              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {course.description}
              </p>

              <div className="flex justify-between text-sm font-semibold mb-6">
                <span className="text-indigo-600">
                  Duration: {course.duration}
                </span>
                <span className="text-green-600">
                  {course.price}
                </span>
              </div>

              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition">
                Enroll Now
              </button>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default Courses;
