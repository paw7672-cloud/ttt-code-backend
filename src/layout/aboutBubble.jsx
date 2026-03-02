import React, { useState } from "react";

const AboutBubble = () => {
  const [active, setActive] = useState(null);
  const [visible, setVisible] = useState({
    1: true,
    2: true,
  });

  const bubbleStyles = `
    @keyframes floatLeft {
      0%   { transform: translate(0px, 0px); }
      50%  { transform: translate(30px, -40px); }
      100% { transform: translate(0px, 0px); }
    }

    @keyframes floatRight {
      0%   { transform: translate(0px, 0px); }
      50%  { transform: translate(-30px, 35px); }
      100% { transform: translate(0px, 0px); }
    }

    .bubble-style {
      background: rgba(255, 193, 7, 0.22);
      border: 2px solid rgba(255, 255, 255, 0.8);
      box-shadow: 0 20px 50px rgba(255, 193, 7, 0.45);
      backdrop-filter: blur(6px);
      transition: all 0.4s ease;
    }

    .bubble-container:hover .close-btn {
      opacity: 1;
    }
  `;

  const toggleBubble = (id) => {
    setActive(active === id ? null : id);
  };

  const removeBubble = (id) => {
    setVisible((prev) => ({ ...prev, [id]: false }));
    if (active === id) setActive(null);
  };

  return (
    <>
      {/* LEFT BUBBLE */}
      {visible[1] && (
        <div className="bubble-container absolute top-[25%] left-[6%] z-[999]">
          <div
            onClick={() => toggleBubble(1)}
            className={`${active === 1 ? "w-[420px] h-[420px]" : "w-[280px] h-[280px]"}
              relative rounded-full flex flex-col items-center justify-center
              cursor-pointer hover:scale-105
              animate-[floatLeft_14s_infinite_ease-in-out]
              bubble-style`}
          >
            <h1 className="text-yellow-300 font-bold text-xl text-center">
              About Us
            </h1>

            {active === 1 && (
              <p className="text-slate-900 mt-4 px-8 text-center">
                We provide high-quality education and skill development.
                Our mission is to help students grow and succeed.
              </p>
            )}

            <button
              onClick={(e) => {
                e.stopPropagation();
                removeBubble(1);
              }}
              className="close-btn absolute top-5 right-5 bg-white text-black w-8 h-8 rounded-full shadow-md flex items-center justify-center text-sm opacity-0 transition duration-300 hover:bg-red-500 hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* RIGHT BUBBLE */}
      {visible[2] && (
        <div className="bubble-container absolute top-[30%] right-[6%] z-[999]">
          <div
            onClick={() => toggleBubble(2)}
            className={`${active === 2 ? "w-[420px] h-[420px]" : "w-[300px] h-[300px]"}
              relative rounded-full flex flex-col items-center justify-center
              cursor-pointer hover:scale-105
              animate-[floatRight_16s_infinite_ease-in-out]
              bubble-style`}
          >
            <h1 className="text-yellow-300 font-bold text-xl text-center">
              Our Vision
            </h1>

            {active === 2 && (
              <p className="text-slate-900 mt-4 px-8 text-center">
                Our vision is to create a strong foundation for future leaders
                through innovation, dedication, and excellence.
              </p>
            )}

            <button
              onClick={(e) => {
                e.stopPropagation();
                removeBubble(2);
              }}
              className="close-btn absolute top-5 right-5 bg-white text-black w-8 h-8 rounded-full shadow-md flex items-center justify-center text-sm opacity-0 transition duration-300 hover:bg-red-500 hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <style>{bubbleStyles}</style>
    </>
  );
};

export default AboutBubble;