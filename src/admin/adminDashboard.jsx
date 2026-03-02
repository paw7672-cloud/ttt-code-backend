import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers, sendCertificateEmail } from "../redux/thunks/adminThunks";
import { downloadCertificate } from "../redux/thunks/certificateThunks";
// import { clearMessage } from "../redux/slice/adminslice";
import { useNavigate } from "react-router-dom";
import { FaDownload, FaEnvelope } from "react-icons/fa";
import { sendAllCertificates, downloadAllCertificates } from "../redux/thunks/adminThunks";
import { uploadExcel } from "../redux/thunks/adminThunks";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users, loading, error, emailSuccess } = useSelector(
    (state) => state.admin
  );
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user || user.role !== "admin") {
      navigate("/login");
    } else {
      dispatch(fetchAllUsers());
    }
  }, [user, dispatch, navigate]);

  useEffect(() => {
    if (emailSuccess) {
      alert(emailSuccess);
      dispatch(clearMessage());
    }
  }, [emailSuccess, dispatch]);

  if (!user) return null;

  const handleDownload = (name) => {
    dispatch(downloadCertificate(name));
  };

  const handleExcelUpload = (e) => {
  const file = e.target.files[0];
  dispatch(uploadExcel(file)).then(() => {
    dispatch(fetchAllUsers());
  });
};

  const handleEmail = (name, email) => {
    dispatch(sendCertificateEmail({ name, email }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FFD42A] to-[#FFC107] p-8">

      <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-xl 
      rounded-3xl shadow-2xl p-8">

        <h1 className="text-4xl font-extrabold mb-8 text-center
        bg-gradient-to-r from-gray-900 via-black to-gray-700
        bg-clip-text text-transparent">
          Admin Dashboard
        </h1>
        <div className="mb-6">
  <input
    type="file"
    accept=".xlsx, .xls"
    onChange={handleExcelUpload}
    className="border p-2 rounded"
  />
</div>

        {loading && (
          <p className="text-center text-lg font-semibold">Loading...</p>
        )}

        {error && (
          <p className="text-center text-red-600 font-semibold mb-4">
            {error}
          </p>
        )}


        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">

            <thead>
              <tr className="bg-yellow-400 text-black">
                <th className="p-4 font-bold">Name</th>
                <th className="p-4 font-bold">Email</th>
                <th className="p-4 font-bold">Class</th>
                <th className="p-4 font-bold text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((u) => (
                <tr
                  key={u._id}
                  className="border-b hover:bg-yellow-50 transition duration-300"
                >
                  <td className="p-4 font-medium">{u.name}</td>
                  <td className="p-4">{u.email}</td>
                  <td className="p-4">{u.className}</td>
                  <td className="p-4 text-center space-x-3">

                    <button
                      onClick={() => handleDownload(u.name)}
                      className="inline-flex items-center gap-2 
                      bg-green-500 hover:bg-green-600 
                      text-white px-4 py-2 rounded-xl 
                      shadow-md transition duration-300 transform hover:scale-105"
                    >
                      <FaDownload /> Download
                    </button>

                    <button
                      onClick={() => handleEmail(u.name, u.email)}
                      className="inline-flex items-center gap-2 
                      bg-blue-500 hover:bg-blue-600 
                      text-white px-4 py-2 rounded-xl 
                      shadow-md transition duration-300 transform hover:scale-105"
                    >
                      <FaEnvelope /> Send Email
                    </button>

                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
        <div className="flex gap-4 mb-6">

  <button
    onClick={() => dispatch(sendAllCertificates())}
    className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-xl shadow-md"
  >
    Send All Certificates
  </button>

  <button
    onClick={() => dispatch(downloadAllCertificates())}
    className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-xl shadow-md"
  >
    Download All Certificates
  </button>

</div>
        


      </div>
    </div>
  );
};

export default AdminDashboard;