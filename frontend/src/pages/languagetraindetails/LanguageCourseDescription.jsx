import React, { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaLinkedin,
  FaFacebookMessenger,
  FaEnvelope,
  FaRegClock,
  FaCalendarAlt,
  FaUserAlt,
  FaShareAlt,
  FaCheck,
} from "react-icons/fa";
const LanguageCourseDescription = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showEnrollForm, setShowEnrollForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    nationality: "",
    phone: "",
    schedule: "",
    message: "",
    acceptTerms: false,
  });

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate all fields are filled
    if (
      formData.fullName &&
      formData.email &&
      formData.nationality &&
      formData.phone &&
      formData.schedule &&
      formData.acceptTerms
    ) {
      setShowEnrollForm(false);
      setShowSuccess(true);
      // Here you would typically send the data to your backend
      console.log("Form submitted:", formData);
    }
  };

  const courseOverview = [
    {
      question: "What will I learn in this course?",
      answer:
        "You'll learn MIG and TIG welding techniques, metal joining methods, safety protocols, equipment handling, and quality control standards used in European industries.",
    },
    {
      question: "Who is this course for?",
      answer:
        "This program is designed for workers from Nepal, India, Bangladesh, and the Philippines who want to qualify for industrial jobs in Europe.",
    },
    {
      question: "What certification will I receive?",
      answer:
        "Upon completion, you'll receive a European-standard welding certification recognized by employers across EU countries.",
    },
    {
      question: "What equipment will I use?",
      answer:
        "You'll train with industry-standard welding machines, protective gear, and tools identical to those used in European factories.",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto my-16 px-4">
      {/* Enrollment Form Popup */}
      {showEnrollForm && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-primary">
                  Enroll in Welding Training Course
                </h3>
                <button
                  onClick={() => setShowEnrollForm(false)}
                  className="text-gray-500 hover:text-gray-700 text-3xl"
                >
                  &times;
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-1">
                      Nationality *
                    </label>
                    <select
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    >
                      <option value="">Select Nationality</option>
                      <option value="Nepal">Nepal</option>
                      <option value="India">India</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Philippines">Philippines</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-1">
                    Preferred Training Schedule *
                  </label>
                  <select
                    name="schedule"
                    value={formData.schedule}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="">Select Schedule</option>
                    <option value="Morning (9AM-12PM)">
                      Morning (9AM-12PM)
                    </option>
                    <option value="Afternoon (1PM-4PM)">
                      Afternoon (1PM-4PM)
                    </option>
                    <option value="Evening (5PM-8PM)">Evening (5PM-8PM)</option>
                    <option value="Weekend">Weekend</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      name="acceptTerms"
                      type="checkbox"
                      checked={formData.acceptTerms}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                      required
                    />
                  </div>
                  <label
                    htmlFor="terms"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    I accept all terms and conditions
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-md transition-colors"
                >
                  Submit Enrollment
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Success Message Popup */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
              <FaCheck className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Query Sent Successfully!
            </h3>
            <p className="text-gray-600 mb-6">
              Thank you for your enrollment. We will contact you very soon with
              further details.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-md transition-colors"
            >
              Close Now
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left side (2/3 width) */}
        <div className="lg:w-2/3">
          {/* Course Description */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Course Description
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Get ready for Europe with Smart Recruit’s English Mastery program!
              This 60-hour hands-on course at our institutes helps workers from
              Nepal, India, Bangladesh, and the Philippines master English for
              work and daily life. Through role-plays and conversations, you’ll
              learn to speak confidently, understand instructions, and adapt to
              European culture—perfect for jobs in hospitality, logistics, and
              healthcare.
            </p>
          </div>

          {/* Course Overview Accordion */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Course Overview
            </h2>
            <div className="space-y-4">
              {courseOverview.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="font-medium text-gray-800">
                      {item.question}
                    </span>
                    {activeIndex === index ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </button>
                  {activeIndex === index && (
                    <div className="p-4 bg-white">
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right side (1/3 width) - Sticky Card */}
        <div className="lg:w-1/3">
          <div className="sticky top-8">
            <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
              {/* Pricing */}
              <div className="bg-primary text-white p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Course Fee</h3>
                <p className="text-3xl font-bold">€499</p>
                <p className="text-sm opacity-90">One-time payment</p>
              </div>

              {/* Course Details */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <FaRegClock className="text-primary text-lg" />
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-medium">4 Weeks</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="text-primary text-lg" />
                  <div>
                    <p className="text-sm text-gray-500">Days per Week</p>
                    <p className="font-medium">5 Days</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FaUserAlt className="text-primary text-lg" />
                  <div>
                    <p className="text-sm text-gray-500">Age Limit</p>
                    <p className="font-medium">18-45 Years</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 mt-4">
                  <p className="flex items-center gap-2 text-gray-600 mb-3">
                    <FaShareAlt className="text-primary" />
                    <span className="font-medium">Share this course</span>
                  </p>
                  <div className="flex gap-3">
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      <FaLinkedin className="text-xl" />
                    </a>
                    <a href="#" className="text-blue-500 hover:text-blue-700">
                      <FaFacebookMessenger className="text-xl" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-gray-800">
                      <FaEnvelope className="text-xl" />
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => setShowEnrollForm(true)}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-md transition-colors mt-6"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguageCourseDescription;
