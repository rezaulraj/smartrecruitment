import React from "react";
import { GiTeacher } from "react-icons/gi";
import { IoIosPaper } from "react-icons/io";
import { MdOutlineWatchLater } from "react-icons/md";
import whyimage from "../../assets/image/skilltrain/whyskill.png?url";

const WhySkill = () => {
  const features = [
    {
      icon: <GiTeacher className="text-3xl" />,
      title: "Expert Instructors",
      description:
        "Learn from professionals with European workplace experience",
    },
    {
      icon: <IoIosPaper className="text-3xl" />,
      title: "Practical Lessons",
      description: "Interactive modules designed for real-world application",
    },
    {
      icon: <MdOutlineWatchLater className="text-3xl" />,
      title: "Flexible Learning",
      description: "Short, accessible lessons that fit your schedule",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Why Choose <span className="text-primary">Our Training</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Smart Recruit trains South Asian workers with the skills and
              language to succeed in Europe.
            </p>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-6 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="px-8 py-3 bg-primary text-white font-medium rounded-lg shadow-lg hover:bg-primary-dark transition-colors duration-300">
            Explore Now
          </button>
        </div>

        {/* Image */}
        <div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src={whyimage}
              alt="Skill training"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/5 rounded-full"></div>
          <div className="absolute bottom-10 -right-10 w-20 h-20 border-4 border-primary/30 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default WhySkill;
