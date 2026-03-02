import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay } from "react-icons/fa";

import img1 from "../assets/slider1.jpeg";
import img2 from "../assets/slider2.jpeg";
import img3 from "../assets/slider3.jpeg";

import AboutSection from "../component/aboutSection";
import ThreeSection from "../component/threeSection";
import WhyJoin from "../component/whyjoin";
import DownloadApp from "../component/DownloadApp";
import MediaGallery from "../component/mediaGallery";
import SocialMedia from "../component/socialMedia";
import subjectCards from "./subjectCards";
import SubjectCards from "./subjectCards";
import HomeBubbles from "../layout/homeBubble";

const slides = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
];

const Home = () => {
  const [current, setCurrent] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [transition, setTransition] = useState(true);
  const intervalRef = useRef(null);

  const extendedSlides = [
    slides[slides.length - 1],
    ...slides,
    slides[0],
  ];


  /* ================= AUTO PLAY ================= */
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => prev + 1);
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying]);

  /* ================= INFINITE RESET ================= */
  useEffect(() => {
    if (current === slides.length + 1) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(1);
      }, 1000);
    }

    if (current === 0) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(slides.length);
      }, 1000);
    }
  }, [current]);

  useEffect(() => {
    if (!transition) {
      setTimeout(() => setTransition(true), 50);
    }
  }, [transition]);

  const nextSlide = () => setCurrent((prev) => prev + 1);
  const prevSlide = () => setCurrent((prev) => prev - 1);

  return (
     <>
    
       <HomeBubbles/>
<div className="bg-yellow-400 py-8 md:py-12 relative overflow-hidden">


  {/* ===== FLOATING BUBBLE ===== */}
  

      {/* ================= SLIDER ================= */}
      <div className="max-w-[1700px] mx-auto bg-white rounded-xl shadow-2xl p-4 md:p-8 lg:p-12 relative overflow-hidden">

        <div className="overflow-hidden">
          <div
            className={`flex ${
              transition
                ? "transition-transform duration-1000 ease-in-out"
                : ""
            }`}
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {extendedSlides.map((slide, index) => (
              <div
                key={index}
                className="min-w-full flex justify-center items-center"
              >
                <img
                  src={slide.image}
                  alt="slide"
                  className="
                    w-full
                    h-[200px]
                    sm:h-[300px]
                    md:h-[450px]
                    lg:h-[600px]
                    xl:h-[650px]
                    object-cover
                    rounded-xl
                    shadow-xl
                  "
                />
              </div>
            ))}
          </div>
        </div>

        {/* ================= ARROWS ================= */}
        <button
          onClick={prevSlide}
          className="
            absolute left-2 md:left-6 top-1/2 -translate-y-1/2
            bg-white shadow-lg p-3 md:p-5 rounded-full
            hover:bg-gray-100 transition
          "
        >
          <FaChevronLeft size={18} />
        </button>

        <button
          onClick={nextSlide}
          className="
            absolute right-2 md:right-6 top-1/2 -translate-y-1/2
            bg-white shadow-lg p-3 md:p-5 rounded-full
            hover:bg-gray-100 transition
          "
        >
          <FaChevronRight size={18} />
        </button>
      </div>
     


      {/* ================= NOTIFICATION BAR ================= */}
      <div className="bg-black text-white flex flex-col md:flex-row items-center px-4 md:px-8 py-4 relative overflow-hidden mt-8 gap-4">

        {/* Left Red Box */}
        <div className="flex items-center bg-red-600 px-6 md:px-10 py-3 min-w-[220px] md:min-w-[350px] relative shrink-0 z-10">

          <span className="text-lg md:text-xl font-bold tracking-wide">
            Notifications
          </span>

          <div className="w-[2px] h-8 md:h-10 bg-white mx-4 md:mx-6"></div>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-white text-red-600 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:scale-110 transition"
          >
            {isPlaying ? <FaPause size={12} /> : <FaPlay size={12} />}
          </button>

          <div className="absolute right-0 top-0 bottom-0 w-6 md:w-8 bg-black skew-x-12"></div>
        </div>

        {/* Scrolling Text */}
        <div className="flex-1 overflow-hidden">

          <div
            className={`flex whitespace-nowrap ${
              isPlaying ? "animate-[ticker_25s_linear_infinite]" : ""
            }`}
          >
            <div className="flex gap-12 md:gap-20 pr-20 text-sm md:text-2xl font-medium">
              <span>
               Life is Not about passing one Exam. It's about passing the REAL EXAM!
              </span>
            </div>
          </div>
        </div>

        {/* Glow Effect */}
        <div className="absolute right-6 w-32 md:w-52 h-32 md:h-52 bg-yellow-300 opacity-20 rounded-full blur-3xl"></div>

        {/* Keyframes */}
        <style>
          {`
            @keyframes ticker {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
          `}
        </style>
      </div>

      {/* ================= OTHER SECTIONS ================= */}
      <AboutSection />
      <ThreeSection />
    <div
  id="olympiad-section"
  className="min-h-screen bg-gradient-to-r from-[#FFD42A] to-[#FFC107] py-20 px-6"
>
  <SubjectCards />
</div>


      <WhyJoin />
      {/* <DownloadApp />
      <MediaGallery /> */}
      <SocialMedia />
    </div>
     </>
  );
};

export default Home;
