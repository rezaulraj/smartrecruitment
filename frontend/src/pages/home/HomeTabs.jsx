import React, { useState } from "react";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import work1 from "../../assets/image/work/work1.png";
import work2 from "../../assets/image/work/work2.png";
import work3 from "../../assets/image/work/work3.png";
import work4 from "../../assets/image/work/work4.png";
import work5 from "../../assets/image/work/work5.png";
import work6 from "../../assets/image/work/work6.png";
import work7 from "../../assets/image/work/work7.png";

import employee1 from "../../assets/image/employee/step1.png";
import employee2 from "../../assets/image/employee/step2.png";
import employee3 from "../../assets/image/employee/step3.png";
import employee4 from "../../assets/image/employee/step4.png";
import employee5 from "../../assets/image/employee/step5.png";
import employee6 from "../../assets/image/employee/step6.png";

import partner1 from "../../assets/image/partner/part1.png";
import partner2 from "../../assets/image/partner/part2.png";
import partner3 from "../../assets/image/partner/part3.png";
import partner4 from "../../assets/image/partner/part4.png";
import partner5 from "../../assets/image/partner/part5.png";
import partner6 from "../../assets/image/partner/part6.png";
import partner7 from "../../assets/image/partner/part7.png";
const HomeTabs = () => {
  const [activeTab, setActiveTab] = useState("worker");

  const tabs = [
    { id: "employee", label: "For Employers" },
    { id: "worker", label: "For Workers" },
    { id: "partner", label: "For Partners" },
  ];

  const worker = [
    {
      id: 1,
      title: "Submit Details",
      description:
        "Fill out a short form with your basic information. Our team will contact you to guide you through the next steps.",
      image: work1,
    },
    {
      id: 2,
      title: "Counseling",
      description:
        "Join a friendly session with our team to understand job options, requirements, and how we can help you work abroad.",
      image: work2,
    },
    {
      id: 3,
      title: "Submit CV",
      description:
        "Share your updated CV with us. We’ll review it and prepare it for the companies looking for your skills.",
      image: work3,
    },
    {
      id: 4,
      title: "Company",
      description:
        "We’ll match you with job openings from trusted European employers that fit your qualifications.",
      image: work4,
    },
    {
      id: 5,
      title: "Work Permit",
      description:
        "Once selected, we’ll work with the employer to secure your work permit, so you're officially ready to start the process.",
      image: work5,
    },
    {
      id: 6,
      title: "Visa Submit",
      description:
        "After getting your permit, we’ll help you submit the right documents to the embassy or visa center for approval.",
      image: work6,
    },
    {
      id: 7,
      title: "Flight",
      description:
        "Once your visa is approved, we’ll assist with booking your flight and make sure you’re welcomed upon arrival.",
      image: work7,
    },
  ];

  const employee = [
    {
      id: 1,
      title: "Request",
      description:
        "Submit your staffing needs through our form, specifying roles, skills, and timelines.",
      image: employee1,
    },
    {
      id: 2,
      title: "Source",
      description:
        "We source skilled workers from our global talent pool, matching them to your requirements.",
      image: employee2,
    },
    {
      id: 3,
      title: "Select",
      description:
        "We provide their resumes and working videos, and arrange an interview session for you to ask technical questions.",
      image: employee3,
    },
    {
      id: 4,
      title: "Hire",
      description:
        "After hiring, we assist with work permits, appointments, visas, migration, and accommodation.",
      image: employee4,
    },
    {
      id: 5,
      title: "Travel",
      description:
        "We guide workers in booking their flights and ensure all travel logistics are handled smoothly for a timely arrival.",
      image: employee5,
    },
    {
      id: 6,
      title: "Support",
      description:
        "Our team provides ongoing support, from airport pickups to workplace integration, ensuring a smooth transition.",
      image: employee6,
    },
  ];

  const partner = [
    {
      id: 1,
      title: "Submit Details",
      description:
        "Complete the form below, and our team will contact you to explore collaboration opportunities.",
      image: partner1,
    },
    {
      id: 2,
      title: "Negotiation",
      description:
        "Join us for a meeting to discuss partnership terms, expectations, and mutual goals.",
      image: partner2,
    },
    {
      id: 3,
      title: "Finalize",
      description:
        "Formalize our partnership with a clear agreement outlining roles and responsibilities.",
      image: partner3,
    },
    {
      id: 4,
      title: "Job Demand",
      description:
        "We’ll share job demands from European employers, tailored to your workers’ skills.",
      image: partner4,
    },
    {
      id: 5,
      title: "Recruit Talent",
      description:
        "Recruit skilled workers based on the demands, and we’ll coordinate with employers for selection.",
      image: partner5,
    },
    {
      id: 6,
      title: "Visa Submit",
      description:
        "Once permits are issued, submit the required documents to the embassy or VFS, and we’ll follow up with the employer upon visa approval.",
      image: partner6,
    },
    {
      id: 7,
      title: "Flight",
      description:
        "After visa approval, we’ll help book flights and receive workers at the airport.",
      image: partner7,
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900">
          How We Work
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the perfect solution tailored to your needs
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-primary to-primary-dark"
                : " text-gray-700 border-2 border-gray-200 hover:border-primary/30"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-primary rounded-full"></div>
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className=" rounded-2xl overflow-hidden">
        {activeTab === "employee" && (
          <div className="py-8 ">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 lg:gap-6">
              {employee.map((step, index) => (
                <React.Fragment key={step.id}>
                  <div
                    className={`bg-white p-2 rounded-lg shadow-md w-[calc(35%-.5rem)] md:w-[calc(25%-1.5rem)] lg:w-[calc(20%-2rem)] ${
                      step.id === 6 ? "border-2 border-green-400" : ""
                    }`}
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-44 object-cover rounded mb-3"
                    />
                    <h3 className="font-bold text-lg mb-1 text-center font-poppins">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm font-poppins text-justify">
                      {step.description}
                    </p>
                    {step.id === 6 && (
                      <div className="mt-2 flex justify-center">
                        <FiCheckCircle className="text-green-500 text-xl " />
                      </div>
                    )}
                  </div>

                  {index < employee.length - 1 && (
                    <div className="flex items-center justify-center w-8">
                      <FiArrowRight className="text-primary text-xl md:text-2xl border border-primary p-1 rounded-full " />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {activeTab === "worker" && (
          <div className="py-8 ">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 lg:gap-6">
              {worker.map((step, index) => (
                <React.Fragment key={step.id}>
                  <div
                    className={`bg-white p-2 rounded-lg shadow-md w-[calc(35%-.5rem)] md:w-[calc(25%-1.5rem)] lg:w-[calc(20%-2rem)] ${
                      step.id === 7 ? "border-2 border-green-400" : ""
                    }`}
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-44 object-cover rounded mb-3"
                    />
                    <h3 className="font-bold text-lg mb-1 text-center font-poppins">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm font-poppins text-justify">
                      {step.description}
                    </p>
                    {step.id === 7 && (
                      <div className="mt-2 flex justify-center">
                        <FiCheckCircle className="text-green-500 text-xl " />
                      </div>
                    )}
                  </div>

                  {index < worker.length - 1 && (
                    <div className="flex items-center justify-center w-8">
                      <FiArrowRight className="text-primary text-xl md:text-2xl border border-primary p-1 rounded-full " />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {activeTab === "partner" && (
          <div className="py-8 ">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 lg:gap-6">
              {partner.map((step, index) => (
                <React.Fragment key={step.id}>
                  <div
                    className={`bg-white p-2 rounded-lg shadow-md w-[calc(35%-.5rem)] md:w-[calc(25%-1.5rem)] lg:w-[calc(20%-2rem)] ${
                      step.id === 7 ? "border-2 border-green-400" : ""
                    }`}
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-44 object-cover rounded mb-3"
                    />
                    <h3 className="font-bold text-lg mb-1 text-center font-poppins">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm font-poppins text-justify">
                      {step.description}
                    </p>
                    {step.id === 7 && (
                      <div className="mt-2 flex justify-center">
                        <FiCheckCircle className="text-green-500 text-xl " />
                      </div>
                    )}
                  </div>

                  {index < worker.length - 1 && (
                    <div className="flex items-center justify-center w-8">
                      <FiArrowRight className="text-primary text-xl md:text-2xl border border-primary p-1 rounded-full " />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeTabs;
