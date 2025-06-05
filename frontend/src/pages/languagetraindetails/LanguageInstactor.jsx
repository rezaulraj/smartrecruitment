import React from "react";
import instractor from "../../assets/image/skilltrain/instractor.png?url";
import {
  FaChalkboardTeacher,
  FaGlobeEurope,
  FaUserGraduate,
} from "react-icons/fa";

const LanguageInstructor = () => {
  return (
    <section className="max-w-screen-xl mx-auto my-20 px-4">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Instructor Image */}
          <div className="md:w-2/5 relative">
            <img
              src={instractor}
              alt="Maria Schmidt"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h3 className="text-2xl font-bold text-white">Maria Schmidt</h3>
              <p className="text-primary-light font-medium">English Teacher</p>
            </div>
          </div>

          {/* Instructor Details */}
          <div className="md:w-3/5 p-8">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Meet Our Instructor
              </h1>
              <div className="w-20 h-1 bg-primary rounded-full"></div>
            </div>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Maria Schmidt is a certified English language trainer with 10+
              years of experience teaching international workers. She
              specializes in practical language skills for professional
              environments, ensuring you're fully prepared for life and work in
              Europe.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FaChalkboardTeacher className="text-primary text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Experience</p>
                  <p className="font-bold">10+ Years</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FaGlobeEurope className="text-primary text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Specialization</p>
                  <p className="font-bold">European Work</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                <div className="bg-primary/10 p-3 rounded-full">
                  <FaUserGraduate className="text-primary text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Students</p>
                  <p className="font-bold">500+</p>
                </div>
              </div>
            </div>

            <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              Meet Our Instructor
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguageInstructor;
