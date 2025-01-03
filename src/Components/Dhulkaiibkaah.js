import React from 'react'
import Footer from "./Footer"
import { Link } from "react-router-dom";
import Bannerdhul from "./Bannerdhul"
const Dhulkaiibkaah = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center ">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
          {/* Image section */}
          <img
            className="w-full h-48 object-cover"
            src="../image/dhul1.jpg" // Replace with your image URL
            alt="/Procard" // Replace with a relevant alt text
          />
          <div />
          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">DHUL IIB AH</h2>
            <p className="text-gray-700 text-base mb-4">
              waxa uu ku yaalaa magaalada buraco gaar ahaan xaafada hodon qaylo waa dhul laba baloodh ah oo cabikiisiu yahay24/18
            </p>
            <div className="flex items-center justify-between">
              <span className="text-green-600 font-bold text-xl">10,000$</span>
              <Link
                to="/ProCard"
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
            src="../image/dhul2.jpg" // Replace with your image URL
            alt="Property" // Replace with a relevant alt text
          />

          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">DHUL IIB AH</h2>
            <p className="text-gray-700 text-base mb-4">
              waxa uu ku yaalaa magaalada buraco xaafada jaaliyada
            </p>
            <div className="flex items-center justify-between">
              <span className="text-green-600 font-bold text-xl">$20,000</span>
              <Link
                to="/ProCard1"
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
            src="../image/dhul3.jpg" // Replace with your image URL
            alt="Property" // Replace with a relevant alt text
          />

          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">DHUL IIB AH</h2>
            <p className="text-gray-700 text-base mb-4">
              waxa uu ku yaalaa magaalada buraco
            </p>
            <div className="flex items-center justify-between">
              <span className="text-green-600 font-bold text-xl">$19000</span>
              <Link
                to="/ProCard2"
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
            src="../image/dhul4.jpg" // Replace with your image URL
            alt="Property" // Replace with a relevant alt text
          />

          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">DHUL IIB AH</h2>
            <p className="text-gray-700 text-base mb-4">
              waxa uu ku yaalaa magaalada buraco
            </p>
            <div className="flex items-center justify-between">
              <span className="text-green-600 font-bold text-xl">$12000</span>
              <Link
                to="/ProCard3"
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
            src="../image/dhul5.jpg" // Replace with your image URL
            alt="Property" // Replace with a relevant alt text
          />

          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">DHUL IIB AH</h2>
            <p className="text-gray-700 text-base mb-4">
              waxa uu ku yaalaa magaalada buraco
            </p>
            <div className="flex items-center justify-between">
              <span className="text-green-600 font-bold text-xl">$16000</span>
              <Link
                to="/ProCard4"
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
            src="../image/dhul5.jpg" // Replace with your image URL
            alt="Property" // Replace with a relevant alt text
          />

          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">DHUL IIB AH</h2>
            <p className="text-gray-700 text-base mb-4">
              waxa uu ku yaalaa magaalada buraco
            </p>
            <div className="flex items-center justify-between">
              <span className="text-green-600 font-bold text-xl">$17000</span>
              <Link
                to="/ProCard5"
                className="btn bg-blue-500 hover:bg-white text-black font-bold py-2 px-4 rounded transition duration-300"
              >
                view
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Bannerdhul/>
      <Footer/>
    </>
  );
};


export default Dhulkaiibkaah
