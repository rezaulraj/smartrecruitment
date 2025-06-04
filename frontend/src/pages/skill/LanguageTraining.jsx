import React from "react";
import lang1 from "../../assets/image/skilltrain/lang1.png?url";
import lang2 from "../../assets/image/skilltrain/lang2.png?url";
import lang3 from "../../assets/image/skilltrain/lang3.png?url";
const LanguageTraining = () => {
  const languageTraining = [
    {
      id: 1,
      image: lang1,
      langName: "English Language",
      langSubTitle:
        "Essential for hospitality, logistics, and healthcare roles",
      numberOfWeeks: "4",
      numberOfModules: "3",
      price: "100",
    },
    {
      id: 2,
      image: lang2,
      langName: "German Language",
      langSubTitle: "Key for construction and manufacturing jobs in Germany",
      numberOfWeeks: "4",
      numberOfModules: "3",
      price: "120",
    },
    {
      id: 3,
      image: lang3,
      langName: "Spanish Language",
      langSubTitle: "Useful for hospitality and cleaning jobs in Spain",
      numberOfWeeks: "4",
      numberOfModules: "3",
      price: "100",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto my-10">
      {/* Language Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Language Training for{" "}
          <span className="text-primary">European Jobs</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Improve your Language skills to communicate confidently in the
          workplace.
        </p>
        <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {languageTraining.map((language) => (
          <div
            key={language.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={language.image}
                alt={language.langName}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {language.langName}
              </h3>
              <p className="text-gray-600 mb-4">{language.langSubTitle}</p>

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
                  <span>{language.numberOfWeeks} weeks</span>
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
                  <span>{language.numberOfModules} modules</span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <span className="text-xl font-bold text-primary">
                  ${language.price}
                </span>
                <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-colors">
          Load More Languages
        </button>
      </div>
    </section>
  );
};

export default LanguageTraining;
