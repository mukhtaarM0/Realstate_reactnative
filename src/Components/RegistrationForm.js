import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegistrationForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters")
      .max(30, "Name must be 30 characters or less"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  return (
    <div className="registration-container max-w-md mx-auto mt-10 bg-white p-8 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        User Registration
      </h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Form data", values);
        }}
      >
        {({ touched, errors }) => (
          <Form>
            <div className="form-group mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2  w-32">
                Name
              </label>
              <Field
                name="name"
                type="text"
                placeholder="Enter your name"
                className={`form-input w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  touched.name && errors.name ? "border-red-500" : ""
                }`}
              />
              <ErrorMessage
                component="div"
                name="name"
                className="text-red-500 mt-1"
              />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2  w-32">
                Email
              </label>
              <Field
                name="email"
                type="email"
                placeholder="Enter your email"
                className={`form-input w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  touched.email && errors.email ? "border-red-500" : ""
                }`}
              />
              <ErrorMessage
                component="div"
                name="email"
                className="text-red-500 mt-1"
              />
            </div>

            <div className="form-group mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 mb-2 w-32"
              >
                Password
              </label>
              <Field
                name="password"
                type="password"
                placeholder="Enter your password"
                className={`form-input w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  touched.password && errors.password ? "border-red-500" : ""
                }`}
              />
              <ErrorMessage
                component="div"
                name="password"
                className="text-red-500 mt-1"
              />
            </div>

            <div className="form-group mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 mb-2 w-32"
              >
                Confirm Password
              </label>
              <Field
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                className={`form-input w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  touched.confirmPassword && errors.confirmPassword
                    ? "border-red-500"
                    : ""
                }`}
              />
              <ErrorMessage
                component="div"
                name="confirmPassword"
                className="text-red-500 mt-1"
              />
            </div>

            <button
              type="submit"
              className="submit-button w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 "
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
