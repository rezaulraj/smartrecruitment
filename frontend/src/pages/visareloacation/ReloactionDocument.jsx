import React from "react";

const ReloactionDocument = () => {
  const lists = [
    {
      list: "A valid passport (at least 6 months validity)",
    },
    {
      list: "Job offer letter from a European employer",
    },
    {
      list: "Proof of qualifications (e.g., certificates, diplomas)",
    },
    {
      list: "Medical certificate (if required by the country)",
    },
    {
      list: "Proof of accommodation in Europe",
    },
    {
      list: "Visa application form and fees Smart Recruit will provide a detailed checklist and assist with document preparation.",
    },
  ];

  const learnToBasics = [
    {
      listh: "Learn the Basics: ",
      listp:
        "Take advantage of our language training programs to learn key phrases in the local language.",
    },
    {
      listh: "Understand the Culture: ",
      listp:
        "Familiarize yourself with European workplace norms through our cultural integration sessions.",
    },
    {
      listh: "Stay Connected: ",
      listp: "Join worker support groups to build a network in your new city.",
    },
    {
      listh: "Plan Finances: ",
      listp:
        "Budget for initial expenses like rent and transportation; we’ll provide guidance on managing costs. Smart Recruit is with you every step of the way to ensure you thrive in your new role.",
    },
  ];
  return (
    <section className="max-w-screen-xl mx-auto my-8 px-4 space-y-6">
      <div className="space-y-2">
        <h2 className="font-bold text-gray-800 text-2xl md:text-3xl lg:text-4xl font-poppins">
          Visa Application Process
        </h2>
        <p className="text-gray-700 ">
          At Smart Recruit, we simplify the visa process for you. After securing
          a job offer through our platform or Job Fairs, our team will guide you
          through the application steps. We’ll help you submit your application
          to the relevant European embassy, track its progress, and ensure all
          requirements are met. With a 98% visa approval rate, we’ve
          successfully supported over 10,000 workers in obtaining their work
          visas.
        </p>
      </div>
      <div className="space-y-2">
        <h2 className="font-bold text-gray-800 text-2xl md:text-3xl lg:text-4xl font-poppins">
          Required Documents
        </h2>
        <p className="text-gray-700 ">
          To apply for a European work visa, you’ll need the following:
        </p>
        <ul className="p-4" style={{ listStyleType: "square" }}>
          {lists.map((item, ind) => (
            <li key={ind} className="marker:bg-primary text-gray-700">
              {item.list}
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-2">
        <h2 className="font-bold text-gray-800 text-2xl md:text-3xl lg:text-4xl font-poppins">
          Relocation Support
        </h2>
        <p className="text-gray-700 ">
          We offer comprehensive relocation support to ensure a seamless
          transition. Our team coordinates travel arrangements, including flight
          bookings and airport transfers. We also provide pre-departure
          orientation to prepare you for life in Europe, covering topics like
          workplace culture, local laws, and cost of living. Once you arrive,
          our local partners assist with initial accommodation and settling in.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="font-bold text-gray-800 text-2xl md:text-3xl lg:text-4xl font-poppins">
          Tips for a Smooth Transition
        </h2>

        <ul className="p-4" style={{ listStyleType: "square" }}>
          {learnToBasics.map((item, ind) => (
            <li key={ind} className="marker:bg-primary text-gray-700">
              {item.listh}
              {item.listp}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ReloactionDocument;
