import React, { useState } from "react";

import img1 from "../assets/gallery1.jpeg";
import img3 from "../assets/gallery3.jpeg";
import img4 from "../assets/gallery4.jpeg";

const MediaGallery = () => {
  const [activeTab, setActiveTab] = useState("picture");

  // Picture Images
  const images = [img1, img3, img4];

  // TTT Media Images (alag section)
  const tttMedia = [img3, img4, img1];

  // YouTube Video Links
  const videos = [
    "https://www.youtube.com/channel/UCuhOvW3kyngZhp8J3q54QHA",
    "https://youtu.be/eOQWgGn57Ys?si=x5jZ_SGOQpHUF493",
    "https://www.youtube.com/watch?v=hfbkdkgZGpw",
  ];

  return (
    <div className="relative bg-gradient-to-r from-purple-500 to-pink-400 py-24 overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-12 tracking-wide">
          Media Gallery
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-14">
          {["picture", "media", "video"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full font-semibold transition ${
                activeTab === tab
                  ? "bg-purple-800 text-white"
                  : "bg-white text-purple-600"
              }`}
            >
              {tab === "picture"
                ? "Picture"
                : tab === "media"
                ? "TTT Media"
                : "Video"}
            </button>
          ))}
        </div>

        {/* ================= PICTURE TAB ================= */}
        {activeTab === "picture" && (
          <div className="grid md:grid-cols-3 gap-6">
            {images.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-lg group cursor-pointer"
              >
                <img
                  src={img}
                  alt="Gallery"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>
        )}

        {/* ================= TTT MEDIA TAB ================= */}
        {activeTab === "media" && (
          <div className="grid md:grid-cols-3 gap-6">
            {tttMedia.map((img, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer"
              >
                <img
                  src={img}
                  alt="TTT Media"
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="p-4 text-center font-semibold">
                  TTT Media Event {index + 1}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ================= VIDEO TAB ================= */}
        {activeTab === "video" && (
          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <a
                key={index}
                href={video}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={`https://img.youtube.com/vi/${
                      video.split("v=")[1]
                    }/0.jpg`}
                    alt="Video Thumbnail"
                    className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition">
                    <span className="text-white text-4xl">▶</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default MediaGallery;
