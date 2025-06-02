import React from "react";

const OurProcess = () => {
  const processes = [
    {
      year: "2020",
      title: "Foundation Laid",
      description:
        "Smart Recruit was born with a vision to empower South Asian workers through global opportunities.",
    },
    {
      year: "2021",
      title: "First Connections",
      description:
        "We forged partnerships with agencies in Nepal and Bangladesh, placing 100 workers in Croatia and Romania.",
    },
    {
      year: "2022",
      title: "Expanding Horizons",
      description:
        "Our bridge extended to India, with 500 workers placed in hospitality and logistics roles across Europe.",
    },
    {
      year: "2023",
      title: "Strengthening Bonds",
      description:
        "We introduced online language training, achieving a 98% visa approval rate and placing 2,000 workers in Malta, Portugal, and Germany.",
    },
    {
      year: "2024",
      title: "A Milestone Crossed",
      description:
        "We celebrated 5,000 successful placements, with a turnover of €10 million and a growing team of 15 specialists.",
    },
    {
      year: "2025",
      title: "A Global Impact",
      description:
        "Serving over 10,000 workers, we’re now a trusted name in recruitment, with an ever-growing network of European employers.",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto py-8 md:py-16 px-4 sm:px-6">
      <div className="space-y-4 mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-center mb-5 text-gray-800">
          The Bridge of <span className="text-primary">Opportunity</span>
        </h2>
        <p className="text-sm text-gray-600 font-poppins max-w-3xl text-center mx-auto">
          Our journey is a bridge we’ve built, connecting talent to opportunity,
          year by year. Each segment of this bridge represents a milestone in
          our mission to change lives.
        </p>
      </div>

      <div className="relative">
        {/* Vertical dashed line - hidden on mobile */}
        <div className="hidden md:block absolute left-1/2 h-full border-l-2 border-dashed border-gray-300 transform -translate-x-1/2"></div>

        {/* Mobile-only connecting line */}
        <div className="md:hidden absolute left-4 top-0 h-full border-l-2 border-dashed border-gray-300 transform -translate-x-1/2"></div>

        {processes.map((process, index) => (
          <div
            key={index}
            className="relative mb-8 md:mb-12 pl-8 md:pl-0 flex flex-col md:flex-row"
          >
            {/* Mobile circle indicator */}
            <div className="md:hidden absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-dashed border-gray-400 bg-white z-10 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
            </div>

            {/* Desktop layout (alternating sides) */}
            <div
              className={`md:w-5/12 ${
                index % 2 === 0
                  ? "md:pr-8 md:text-right"
                  : "md:pl-8 md:ml-auto md:text-left"
              }`}
            >
              {/* Year */}
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                {process.year}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                {process.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {process.description}
              </p>
            </div>

            {/* Desktop circle indicator */}
            <div
              className={`hidden md:block absolute left-1/2 top-1/2 ${
                index % 2 === 0 ? "-ml-6" : "-mr-6"
              } transform -translate-y-1/2 -translate-x-1/2`}
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-dashed border-gray-400 bg-white flex items-center justify-center">
                <div className="w-3 h-3 sm:w-4 rounded-full bg-primary"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProcess;
