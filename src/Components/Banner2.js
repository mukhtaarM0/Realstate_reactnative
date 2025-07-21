// Banner.js
import React from "react";

const Banner2 = () => {
  return (
    <div className="bg-red-500 hover:bg-white hover:text-black py-8 flex justify-between items-center px-6 mt-8 rounded-lg m-4">
      <div>
        <h2 className="text-2xl font-bold text-white">Do You Have Questions?</h2>
        <p className="text-white mt-2">We'll help you to grow your career and growth.</p>
      </div>
      <a href="./Contact" className="bg-white  text-green-500 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100">
        Contact Us 
      </a>
    </div>
  );
};

export default Banner2;
