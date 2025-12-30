import React from "react";
// import { CheckCircle } from "lucide-react";

const AdmissionSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-4">
          {/* <CheckCircle className="text-green-500 w-20 h-20" /> */}
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Admission Successful
        </h1>

        <p className="text-gray-600 mb-6">
          Your admission form has been submitted successfully. Our team will
          contact you shortly.
        </p>

        <div className="flex gap-3 justify-center">
          <a
            href="/"
            className="px-5 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Go to Home
          </a>

          <a
            href="/admission-form"
            className="px-5 py-2 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
          >
            New Admission
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdmissionSuccess;
