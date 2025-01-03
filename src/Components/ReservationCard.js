import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import 'react-datepicker/dist/react-datepicker.css';

const ReservationCard = () => {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [guests, setGuests] = useState(1); 
  const [phone, setPhone] = useState(''); // State for phone number

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-sm p-6 bg-white shadow-md rounded-lg border">
        {/* Title Section */}
        <div className="text-lg font-medium text-center">
          <h2>Regester</h2>
        </div>

        {/* Check-in and Check-out Dates */}
        <div className="flex justify-between items-center mt-4 border border-gray-200 rounded-md p-3">
          <div>
            <span className="block text-xs text-gray-500">xiliga-sogalista</span>
            <DatePicker
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              dateFormat="MM/dd/yyyy"
              className="block text-sm w-full"
            />
          </div>
          <div>
            <span className="block text-xs text-gray-500">xiliga-kabixida</span>
            <DatePicker
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              dateFormat="MM/dd/yyyy"
              className="block text-sm w-full"
            />
          </div>
        </div>

        {/* Guest Selection */}
        <div className="flex justify-between items-center mt-2 border border-gray-200 rounded-md p-3">
          <span className="block text-xs text-gray-500">GUESTS</span>
          <select
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="block w-full text-sm"
          >
            <option value={1}>1 Famly</option>
            <option value={2}>2 Xaas</option>
            <option value={3}>3 Kali</option>
           
          </select>
        </div>

        {/* Phone Number with Country Code */}
        <div className="flex flex-col mt-2 border border-gray-200 p-3">
          <span className="block text-xs text-gray-500">r</span>
          <PhoneInput
            country={'so'} // Default country can be set here
            value={phone}
            onChange={setPhone}
            inputClass="w-full mt-1 p-2 border border-gray-200 rounded-md text-sm"
          />
        </div>

        {/* Email Input */}
        <div className="flex flex-col mt-2 border border-gray-200 p-3">
          <span className="block text-xs text-gray-500"></span>
          <input
            type="email"
            placeholder="Enter your email"
            className="block w-full mt-1 p-2 border border-gray-200 rounded-md text-sm"
          />
        </div>

        {/* Reserve Button */}
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">
          Reserve
        </button>
        

        {/* Price Breakdown */}
        <div className="mt-4 text-sm text-gray-500 text-center">You won't be charged yet</div>
        <a
        href="Guryaha"
       
      >
        Go Back
      </a>
      </div>
    </div>
  );
};

export default ReservationCard;

