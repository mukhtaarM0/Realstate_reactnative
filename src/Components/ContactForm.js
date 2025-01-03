import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: ""
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      subject: Yup.string().required("Subject is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="max-w-x2 mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">Fill up the Form</h2>
      <form onSubmit={formik.handleSubmit}>
        {/* Name and Email Fields */}
        <div className="flex space-x-4 mb-4">
          {/* Name Input */}
          <div className="w-1/2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
            ) : null}
          </div>

          {/* Email Input */}
          <div className="w-1/2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
            ) : null}
          </div>
        </div>

        {/* Subject Input */}
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
          <textarea
            id="subject"
            name="subject"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subject}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 h-32"
          />
          {formik.touched.subject && formik.errors.subject ? (
            <div className="text-red-500 text-sm mt-1">{formik.errors.subject}</div>
          ) : null}
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
