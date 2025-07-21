import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-red-600 text-gray-200 py-8 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div>
        <img
          className="logo h-16 w-auto object-contain mx-auto"
          src="../image/logo333.png"
          alt="Company Logo"
        />
        
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="font-semibold text-lg">Navigation</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="/Home" className="hover:text-white">Home</a></li>
            <li><a href="/About" className="hover:text-white">About Us</a></li>
            <li><a href="/Contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Category Links */}
        <div>
          <h3 className="font-semibold text-lg">Categories</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="/residential" className="hover:text-white">Residential</a></li>
            <li><a href="/commercial" className="hover:text-white">Commercial</a></li>
            <li><a href="/luxury" className="hover:text-white">Luxury</a></li>
            <li><a href="/rentals" className="hover:text-white">Rentals</a></li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div>
          <h3 className="font-semibold text-lg">Follow Us</h3>
          <div className="mt-2 flex space-x-4">
            <a href="https://facebook.com" className="hover:text-white" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="hover:text-white" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" className="hover:text-white" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" className="hover:text-white" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8 text-sm">
        <p>&copy; 2024 Amiin Real Estate Company. All rights reserved.</p>
        <p>Powered by sky group [mix] </p>
      </div>
    </footer>
  );
};

export default Footer;
