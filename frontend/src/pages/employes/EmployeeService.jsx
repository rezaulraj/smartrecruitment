import React from "react";
import service1 from "../../assets/image/home/service1.png?url";
import service2 from "../../assets/image/home/service2.png?url";
import service3 from "../../assets/image/home/service3.png?url";
const EmployeeService = () => {
  return (
    <section className="max-w-screen-xl mx-auto">
      {/* Hero Section */}
      <section className="py-8 md:pt-10">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl max-w-xl mx-auto font-bold mb-6 font-poppins">
              How We Help Employers
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We provide end-to-end solutions to meet your staffing needs,
              ensuring your business thrives.
            </p>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Service 1 - Image Right */}
        <section className="mb-28 md:mb-36">
          <div className="flex flex-col md:flex-row items-center gap-12 relative">
            <div className="md:w-1/2 relative z-50">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Recruitment
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Source skilled workers from third countries like Nepal,
                Bangladesh, India, and the Philippines, or from Europe for
                faster recruitment. Source skilled workers from third countries
                like Nepal, Bangladesh, India, and the Philippines, or from
                Europe for faster recruitment.
              </p>
            </div>
            <div className="md:w-1/2 relative z-50">
              <img
                src={service1}
                alt="Global recruitment services"
                className="rounded-xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 w-24 h-24 rounded-full z-0 hidden md:block"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#e4d7da24] via-[#FF477724] to-[#FF8A5B24] rounded-full opacity-70 blur-[30px] md:blur-[60px]"></div>
          </div>
        </section>

        {/* Service 2 - Image Left */}
        <section className="mb-28 md:mb-36">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 relative">
            <div className="md:w-1/2 relative z-50">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Temporary Staffing
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Access flexible staffing solutions with our temporary workforce
                for seasonal or project-based needs.Access flexible staffing
                solutions with our temporary workforce for seasonal or
                project-based needs.
              </p>
            </div>
            <div className="md:w-1/2 relative z-50">
              <img
                src={service2 && service2}
                alt="Temporary staffing solutions"
                className="rounded-xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute -top-6 -left-6 bg-pink-400 w-24 h-24 rounded-full z-0 hidden md:block"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#e4d7da24] via-[#FF477724] to-[#FF8A5B24] rounded-full opacity-70 blur-[30px] md:blur-[60px]"></div>
          </div>
        </section>

        {/* Service 3 - Image Right */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center gap-12 relative">
            <div className="md:w-1/2 relative z-50">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                On-Spot Recruiting Fairs
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Join our recruiting fairs in Qatar, Dubai, Saudi Arabia, and the
                Philippines to interview and hire workers on the spot.Join our
                recruiting fairs in Qatar, Dubai, Saudi Arabia, and the
                Philippines to interview and hire workers on the spot.
              </p>
            </div>
            <div className="md:w-1/2 relative z-50">
              <img
                src={service3}
                alt="Recruitment fair events"
                className="rounded-xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-dark w-24 h-24 rounded-full z-0 hidden md:block"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#e4d7da24] via-[#FF477724] to-[#FF8A5B24] rounded-full opacity-70 blur-[30px] md:blur-[60px]"></div>
          </div>
        </section>

        {/* CTA Section */}
        <section className=" p-8 md:p-12 text-center text-white">
          <button
            className="mt-8 border-2 border-primary-dark
               relative z-50 font-poppins text-primary-dark px-6 py-3 rounded-full font-medium shadow-lg cursor-pointer"
          >
            View More
          </button>
        </section>
      </div>
    </section>
  );
};

export default EmployeeService;
