import React from "react";
import ContactForm from "./ContactForm";
import Banner2 from "./Banner2"
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="contact-container max-w-4xl mx-auto px-4 py-8 bg-white shadow-lg rounded-lg mt-16">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Contact Us
      </h1>

      <div className="contact-details space-y-4">
        <div className="contact-item flex items-center space-x-4">
          <FaPhone className="icon text-blue-500" />
          <span className="text-lg text-gray-700">+252-63-4572232</span>
        </div>
        <div className="contact-item flex items-center space-x-4">
          <FaMapMarkerAlt className="icon text-green-500" />
          <span className="text-lg text-gray-700">
            Saldhiga-Dhexe Street, Burao City, Somaliland
          </span>
        </div>
        <div className="contact-item flex items-center space-x-4">
          <FaEnvelope className="icon text-red-500" />
          <span className="text-lg text-gray-700">Bulale@business.com</span>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-center text-gray-800 mt-8 mb-4">
        Connect with us on social media:
      </h2>

      <div className="social-media flex justify-center space-x-6 mt-4">
        <a
          href="https://www.facebook.com/profile.php?id=100016151312581&mibextid=ZbWKwL"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          <FaFacebook className="social-icon text-3xl" />
        </a>
        <a
          href="https://www.instagram.com/bulale11?igsh=MWpsajdlZHltMXBsbA=="
          target="_blank"
          rel="noreferrer"
          className="text-pink-600 hover:text-pink-800"
        >
          <FaInstagram className="social-icon text-3xl" />
        </a>
        <a
          href="https://wa.me/+252634572232"
          target="_blank"
          rel="noreferrer"
          className="text-green-600 hover:text-green-800"
        >
          <FaWhatsapp className="social-icon text-3xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/hamse-warsame-bulale-63829527a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noreferrer"
          className="text-blue-700 hover:text-blue-900"
        >
          <FaLinkedin className="social-icon text-3xl" />
        </a>
      </div>



    </div>
    <ContactForm/>
    <Banner2/>
   <Footer/>
   </>
  );
};

export default Contact;
