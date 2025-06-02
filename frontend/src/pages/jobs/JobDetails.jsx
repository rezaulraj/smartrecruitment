import React, { useState } from "react";
import {
  FiArrowLeft,
  FiClock,
  FiShare2,
  FiMail,
  FiUser,
  FiPhone,
  FiUpload,
} from "react-icons/fi";
import { FaLocationDot, FaBriefcase, FaCircleCheck } from "react-icons/fa6";
import { LiaLanguageSolid } from "react-icons/lia";

import { RiVisaLine } from "react-icons/ri";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import jobImage from "../../assets/image/jobs/jobs.png";
import { Link } from "react-router-dom";

const JobDetails = () => {
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  // Sample job data
  const job = {
    title: "Construction Laborer",
    location: "Berlin, Germany",
    countryCode: "de",
    postedDate: "2 days ago",
    image: jobImage,
    overview:
      "Join a leading construction firm building infrastructure projects. Physically fit, basic skills required. Previous experience in construction preferred but not mandatory.",
    responsibilities: [
      "Perform tasks involving physical labor at construction sites",
      "Operate hand and power tools of all types",
      "Clean and prepare construction sites",
      "Follow instructions from supervisors",
      "Assist with building and dismantling scaffolding",
    ],
    qualifications: [
      "High school diploma or equivalent",
      "Ability to meet physical demands of the job",
      "Basic knowledge of construction tools",
      "Good teamwork and communication skills",
      "Valid work permit for Germany",
    ],
    salary: "$1300-$1500 monthly",
    jobType: "Full Time",
    experience: "0-3 years",
    visaAssistance: true,
    relocation: true,
    languageTraining: true,
    expiryDate: "2023-12-31",
  };

  const CountryFlag = ({ countryCode }) => {
    const flags = {
      de: "https://flagcdn.com/w40/de.png",
      hr: "https://flagcdn.com/w40/hr.png",
      us: "https://flagcdn.com/w40/us.png",
      uk: "https://flagcdn.com/w40/gb.png",
      ca: "https://flagcdn.com/w40/ca.png",
      au: "https://flagcdn.com/w40/au.png",
      in: "https://flagcdn.com/w40/in.png",
    };

    return (
      <img
        src={
          flags[countryCode?.toLowerCase()] || "https://flagcdn.com/w40/un.png"
        }
        alt={countryCode}
        className="w-8 h-8 object-contain rounded-full"
      />
    );
  };

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    setShowApplyModal(false);
    setApplicationSubmitted(true);
  };

  return (
    <section className="max-w-screen-xl mx-auto my-10 px-4">
      {/* Back button and header */}
      <Link to={"/jobs"} className="flex items-center text-primary mr-4">
        <FiArrowLeft className="mr-2" /> Go Back
      </Link>
      <div className="flex items-center mb-6">
        <CountryFlag countryCode={job.countryCode} />
        <div className="flex-1 ml-3">
          <h1 className="text-2xl font-bold">{job.title}</h1>
          <p className="text-gray-600 flex items-center">
            <FaLocationDot className="mr-1" /> {job.location}
          </p>
        </div>
        <div className="text-gray-500 flex items-center">
          <FiClock className="mr-1" /> Posted {job.postedDate}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left side content */}
        <div className="lg:col-span-2">
          {/* Job image */}
          <img
            src={job.image}
            alt={job.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />

          {/* Overview section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Overview</h2>
            <p className="text-gray-700">{job.overview}</p>
          </div>

          {/* Responsibilities section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Responsibilities</h2>
            <ul className="list-disc pl-5 space-y-2">
              {job.responsibilities.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Qualifications section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Qualifications</h2>
            <ul className="list-disc pl-5 space-y-2">
              {job.qualifications.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right side card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
            {/* Job location */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Job Location</h3>
              <p className="text-gray-700 flex items-center">
                <FaLocationDot className="mr-2 text-primary" /> {job.location}
              </p>
            </div>

            {/* Application instruction */}
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-gray-700">
                Please send us your detailed CV to apply for this job post
              </p>
            </div>

            {/* Salary */}
            <div className="mb-4 flex items-center">
              <FaBriefcase className="mr-3 text-primary" />
              <div>
                <p className="text-sm text-gray-500">Salary</p>
                <p className="font-medium">{job.salary}</p>
              </div>
            </div>

            {/* Job type */}
            <div className="mb-4 flex items-center">
              <FaCircleCheck className="mr-3 text-primary" />
              <div>
                <p className="text-sm text-gray-500">Job Type</p>
                <p className="font-medium">{job.jobType}</p>
              </div>
            </div>

            {/* Expiry date */}
            <div className="mb-4 flex items-center">
              <FiClock className="mr-3 text-primary" />
              <div>
                <p className="text-sm text-gray-500">Expiry Date</p>
                <p className="font-medium">
                  {new Date(job.expiryDate).toLocaleDateString()}
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Benefits</h3>
              <div className="space-y-2">
                {job.visaAssistance && (
                  <div className="flex items-center">
                    <RiVisaLine className="mr-2 text-primary" />
                    <span>Visa Assistance</span>
                  </div>
                )}
                {job.relocation && (
                  <div className="flex items-center">
                    <BsBoxArrowInUpRight className="mr-2 text-primary" />
                    <span>Relocation Support</span>
                  </div>
                )}
                {job.languageTraining && (
                  <div className="flex items-center">
                    <LiaLanguageSolid className="mr-2 text-primary" />
                    <span>Language Training</span>
                  </div>
                )}
              </div>
            </div>

            {/* Experience level */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Experience Level</h3>
              <p className="text-gray-700">{job.experience}</p>
            </div>

            {/* Social share */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Share this job</h3>
              <div className="flex space-x-4">
                <button className="p-2 bg-gray-100 rounded-full">
                  <FiShare2 />
                </button>
                {/* Add more social icons as needed */}
              </div>
            </div>

            {/* Apply button */}
            <button
              onClick={() => setShowApplyModal(true)}
              className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-medium transition duration-300"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Apply Modal */}
      {showApplyModal && (
        <div className="fixed inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[70vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-6">Apply for this job</h2>

              <form onSubmit={handleSubmitApplication}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Column */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 mb-1">
                        Full Name
                      </label>
                      <div className="relative">
                        <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-1">Email</label>
                      <div className="relative">
                        <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Your email address"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-1">
                        Nationality
                      </label>
                      <select
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      >
                        <option value="">Select your nationality</option>
                        <option value="us">United States</option>
                        <option value="uk">United Kingdom</option>
                        <option value="de">Germany</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <div className="relative">
                        <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="tel"
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Your phone number"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Second Column */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 mb-1">
                        Message (Optional)
                      </label>
                      <textarea
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        rows="5"
                        placeholder="Write a cover letter or message"
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-1">
                        Upload CV
                      </label>
                      <div className="relative">
                        <FiUpload className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="file"
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          accept=".pdf,.doc,.docx"
                          required
                        />
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        PDF, DOC, DOCX (Max 5MB)
                      </p>
                    </div>

                    <div className="pt-2">
                      <p className="text-sm text-gray-600">
                        Don't have a CV yet?{" "}
                        <a href="#" className="text-primary hover:underline">
                          Create your CV now
                        </a>
                      </p>
                    </div>

                    <div className="flex items-start pt-2">
                      <input
                        type="checkbox"
                        id="notRobot"
                        className="mt-1 mr-2 rounded text-primary focus:ring-primary"
                        required
                      />
                      <label
                        htmlFor="notRobot"
                        className="text-sm text-gray-600"
                      >
                        I'm not a robot
                      </label>
                    </div>
                  </div>
                </div>

                {/* Submit button - full width below columns */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-medium transition duration-300"
                  >
                    Submit Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {applicationSubmitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2">Application Submitted</h2>
            <p className="text-gray-600 mb-6">
              Your application has been successfully submitted.
            </p>
            <button
              onClick={() => setApplicationSubmitted(false)}
              className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-medium transition duration-300"
            >
              Browse More Jobs
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default JobDetails;
