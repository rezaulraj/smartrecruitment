import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
const HeroSkillAndTraining = () => {
  return (
    <section className="relative bg-gray-900 py-18 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary-dark/30"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]"></div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 text-primary mb-4">
              <span className="h-[2px] w-8 bg-primary"></span>
              <span className="text-sm font-medium tracking-wider uppercase">
                Skill & Language Training
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              European Career
              <span className="text-primary ml-2">Training</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
              Gain the skills and language needed for a successful career in
              Europe. Train for jobs in construction, healthcare, hospitality,
              and more.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Skill Training
              </button>
            </div>
          </div>

          {/* Breadcrumb - positioned differently for mobile/desktop */}
          <div className="lg:absolute lg:top-8 lg:right-8 flex items-center justify-center lg:justify-end text-sm text-gray-300">
            <div className="inline-flex items-center space-x-2 bg-gray-800 bg-opacity-70 px-4 py-2 rounded-full">
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <FaChevronRight className="text-xs" />
              <span className="text-primary font-medium">
                Skill & Language Training
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
    </section>
  );
};

export default HeroSkillAndTraining;
