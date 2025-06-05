import React from "react";
import { FaBook, FaTools, FaClipboardCheck } from "react-icons/fa";

const TrainingApproach = () => {
  return (
    <section className="py-16 px-4 max-w-screen-xl mx-auto ">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our <span className="text-primary">Training Approach</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A comprehensive learning methodology that combines theory, practice,
          and evaluation
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
          <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <FaBook className="text-blue-600 text-2xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Theoretical Learning
          </h3>
          <p className="text-gray-600">
            Brief theoretical sessions on welding basics and safety protocols to
            support your practical training.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
          <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <FaTools className="text-orange-600 text-2xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Practical Training
          </h3>
          <p className="text-gray-600">
            Hands-on MIG/TIG welding at Smart Recruit with tools, projects, and
            expert guidance.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
          <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <FaClipboardCheck className="text-green-600 text-2xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Assessment
          </h3>
          <p className="text-gray-600">
            Practical assessments after each module with quality checks, safety
            demos, and expert feedback.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrainingApproach;
