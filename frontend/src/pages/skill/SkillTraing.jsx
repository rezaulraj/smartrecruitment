import React from "react";
import skill1 from "../../assets/image/skilltrain/skill1.png?url";
import skill2 from "../../assets/image/skilltrain/skill2.png?url";
import skill3 from "../../assets/image/skilltrain/skill3.png?url";
import skill4 from "../../assets/image/skilltrain/skill4.png?url";
import skill5 from "../../assets/image/skilltrain/skill5.png?url";
import skill6 from "../../assets/image/skilltrain/skill6.png?url";


const SkillTraing = () => {
  const skillData = [
    {
      id: 1,
      image: skill1,
      courseName: "Auto Mechanic",
      courseSubTitle:
        "Learn tools, safety, and teamwork to work in European garages.",
      numberOfWeeks: "4",
      numberOfModules: "3",
      price: "150",
    },
    {
      id: 2,
      image: skill2,
      courseName: "Automotive Painter",
      courseSubTitle:
        "Master prepping and painting skills for auto industry jobs.",
      numberOfWeeks: "4",
      numberOfModules: "3",
      price: "",
    },
    {
      id: 3,
      image: skill3,
      courseName: "Nail Technician",
      courseSubTitle:
        "Train in nail care, hygiene, and client service for salons.",
      numberOfWeeks: "4",
      numberOfModules: "3",
      price: "120",
    },
    {
      id: 4,
      image: skill4,
      courseName: "Eyelash Extension",
      courseSubTitle:
        "Learn lash application and inventory handling for salons.",
      numberOfWeeks: "4",
      numberOfModules: "3",
      price: "100",
    },
    {
      id: 5,
      image: skill5,
      courseName: "Welding",
      courseSubTitle:
        "Gain welding and safety skills for industrial job sites.",
      numberOfWeeks: "4",
      numberOfModules: "3",
      price: "150",
    },
    {
      id: 6,
      image: skill6,
      courseName: "Caregiver",
      courseSubTitle:
        "Learn care, hygiene, and safety to support patients abroad.",
      numberOfWeeks: "4",
      numberOfModules: "3",
      price: "200",
    },
  ];

  
  return (
    <section className="max-w-screen-xl mx-auto px-6 py-16">
      {/* Skills Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Skills for <span className="text-primary">European Jobs</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Develop the practical skills you need to excel in construction,
          healthcare, hospitality, and more.
        </p>
        <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {skillData.map((skill) => (
          <div
            key={skill.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={skill.image}
                alt={skill.courseName}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {skill.courseName}
              </h3>
              <p className="text-gray-600 mb-4">{skill.courseSubTitle}</p>

              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center text-gray-500">
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span>{skill.numberOfWeeks} weeks</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                  <span>{skill.numberOfModules} modules</span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                {skill.price ? (
                  <span className="text-xl font-bold text-primary">
                    ${skill.price}
                  </span>
                ) : (
                  <span className="text-sm font-medium text-gray-500">
                    Price on request
                  </span>
                )}
                <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mb-8">
        <button className="px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-colors">
          Load More Skills
        </button>
      </div>

      
    </section>
  );
};

export default SkillTraing;
