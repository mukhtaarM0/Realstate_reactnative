import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const PropertyPage = () => {
  const apiUrl = process.env.REACT_APP_API_URL;

  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between p-6 bg-gray-100 rounded-lg shadow-lg">
      {/* Qoraalka dhinaca bidix */}
      <div className="md:w-1/2 md:mr-6">
  <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
    <h2 className="text-2xl font-bold mb-4">Macluumaadka guriga</h2>
    <ul className="text-gray-700 mb-4">
      <li><strong>Xaafada:</strong> Hodanqaylo</li>
      <li><strong>Udhaw:</strong> Laami</li>
      <li><strong>Kakooban:</strong> 3 qol</li>
      <li><strong>Qiimaha:</strong> 50$</li>
      <li><strong>Nooca:</strong> Nashqada danbe</li>
    </ul>
    <div className="flex space-x-4">
      <Link
        to="/ReservationCard3"
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
      >
        Kirayso
      </Link>
      <button
        type="button"
        onClick={() => window.history.back()}
        className="bg-gray-200 text-blue-500 font-bold py-2 px-4 rounded hover:bg-gray-300 hover:text-blue-700 transition duration-300"
      >
        Go Back
      </button>
    </div>
  </div>
</div>


      {/* Sawirka dhinaca midig */}
      <div className="md:w-1/2 mt-4 md:mt-0">
        <img
          src="../image/PropertyPage111.webp"
          alt="Sawir Tusaale"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default PropertyPage;
