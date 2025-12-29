import React from "react";
import { useState } from "react";

const StudentAdmissionForm = () => {
  const [formData, setFormData] = useState({});


  const handleChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value.target.value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)


  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Student Admission Form
          </h1>
          <p className="text-lg text-gray-600">
            Please fill in all the required details carefully
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-6">
            <h2 className="text-2xl font-semibold text-white">
              Personal & Academic Information
            </h2>
          </div>

          <form className="p-8 md:p-10 space-y-8">
            {/* Profile Photo Upload */}

            {/* Form Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* ID */}
              <div>
                <label htmlFor="id" className="block text-sm font-semibold text-gray-700 mb-2">
                  Student ID <span className="text-red-500">*</span>
                </label>
                <input
                  id="id"
                  type="text"
                  onChange={(data) => handleChange("id", data)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="e.g., STU2025001"
                />
              </div>

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  onChange={(data) => handleChange("name", data)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="Enter student's full name"
                />
              </div>

              {/* Father's Name */}
              <div>
                <label htmlFor="father" className="block text-sm font-semibold text-gray-700 mb-2">
                  Father's Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="father"
                  onChange={(data) => handleChange("father", data)}
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="Father's full name"
                />
              </div>

              {/* Mother's Name */}
              <div>
                <label htmlFor="mother" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mother's Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="mother"
                  onChange={(data) => handleChange("mother", data)}
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="Mother's full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  onChange={(data) => handleChange("email", data)}
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="student@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  onChange={(data) => handleChange("phone", data)}
                  type="tel"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="+91 98765 43210"
                />
              </div>

              {/* Class */}
              <div>
                <label htmlFor="class" className="block text-sm font-semibold text-gray-700 mb-2">
                  Class/Grade <span className="text-red-500">*</span>
                </label>
                <select
                  id="class"
                  onChange={(data) => handleChange("class", data)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                >
                  <option value="">Select Class</option>
                  <option>Kindergarten</option>
                  <option>Class 1</option>
                  <option>Class 2</option>
                  <option>Class 3</option>
                  <option>Class 4</option>
                  <option>Class 5</option>
                  <option>Class 6</option>
                  <option>Class 7</option>
                  <option>Class 8</option>
                  <option>Class 9</option>
                  <option>Class 10</option>
                  <option>Class 11</option>
                  <option>Class 12</option>
                </select>
              </div>

              {/* Date of Birth */}
              <div>
                <label htmlFor="dob" className="block text-sm font-semibold text-gray-700 mb-2">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  id="dob"
                  type="date"
                  onChange={(data) => handleChange("dob", data)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Gender <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center">
                    <input type="radio" name="gender" value="male" required className="mr-2" />
                    <span>Male</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="gender" value="female" className="mr-2" />
                    <span>Female</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="gender" value="other" className="mr-2" />
                    <span>Other</span>
                  </label>
                </div>
              </div>

              {/* Admission Date */}
              <div>
                <label htmlFor="admissionDate" className="block text-sm font-semibold text-gray-700 mb-2">
                  Admission Date <span className="text-red-500">*</span>
                </label>
                <input
                  id="admissionDate"
                  type="date"
                  onChange={(data) => handleChange("admissionDate", data)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              {/* City */}
              <div>
                <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  id="city"
                  type="text"
                  onChange={(data) => handleChange("city", data)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="e.g., Mumbai"
                />
              </div>

              {/* State */}
              <div>
                <label htmlFor="state" className="block text-sm font-semibold text-gray-700 mb-2">
                  State <span className="text-red-500">*</span>
                </label>
                <input
                  id="state"
                  onChange={(data) => handleChange("state", data)}
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="e.g., Maharashtra"
                />
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <label htmlFor="moreInfo" className="block text-sm font-semibold text-gray-700 mb-2">
                Additional Information (Optional)
              </label>
              <textarea
                id="moreInfo"
                onChange={(data) => handleChange("moreInfo", data)}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                placeholder="Any medical conditions, previous school details, special requirements, etc."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-6">
              <button
                type="submit"
                onClick={handleSubmit}
                className="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-lg rounded-xl hover:from-blue-700 hover:to-indigo-800 transform hover:scale-105 transition duration-300 shadow-lg"
              >
                Submit Admission Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentAdmissionForm;