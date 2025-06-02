import React from "react";
import partner1 from "../../assets/image/partner/part1.png?url";
import partner2 from "../../assets/image/partner/part2.png?url";
import partner3 from "../../assets/image/partner/part3.png?url";
import partner4 from "../../assets/image/partner/part4.png?url";
import partner5 from "../../assets/image/partner/part5.png?url";
import partner6 from "../../assets/image/partner/part6.png?url";
import partner7 from "../../assets/image/partner/part7.png?url";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
const PartnerProcess = () => {
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
    <div className="max-w-screen-xl mx-auto my-10">
      <div className="text-center mb-12 max-w-xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900">
          Steps to partner with Smart Recruit
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          A simple and transparent process to collaborate and succeed together.
        </p>
      </div>
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

            {index < partner.length - 1 && (
              <div className="flex items-center justify-center w-8">
                <FiArrowRight className="text-primary text-xl md:text-2xl border border-primary p-1 rounded-full " />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default PartnerProcess;
