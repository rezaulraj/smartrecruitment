import React from "react";
import mission from "../../assets/image/aboutus/mission.png";

const Mission = () => {
  return (
    <section className="max-w-screen-xl mx-auto my-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight font-poppins">
            Goals for the Future:{" "}
            <span className="text-primary">Vision Beyond Borders</span>
          </h2>

          <div className="space-y-4 text-gray-600">
            <p className="text-lg leading-relaxed font-poppins">
              We envision a world where borders don't limit dreams. Our goal is
              to empower over{" "}
              <span className="font-semibold text-primary">
                50,000 workers by 2030
              </span>
              , connecting them to life-changing opportunities across Europe.
            </p>

            <p className="text-lg leading-relaxed font-poppins">
              We're expanding our language training programs to include
              immersive cultural integration, ensuring workers thrive both
              professionally and personally.
            </p>

            <p className="text-lg leading-relaxed font-poppins">
              Smart Recruit aims to lead the industry by pioneering sustainable
              recruitment practices, fostering partnerships with agencies and
              employers, and becoming the{" "}
              <span className="italic">gold standard</span> for worker-centric
              recruitment globally.
            </p>
          </div>
        </div>

        {/* Image */}
        <figure className="relative">
          <img
            src={mission}
            alt="Our mission visual representation"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
          <div className="absolute -inset-4 border-2 border-blue-200 rounded-xl -z-10"></div>
        </figure>
      </div>
    </section>
  );
};

export default Mission;
