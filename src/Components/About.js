import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Footer from "./Footer";
import Banner2 from "./Banner2";

function About() {
  return (
    <>
    <div className="about-container flex flex-col md:flex-row items-center md:items-start p-6">
      {/* Text Section */}
      <div className="md:w-1/2">
        <h1 className="text-5xl text-blue-600 font-bold mb-4">About Us</h1>
        <p className="mb-4">
          Welcome to <strong>Aamin Real Estate</strong>, your trusted partner
          in finding the perfect home, office space, or investment property. We
          are dedicated to offering the best real estate solutions, ensuring our
          clients find the property that fits their needs.
        </p>
        <p className="mb-4">
          Since our establishment in 2022, <strong>Aamin Real Estate</strong> has grown 
          to become one of the most respected names in the industry. From residential
          properties to commercial spaces, we provide a wide range of real estate services.
        </p>
        <p className="mb-4">
          We pride ourselves on delivering exceptional customer service, helping you
          navigate the complexities of the real estate market with ease. Our dedicated
          team is here to assist you every step of the way.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Extensive portfolio of properties</li>
          <li>Expert knowledge of the real estate market</li>
          <li>Personalized service for every client</li>
          <li>Professional and experienced agents</li>
          <li>Commitment to transparency and integrity</li>
        </ul>
        <p>Thank you for choosing Aamin Real Estate for your property needs!</p>
      </div>

      {/* Image Section */}
      <div className="w-128 h-128 flex justify-center mt-6 md:ml-8">
        <img
          src="../image/m-4.png"
          alt="About us"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
    <Banner2/>
    <Footer/>
   </>

  );
}

export default About;
