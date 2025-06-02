import React from "react";

const EmployeeWorkforce = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-black py-16 md:py-24 overflow-hidden my-16">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojMDAwMDAwIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTExIDEwYTIgMiAwIDAgMSAyLTJoMTBhMiAyIDAgMCAxIDIgMnYxMGEyIDIgMCAwIDEtMiAySDExYTIgMiAwIDAgMS0yLTJ6IiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIuMSIvPjwvc3ZnPg==')]"></div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Animated heading */}
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
            Ready to Build Your{" "}
            <span className="text-primary">Dream Workforce</span>?
          </h1>

          {/* Glowing text effect */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 relative before:absolute before:-bottom-1 before:left-0 before:w-full before:h-0.5 before:bg-gradient-to-r before:from-transparent before:via-primary before:to-transparent before:opacity-50">
            Partner with Smart Recruit to access skilled workers and accelerate
            your business growth.
          </p>

          {/* Animated button with hover effects */}
          <button className="relative inline-flex items-center px-8 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl shadow-primary/30 group overflow-hidden">
            <span className="relative z-10">Request Workers Now</span>
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
            <span className="absolute right-0 w-8 h-8 -mr-2 opacity-0 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmployeeWorkforce;
