import React from "react";

export default function Scholarship() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">

      <div className="bg-white rounded-3xl shadow-2xl p-16 text-center max-w-2xl w-full transition duration-500 hover:scale-105">

        <h1 className="text-5xl font-extrabold text-indigo-700 mb-6">
          Scholarship Program
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          The True Topper provides financial assistance to talented and
          deserving students. Apply now and unlock your academic excellence.
        </p>

        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl text-lg font-semibold transition duration-300 shadow-lg">
          Apply Now
        </button>

      </div>

    </section>
  );
}


// import React from "react";
// import { FaAward, FaUserGraduate, FaClipboardCheck } from "react-icons/fa";

// const Scholarship = () => {
//   const scholarships = [
//     {
//       title: "TTT Merit Scholarship",
//       amount: "Up to 100% Fee Waiver",
//       desc: "For students with outstanding academic performance and strong dedication toward excellence.",
//       color: "from-blue-500 to-indigo-600",
//     },
//     {
//       title: "TTT Leadership Scholarship",
//       amount: "Up to 75% Fee Waiver",
//       desc: "For students who demonstrate leadership qualities and community involvement.",
//       color: "from-green-500 to-emerald-600",
//     },
//     {
//       title: "TTT Need-Based Scholarship",
//       amount: "Up to 50% Fee Waiver",
//       desc: "For financially deserving students who are committed to achieving success.",
//       color: "from-pink-500 to-rose-600",
//     },
//   ];

//   return (
//     <section className="bg-gray-50 min-h-screen">

//       {/* ================= HERO SECTION ================= */}
//       <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-24 text-center">
//         <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
//           Scholarships Program
//         </h1>
//         <p className="max-w-3xl mx-auto text-lg opacity-90">
//           The True Topper believes that financial limitations should never stop
//           a student from achieving excellence. Explore our scholarship programs.
//         </p>
//       </div>

//       {/* ================= SCHOLARSHIP CARDS ================= */}
//       <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10">

//         {scholarships.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-3xl shadow-lg overflow-hidden 
//                        transition duration-500 hover:-translate-y-4 hover:shadow-2xl"
//           >
//             <div className={`h-3 bg-gradient-to-r ${item.color}`}></div>

//             <div className="p-8">
//               <div className="text-4xl text-indigo-600 mb-4">
//                 <FaAward />
//               </div>

//               <h2 className="text-2xl font-bold mb-4 text-gray-800">
//                 {item.title}
//               </h2>

//               <p className="text-green-600 font-semibold mb-4">
//                 {item.amount}
//               </p>

//               <p className="text-gray-600 text-sm leading-relaxed mb-6">
//                 {item.desc}
//               </p>

//               <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition">
//                 Apply Now
//               </button>
//             </div>
//           </div>
//         ))}

//       </div>

//       {/* ================= ELIGIBILITY SECTION ================= */}
//       <div className="bg-white py-20">
//         <div className="max-w-5xl mx-auto px-6 text-center">

//           <h2 className="text-4xl font-bold mb-10">
//             Eligibility Criteria
//           </h2>

//           <div className="grid md:grid-cols-3 gap-10 text-gray-700">

//             <div className="flex flex-col items-center">
//               <FaUserGraduate className="text-4xl text-blue-600 mb-4" />
//               <p>Must be enrolled in The True Topper program.</p>
//             </div>

//             <div className="flex flex-col items-center">
//               <FaClipboardCheck className="text-4xl text-green-600 mb-4" />
//               <p>Submit academic records and supporting documents.</p>
//             </div>

//             <div className="flex flex-col items-center">
//               <FaAward className="text-4xl text-purple-600 mb-4" />
//               <p>Clear scholarship evaluation and interview process.</p>
//             </div>

//           </div>

//         </div>
//       </div>

//     </section>
//   );
// };

// export default Scholarship;
