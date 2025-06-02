import React from "react";

const HeroJob = () => {
  return (
    <section className="relative overflow-hidden max-w-screen-xl mx-auto">
      {/* Background gradient layers */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F9F5FF] via-[#F0E6FF] to-[#E8F4FF] opacity-90"></div>

        {/* Floating gradient circles */}
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-r from-[#EEDAE5] to-[#FFE8F2] opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-r from-[#D6E4FF] to-[#E0EAFF] opacity-40 blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-[#FFEEF6] to-[#FFF0F5] opacity-50 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-10 md:py-12 lg:px-8">
        <article className="text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Find Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mx-2">
                Next job
              </span>
              in Europe
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Discover rewarding career opportunities across Europe in
              construction, healthcare, hospitality, and more.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3.5 text-lg font-medium bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Browse Jobs
              </button>
              <button className="px-8 py-3.5 text-lg font-medium bg-white text-gray-800 border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Stats or badges can go here */}
          <div className="mt-16 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-100">
              <span className="h-3 w-3 bg-green-500 rounded-full"></span>
              <span className="text-sm font-medium text-gray-700">
                200+ Jobs Posted
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-100">
              <span className="h-3 w-3 bg-blue-500 rounded-full"></span>
              <span className="text-sm font-medium text-gray-700">
                100+ Companies
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-100">
              <span className="h-3 w-3 bg-purple-500 rounded-full"></span>
              <span className="text-sm font-medium text-gray-700">
                5000+ Candidates
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default HeroJob;
