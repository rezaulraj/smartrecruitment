import React from "react";
import service1 from "../../assets/image/home/service1.png";
import service2 from "../../assets/image/home/service2.png";
import service3 from "../../assets/image/home/service3.png";

const HomeService = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      {/* Hero Section */}
      <section className="py-8 md:pt-10">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl max-w-xl mx-auto font-bold mb-6 font-poppins">
              Your Success Starts with Our All-Inclusive Services
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We specialize in connecting businesses with top-tier talent across
              multiple countries, offering comprehensive staffing solutions
              tailored to your needs.
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
                Global Recruitment
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We source skilled professionals from Nepal, Bangladesh, India,
                the Philippines, and European countries. Our extensive network
                ensures access to qualified candidates for various industries.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Comprehensive candidate screening
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Multi-country talent pool
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Fast-track recruitment process
                  </span>
                </li>
              </ul>
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
                Flexible Staffing
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our temporary staffing solutions provide qualified workers for
                seasonal peaks, special projects, or unexpected staffing
                shortages, giving you workforce flexibility.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-pink-400">
                <p className="text-blue-800 italic">
                  "Companies using flexible staffing report 30% better
                  adaptation to market fluctuations."
                </p>
              </div>
            </div>
            <div className="md:w-1/2 relative z-50">
              <img
                src={service2}
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
                Recruitment Fairs
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Participate in our exclusive recruiting events across Qatar,
                Dubai, Saudi Arabia, and the Philippines to meet, interview, and
                hire pre-screened candidates face-to-face.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-primary-dark mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Direct candidate interaction
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-primary-dark mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">On-the-spot hiring</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-primary-dark mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Regional expertise</span>
                </li>
              </ul>
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
            Learn More
          </button>
        </section>
      </div>
    </div>
  );
};

export default HomeService;
