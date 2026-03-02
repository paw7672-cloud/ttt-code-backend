import React from "react";
import mobile from "../assets/mobile.jpeg";
import qr from "../assets/qr-code.jpeg";

const DownloadApp = () => {
  return (
    <div className="relative bg-white py-10 overflow-hidden">

      {/* TOP CURVE */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#f5fafb"
            d="M0,80 C400,0 1000,120 1440,40 L1440,0 L0,0 Z"
          ></path>
        </svg>
      </div>

      {/* BOTTOM CURVE */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full">
          <path
            fill="rgb(246, 245, 248)"
            d="M0,120 C400,40 1000,120 1440,60 L1440,120 L0,120 Z"
          ></path>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">

        {/* LEFT SIDE PHONE */}
        <div className="flex justify-center md:justify-start">
          <img
            src={mobile}
            alt="Phone Preview"
            className="w-[320px] md:w-[380px] drop-shadow-2xl"
          />
        </div>

        {/* RIGHT SIDE QR SECTION */}
        <div className="text-center md:text-left">

          <h2 className="text-xl md:text-2xl font-semibold mb-6">
            SCAN THIS QR CODE ON YOUR CAMERA APP <br />
            TO DOWNLOAD THE APP
          </h2>

          {/* QR CODE */}
          <div className="flex justify-center md:justify-start mb-8">
            <img
              src={qr}
              alt="QR Code"
              className="w-[220px] md:w-[260px]"
            />
          </div>

          {/* STORE BUTTONS */}
          <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-start">

            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-14 cursor-pointer hover:scale-105 transition"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-14 cursor-pointer hover:scale-105 transition"
            />

          </div>

        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
