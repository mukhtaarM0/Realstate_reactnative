import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Please fill in all fields");
    } else {
      setError("");
      // Handle form submission, e.g., call an API
      console.log("Email:", email);
      console.log("Password:", password);
    }
  };

  return (
    <div className="login-container max-w-md mx-auto mt-10 bg-white p-8 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Login
      </h2>
      {error && (
        <p className="error-message text-red-500 text-center mb-4">{error}</p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2 w-32">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="form-input w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="password" className="block text-gray-700 mb-2  w-32">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            className="form-input w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
          />
        </div>
        <button
        
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
