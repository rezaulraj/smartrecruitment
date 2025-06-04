import React from "react";
import success1 from "../../assets/image/skilltrain/success1.png";
import success2 from "../../assets/image/skilltrain/success2.png";
import success3 from "../../assets/image/skilltrain/success3.png";
import { FaQuoteLeft } from "react-icons/fa";

const RealStory = () => {
  const realstory = [
    {
      id: 1,
      image: success1,
      name: "Adnan Kabir",
      degination: "Auto Mechanic",
      location: "Zagreb, Croatia",
      headling:
        "After this automachanic training, I went to Croatia. This training improved my skills a lot and made me much better than others. It helped me a lot in my life.",
    },
    {
      id: 2,
      image: success2,
      name: "Abir Hossain",
      degination: "Auto Mechanic",
      location: "Zagreb, Croatia",
      headling:
        "After this welding training, I went to Germany. This training improved my skills a lot and made me much better than others. It helped me a lot in my life.",
    },
    {
      id: 3,
      image: success3,
      name: "Arjun",
      degination: "Automotive Painter",
      location: "Lisbon, Portugal",
      headling:
        "After this automotive painter training, I went to Portugal. This training improved my skills a lot and made me much better than others. It helped me a lot in my life.",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-6 py-16 md:py-20 bg-gray-50">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Real <span className="text-primary">Stories.</span> Real{" "}
          <span className="text-primary">Success</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Hear from our trainees who transformed their careers through our
          programs
        </p>
        <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {realstory.map((story) => (
          <div
            key={story.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <div className="relative flex items-center gap-2 p-2">
              <img
                src={story.image}
                alt={story.name}
                className="w-16 h-16 object-cover hover:scale-105 transition-transform duration-500"
              />

              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-gray-800">
                  {story.name}
                </h3>
                <p className="text-gray-600">{story.degination}</p>
              </div>
            </div>

            <div className="p-6 relative">
              <FaQuoteLeft className="absolute top-6 right-6 text-gray-200 text-3xl" />

              <p className="text-gray-600 italic mb-6 relative z-10">
                "{story.headling}"
              </p>

              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-400 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <span className="text-sm text-gray-500">
                    {story.location}
                  </span>
                </div>

                <button className="text-sm font-medium text-primary hover:text-primary-dark transition-colors">
                  Read Full Story →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-colors">
          View More Success Stories
        </button>
      </div>
    </section>
  );
};

export default RealStory;
