import React from "react";
import skill1 from "../../assets/image/skillworker/skill1.png";
import skill2 from "../../assets/image/skillworker/skill2.png";
import skill3 from "../../assets/image/skillworker/skill3.png";

const HomeSkill = () => {
  const skills = [
    {
      id: 1,
      image: skill1,
      name: "Anil Kumar – Carpenter",
    },
    {
      id: 2,
      image: skill2,
      name: "Anowar Hossain – 5G Welder",
    },
    {
      id: 3,
      image: skill3,
      name: "Priya Sharma - Electrician",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Discover Skilled Workers
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Skilled workers from Philippines, Nepal, Bangladesh, India for
          European industries. View videos, hire talent in hospitality,
          logistics, healthcare with Smart Recruit.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-4">
              <img
                src={skill.image}
                alt={skill.name}
                className="w-full h-48 object-contain mx-auto"
              />
            </div>
            <div className="bg-gray-50 px-4 py-3 border-t border-gray-100">
              <h3 className="text-lg font-semibold text-center text-gray-800">
                {skill.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
      <section className=" p-8 md:p-12 text-center text-white">
        <button
          className="mt-8 border-2 border-primary-dark
           relative z-50 font-poppins text-primary-dark px-6 py-3 rounded-full font-medium shadow-lg cursor-pointer"
        >
          View More
        </button>
      </section>
    </section>
  );
};

export default HomeSkill;
