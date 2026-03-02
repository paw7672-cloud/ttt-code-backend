import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/thunks/authThunk";
import { useNavigate, Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaPhone, FaSchool } from "react-icons/fa";

const  Registration= () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, success } = useSelector((state) => state.auth);

  useEffect(() => {
    if (success) {
      navigate("/login");
    }
  }, [success, navigate]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    whatsapp: "",
    className: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FFD42A] to-[#FFC107] flex justify-center items-center p-6">

      <div className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl 
      w-full max-w-md transition-all duration-500 hover:shadow-yellow-500/40">

        <h2 className="text-4xl font-extrabold text-center mb-8 
        bg-gradient-to-r from-gray-900 via-black to-gray-700 
        bg-clip-text text-transparent drop-shadow-md tracking-wide">
          Create Account <span className="text-yellow-500">IEEO++</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div className="relative">
            <FaUser className="absolute left-4 top-4 text-gray-500" />
            <input
              name="name"
              placeholder="Full Name"
              required
              className="w-full pl-12 border border-gray-300 p-3 rounded-xl 
              focus:ring-2 focus:ring-yellow-400 focus:border-yellow-500 
              outline-none transition-all duration-300"
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-4 text-gray-500" />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              required
              className="w-full pl-12 border border-gray-300 p-3 rounded-xl 
              focus:ring-2 focus:ring-yellow-400 focus:border-yellow-500 
              outline-none transition-all duration-300"
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute left-4 top-4 text-gray-500" />
            <input
              name="password"
              type="password"
              placeholder="Password"
              required
              className="w-full pl-12 border border-gray-300 p-3 rounded-xl 
              focus:ring-2 focus:ring-yellow-400 focus:border-yellow-500 
              outline-none transition-all duration-300"
              onChange={handleChange}
            />
          </div>

          {/* Whatsapp */}
          <div className="relative">
            <FaPhone className="absolute left-4 top-4 text-gray-500" />
            <input
              name="whatsapp"
              placeholder="Whatsapp Number"
              required
              className="w-full pl-12 border border-gray-300 p-3 rounded-xl 
              focus:ring-2 focus:ring-yellow-400 focus:border-yellow-500 
              outline-none transition-all duration-300"
              onChange={handleChange}
            />
          </div>

          {/* Class */}
          <div className="relative">
            <FaSchool className="absolute left-4 top-4 text-gray-500" />
            <input
              name="className"
              placeholder="Class"
              required
              className="w-full pl-12 border border-gray-300 p-3 rounded-xl 
              focus:ring-2 focus:ring-yellow-400 focus:border-yellow-500 
              outline-none transition-all duration-300"
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black 
            py-3 rounded-xl font-bold text-lg 
            transition-all duration-300 
            transform hover:scale-105 
            shadow-md hover:shadow-lg disabled:opacity-60"
          >
            {loading ? "Registering..." : "Register"}
          </button>

        </form>

        {error && (
          <p className="text-red-500 text-center mt-4 font-medium">
            {error}
          </p>
        )}

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-yellow-700 font-bold hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Registration;