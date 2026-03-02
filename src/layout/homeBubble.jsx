import React, { useState } from "react";

const HomeBubbles = () => {
  const [visibleBubbles, setVisibleBubbles] = useState({
    left: true,
    right: true,
  });

  const [activeModal, setActiveModal] = useState(null);

  const bubbleStyles = `
  @keyframes floatSmooth {
    0%   { transform: translate(0px, 0px); }
    25%  { transform: translate(30px, -40px); }
    50%  { transform: translate(-20px, -20px); }
    75%  { transform: translate(25px, 30px); }
    100% { transform: translate(0px, 0px); }
  }

  .bubble-style {
    background: rgba(255, 193, 7, 0.15);
    border: 2px solid rgba(255, 255, 255, 0.6);
    box-shadow: 0 15px 35px rgba(255, 193, 7, 0.3);
    backdrop-filter: blur(8px);
  }

  .bubble-container:hover .close-btn {
    opacity: 1;
  }
  `;

  const removeBubble = (side) => {
    setVisibleBubbles((prev) => ({
      ...prev,
      [side]: false,
    }));
  };

  return (
    <>
      {/* LEFT BUBBLE */}
      {visibleBubbles.left && (
        <div className="bubble-container absolute top-[20%] left-[5%] z-30">
          <div
            onClick={() => setActiveModal("left")}
            className="relative w-[250px] h-[250px] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition duration-300 animate-[floatSmooth_10s_infinite_ease-in-out] bubble-style"
          >
            <h1 className="text-xl font-bold text-yellow-300 text-center">
              Open Info
            </h1>

            {/* CLOSE BUTTON */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeBubble("left");
              }}
              className="close-btn absolute top-4 right-4 bg-white text-black w-8 h-8 rounded-full shadow-md flex items-center justify-center text-sm opacity-0 transition duration-300 hover:bg-red-500 hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* RIGHT BUBBLE */}
      {visibleBubbles.right && (
        <div className="bubble-container absolute top-[30%] right-[5%] z-30">
          <div
            onClick={() => setActiveModal("right")}
            className="relative w-[250px] h-[250px] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition duration-300 animate-[floatSmooth_14s_infinite_ease-in-out] bubble-style"
          >
            <h1 className="text-xl font-bold text-yellow-300 text-center">
              Open Details
            </h1>

            {/* CLOSE BUTTON */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeBubble("right");
              }}
              className="close-btn absolute top-4 right-4 bg-white text-black w-8 h-8 rounded-full shadow-md flex items-center justify-center text-sm opacity-0 transition duration-300 hover:bg-red-500 hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* MODAL */}
      {activeModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[999]">
          <div className="bg-white rounded-2xl p-8 w-[90%] max-w-[500px] text-center shadow-2xl relative animate-fadeIn">

            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
            >
              ✕
            </button>

            {activeModal === "left" && (
              <>
                <h2 className="text-2xl font-bold mb-4">
                  Left Bubble Content
                </h2>
                <p className="text-gray-600">
                  Yeh content left bubble click karne par open hua hai.
                  Yahan tum image, button, link ya koi bhi component laga sakte ho.
                </p>
              </>
            )}

            {activeModal === "right" && (
              <>
                <h2 className="text-2xl font-bold mb-4">
                  Right Bubble Content
                </h2>
                <p className="text-gray-600">
                  Yeh right bubble ka modal content hai.
                  Isko tum fully customize kar sakte ho.
                </p>
              </>
            )}
          </div>
        </div>
      )}

      <style>{bubbleStyles}</style>
    </>
  );
};

export default HomeBubbles;