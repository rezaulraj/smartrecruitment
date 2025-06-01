import React from "react";
import { TbWorld } from "react-icons/tb";
import { TbTargetArrow } from "react-icons/tb";
import { VscServerProcess } from "react-icons/vsc";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa6";

const Features = () => {
  const features = [
    {
      icon: <TbWorld className="w-6 h-6" />,

      title: "Global Talent Pool",
      desc: "Access a diverse pool of skilled workers from Nepal, Bangladesh, India, the Philippines, and Europe.",
    },
    {
      icon: <TbTargetArrow className="w-6 h-6" />,
      title: "Tailored Recruitment",
      desc: "We customize our recruitment process to match your specific industry requirements.",
    },
    {
      icon: <VscServerProcess className="w-6 h-6" />,
      title: "Seamless Process",
      desc: "We handle visas, travel, and onboarding, providing a hassle-free experience for your business.",
    },
    {
      icon: <IoCheckmarkDoneCircleSharp className="w-6 h-6" />,
      title: "Proven Success",
      desc: "With over 10,000 successful placements and a 98% visa approval rate, we’re a trusted partner.",
    },
    {
      icon: <FaGraduationCap className="w-6 h-6" />,
      title: "Worker Readiness",
      desc: "Our workers undergo rigorous training, including language skills and cultural integration.",
    },
    {
      icon: <FaHeadphones className="w-6 h-6" />,
      title: "Dedicated Employer Support",
      desc: "Our team offers personalized support, ensuring your staffing needs are met with precision and care.",
    },
  ];
  return (
    <section className="py-20 max-w-screen-xl mx-auto p-4">
      <div className="relative max-w-xl mx-auto sm:text-center">
        <div className="relative z-10">
          <h3 className="text-black text-3xl font-bold font-poppins sm:text-4xl">
            Why Choose Smart Recruit?
          </h3>
          <p className="mt-3 text-gray-800 max-w-sm mx-auto font-poppins">
            We Make Hiring Skilled Workers Simple, Efficient, and Reliable
          </p>
        </div>
        <div
          className="absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]"
          style={{
            background:
              "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
          }}
        ></div>
      </div>
      <div className="relative mt-12">
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, idx) => (
            <li
              key={idx}
              className="border-2 border-white space-y-3 p-4 rounded-lg"
            >
              <div className="text-primary bg-gray-200 rounded-md inline-block p-2 text-center">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-black font-poppins">
                {item.title}
              </h4>
              <p className="text-gray-600 font-medium font-poppins">
                {item.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
