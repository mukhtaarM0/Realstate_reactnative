import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer"
const Guryaha = () => { 
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center ">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
          {/* Image section */}
          <img
            className="w-full h-48 object-cover"
            src="../image/PropertyPage111.webp" // Replace with your image URL
            alt="Property" // Replace with a relevant alt text
          />
          <div />
          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">guri kiro ah</h2>
            <p className="text-gray-700 text-base mb-4">
              waxa uu ku yaalaa magaalada buraco
            </p>
            <div className="flex items-center justify-between">
              <span className="text-green-600 font-bold text-xl">$50</span>
              <Link
                to="/PropertyPage"
                className="btn bg-blue-500 hover:bg-white text-black font-bold py-2 px-4 rounded transition duration-300"
              >
                view
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
          {/* Image section */}
          <img
            className="w-full h-48 object-cover"
            src="../image/PropertyPage1.png" // Replace with your image URL
            alt="Property" // Replace with a relevant alt text
          />

          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">guri kiro ah</h2>
            <p className="text-gray-700 text-base mb-4">
              waxa uu ku yaalaa magaalada buraco
            </p>
            <div className="flex items-center justify-between">
              <span className="text-green-600 font-bold text-xl">$80</span>
              <Link
                to="/PropertyPage2"
                className="btn bg-blue-500 hover:bg-white text-black font-bold py-2 px-4 rounded transition duration-300"
              >
                view..
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
          {/* Image section */}
          <img
            className="w-full h-48 object-cover"
            src="../image/PropertyPage2.webp" // Replace with your image URL
            alt="Property" // Replace with a relevant alt text
          />

          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">guri kiro ah</h2>
            <p className="text-gray-700 text-base mb-4">
              waxa uu ku yaalaa magaalada buraco
            </p>
            <div className="flex items-center justify-between">
              <span className="text-green-600 font-bold text-xl">$90</span>
              <Link
                to="/PropertyPage3"
                className="btn bg-blue-500 hover:bg-white text-black font-bold py-2 px-4 rounded transition duration-300"
              >
                view
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
          {/* Image section */}
          <img
            className="w-full h-48 object-cover"
            src="../image/PropertyPage4.jpg" // Replace with your image URL
            alt="Property" // Replace with a relevant alt text
          />

          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">guri kiro ah</h2>
            <p className="text-gray-700 text-base mb-4">
              waxa uu ku yaalaa magaalada buraco
            </p>
            <div className="flex items-center justify-between">
              <span className="text-green-600 font-bold text-xl">$120</span>
              <Link
                to="/PropertyPage5"
                className="btn bg-blue-500 hover:bg-white text-black font-bold py-2 px-4 rounded transition duration-300"
              >
                view
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
          {/* Image section */}
          <img
            className="w-full h-48 object-cover"
            src="../image/PropertyPage5.jpg" // Replace with your image URL
            alt="Property" // Replace with a relevant alt text
          />

          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">guri kiro ah</h2>
            <p className="text-gray-700 text-base mb-4">
              waxa uu ku yaalaa magaalada buraco
            </p>
            <div className="flex items-center justify-between">
              <span className="text-green-600 font-bold text-xl">$100</span>
              <Link
                to="/PropertyPage5"
                className="btn bg-blue-500 hover:bg-white text-black font-bold py-2 px-4 rounded transition duration-300"
              >
                view
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
          {/* Image section */}
          <img
            className="w-full h-48 object-cover"
            src="../image/PropertyPage6.jpg" // Replace with your image URL
            alt="Property" // Replace with a relevant alt text
          />

          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">guri kiro ah</h2>
            <p className="text-gray-700 text-base mb-4">
              waxa uu ku yaalaa magaalada buraco
            </p>
            <div className="flex items-center justify-between">
              <span className="text-green-600 font-bold text-xl">$100</span>
              <Link
                to="/PropertyPage6"
                className="btn bg-blue-500 hover:bg-white text-black font-bold py-2 px-4 rounded transition duration-300"
              >
                view
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Guryaha;
