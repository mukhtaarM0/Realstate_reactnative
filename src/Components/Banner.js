import React from "react";
import { FaCheck } from "react-icons/fa";
const Banner = () => {
  return (
    
    <div className="w-full p-10 bg-gray-100 rounded-lg shadow-lg mt-16">
      <h3 className="text-2xl font-semibold text-gray-800">Why choose us?</h3>
      <h1 className="text-3xl font-bold text-blue-600 mt-2">
        We value each relationship on our platform
      </h1>
      <p className="text-gray-600 mt-4 ">
        Our Freelancers aren't Bots; they're human beings with a sense of humour
        within the bounds of their job. We believe in forming long-term
        relationships with both our Talent & our Clients.
      </p>
      <div className="mt-4 flex space-x-4 mt-16 justify-center">
        <div className="flex items-center mt-2">
          <span className="text-green-500 mr-2">
            <FaCheck className="mr-2" />
          </span>
          <span className="text-gray-800">Less Fees</span>
        </div>
        <div className="flex items-center mt-2">
          <span className="text-green-500 mr-2">
            <FaCheck className="mr-2" />
          </span>
          <span className="text-gray-800">Live Support</span>
        </div>
        <div className="flex items-center mt-2 ">
          <span className="text-green-500 mr-2">
            <FaCheck className="mr-2" />
          </span>
          <span className="text-gray-800">Verified users</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
