import React from "react";
import employee1 from "../../assets/image/employee/step1.png?url";
import employee2 from "../../assets/image/employee/step2.png?url";
import employee3 from "../../assets/image/employee/step3.png?url";
import employee4 from "../../assets/image/employee/step4.png?url";
import employee5 from "../../assets/image/employee/step5.png?url";
import employee6 from "../../assets/image/employee/step6.png?url";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
const EmployeeHiar = () => {
  const employee = [
    {
      id: 1,
      title: "Request",
      description:
        "Submit your staffing needs through our form, specifying roles, skills, and timelines.",
      image: employee1,
    },
    {
      id: 2,
      title: "Source",
      description:
        "We source skilled workers from our global talent pool, matching them to your requirements.",
      image: employee2,
    },
    {
      id: 3,
      title: "Select",
      description:
        "We provide their resumes and working videos, and arrange an interview session for you to ask technical questions.",
      image: employee3,
    },
    {
      id: 4,
      title: "Hire",
      description:
        "After hiring, we assist with work permits, appointments, visas, migration, and accommodation.",
      image: employee4,
    },
    {
      id: 5,
      title: "Travel",
      description:
        "We guide workers in booking their flights and ensure all travel logistics are handled smoothly for a timely arrival.",
      image: employee5,
    },
    {
      id: 6,
      title: "Support",
      description:
        "Our team provides ongoing support, from airport pickups to workplace integration, ensuring a smooth transition.",
      image: employee6,
    },
  ];
  return (
    <section className="py-8 max-w-screen-xl mx-auto">
      <section className="py-8 md:pt-10">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl max-w-xl mx-auto font-bold mb-6 font-poppins">
              How It Works: Hiring with Smart Recruit
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              A Streamlined Process to Build Your Workforce
            </p>
          </div>
        </div>
      </section>
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 lg:gap-6">
        {employee.map((step, index) => (
          <React.Fragment key={step.id}>
            <div
              className={`bg-white p-2 rounded-lg shadow-md w-[calc(35%-.5rem)] md:w-[calc(25%-1.5rem)] lg:w-[calc(20%-2rem)] ${
                step.id === 6 ? "border-2 border-green-400" : ""
              }`}
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-44 object-cover rounded mb-3"
              />
              <h3 className="font-bold text-lg mb-1 text-center font-poppins">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm font-poppins text-justify">
                {step.description}
              </p>
              {step.id === 6 && (
                <div className="mt-2 flex justify-center">
                  <FiCheckCircle className="text-green-500 text-xl " />
                </div>
              )}
            </div>

            {index < employee.length - 1 && (
              <div className="flex items-center justify-center w-8">
                <FiArrowRight className="text-primary text-xl md:text-2xl border border-primary p-1 rounded-full " />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default EmployeeHiar;
