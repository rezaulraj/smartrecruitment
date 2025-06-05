import React from "react";
import fream1 from "../../assets/image/halloffream/fream1.png?url";
import fream2 from "../../assets/image/halloffream/fream2.png?url";
import fream3 from "../../assets/image/halloffream/fream3.png?url";
import fream4 from "../../assets/image/halloffream/fream4.png?url";
import fream5 from "../../assets/image/halloffream/fream5.png?url";
import fream6 from "../../assets/image/halloffream/fream6.png?url";

const HallOfFream = () => {
  const hallFream = [
    {
      id: 1,
      name: "BASNET LAXMAN",
      originCountry: "np",
      destinationCountry: "rs",
      desgination: "Hospitality Worker",
      img: fream1,
    },
    {
      id: 2,
      name: "Younghang Sony",
      originCountry: "np",
      destinationCountry: "ro", // fixed from rou to ro
      desgination: "Caregiver",
      img: fream2,
    },
    {
      id: 3,
      name: "RANA SHRIJANA",
      originCountry: "np",
      destinationCountry: "ph", // fixed from pi to ph
      desgination: "Beautician",
      img: fream3,
    },
    {
      id: 4,
      name: "kHAN MD RAKIB",
      originCountry: "bd", // fixed from ban to bd
      destinationCountry: "it",
      desgination: "Automotive Painter",
      img: fream4,
    },
    {
      id: 5,
      name: "BARUWAL KHIL BAHADUR",
      originCountry: "in", // fixed from ind to in
      destinationCountry: "rs",
      desgination: "Welder",
      img: fream5,
    },
    {
      id: 6,
      name: "Limbu khusbu",
      originCountry: "np",
      destinationCountry: "pt",
      desgination: "Eyelasher",
      img: fream6,
    },
  ];

  const getFlagUrl = (countryCode) => {
    return `https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`;
  };

  return (
    <section className="my-20 max-w-screen-xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Hall Of Fame</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Celebrating workers who achieved their dreams with Smart
          Recruit—updated every month!
        </p>
      </div>

      <div className="mb-8 text-start">
        <h1 className="text-primary text-2xl font-semibold">24 May 2025</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hallFream.map((person) => (
          <div
            key={person.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
          >
            <div className="relative">
              <img
                src={person.img}
                alt={person.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-20"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white text-xl font-bold">{person.name}</h3>
                <p className="text-white text-opacity-80">
                  {person.desgination}
                </p>
              </div>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                  <img
                    src={getFlagUrl(person.originCountry)}
                    alt={`${person.originCountry} flag`}
                    className="w-8 h-5 object-cover border border-gray-200 rounded-sm"
                  />
                  <span className="text-gray-600">From</span>
                </div>
                <div className="h-1 w-[50%] bg-primary"></div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">To</span>
                  <img
                    src={getFlagUrl(person.destinationCountry)}
                    alt={`${person.destinationCountry} flag`}
                    className="w-8 h-5 object-cover border border-gray-200 rounded-sm"
                  />
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                <p className="text-primary/90 italic">
                  "Achieved my dream job abroad with Smart Recruit's help!"
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg">
          View All Success Stories
        </button>
      </div>
    </section>
  );
};

export default HallOfFream;
