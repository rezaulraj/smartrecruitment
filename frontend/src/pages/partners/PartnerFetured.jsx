import React from "react";
import { TbWorld } from "react-icons/tb";
import { VscServerProcess } from "react-icons/vsc";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";
import { LiaLanguageSolid } from "react-icons/lia";
import { FaBagShopping } from "react-icons/fa6";
const PartnerFetured = () => {
  const features = [
    {
      icon: <TbWorld className="w-6 h-6" />,

      title: "Job Opportunities",
      desc: "Place your skilled workers in top European Countries, including Croatia, Romania, Malta, Portugal and more.",
    },
    {
      icon: <FaBagShopping className="w-6 h-6" />,
      title: "Multiple Placement",
      desc: "Access a wide range of job roles in hospitality, logistics, healthcare, and beyond, ensuring the best fit for your workers’ skills.",
    },
    {
      icon: <VscServerProcess className="w-6 h-6" />,
      title: "Transparent Process",
      desc: "Track your workers’ progress effortlessly with our transparent system, keeping you informed at every step of the journey.",
    },
    {
      icon: <IoCheckmarkDoneCircleSharp className="w-6 h-6" />,
      title: "Proven Success",
      desc: "Rely on our proven track record, with a 98% visa approval rate and over 10,000 successful placements worldwide.",
    },
    {
      icon: <MdSupportAgent className="w-6 h-6" />,
      title: "End-to-End Support",
      desc: "Our team handles visa applications, job placements, airport pickups, accommodation, and ongoing support for a seamless experience.",
    },
    {
      icon: <LiaLanguageSolid className="w-6 h-6" />,
      title: "Language Training",
      desc: "We offer English and European language training to help your workers communicate confidently and succeed.",
    },
  ];
  return (
    <section className="py-20 max-w-screen-xl mx-auto p-4">
      <div className="relative max-w-xl mx-auto sm:text-center">
        <div className="relative z-10">
          <h3 className="text-black text-3xl font-bold font-poppins sm:text-4xl">
            Why Partner with Smart Recruit?
          </h3>
          <p className="mt-3 text-gray-800 max-w-sm mx-auto font-poppins">
            Together, we can transform lives by connecting skilled workers to
            global opportunities.
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

export default PartnerFetured;
