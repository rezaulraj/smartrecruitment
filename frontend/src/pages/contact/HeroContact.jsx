import React from "react";
import { FaChevronRight, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLocationDot,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoIosMail } from "react-icons/io";

const HeroContact = () => {
  // Array of locations
  const locations = [
    {
      address: "Savska Cesta 41, 10000, Zagreb, Hrvatska",
      phone: "+385 1 1234 567",
      email: "smartrecruitltd@gmail.com",
    },
  ];

  return (
    <section className="relative bg-gray-900 py-18 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary-dark/30"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]"></div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 text-primary mb-4">
              <span className="h-[2px] w-8 bg-primary"></span>
              <span className="text-sm font-medium tracking-wider uppercase">
                Contact
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Get In Touch
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
              We provide creative solutions for hiring international talent,
              fostering collaboration, and delivering exceptional value to
              businesses in Croatia and beyond.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
                Offices
              </button>
            </div>
          </div>

          {/* Right side container */}
          <div className="lg:absolute lg:top-8 lg:right-8 flex flex-col items-center md:items-end">
            {/* Breadcrumb */}
            <div className="inline-flex items-center space-x-2 bg-gray-800 bg-opacity-70 px-4 py-2 rounded-full mb-4">
              <Link
                to="/"
                className="hover:text-primary text-white transition-colors"
              >
                Home
              </Link>
              <FaChevronRight className="text-xs text-white" />
              <span className="text-primary font-medium">Hall of Frame</span>
            </div>

            {/* Locations container - positioned at bottom */}
            <div className="w-full max-w-xs p-4  rounded-lg">
              {locations.map((location, index) => (
                <div key={index} className="flex items-center flex-col space-y-3 md:items-end">
                  <span className="flex items-center text-gray-200">
                    <FaLocationDot className="text-gray-200 mr-2" />
                    <p className="text-sm">{location.address}</p>
                  </span>
                  <span className="flex items-center text-gray-200 mb-2">
                    <FaPhoneAlt className="text-gray-200 mr-2" />
                    <p className="text-sm">{location.phone}</p>
                  </span>
                  <span className="flex items-center text-gray-200 mb-2">
                    <IoIosMail className="text-gray-200 mr-2" />
                    <p className="text-sm">{location.email}</p>
                  </span>
                  {index !== locations.length - 1 && (
                    <hr className="border-gray-700 my-2" />
                  )}
                </div>
              ))}
              {/* icons */}
              <div className="flex gap-4 items-center justify-center md:items-end md:justify-end mt-2">
                <Link to={""} className="text-2xl text-primary hover:text-primary-dark hover:translate-y-1 transition-transform duration-300">
                  <FaInstagram />
                </Link>
                <Link  to={""} className="text-2xl text-primary hover:text-primary-dark hover:translate-y-1 transition-transform duration-300">
                  <FaFacebook />
                </Link>
                <Link  to={""} className="text-2xl text-primary hover:text-primary-dark hover:translate-y-1 transition-transform duration-300">
                  <FaLinkedinIn />
                </Link>
                <Link  to={""} className="text-2xl text-primary hover:text-primary-dark hover:translate-y-1 transition-transform duration-300">
                  <FaTwitter />
                </Link>
                <Link  to={""} className="text-2xl text-primary hover:text-primary-dark hover:translate-y-1 transition-transform duration-300">
                  <FaYoutube />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
    </section>
  );
};

export default HeroContact;
