import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const ReservationCard2 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  const [phone, setPhone] = useState('');

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6 pt-4">
      <h2 className="text-2xl font-bold text-center mb-6">Regester Now</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Magacaaga"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Email-kaaga"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone Number
          </label>
          <PhoneInput
            country={'so'}
            value={phone}
            onChange={setPhone}
            inputClass="w-full mt-1 p-2 border border-gray-200 rounded-md text-sm"
          />
        </div>

        <div className="flex justify-between mt-6 space-x-2">
          <button
            type="submit"
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit
          </button>
          
          <a
            href="/Dhulkaiibkaah"
            className="flex-1 bg-gray-200 text-blue-500 font-bold py-2 px-4 rounded hover:bg-gray-300 hover:text-blue-700 transition duration-300 text-center"
          >
            Go Back
          </a>

          <a
            href="https://wa.me/+252634785136" // Replace with your WhatsApp link
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 text-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </form>
    </div>
  );
};

export default ReservationCard2;
