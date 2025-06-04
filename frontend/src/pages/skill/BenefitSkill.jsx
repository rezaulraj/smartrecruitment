import React from "react";
import { FaStar } from "react-icons/fa6";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";

const BenefitSkill = () => {
  const benefits = [
    {
      icon: <FaStar className="text-3xl" />,
      title: "Stand Out to Employers",
      description:
        "Many European employers value candidates with basic language skills, even if they're not fluent.",
    },
    {
      icon: <BiSolidMessageRoundedDots className="text-3xl" />,
      title: "Better Communication",
      description:
        "Basic language skills help you communicate effectively in everyday work situations.",
    },
    {
      icon: <FaLocationDot className="text-3xl" />,
      title: "Cultural Adaptation",
      description:
        "Language learning helps you adapt faster to your new work environment and culture.",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-6 py-16 md:py-20">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Benefits That <span className="text-primary">Travel With You</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/20 group"
          >
            <div className="flex flex-col items-start h-full">
              <div className="p-3 mb-5 rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mb-4">{benefit.description}</p>
              <div className="mt-auto w-full border-t border-gray-100 pt-4 group-hover:border-primary/30 transition-colors duration-300">
                <span className="text-primary font-medium">Learn more →</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitSkill;
