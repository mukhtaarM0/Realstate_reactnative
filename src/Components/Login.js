import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const validationSchema = yup.object({
  email: yup.string().email('Email sax ma aha').required('Email waa muhiim'),
  password: yup.string().required('Password waa muhiim'),
});

function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
        email: values.email,
        password: values.password,
      });

      // Kaydi xogta user-ka
      localStorage.setItem('name', response.data.user.name);
      localStorage.setItem('email', response.data.user.email);
      localStorage.setItem('phone', response.data.user.phone);

      alert(response.data.message);
      navigate('/home');
    } catch (error) {
      console.error(error);
      alert('Email ama password qalad ah!');
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <img src="../image/logo77.png" alt="logo" className="w-64 mb-6" />
      <h2 className="text-xl font-bold text-gray-700 mb-4">Sign In</h2>

      <form onSubmit={formik.handleSubmit} className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md">
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            {...formik.getFieldProps('email')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
          )}
        </div>

        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            {...formik.getFieldProps('password')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
          )}
        </div>

        <button type="submit" className="w-full bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-white-600 transition">
          Login
        </button>

        <button
          type="button"
          onClick={() => navigate('/RegistrationForm')}
          className="w-full bg-white-200 text-gray-700 font-semibold py-2 rounded-lg mt-3 hover:bg-red-300 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Login;
