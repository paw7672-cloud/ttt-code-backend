import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { FaUser, FaUserPlus, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.jpeg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleOlympiadClick = (e) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById("olympiad-section")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document
        .getElementById("olympiad-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Our Courses", path: "/courses" },
    { name: "Scholarships", path: "/scholarships" },
    { name: "Schools! Don't miss This", path: "/schools" },
    { name: "Terms of Use", path: "/terms" },
    { name: "Testimonial", path: "/testimonial" },
    { name: "Vision Mission", path: "/vission" },
    { name: "Why Choose Us", path: "/why" },
    { name: "Videos", path: "/videos" },
    { name: "Olympiad", path: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#FFD42A] to-[#FFC107] shadow-lg px-6 lg:px-10 py-4">

      <div className="max-w-[1600px] mx-auto flex justify-between items-center">

        {/* LOGO */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-20 md:h-28 lg:h-32 w-auto object-contain drop-shadow-xl hover:scale-105 transition-all duration-300"
          />
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex flex-wrap justify-center gap-x-6 gap-y-4 text-lg font-semibold text-gray-900">
          {navLinks.map((link, index) => (
            link.name === "Olympiad" ? (
              <a
                key={index}
                href="#"
                onClick={handleOlympiadClick}
                className="transition hover:text-black"
              >
                {link.name}
              </a>
            ) : (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) =>
                  `transition hover:text-black ${
                    isActive ? "text-black underline" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            )
          ))}
        </nav>

        {/* BUTTONS */}
        <div className="hidden lg:flex gap-4 items-center">

          <NavLink to="/login">
            <div className="flex items-center bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg hover:shadow-2xl hover:scale-105 hover:from-red-700 hover:to-red-600 transition-all duration-300 cursor-pointer">
              <span className="mr-2">LOGIN</span>
              <FaUser />
            </div>
          </NavLink>

          <NavLink to="ieeo-registration">
            <div className="flex items-center bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg hover:shadow-2xl hover:scale-105 hover:from-green-700 hover:to-green-600 transition-all duration-300 cursor-pointer">
              <span className="mr-2">signup</span>
              <FaUserPlus />
            </div>
          </NavLink>

        </div>

        {/* MOBILE ICON */}
        <div className="lg:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden bg-yellow-300 mt-4 rounded-lg p-6 space-y-4 text-lg font-semibold text-gray-900">

          {navLinks.map((link, index) => (
            link.name === "Olympiad" ? (
              <a
                key={index}
                href="#"
                onClick={(e) => {
                  handleOlympiadClick(e);
                  setMenuOpen(false);
                }}
                className="block transition hover:text-black"
              >
                {link.name}
              </a>
            ) : (
              <NavLink
                key={index}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block transition hover:text-black ${
                    isActive ? "text-black underline" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            )
          ))}

          <div className="flex gap-4 pt-4">
            <NavLink to="/login" onClick={() => setMenuOpen(false)}>
              <div className="flex items-center bg-red-600 text-white px-4 py-2 rounded-full font-semibold">
                LOGIN <FaUser className="ml-2" />
              </div>
            </NavLink>

            <NavLink to="/signup" onClick={() => setMenuOpen(false)}>
              <div className="flex items-center bg-green-600 text-white px-4 py-2 rounded-full font-semibold">
                SIGNUP <FaUserPlus className="ml-2" />
              </div>
            </NavLink>
          </div>

        </div>
      )}

    </header>
  );
};

export default Header;
