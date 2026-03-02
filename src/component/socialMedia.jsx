import React from "react";
import { 
  FaFacebookF, 
  FaYoutube, 
  FaInstagram, 
  FaLinkedinIn 
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import fbImg from "../assets/facebook.jpeg";
import twImg from "../assets/twitter.jpeg";
import ytImg from "../assets/youtube.jpeg";
import igImg from "../assets/instagram.jpeg";
import lnImg from "../assets/linkedin.jpeg";

const SocialMedia = () => {
  return (
    <div className="relative bg-white py-16 md:py-20 lg:py-24 overflow-hidden">

      {/* Top Curve */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#d946ef"
            d="M0,60 C400,0 1000,120 1440,40 L1440,0 L0,0 Z"
          ></path>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16">
          Social Media
        </h2>

        {/* Responsive Grid */}
        <div className="grid 
                        grid-cols-1 
                        sm:grid-cols-2 
                        md:grid-cols-3 
                        lg:grid-cols-5 
                        gap-6 md:gap-8">

          {/* CARD COMPONENT */}
          {[
            { name: "Facebook", icon: <FaFacebookF />, img: fbImg, color: "text-blue-600", link: "https://www.facebook.com/TheTrueTopper" },
            { name: "Twitter", icon: <FaXTwitter />, img: twImg, color: "text-black", link: "https://x.com/TheTrueTopper" },
            { name: "YouTube", icon: <FaYoutube />, img: ytImg, color: "text-red-600", link: "https://www.youtube.com/channel/UCuhOvW3kyngZhp8J3q54QHA" },
            { name: "Instagram", icon: <FaInstagram />, img: igImg, color: "text-pink-600", link: "https://www.instagram.com/thetruetopper" },
            { name: "LinkedIn", icon: <FaLinkedinIn />, img: lnImg, color: "text-blue-700", link: "https://www.linkedin.com/company/thetruetopper/" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="bg-white border rounded-xl shadow-md overflow-hidden
                              transition duration-300 
                              hover:-translate-y-3 hover:shadow-2xl 
                              cursor-pointer
                              flex flex-col">

                {/* Header */}
                <div className={`flex items-center gap-3 p-4 font-semibold text-lg ${item.color}`}>
                  <span className="text-xl group-hover:scale-110 transition">
                    {item.icon}
                  </span>
                  {item.name}
                </div>

                {/* Image (Auto Height Control) */}
                <div className="w-full aspect-[4/5] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>
            </a>
          ))}

        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
