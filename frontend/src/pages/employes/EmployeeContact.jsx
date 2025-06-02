import React, { useState } from "react";
import work5 from "../../assets/image/work/work5.png?url";

const EmployeeContact = () => {
  // Form state
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    country: "",
    workersNeeded: "",
    industryType: "",
    preferredOrigin: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Dropdown options
  const countries = [
    "Select Country",
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "Japan",
    "UAE",
    "Other",
  ];
  const industries = [
    "Select Industry",
    "Construction",
    "Healthcare",
    "IT",
    "Manufacturing",
    "Hospitality",
    "Agriculture",
    "Other",
  ];
  const workerOrigins = [
    "Select Preferred Origin",
    "Local",
    "South Asia",
    "Southeast Asia",
    "Africa",
    "Europe",
    "No Preference",
  ];

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.companyName.trim())
      newErrors.companyName = "Company name is required";
    if (!formData.contactPerson.trim())
      newErrors.contactPerson = "Contact person is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.country || formData.country === "Select Country")
      newErrors.country = "Please select a country";
    if (!formData.workersNeeded)
      newErrors.workersNeeded = "Number of workers is required";
    if (!formData.industryType || formData.industryType === "Select Industry")
      newErrors.industryType = "Please select industry type";
    if (
      !formData.preferredOrigin ||
      formData.preferredOrigin === "Select Preferred Origin"
    )
      newErrors.preferredOrigin = "Please select worker origin";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // In a real app, you would send data to your backend here
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
    }
  };

  // Close success modal
  const closeModal = () => {
    setIsSubmitted(false);
    // Optionally reset form here
    // setFormData({...initialState});
  };

  return (
    <section className="max-w-screen-xl mx-auto my-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="hidden md:block">
          <img
            src={work5}
            alt="Workers"
            className="w-full h-full object-cover"
            style={{ maxHeight: "600px" }}
          />
        </div>

        {/* Form Section */}
        <div className=" p-6 md:p-8">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Request Workers for Your Business
            </h2>
            <p className="text-gray-600">
              Fill out the form below, and we'll get back to you to discuss your
              staffing needs.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Company Name & Contact Person */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.companyName ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your company name"
                />
                {errors.companyName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.companyName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Person <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.contactPerson ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your name"
                />
                {errors.contactPerson && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.contactPerson}
                  </p>
                )}
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="+1 (123) 456-7890"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Country & Workers Needed */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country <span className="text-red-500">*</span>
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.country ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  {countries.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                {errors.country && (
                  <p className="mt-1 text-sm text-red-600">{errors.country}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Workers Needed <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="workersNeeded"
                  min="1"
                  value={formData.workersNeeded}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.workersNeeded ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="How many workers?"
                />
                {errors.workersNeeded && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.workersNeeded}
                  </p>
                )}
              </div>
            </div>

            {/* Industry & Worker Origin */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Industry Type <span className="text-red-500">*</span>
                </label>
                <select
                  name="industryType"
                  value={formData.industryType}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.industryType ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  {industries.map((industry, index) => (
                    <option key={index} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>
                {errors.industryType && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.industryType}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Worker Origin{" "}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  name="preferredOrigin"
                  value={formData.preferredOrigin}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.preferredOrigin
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                >
                  {workerOrigins.map((origin, index) => (
                    <option key={index} value={origin}>
                      {origin}
                    </option>
                  ))}
                </select>
                {errors.preferredOrigin && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.preferredOrigin}
                  </p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message (Optional)
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Any special requirements?"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-xl animate-fade-in">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Request Submitted Successfully!
              </h3>
              <p className="text-gray-600 mb-6">
                We will contact you soon regarding your staffing needs.
              </p>
              <button
                onClick={closeModal}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
              >
                Close Now
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EmployeeContact;
