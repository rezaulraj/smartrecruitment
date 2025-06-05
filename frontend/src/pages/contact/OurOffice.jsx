import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGlobeAmericas,
} from "react-icons/fa";

const OurOffice = () => {
  const [selected, setSelected] = useState("tab1");

  // Office data
  const offices = {
    all: [
      {
        country: "India",
        city: "Chennai",
        address: "Habeeb Centre, No 51 TTK Road, Alwarpet, Chennai – 600 018",
        phone: "09150075176",
        email: "Contact@SmartRecruit",
      },
      {
        country: "India",
        city: "Vijayawada",
        address: "Tech Park, MG Road, Vijayawada – 520 001",
        phone: "09150075177",
        email: "Vijayawada@SmartRecruit",
      },
      {
        country: "India",
        city: "Hyderabad",
        address: "Cyber Towers, Hi-Tech City, Hyderabad – 500 081",
        phone: "09150075178",
        email: "Hyderabad@SmartRecruit",
      },
      {
        country: "Croatia",
        city: "Zagreb",
        address: "Savska Cesta 41, 10000 Zagreb",
        phone: "+385 1 1234 567",
        email: "Zagreb@SmartRecruit",
      },
      {
        country: "Portugal",
        city: "Lisbon",
        address: "Avenida da Liberdade 100, 1250-145 Lisboa",
        phone: "+351 21 123 4567",
        email: "Lisbon@SmartRecruit",
      },
      {
        country: "Nepal",
        city: "Kathmandu",
        address: "Durbar Marg, Kathmandu 44600",
        phone: "+977 1 421 1234",
        email: "Kathmandu@SmartRecruit",
      },
    ],
    croatia: [
      {
        country: "Croatia",
        city: "Zagreb",
        address: "Savska Cesta 41, 10000 Zagreb",
        phone: "+385 1 1234 567",
        email: "Zagreb@SmartRecruit",
      },
      {
        country: "Croatia",
        city: "Split",
        address: "Riva 10, 21000 Split",
        phone: "+385 21 456 789",
        email: "Split@SmartRecruit",
      },
    ],
    india: [
      {
        country: "India",
        city: "Chennai",
        address: "Habeeb Centre, No 51 TTK Road, Alwarpet, Chennai – 600 018",
        phone: "09150075176",
        email: "Chennai@SmartRecruit",
      },
      {
        country: "India",
        city: "Vijayawada",
        address: "Tech Park, MG Road, Vijayawada – 520 001",
        phone: "09150075177",
        email: "Vijayawada@SmartRecruit",
      },
      {
        country: "India",
        city: "Hyderabad",
        address: "Cyber Towers, Hi-Tech City, Hyderabad – 500 081",
        phone: "09150075178",
        email: "Hyderabad@SmartRecruit",
      },
    ],
    portugal: [
      {
        country: "Portugal",
        city: "Lisbon",
        address: "Avenida da Liberdade 100, 1250-145 Lisboa",
        phone: "+351 21 123 4567",
        email: "Lisbon@SmartRecruit",
      },
    ],
    nepal: [
      {
        country: "Nepal",
        city: "Kathmandu",
        address: "Durbar Marg, Kathmandu 44600",
        phone: "+977 1 421 1234",
        email: "Kathmandu@SmartRecruit",
      },
    ],
  };

  const getOffices = () => {
    switch (selected) {
      case "tab1":
        return offices.all;
      case "tab2":
        return offices.croatia;
      case "tab3":
        return offices.india;
      case "tab4":
        return offices.portugal;
      case "tab5":
        return offices.nepal;
      default:
        return offices.all;
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Offices</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We have offices across the globe. Discover your local SmartRecruit
          office:
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
        {[
          {
            id: "tab1",
            label: "All",
            icon: <FaGlobeAmericas className="mr-2" />,
          },
          { id: "tab2", label: "Croatia" },
          { id: "tab3", label: "India" },
          { id: "tab4", label: "Portugal" },
          { id: "tab5", label: "Nepal" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelected(tab.id)}
            className={`flex items-center px-6 py-3 rounded-full transition-all ${
              selected === tab.id
                ? "bg-primary text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab.icon && tab.icon}
            <span className="font-medium">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {getOffices().map((office, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-start mb-4">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <FaMapMarkerAlt className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {office.city}
                  </h3>
                  <p className="text-gray-500">{office.country}</p>
                </div>
              </div>

              <div className="space-y-4 pl-16">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-gray-400 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-600">{office.address}</p>
                </div>

                <div className="flex items-center">
                  <FaPhone className="text-gray-400 mr-3" />
                  <a
                    href={`tel:${office.phone}`}
                    className="text-gray-600 hover:text-primary transition"
                  >
                    {office.phone}
                  </a>
                </div>

                <div className="flex items-center">
                  <FaEnvelope className="text-gray-400 mr-3" />
                  <a
                    href={`mailto:${office.email}`}
                    className="text-gray-600 hover:text-primary transition"
                  >
                    {office.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurOffice;
