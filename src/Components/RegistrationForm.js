import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MdPerson, MdEmail, MdCall, MdLock } from 'react-icons/md';
// import logo from '../assets/logo-bg.png';

// VALIDATION SCHEMA
const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone is required'),
  password: yup.string().required('Password is required'),
});

const RegistrationForm = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/login');
  };

  const handleSubmit = async (values) => {
    console.log('Submitted', values);

    try {
      const response = await axios.post('http://localhost:3000/user', values);
      alert(`Welcome: ${response.data.message}`);
    } catch (error) {
      console.error('Error:', error.message);
      alert('Something went wrong!');
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      {/* <img src={logo} alt="Logo" className="w-72 h-64 object-contain mb-2" /> */}
      <p className="text-lg font-bold mb-2 w-full max-w-md text-center mx-auto ">SIGN UP</p>


      <form onSubmit={formik.handleSubmit} className="w-full max-w-md space-y-4">
        {/* Name Field */}
        <div className="flex items-center bg-white border border-gray-300 rounded-xl px-3 py-2">
          <MdPerson className="text-gray-400 mr-2" />
          <input
            type="text"
            name="name"
            placeholder="Enter Your Full Name"
            className="flex-1 outline-none text-gray-800"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </div>
        {formik.touched.name && formik.errors.name && (
          <p className="text-red-500 text-sm">{formik.errors.name}</p>
        )}

        {/* Email Field */}
        <div className="flex items-center bg-white border border-gray-300 rounded-xl px-3 py-2">
          <MdEmail className="text-gray-400 mr-2" />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className="flex-1 outline-none text-gray-800"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-sm">{formik.errors.email}</p>
        )}

        {/* Phone Field */}
        <div className="flex items-center bg-white border border-gray-300 rounded-xl px-3 py-2">
          <MdCall className="text-gray-400 mr-2" />
          <input
            type="text"
            name="phone"
            placeholder="Enter Your Phone Number"
            className="flex-1 outline-none text-gray-800"
            value={formik.values.phone}
            onChange={formik.handleChange}
          />
        </div>
        {formik.touched.phone && formik.errors.phone && (
          <p className="text-red-500 text-sm">{formik.errors.phone}</p>
        )}

        {/* Password Field */}
        <div className="flex items-center bg-white border border-gray-300 rounded-xl px-3 py-2">
          <MdLock className="text-gray-400 mr-2" />
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            className="flex-1 outline-none text-gray-800"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </div>
        {formik.touched.password && formik.errors.password && (
          <p className="text-red-500 text-sm">{formik.errors.password}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-white-600 text-black font-semibold py-2 rounded-xl shadow-md transition duration-200"
        >
          Sign Up
        </button>

        {/* Redirect to Login */}
        <button
          type="button"
          onClick={handleRedirect}
          className="w-full bg-red-500 hover:bg-white-600 text-black font-semibold py-2 rounded-xl shadow-md transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
