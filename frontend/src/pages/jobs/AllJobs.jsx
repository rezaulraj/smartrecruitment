import React, { useState } from "react";
import { FaLocationDot, FaLocationPin } from "react-icons/fa6";
import {
  FiSearch,
  FiBriefcase,
  FiGlobe,
  FiClock,
  FiFilter,
  FiX,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
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

const AllJobs = () => {
  // Sample job data
  const allJobs = Array(16)
    .fill()
    .map((_, i) => ({
      id: i + 1,
      location: i % 2 === 0 ? "Berlin, Germany" : "Dubrovnik, Croatia",
      countryCode: i % 2 === 0 ? "de" : "hr",
      postTime: `${(i % 3) + 1} day${(i % 3) + 1 > 1 ? "s" : ""} ago`,
      category:
        i % 3 === 0 ? "Full Time" : i % 3 === 1 ? "Part Time" : "Contract",
      primaryText:
        i % 2 === 0
          ? "Join a leading construction firm building infrastructure projects. Physically fit, basic skills required."
          : "Work in a luxury hotel as housekeeping or front-of-house staff. English skills a plus.",
      jobTitle: i % 2 === 0 ? "Construction Laborer" : "Hospitality Staff",
      salaryRange: i % 2 === 0 ? "$1300-$1500" : "$1100-$1300",
      description:
        i % 2 === 0
          ? "Join a leading construction firm building infrastructure projects. Physically fit, basic skills required. Previous experience in construction preferred but not mandatory."
          : "Work in a luxury hotel as housekeeping or front-of-house staff. English skills a plus. Customer service experience preferred.",
      facility: "Visa Assistance, Relocation Support, Language Support",
      experience:
        i % 3 === 0 ? "0-3 years" : i % 3 === 1 ? "3-5 years" : "5+ years",
      education:
        i % 3 === 0
          ? "High School"
          : i % 3 === 1
          ? "Bachelor's Degree"
          : "Master's Degree",
    }));

  // State for filters
  const [filters, setFilters] = useState({
    employmentType: [],
    experience: [],
    education: [],
  });

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 8;

  // State for mobile filter visibility
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Filter jobs based on selected filters
  const filteredJobs = allJobs.filter((job) => {
    // Employment type filter
    if (
      filters.employmentType.length > 0 &&
      !filters.employmentType.includes(job.category)
    ) {
      return false;
    }

    // Experience filter
    if (
      filters.experience.length > 0 &&
      !filters.experience.includes(job.experience)
    ) {
      return false;
    }

    // Education filter
    if (
      filters.education.length > 0 &&
      !filters.education.includes(job.education)
    ) {
      return false;
    }

    return true;
  });

  // Get current jobs for pagination
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => {
      const newFilters = { ...prev };
      if (newFilters[filterType].includes(value)) {
        newFilters[filterType] = newFilters[filterType].filter(
          (item) => item !== value
        );
      } else {
        newFilters[filterType] = [...newFilters[filterType], value];
      }
      return newFilters;
    });
    setCurrentPage(1); // Reset to first page when filters change
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      employmentType: [],
      experience: [],
      education: [],
    });
    setCurrentPage(1);
  };

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-8">
      {/* Search Bar */}
      <div className="bg-white rounded-xl shadow-lg p-2 md:p-4 mb-8">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-0">
          {/* Search Icon */}
          <div className="flex items-center pl-3 pr-2 text-gray-500">
            <FiSearch className="w-5 h-5" />
          </div>

          {/* Skill/Designation Input */}
          <div className="flex-1 w-full md:w-auto md:border-r border-gray-200">
            <input
              type="text"
              placeholder="Enter skills / Designation"
              className="w-full p-3 md:p-2 focus:outline-none text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Industry Dropdown */}
          <div className="w-full md:w-auto md:border-r border-gray-200">
            <div className="relative">
              <select
                className="w-full p-3 md:p-2 appearance-none focus:outline-none text-gray-700 bg-transparent pr-8"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Industry
                </option>
                <option value="it">Information Technology</option>
                <option value="finance">Finance</option>
                <option value="healthcare">Healthcare</option>
                <option value="education">Education</option>
                <option value="manufacturing">Manufacturing</option>
              </select>
              <FiBriefcase className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Country Dropdown */}
          <div className="w-full md:w-auto md:border-r border-gray-200">
            <div className="relative">
              <select
                className="w-full p-3 md:p-2 appearance-none focus:outline-none text-gray-700 bg-transparent pr-8"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Country
                </option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
                <option value="au">Australia</option>
                <option value="in">India</option>
              </select>
              <FiGlobe className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Search Button */}
          <button className="w-full md:w-auto bg-primary hover:bg-primary-dark text-white font-medium py-3 md:py-2 px-6 rounded-lg md:rounded-r-lg transition duration-300">
            Search
          </button>
        </div>
      </div>

      {/* Mobile Filter Button */}
      <button
        onClick={() => setShowMobileFilters(true)}
        className="md:hidden flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2 mb-4 shadow-sm"
      >
        <FiFilter /> Filters
      </button>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters - Left Side (Sticky) */}
        <div
          className={`${
            showMobileFilters ? "block" : "hidden"
          } md:block w-full md:w-64 bg-white p-4 rounded-lg shadow-md h-fit md:sticky top-4`}
        >
          {/* Mobile filter header */}
          <div className="md:hidden flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg">Filters</h3>
            <button onClick={() => setShowMobileFilters(false)}>
              <FiX className="w-5 h-5" />
            </button>
          </div>

          {/* Reset Button */}
          <button
            onClick={resetFilters}
            className="w-full text-primary font-medium mb-4 text-left"
          >
            Reset All Filters
          </button>

          {/* Employment Type Filter */}
          <div className="mb-6">
            <h4 className="font-semibold mb-3">Employment Type</h4>
            <div className="space-y-2">
              {["Full Time", "Part Time", "Contract"].map((type) => (
                <label key={type} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={filters.employmentType.includes(type)}
                    onChange={() => handleFilterChange("employmentType", type)}
                    className="rounded text-primary focus:ring-primary"
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Experience Level Filter */}
          <div className="mb-6">
            <h4 className="font-semibold mb-3">Experience Level</h4>
            <div className="space-y-2">
              {["0-3 years", "3-5 years", "5+ years"].map((level) => (
                <label key={level} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={filters.experience.includes(level)}
                    onChange={() => handleFilterChange("experience", level)}
                    className="rounded text-primary focus:ring-primary"
                  />
                  <span>{level}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Education Level Filter */}
          <div className="mb-6">
            <h4 className="font-semibold mb-3">Education Level</h4>
            <div className="space-y-2">
              {["High School", "Bachelor's Degree", "Master's Degree"].map(
                (edu) => (
                  <label key={edu} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={filters.education.includes(edu)}
                      onChange={() => handleFilterChange("education", edu)}
                      className="rounded text-primary focus:ring-primary"
                    />
                    <span>{edu}</span>
                  </label>
                )
              )}
            </div>
          </div>
        </div>

        {/* Job Listings - Right Side */}
        <div className="flex-1">
          {/* Results Header */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">Search Results</h3>
              <p className="text-gray-600">{filteredJobs.length} jobs found</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Sort by:</span>
              <select className="border border-gray-200 rounded-md px-3 py-1 focus:outline-none">
                <option>Most Recent</option>
                <option>Highest Salary</option>
                <option>Most Relevant</option>
              </select>
            </div>
          </div>

          {/* Job Cards */}
          <div className="grid grid-cols-1 gap-6">
            {currentJobs.length > 0 ? (
              currentJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center">
                        {/* Country Flag */}
                        <CountryFlag countryCode={job.countryCode} />

                        <div>
                          <h3 className="font-bold text-xl mb-1">
                            {job.jobTitle}
                          </h3>
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
              ))
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <p className="text-gray-600">
                  No jobs found matching your filters
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-4 text-primary font-medium"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

          {/* Pagination */}
          {filteredJobs.length > jobsPerPage && (
            <div className="flex justify-center mt-8">
              <nav className="inline-flex rounded-md shadow">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                >
                  <FiChevronLeft className="w-5 h-5" />
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-4 py-2 border-t border-b border-gray-300 ${
                      currentPage === i + 1
                        ? "bg-primary text-white"
                        : "bg-white text-gray-500 hover:bg-gray-50"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                >
                  <FiChevronRight className="w-5 h-5" />
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AllJobs;
