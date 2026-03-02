import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { downloadCertificate, emailCertificate } from "../redux/thunks/certificateThunks";
import { useNavigate } from "react-router-dom";
import { FaDownload, FaEnvelope } from "react-icons/fa";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);
  const { loading, emailMessage, error } = useSelector((state) => state.certificate);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) return null;

  const handleDownload = () => {
    dispatch(downloadCertificate(user.name));
  };

  const handleEmail = () => {
    dispatch(emailCertificate({ name: user.name, email: user.email }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FFD42A] to-[#FFC107] flex justify-center items-center p-6">

      <div className="bg-white/90 backdrop-blur-xl p-10 rounded-3xl shadow-2xl 
      w-full max-w-2xl transition-all duration-500 hover:shadow-yellow-500/40 text-center">

        <h1 className="text-4xl font-extrabold mb-6
        bg-gradient-to-r from-gray-900 via-black to-gray-700
        bg-clip-text text-transparent">
          Welcome, {user.name} 🎉
        </h1>

        <p className="text-gray-600 mb-8 text-lg">
          Manage and download your certificate below.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">

          <button
            onClick={handleDownload}
            disabled={loading}
            className="inline-flex items-center gap-2 
            bg-green-500 hover:bg-green-600 
            text-white px-6 py-3 rounded-xl 
            shadow-md transition duration-300 
            transform hover:scale-105 disabled:opacity-60"
          >
            <FaDownload />
            {loading ? "Downloading..." : "Download Certificate"}
          </button>

          <button
            onClick={handleEmail}
            disabled={loading}
            className="inline-flex items-center gap-2 
            bg-blue-500 hover:bg-blue-600 
            text-white px-6 py-3 rounded-xl 
            shadow-md transition duration-300 
            transform hover:scale-105 disabled:opacity-60"
          >
            <FaEnvelope />
            {loading ? "Sending..." : "Email Certificate"}
          </button>

        </div>

        {emailMessage && (
          <p className="text-green-600 mt-6 font-semibold">
            {emailMessage}
          </p>
        )}

        {error && (
          <p className="text-red-600 mt-6 font-semibold">
            {error}
          </p>
        )}

      </div>
    </div>
  );
};

export default Dashboard;