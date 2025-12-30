import React from "react";
import { useState } from "react";
import Yo from "../part/utils/Yo";

const StudentAdmissionForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    Name: "",
    Father_Name: "",
    Mother_Name: "",
    Email: "",
    Phone: "",
    Class: "",
    DOB: "",
    Gender: "",
    Admission_Date: "",
    City: "",
    State: "",
    More_Info: "",
  });

  const handleChange = (key, value) => {
    // Handle event object from inputs/select or direct value from radio
    const newValue = value && value.target ? value.target.value : value;
    setFormData((prev) => ({ ...prev, [key]: newValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form data:", formData);

    try {
      const res = await Yo.post("/api/client/admission", formData);
      console.log(res.message);
      alert(res.message || "Admission added successfully!");

      // Reset form to initial empty state after success
      setFormData({
        id: "",
        Name: "",
        Father_Name: "",
        Mother_Name: "",
        Email: "",
        Phone: "",
        Class: "",
        DOB: "",
        Gender: "",
        Admission_Date: "",
        City: "",
        State: "",
        More_Info: "",
      });

        // go to /AdmissionSuccess


    } catch (e) {
      console.error(e);
      alert("Error submitting form");
    }
  };

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
          <div className="bg-gradient-to-r from-main to-indigo-700 px-8 py-6">
            <h2 className="text-2xl font-semibold text-white">
              Personal & Academic Information
            </h2>
          </div>

          <form className="p-8 md:p-10 space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Student ID */}
              <div>
                <label htmlFor="id" className="block text-sm font-semibold text-gray-700 mb-2">
                  Student ID <span className="text-red-500">*</span>
                </label>
                <input
                  id="id"
                  type="text"
                  value={formData.id}
                  onChange={(e) => handleChange("id", e)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="e.g., STU2025001"
                />
              </div>

              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.Name}
                  onChange={(e) => handleChange("Name", e)}
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
                  type="text"
                  value={formData.Father_Name}
                  onChange={(e) => handleChange("Father_Name", e)}
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
                  type="text"
                  value={formData.Mother_Name}
                  onChange={(e) => handleChange("Mother_Name", e)}
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
                  type="email"
                  value={formData.Email}
                  onChange={(e) => handleChange("Email", e)}
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
                  type="tel"
                  value={formData.Phone}
                  onChange={(e) => handleChange("Phone", e)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="+91 98765 43210"
                />
              </div>

              {/* Class/Grade */}
              <div>
                <label htmlFor="class" className="block text-sm font-semibold text-gray-700 mb-2">
                  Class/Grade <span className="text-red-500">*</span>
                </label>
                <select
                  id="class"
                  value={formData.Class}
                  onChange={(e) => handleChange("Class", e)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                >
                  <option value="" disabled>
                    Select a course
                  </option>
                  <option value="B.Tech">B.Tech</option>
                  <option value="B.E.">B.E.</option>
                  <option value="B.Sc">B.Sc</option>
                  <option value="B.Com">B.Com</option>
                  <option value="B.A.">B.A.</option>
                  <option value="BBA">BBA</option>
                  <option value="BCA">BCA</option>
                  <option value="MBA">MBA</option>
                  <option value="MCA">MCA</option>
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
                  value={formData.DOB}
                  onChange={(e) => handleChange("DOB", e)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Gender <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-8">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={formData.Gender === "Male"}
                      onChange={() => handleChange("Gender", "Male")}
                      required
                      className="mr-2 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-700">Male</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={formData.Gender === "Female"}
                      onChange={() => handleChange("Gender", "Female")}
                      className="mr-2 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-700">Female</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="Other"
                      checked={formData.Gender === "Other"}
                      onChange={() => handleChange("Gender", "Other")}
                      className="mr-2 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-gray-700">Other</span>
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
                  value={formData.Admission_Date}
                  onChange={(e) => handleChange("Admission_Date", e)}
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
                  value={formData.City}
                  onChange={(e) => handleChange("City", e)}
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
                  type="text"
                  value={formData.State}
                  onChange={(e) => handleChange("State", e)}
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
                value={formData.More_Info}
                onChange={(e) => handleChange("More_Info", e)}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                placeholder="Any medical conditions, previous school details, special requirements, etc."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-6">
              <button
                type="submit"
                className="px-10 py-4 bg-gradient-to-r from-main to-indigo-700 text-white font-bold text-lg rounded-xl hover:from-blue-700 hover:to-indigo-800 transform hover:scale-105 transition duration-300 shadow-lg"
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