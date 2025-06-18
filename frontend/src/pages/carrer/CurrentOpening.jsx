import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";

const CountryFlag = ({ countryCode }) => {
  const flags = {
    de: "https://flagcdn.com/w20/de.png",
    hr: "https://flagcdn.com/w20/hr.png",
    us: "https://flagcdn.com/w20/us.png",
    uk: "https://flagcdn.com/w20/gb.png",
    ca: "https://flagcdn.com/w20/ca.png",
    au: "https://flagcdn.com/w20/au.png",
    in: "https://flagcdn.com/w20/in.png",
  };

  return (
    <img
      src={
        flags[countryCode?.toLowerCase()] || "https://flagcdn.com/w20/un.png"
      }
      alt={countryCode}
      className="w-8 h-8 mr-3 rounded-full object-cover"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "https://flagcdn.com/w20/un.png";
      }}
    />
  );
};

const CurrentOpening = () => {
  const currentOpening = [
    {
      id: 1,
      location: "Berlin, Germany",
      countryCode: "de",
      postTime: "2 days ago",
      category: "Full Time",
      primaryText:
        "Join a leading construction firm building infrastructure projects. Physically fit, basic skills required.",
      jobTitle: "Project Manager",
      salaryRange: "$2300-$5500",
      facility: "Visa Assistance, Relocation Support, Language Support",
      experience: "5+ years",
      education: "Master's Degree",
    },
    {
      id: 2,
      location: "Berlin, Germany",
      countryCode: "de",
      postTime: "2 days ago",
      category: "Full Time",
      primaryText:
        "Work in a luxury hotel as housekeeping or front-of-house staff. English skills a plus.",
      jobTitle: "Construction Laborer",
      salaryRange: "$2300-$4500",
      facility: "Visa Assistance, Relocation Support, Language Support",
      experience: "5+ years",
      education: "Master's Degree",
    },
    {
      id: 3,
      location: "Berlin, Germany",
      countryCode: "de",
      postTime: "2 days ago",
      category: "Full Time",
      primaryText:
        "Oversee construction operations and ensure compliance with safety regulations and project specifications.",
      jobTitle: "Site Supervisor",
      salaryRange: "$2300-$3500",
      facility: "Visa Assistance, Relocation Support, Language Support",
      experience: "5+ years",
      education: "Master's Degree",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Join Our Team</h2>
        <p className="text-gray-600">
          Explore our current openings and become part of our growing team
        </p>
      </div>

      {/* Job Cards Grid - Single Column */}
      <div className="grid grid-cols-1 gap-6">
        {currentOpening.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <CountryFlag countryCode={job.countryCode} />
                  <div>
                    <h3 className="font-bold text-xl mb-1">{job.jobTitle}</h3>
                    <p className="text-gray-600 mb-2 flex items-center gap-2">
                      <FaLocationDot className="text-primary" />
                      {job.location}
                    </p>
                  </div>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {job.category}
                </span>
              </div>

              <p className="text-gray-700 my-3">{job.primaryText}</p>

              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex items-center gap-1 text-gray-600">
                  <FiClock className="w-4 h-4" />
                  <span>{job.postTime}</span>
                </div>
                <div className="text-gray-600">
                  <span>Salary: {job.salaryRange}</span>
                </div>
                <div className="text-gray-600">
                  <span>Experience: {job.experience}</span>
                </div>
                <div className="text-gray-600">
                  <span>Education: {job.education}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-gray-600 text-sm">{job.facility}</p>
              </div>
              <div>
                <button className="mt-4 bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded transition duration-300">
                  <Link to={`/jobs/${job.id}`}>View Details</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentOpening;
