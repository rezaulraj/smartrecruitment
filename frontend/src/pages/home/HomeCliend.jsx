import React, { useState } from "react";
import { FiPlay } from "react-icons/fi";
import ReactModal from "react-modal";
import cliend1 from "../../assets/image/cliend/c1.png";
import cliend2 from "../../assets/image/cliend/c2.png";
import cliend3 from "../../assets/image/cliend/c3.png";

import companyLogo from "../../assets/image/companylogo.png";

// Set app element for accessibility
ReactModal.setAppElement("#root");

const HomeCliend = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const clients = [
    {
      id: 1,
      image: cliend1,
      name: "Sarah Johnson",
      designation: "HR Director",
      companyLogo: companyLogo,

      testimonial:
        "The recruitment process was seamless and we found the perfect candidates for our tech team. Highly recommended!",
      videoUrl: "https://www.youtube.com/watch?v=wh5rLnsc8LU",
    },
    {
      id: 2,
      image: cliend2,
      name: "Michael Chen",
      designation: "Operations Manager",
      companyLogo: companyLogo,

      testimonial:
        "Their workers are skilled and reliable. We've been partnering with them for three years now.",
      videoUrl: "https://www.youtube.com/watch?v=f60dheI4ARg",
    },
    {
      id: 3,
      image: cliend3,
      name: "Amina Al-Mansoori",
      designation: "CEO",
      companyLogo: companyLogo,

      testimonial:
        "Exceptional service and quick turnaround time. They understood our specific needs in the hospitality sector.",
      videoUrl: "https://www.youtube.com/watch?v=KHq_EDi2PE8",
    },
  ];

  const openVideoModal = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Clients Feedback Corner
        </h2>
      </div>

      {/* Client Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {clients.map((client) => (
          <div
            key={client.id}
            className="rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Client Image */}
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-md"
                />
                {/* Video Play Button */}
                <button
                  onClick={() => openVideoModal(client.videoUrl)}
                  className="absolute -bottom-2 -right-2 bg-primary hover:bg-primary-dark text-white rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-110"
                >
                  <FiPlay className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Client Info */}
            <div className="px-6 py-4 text-center">
              <h3 className="text-xl font-bold text-gray-900">{client.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{client.designation}</p>

              {/* Company Logo and Name */}
              <div className="flex items-center justify-center space-x-2 mb-4">
                <img
                  src={client.companyLogo}
                  alt={client.companyName}
                  className="h-8 object-contain"
                />
              </div>

              {/* Testimonial */}
              <p className="text-gray-600 mb-4">"{client.testimonial}"</p>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Video Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="relative w-full h-full max-w-4xl mx-auto">
          <button
            onClick={closeModal}
            className="absolute -top-10 right-0 text-white hover:text-gray-300 z-50"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={currentVideo}
              title="Client Testimonial Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </ReactModal>

      {/* Modal Styles */}
      <style jsx global>{`
        .modal {
          position: absolute;
          top: 50%;
          left: 50%;
          right: auto;
          bottom: auto;
          margin-right: -50%;
          transform: translate(-50%, -50%);
          width: 80%;
          max-width: 800px;
          outline: none;
        }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.75);
          z-index: 1000;
        }
      `}</style>
    </section>
  );
};

export default HomeCliend;
