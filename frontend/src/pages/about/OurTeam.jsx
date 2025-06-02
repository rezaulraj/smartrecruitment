import React from "react";
import ceoimg from "../../assets/image/aboutus/team1.png";
import cooimg from "../../assets/image/aboutus/team2.png";
import { FaLinkedin, FaQuoteLeft } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import re1 from "../../assets/image/aboutus/recuit/re1.png?url";
import re2 from "../../assets/image/aboutus/recuit/re2.png?url";
import re3 from "../../assets/image/aboutus/recuit/re3.png?url";
import re4 from "../../assets/image/aboutus/recuit/re4.png?url";
import re5 from "../../assets/image/aboutus/recuit/re5.png?url";
import re6 from "../../assets/image/aboutus/recuit/re6.png?url";

import sale1 from "../../assets/image/aboutus/recuit/sale1.png?url";
import sale2 from "../../assets/image/aboutus/recuit/sale2.png?url";
import sale3 from "../../assets/image/aboutus/recuit/sale3.png?url";
import sale4 from "../../assets/image/aboutus/recuit/sale4.png?url";
import sale5 from "../../assets/image/aboutus/recuit/sale5.png?url";
import sale6 from "../../assets/image/aboutus/recuit/sale6.png?url";

import info0 from "../../assets/image/aboutus/recuit/info0.png?url";
import info1 from "../../assets/image/aboutus/recuit/info1.png?url";
import info2 from "../../assets/image/aboutus/recuit/info2.png?url";

