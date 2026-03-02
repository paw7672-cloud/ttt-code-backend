import React, { useState } from "react";

const ThreeSectionBubble = () => {
  const [activeBubble, setActiveBubble] = useState(null);
  const [visible, setVisible] = useState({
    1: true,
    2: true,
    3: true,
  });

  const bubbleStyles = `
    @keyframes float1 {
      0%   { transform: translate(0px, 0px); }
      50%  { transform: translate(40px, -50px); }
      100% { transform: translate(0px, 0px); }
    }

    @keyframes float2 {
      0%   { transform: translate(0px, 0px); }
      50%  { transform: translate(-40px, 40px); }
      100% { transform: translate(0px, 0px); }
    }

    @keyframes float3 {
      0%   { transform: translate(0px, 0px); }
      50%  { transform: translate(30px, 60px); }
      100% { transform: translate(0px, 0px); }
    }

    .bubble-style {
      background: rgba(255, 193, 7, 0.2);
      border: 2px solid rgba(255, 255, 255, 0.7);
      box-shadow: 0 20px 45px rgba(255, 193, 7, 0.4);
      backdrop-filter: blur(6px);
      transition: all 0.4s ease;
    }

    .bubble-container:hover .close-btn {
      opacity: 1;
    }
  `;

  const handleClick = (id) => {
    setActiveBubble(id === activeBubble ? null : id);
  };

  const removeBubble = (id) => {
    setVisible((prev) => ({ ...prev, [id]: false }));
    if (activeBubble === id) setActiveBubble(null);
  };

  return (
    <>
      {/* Bubble 1 */}
      {visible[1] && (
        <div className="bubble-container absolute top-[15%] left-[4%] z-[999]">
          <div
            onClick={() => handleClick(1)}
            className={`${activeBubble === 1 ? "w-[420px] h-[420px]" : "w-[260px] h-[260px]"}
              relative rounded-full flex flex-col items-center justify-center
              cursor-pointer hover:scale-105
              animate-[float1_14s_infinite_ease-in-out]
              bubble-style`}
          >
            <h1 className="text-yellow-300 font-bold text-xl text-center">
              Google
            </h1>

            {activeBubble === 1 && (
              <p className="text-slate-900 mt-4 px-8 text-center">
                This bubble expanded!
                You can add any content here — description, buttons, links.
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

      {/* Bubble 2 */}
      {visible[2] && (
        <div className="bubble-container absolute top-[30%] right-[6%] z-[999]">
          <div
            onClick={() => handleClick(2)}
            className={`${activeBubble === 2 ? "w-[420px] h-[420px]" : "w-[280px] h-[280px]"}
              relative rounded-full flex flex-col items-center justify-center
              cursor-pointer hover:scale-105
              animate-[float2_16s_infinite_ease-in-out]
              bubble-style`}
          >
            <h1 className="text-yellow-300 font-bold text-xl text-center">
              YouTube
            </h1>

            {activeBubble === 2 && (
              <p className="text-slate-900 mt-4 px-8 text-center">
                More content appears here when clicked.
                Smooth expansion effect included.
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

      {/* Bubble 3 */}
      {visible[3] && (
        <div className="bubble-container absolute bottom-[20%] left-[10%] z-[999]">
          <div
            onClick={() => handleClick(3)}
            className={`${activeBubble === 3 ? "w-[380px] h-[380px]" : "w-[240px] h-[240px]"}
              relative rounded-full flex flex-col items-center justify-center
              cursor-pointer hover:scale-105
              animate-[float3_12s_infinite_ease-in-out]
              bubble-style`}
          >
            <h1 className="text-yellow-300 font-bold text-lg text-center">
              Courses
            </h1>

            {activeBubble === 3 && (
              <p className="text-slate-900 mt-4 px-6 text-center">
                Here you can show course details, pricing, features, etc.
              </p>
            )}

            <button
              onClick={(e) => {
                e.stopPropagation();
                removeBubble(3);
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

export default ThreeSectionBubble;