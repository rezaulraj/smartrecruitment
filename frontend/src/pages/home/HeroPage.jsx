import React from "react";
import parson from "../../assets/image/parson1.png?url";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
const HeroPage = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-8 md:my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
        {/* Text Content */}
        <article className="relative flex flex-col items-center md:items-start justify-center order-2 md:order-1 space-y-4">
          {/* Gradient background - mobile optimized */}
          <div className="absolute w-full h-3/4 -top-10 left-0 md:w-6/12 md:h-full md:-left-20 rounded-full bg-gradient-to-r from-[#EEDAE5F0]/30 via-[#FFE8F2]/20 to-transparent blur-xl"></div>

          <h1 className="text-3xl md:text-5xl text-center md:text-left text-black font-bold font-poppins relative z-50">
            The Future of
            <span className="block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
                Recruitment
              </span>
              <span> Is Here.</span>
            </span>
          </h1>

          <p className="text-gray-700 text-lg font-medium font-poppins relative z-50">
            With deep expertise and scalable solutions, we redefine recruitment.
            Our smart technology anticipates trends, while strategic insights
            keep clients ahead in talent e.
          </p>

          {/* Mobile-only CTA button */}
          <button className="mt-8 bg-gradient-to-r relative z-50 from-primary to-primary-dark font-poppins text-white px-6 py-3 rounded-full font-medium shadow-lg cursor-pointer">
            Browse Job
          </button>
        </article>

        {/* Image Content */}
        <figure className="relative order-1 md:order-2">
          {/* Multi-layer gradients for depth - mobile optimized */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#e4d7da24] via-[#FF477724] to-[#FF8A5B24] rounded-full opacity-70 blur-[30px] md:blur-[60px]"></div>

          <div className="flex justify-center">
            <img
              src={parson}
              alt="Recruitment professional"
              className="h-96 relative z-40 drop-shadow-2xl"
            />
          </div>

          {/* Flag icon - position adjusted for mobile */}
          <img
            src="https://flagcdn.com/w80/in.png"
            alt="India Flag"
            className="w-6 h-6 md:w-8 md:h-8 rounded-full object-cover absolute top-8 md:top-5 left-15 md:left-auto z-[9999] border-2 border-white shadow-md"
          />

          {/* Testimonial - fully responsive */}
          <div className="bg-white absolute bottom-0 left-0 right-0 mx-auto md:left-auto md:right-auto z-50 rounded-md shadow-xl w-full md:w-auto max-w-[500px]">
            <div className="flex md:flex-row items-stretch">
              <span
                className="bg-gradient-to-r from-primary-dark to-primary text-white px-4 py-3 md:py-2 italic font-medium text-sm md:text-base"
                style={{
                  clipPath: "polygon(0% 0%,100% 0%,92% 100%,0% 100%)",
                  WebkitClipPath: "polygon(0% 0%,100% 0%,92% 100%,0% 100%)",
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                  lineHeight: "1.4",
                  maxWidth: "260px",
                  borderTopLeftRadius: "8px",
                  borderBottomLeftRadius: "8px",
                }}
              >
                "Smart Recruit made my EU job dream come true!"
              </span>
              <div className="px-3 py-2 text-center md:text-left">
                <span className="text-sm md:text-xl font-bold font-poppins block bg-gradient-to-r from-primary to-primary-dark text-transparent bg-clip-text">
                  Gurpreet Singh
                </span>
                <span className="text-gray-600 text-sm">Welder</span>
              </div>
            </div>
          </div>

          {/* Navigation buttons - mobile optimized */}
          <div className="absolute right-4 left-4 md:right-[40%] top-2 md:top-5 z-50 flex justify-between md:justify-center">
            <button className="border-2 border-primary p-1 rounded-full cursor-pointer bg-gradient-to-b from-white to-gray-100 hover:from-primary/10 hover:to-primary/20 transition-all duration-300">
              <FiArrowLeft className="text-primary w-4 h-4 md:w-6 md:h-6" />
            </button>
            <button className="border-2 border-primary p-1 rounded-full cursor-pointer bg-gradient-to-b from-white to-gray-100 hover:from-primary/10 hover:to-primary/20 transition-all duration-300 md:ml-4">
              <FiArrowRight className="text-primary w-4 h-4 md:w-6 md:h-6" />
            </button>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default HeroPage;
