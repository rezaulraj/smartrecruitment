import React from "react";
import careerimge from "../../assets/image/career/career.png?url";
const CarrerSub = () => {
  return (
    <section className="max-w-screen-xl mx-auto my-8 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-poppins text-gray-800">Build Your Future With Us</h2>
          <p className="text-gray-700 ">
            At Smart Recruit, every role is more than just a job—it’s a chance
            to grow, lead, and impact lives. Whether you're starting out or
            taking the next big step in your career, we provide the platform,
            support, and opportunities to help you succeed. Let’s shape a
            brighter future—together.
          </p>
        </div>
        <div>
          <img src={careerimge} alt="Career Image" />
        </div>
      </div>
    </section>
  );
};

export default CarrerSub;
