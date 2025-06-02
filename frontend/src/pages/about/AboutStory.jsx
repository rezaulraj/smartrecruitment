import React from "react";
import storyimg from "../../assets/image/aboutus/ourstory.png?url";

const AboutStory = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 space-y-10">
      {/* Heading with decorative underline */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 relative pb-4 font-poppins">
        Our Story
      </h2>

      {/* Content container */}

      {/* Text content */}
      <div className="flex-1 space-y-6 text-gray-700">
        <p className="text-lg leading-relaxed text-justify font-poppins">
          At Smart Recruit, we believe in the power of opportunity to transform
          lives. We are a dedicated recruitment agency that builds bridges
          between skilled workers from Nepal, Bangladesh, and India and
          rewarding careers in Europe. Since our inception in 2020, we've been
          on a mission to empower workers by providing them with the training,
          support, and opportunities they need to succeed in high-demand
          industries like hospitality, logistics, and healthcare.
        </p>
        <p className="text-lg leading-relaxed text-justify font-poppins">
          What sets us apart is our deep commitment to every worker's journey—we
          don't just place workers; we nurture their dreams, celebrate their
          successes, and stand by them every step of the way. With a network of
          trusted European employers and a passion for making a difference,
          Smart Recruit is more than a recruitment agency; we're a partner in
          building brighter futures.
        </p>
      </div>

      {/* Image */}
      <div className="">
        <img
          src={storyimg}
          alt="Our story"
          className="w-full h-auto rounded-lg shadow-md object-cover"
        />
      </div>
    </section>
  );
};

export default AboutStory;
