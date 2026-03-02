import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaLinkedinIn,
  FaPhone,
} from "react-icons/fa";
import logo from "../assets/logo.jpeg";
   import { Link } from "react-router-dom";



const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden">

      {/* DARK GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-95"></div>

      {/* TOP WAVE */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1440 320"
          className="relative block w-full h-28"
          preserveAspectRatio="none"
        >
          <path
            fill="#000000"
            d="M0,160L80,170C160,180,320,200,480,202.7C640,205,800,192,960,176C1120,160,1280,138,1360,128L1440,117L1440,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-10 py-24">

        <div className="flex flex-col lg:flex-row justify-between gap-12">

          {/* LEFT SIDE */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img src={logo} alt="logo" className="h-16 w-auto object-contain" />
              
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 text-lg">
              {[
                { label: "Home", href: "/" },
                { label: "Privacy ", href: "/privacy" },
                { label: "Our Courses", href: "/courses" },
                { label: "Scholarships", href: "/scholarships" },
                { label: "Schools! Don’t Miss This", href: "/schools" },
                { label: "Terms of Use", href: "/terms" },
                { label: "Testimonial", href: "/testimonial" },
                { label: "Vision & Mission", href: "/vision" },
                { label: "Why Choose Us", href: "/why" },
                { label: "Videos", href: "/videos" },
                { label: "New Year 2026", href: "/newyear" },
                { label: "Registration", href: "/ieeo-registration" },
               
                { label: "Login", href: "/login" },
                { label: "Terms & Conditions", href: "/terms-conditions" },
                { label: "Return & Refund", href: "/return-refund" },
              ].map((item) => (
                  <Link
    key={item.label}
    to={item.href}
    className="hover:text-yellow-400 transition"
  >
    {item.label}
  </Link>
           
            ))}
             </div>

            <button className="mt-8 flex items-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-semibold transition">
              Request a Callback
              <FaPhone />
            </button>

            <p className="mt-8 text-gray-400">
              Copyright 2025–2026 The True Topper. All rights reserved.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-6">

           <div className="flex gap-4 text-xl">

  <a
    href="https://www.facebook.com/TheTrueTopper"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaFacebookF className="cursor-pointer hover:text-yellow-400" />
  </a>

  <a
    href="https://x.com/TheTrueTopper"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaTwitter className="cursor-pointer hover:text-yellow-400" />
  </a>

  <a
    href="https://www.instagram.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaInstagram className="cursor-pointer hover:text-yellow-400" />
  </a>

  <a
    href="https://www.youtube.com/channel/UCuhOvW3kyngZhp8J3q54QHA"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaYoutube className="cursor-pointer hover:text-yellow-400" />
  </a>

  <a
    href="https://api.whatsapp.com/send?phone=9622222800"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaWhatsapp className="cursor-pointer hover:text-yellow-400" />
  </a>

  <a
    href="https://www.linkedin.com/company/thetruetopper/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedinIn className="cursor-pointer hover:text-yellow-400" />
  </a>

</div>


            <div>
              <h3 className="text-xl font-semibold mb-4">
                Get link in sms to download the app
              </h3>
              <div className="flex">
                <input
                  type="text"
                  placeholder="+91"
                  className="px-4 py-3 w-64 text-white bg-white/10"
                />
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 font-semibold">
                  Get a link
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM WAVE */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 320"
          className="relative block w-full h-28"
          preserveAspectRatio="none"
        >
          <path
            fill="#000000"
            d="M0,96L80,106.7C160,117,320,139,480,160C640,181,800,203,960,192C1120,181,1280,139,1360,117.3L1440,96L1440,320L0,320Z"
          ></path>
        </svg>
      </div>

    </footer>
  );
};

export default Footer;