const OurTeam = () => {
  const teamMembers = [
    {
      category: "Founders",
      image: ceoimg,
      name: "Matheo Kovac",
      position: "CEO & Founder",
      quote:
        "I founded Smart Recruit to give every worker a chance at a better life—because I believe in the power of dreams.",
      bio: "With 15 years in recruitment, Matheo leads our mission with heart and vision, transforming the industry through innovative approaches to talent matching.",
    },
    {
      category: "People Operations",
      image: cooimg,
      name: "Marina Radic",
      position: "COO",
      quote:
        "People operations isn't just about processes—it's about creating environments where both employees and businesses thrive together.",
      bio: "Marina brings 12 years of HR leadership experience, specializing in creating human-centric workplace systems that scale.",
    },
  ];

  const recruitmentTeam = [
    {
      image: re1,
      name: "Tareeq Mahmud",
      position: "Head of Recruitment",
      linkedin: "#",
      email: "#",
    },
    {
      image: re2,
      name: "Ana Maria",
      position: "Recruitment Manager",
      linkedin: "#",
      email: "#",
    },
    {
      image: re3,
      name: "Andreea Cristina",
      position: "Senior Recruitmenter",
      linkedin: "#",
      email: "#",
    },
    {
      image: re4,
      name: "Vikram Mehta",
      position: "Talent Acquisition Specialist",
      linkedin: "#",
      email: "#",
    },
    {
      image: re5,
      name: "Aman Roy",
      position: "Recruitment Coordinator",
      linkedin: "#",
      email: "#",
    },
    {
      image: re6,
      name: "Priya Sharma",
      position: "Onboarding Officer",
      linkedin: "#",
      email: "#",
    },
  ];

  const salesTeam = [
    {
      image: sale1,
      name: "Daniel Azzopardi",
      position: "Head of Sales & Marketing",
      linkedin: "#",
      email: "#",
    },
    {
      image: sale2,
      name: "Mihaela Elena",
      position: "Marketing Manager",
      linkedin: "#",
      email: "#",
    },
    {
      image: sale3,
      name: "Diana Sorina",
      position: "Sales Manager",
      linkedin: "#",
      email: "#",
    },
    {
      image: sale4,
      name: "Siddharth Rao",
      position: "Regional Head (India)",
      linkedin: "#",
      email: "#",
    },
    {
      image: sale5,
      name: "Sandeep Dhakal",
      position: "Regional Head (Nepal)",
      linkedin: "#",
      email: "#",
    },
    {
      image: sale6,
      name: "Juan Miguel",
      position: "Regional Head (Philipines)",
      linkedin: "#",
      email: "#",
    },
  ];

  const infoTeam = [
    {
      image: info0,
      name: "Rahul Kumar",
      position: "Web developer",
      linkedin: "#",
      email: "#",
    },
    {
      image: info1,
      name: "Abhinav Reddy",
      position: "IT support",
      linkedin: "#",
      email: "#",
    },
    {
      image: info2,
      name: "Arjun Patel",
      position: "Graphics designer",
      linkedin: "#",
      email: "#",
    },
  ];
  return (
    <section className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our <span className="text-primary">Team</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Meet the passionate team behind Smart Recruit, dedicated to connecting
          workers to their dreams and making a real impact.
        </p>
      </div>

      {/* Team Members */}
      <div className="space-y-20">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12"
          >
            {/* Profile Card */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
              <div className="relative bg-white/30 rounded-xl shadow-md overflow-hidden h-full">
                <div className="px-6 pt-6">
                  <span className="inline-block px-3 py-1 text-xs font-semibold font-poppins text-primary bg-blue-50 rounded-full mb-4">
                    {member.category}
                  </span>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                </div>
                <div className="px-6 pb-6">
                  <div className="border-b border-gray-100 pb-4 mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 font-poppins">
                      {member.name}
                    </h3>
                    <span className="border-b border-primary" />
                    <p className="text-gray-400 font-poppins">
                      {member.position}
                    </p>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-primary hover:text-blue-600 transition-colors"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="text-primary hover:text-blue-600 transition-colors"
                    >
                      <FiMail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote & Bio */}
            <div className="lg:col-span-2 flex flex-col justify-center">
              <div className="relative pl-10">
                <FaQuoteLeft className="absolute left-0 top-0 text-3xl text-primary" />
                <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 mb-8 leading-relaxed font-poppins">
                  {member.quote}
                </blockquote>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed font-poppins">
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Recuitment Team */}

      <div className="mt-20">
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins">
            Our <span className="text-primary">Recruitment</span> Experts
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recruitmentTeam.map((member, index) => (
            <div key={index} className="group relative">
              {/* Hover gradient effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>

              <div className="relative h-full bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 group-hover:shadow-md">
                {/* Team member image */}
                <div className="h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Team member info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 font-poppins mb-1">
                    {member.name}
                  </h3>
                  <div className="w-12 h-0.5 bg-primary mb-3"></div>
                  <p className="text-gray-500 font-poppins mb-4">
                    {member.position}
                  </p>

                  {/* Social links */}
                  <div className="flex space-x-4">
                    <a
                      href={member.linkedin}
                      className="text-primary hover:text-primary transition-colors"
                      aria-label={`Connect with ${member.name} on LinkedIn`}
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-primary hover:text-primary transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <FiMail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sales Team */}

      <div className="mt-20">
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins">
            Sales & Marketing Experts
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {salesTeam.map((member, index) => (
            <div key={index} className="group relative">
              {/* Hover gradient effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>

              <div className="relative h-full bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 group-hover:shadow-md">
                {/* Team member image */}
                <div className="h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Team member info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 font-poppins mb-1">
                    {member.name}
                  </h3>
                  <div className="w-12 h-0.5 bg-primary mb-3"></div>
                  <p className="text-gray-500 font-poppins mb-4">
                    {member.position}
                  </p>

                  {/* Social links */}
                  <div className="flex space-x-4">
                    <a
                      href={member.linkedin}
                      className="text-primary hover:text-primary transition-colors"
                      aria-label={`Connect with ${member.name} on LinkedIn`}
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-primary hover:text-primary transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <FiMail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Information tachnology */}
      <div className="mt-20">
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins">
            Information Technology
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {infoTeam.map((member, index) => (
            <div key={index} className="group relative">
              {/* Hover gradient effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>

              <div className="relative h-full bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 group-hover:shadow-md">
                {/* Team member image */}
                <div className="h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Team member info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 font-poppins mb-1">
                    {member.name}
                  </h3>
                  <div className="w-12 h-0.5 bg-primary mb-3"></div>
                  <p className="text-gray-500 font-poppins mb-4">
                    {member.position}
                  </p>

                  {/* Social links */}
                  <div className="flex space-x-4">
                    <a
                      href={member.linkedin}
                      className="text-primary hover:text-primary transition-colors"
                      aria-label={`Connect with ${member.name} on LinkedIn`}
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-primary hover:text-primary transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <FiMail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
