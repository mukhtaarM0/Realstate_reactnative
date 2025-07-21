import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";

const ReservationCard3 = () => {
  const [name, setName] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { name, checkOut, phone, email };
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/reserves_guri`, payload);
      alert("Reservation successful!");
    } catch (error) {
      alert("Failed to reserve.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow mt-10">
      <h2 className="text-center text-xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-2">
          <div>
          <label className="text-sm">Full Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full border p-2 rounded" />
        </div>
          <div>
            <label className="text-sm">Date</label>
            <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="w-full border p-2 rounded" />
          </div>
        </div>

      

        <PhoneInput country={"so"} value={phone} onChange={setPhone} inputStyle={{ width: "100%" }} />

        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border p-2 rounded" />

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Reserve</button>

        <p className="text-center text-sm text-gray-500">You won’t be charged yet</p>
        <div className="text-center">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="text-blue-600 bg-transparent border-none p-0 cursor-pointer hover:underline"
          >
            Go Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReservationCard3;