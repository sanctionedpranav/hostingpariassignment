import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="p-12 bg-[#d9e3ff]">
      <div className="bg-[#1E3A8A] text-center md:text-start text-white p-10 rounded-2xl mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1">
            <div className="mb-4 text-center md:text-start">
              <img src={logo} alt="Hosting Pari" className="w-40 rounded-lg bg-[#fff]" />
            </div>
            <p className="text-sm">
              Enjoy Seamless Integration, Fast Speeds, And Top-Tier Support To
              Help Your Business Grow With Ease.
            </p>
            <div className="flex space-x-4 mt-4 text-lg justify-center lg:justify-start">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedinIn />
            </div>
          </div>

          {/* Navigation Sections */}
          <div>
            <h3 className="font-semibold text-[1.6rem] mb-5 ">Company</h3>
            <ul className="space-y-3 text-[1rem]">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">About Us</li>
              <li className="cursor-pointer">Pricing</li>
              <li className="cursor-pointer">Contact</li>
              <li className="cursor-pointer">Domain</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[1.6rem] mb-5 ">Help & Support</h3>
            <ul className="space-y-3 text-[1rem]">
              <li className="cursor-pointer">Navigation Link</li>
              <li className="cursor-pointer">Navigation Link</li>
              <li className="cursor-pointer">Navigation Link</li>
              <li className="cursor-pointer">Navigation Link</li>
              <li className="cursor-pointer">Navigation Link</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[1.6rem] mb-5 ">Help & Support</h3>
            <ul className="space-y-3 text-[1rem]">
              <li className="cursor-pointer">Navigation Link</li>
              <li className="cursor-pointer">Navigation Link</li>
              <li className="cursor-pointer">Navigation Link</li>
              <li className="cursor-pointer">Navigation Link</li>
              <li className="cursor-pointer">Navigation Link</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[1.6rem] mb-5 ">Products & Solution</h3>
            <ul className="space-y-3 text-[1rem]">
              <li className="cursor-pointer">Navigation Link</li>
              <li className="cursor-pointer">Navigation Link</li>
              <li className="cursor-pointer">Navigation Link</li>
              <li className="cursor-pointer">Navigation Link</li>
              <li className="cursor-pointer">Navigation Link</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm mt-16">
          Copyright@Hostingpari2024
        </div>
      </div>
    </footer>
  );
};

export default Footer;
