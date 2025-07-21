import React, { useState } from "react";

const Herosec = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Image Section with Text Overlay */}
      <div className="w-full h-[600px] mb-6 mt-15 p-4 relative">
        <img
          src="../image/ho.jpeg"
          alt="Beautiful vacation rental in Hargeisa"
          className="w-full h-full object-cover rounded-lg"
        />
        {/* Text Overlay with Background */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <div className="bg-black bg-opacity-50 p-4 rounded-lg">
            <h1 className="text-6xl font-bold text-white">
              Vacation Rentals in Burco
            </h1>
            <h3 className="text-xl mt-2 text-gray-300">
              Find and book unique accommodations in Aamin Real Satet
            </h3>
          </div>
        </div>
      </div>

      {/* Popup Trigger Button */}
      <div className="flex space-x-4 mb-20">
        <button
          onClick={() => setIsPopupOpen(true)}
          className="bg-red-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 transition duration-300"
        >
          Search for Rentals
        </button>

    
      </div>

      {/* Popup Modal with Inputs */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full transition transform duration-300 space-y-4">
            <h1 className="text-3xl font-bold mb-2">
              Vacation rentals in Hargeisa
            </h1>
            <p className="text-gray-600 mb-4">
              Find and book unique accommodations on Airbnb
            </p>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                placeholder="Search"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Check In
                </label>
                <input
                  type="date"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Check Out
                </label>
                <input
                  type="date"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                />
              </div>
            </div>

            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">
              Search
            </button>

            {/* Close button */}
            <button
              onClick={() => setIsPopupOpen(false)}
              className="mt-4 w-full text-center text-pink-500 underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Herosec;
