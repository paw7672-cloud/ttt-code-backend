import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Registration from "../pages/registration";


const PaymentForm = () => {
  const location = useLocation();
  const dispatch = useDispatch();
const navigate = useNavigate();

  const { subject, classRange } = location.state || {};

  const price = classRange === "6-9" ? 99 : 199;

  // 🔥 Generate class options dynamically
 const classOptions =
  classRange === "6-9"
    ? ["6", "7", "8", "9"]
    : ["10", "11", "12"];

  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    selectedClass: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!subject || !classRange) {
      alert("Please select subject and class first.");
      return;
    }

    if (!formData.selectedClass) {
      alert("Please select your class.");
      return;
    }

    const newData = {
      name: formData.name,
      whatsapp: formData.whatsapp,
      subject,
      classRange,
      selectedClass: formData.selectedClass,
      price,
      date: new Date().toLocaleString(),
    };

    dispatch(addRegistration(newData));

    alert("Redirecting to Payment Gateway...");

    setFormData({ name: "", whatsapp: "", selectedClass: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#FFD42A] to-[#FFC107] flex justify-center items-center p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-lg">

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-800">
            Complete Your Registration
          </h2>
          <div className="mt-4 inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-semibold text-sm">
            {subject} | Class Range {classRange}
          </div>
        </div>

        {/* Payment Summary */}
        <div className="bg-gray-50 border border-yellow-200 rounded-2xl p-6 mb-8">
          <h3 className="text-lg font-bold text-gray-700 mb-4">
            Payment Summary
          </h3>

          <div className="flex justify-between text-gray-600 mb-2">
            <span>Exam Fee</span>
            <span>₹{price}</span>
          </div>

          <div className="flex justify-between font-bold text-xl text-yellow-600 border-t pt-3">
            <span>Total</span>
            <span>₹{price}</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Student Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 p-3 rounded-xl outline-none transition"
            />
          </div>

          {/* WhatsApp */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              WhatsApp Number
            </label>
            <input
              type="tel"
              required
              value={formData.whatsapp}
              onChange={(e) =>
                setFormData({ ...formData, whatsapp: e.target.value })
              }
              className="w-full border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 p-3 rounded-xl outline-none transition"
            />
          </div>

          {/* 🔥 Class Dropdown */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Select Your Class
            </label>
            <select
              required
              value={formData.selectedClass}
              onChange={(e) =>
                setFormData({ ...formData, selectedClass: e.target.value })
              }
              className="w-full border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 p-3 rounded-xl outline-none transition"
            >
              <option value="">-- Select Class --</option>
              {classOptions.map((cls) => (
                <option key={cls} value={cls}>
                  Class {cls}
                </option>
              ))}
            </select>
          </div>

          {/* Submit */}
         <button
  type="button"
  onClick={() =>
    navigate("/ieeo-registration", {
      state: { price }
    })
  }
  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-3 rounded-xl font-bold text-lg transition shadow-md hover:shadow-lg"
>
  Pay ₹{price}
</button>

        </form>

      </div>
    </div>
  );
};

export default PaymentForm;
