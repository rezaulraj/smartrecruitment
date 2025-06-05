import React from "react";
import heroImage from "../../assets/image/skilltrain/welding.png?url";
import { FaArrowRight } from "react-icons/fa";

const HeroSkillDetails = () => {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        background: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gray-900/50 z-10"></div>

      <img
        src={heroImage}
        alt="Welding training"
        className="absolute inset-0 w-full h-[60vh] object-cover z-0"
      />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl text-center mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Welding Training:{" "}
            <span className="text-primary">Hands-On Skills</span> for Industrial
            Jobs in Europe
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join our 80-hour hands-on welding program and gain the practical
            skills needed for high-demand industrial jobs across Europe.
          </p>

          <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-md shadow-lg transition-all duration-300 inline-flex items-center gap-2">
            Enroll Now <FaArrowRight className="animate-pulse" />
          </button>
        </div>

        <div className="mt-20 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <p className="text-3xl font-bold text-primary">80+</p>
              <p className="text-gray-200">Hours Training</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-primary">95%</p>
              <p className="text-gray-200">Placement Rate</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-primary">100%</p>
              <p className="text-gray-200">Practical Skills</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold text-primary">EU</p>
              <p className="text-gray-200">Certified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSkillDetails;
