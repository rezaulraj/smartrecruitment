import React from "react";
import { FaCalendar, FaPlaneDeparture } from "react-icons/fa";
import { RiFocus3Fill } from "react-icons/ri";
import { GiTrophyCup } from "react-icons/gi";

const SuccessTips = () => {
  const tips = [
    {
      icon: <FaCalendar className="text-3xl" />,
      title: "Consistent Practice",
      description: "Dedicate 30 minutes daily to your training",
      color: "text-blue-500",
    },
    {
      icon: <RiFocus3Fill className="text-3xl" />,
      title: "Set Clear Goals",
      description: "Set career goals and track progress",
      color: "text-purple-500",
    },
    {
      icon: <GiTrophyCup className="text-3xl" />,
      title: "Stay Motivated",
      description: "Celebrate small wins along your journey",
      color: "text-amber-500",
    },
    {
      icon: <FaPlaneDeparture className="text-3xl" />,
      title: "Apply Learning",
      description: "Practice skills in real-world scenarios",
      color: "text-emerald-500",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Tips for <span className="text-primary">Success</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Practical advice to help you make the most of your training journey
        </p>
        <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-transparent group relative overflow-hidden"
          >
            {/* Decorative element */}
            <div
              className={`absolute top-0 left-0 w-full h-1 ${tip.color.replace(
                "text",
                "bg"
              )}`}
            ></div>

            <div className="flex flex-col items-start h-full">
              <div
                className={`p-3 mb-5 rounded-lg ${tip.color.replace(
                  "text",
                  "bg"
                )}/10 ${
                  tip.color
                } group-hover:bg-opacity-20 transition-all duration-300`}
              >
                {tip.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {tip.title}
              </h3>
              <p className="text-gray-600">{tip.description}</p>
              <div className="mt-6 w-full border-t border-gray-100 pt-4 group-hover:border-primary/30 transition-colors duration-300">
                <span className={`${tip.color} font-medium flex items-center`}>
                  Learn more
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessTips;
