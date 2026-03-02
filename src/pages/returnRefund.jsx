import React from "react";

const ReturnRefund = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-10">

        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 hover:underline">
          Return & Refund Policy – Olympiad ++ Examination Platform
        </h1>

        

        {/* 1. Overview */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800 hover:underline">
            1. Overview
          </h2>
          <p className="text-base sm:text-xl font-semibold text-gray-700 leading-relaxed">
            This Return & Refund Policy applies to all registrations made
            on our Olympiad examination platform. By registering for an exam,
            you agree to the terms outlined below.
          </p>
        </section>

        {/* 2. 24 Hours Full Refund */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 text-green-600 hover:underline">
            2. 24-Hour Full Refund Policy
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-base sm:text-xl font-semibold text-gray-700">
            <li>Students can request a full refund within 24 hours of payment.</li>
            <li>The exam must NOT have been started.</li>
            <li>Refund request must be sent via registered email.</li>
            <li>No deduction will be applied.</li>
          </ul>
        </section>

        {/* 3. 48 Hours Conditional Refund */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 text-yellow-600 hover:underline">
            3. 48-Hour Conditional Refund
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-base sm:text-xl font-semibold text-gray-700">
            <li>Refund requests made within 48 hours will be reviewed.</li>
            <li>A processing fee (up to 10%) may be deducted.</li>
            <li>No refund if the exam has already been attempted.</li>
            <li>Approval is subject to management review.</li>
          </ul>
        </section>

        {/* 4. No Refund Situations */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 text-red-600 hover:underline">
            4. Non-Refundable Situations
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-base sm:text-xl font-semibold text-gray-700">
            <li>After 48 hours from payment.</li>
            <li>If the exam has been started or completed.</li>
            <li>Technical issues due to student’s internet/device failure.</li>
            <li>Providing incorrect registration details.</li>
          </ul>
        </section>

        {/* 5. Refund Processing */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800 hover:underline">
            5. Refund Processing Time
          </h2>
          <p className="text-base sm:text-xl font-semibold text-gray-700 leading-relaxed">
            Once approved, refunds will be processed within 5–7 working days.
            The refunded amount will be credited back to the original payment method.
          </p>
        </section>

        {/* 6. Contact */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800 hover:underline">
            6. Contact for Refund
          </h2>
          <p className="text-base sm:text-xl font-semibold text-gray-700 hover:underline">
  thetruetopper@gmail.com
</p>
        </section>

      </div>
    </div>
  );
};

export default ReturnRefund;