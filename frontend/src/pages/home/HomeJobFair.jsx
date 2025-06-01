import React from "react";
import jobfair from "../../assets/image/home/jobfair.png";
const HomeJobFair = () => {
  return (
    <section className="py-10 max-w-screen-xl mx-auto p-4">
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40"></div>
      <div className="relative z-10 gap-5 items-center lg:flex">
        <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
          <h3 className="text-3xl text-black max-w-lg font-bold font-poppins md:text-4xl">
            Job Fair Seminar for Europe Jobs – Gulf Edition
          </h3>
          <p className="text-gray-600 font-poppins leading-relaxed mt-3">
            We hosted a successful Job Fair Seminar in the Gulf, guiding job
            seekers with real insights, honest advice, and direct applications
            for Europe jobs. No false promises—just the truth and opportunities!
          </p>
          <button
            className="mt-5 px-4 py-2 text-white font-poppins font-medium bg-gradient-to-r from-primary to-primary-dark shadow-lg cursor-pointer rounded-full inline-flex items-center"
            href="javascript:void()"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-1 duration-150"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
        <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
          <img src={jobfair} alt="Job Fair" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default HomeJobFair;
