import React from "react";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  return (
    <nav className="relative flex justify-between items-center py-4 px-12 bg-white shadow-md">
      <div className="text-2xl font-bold text-blue-600 flex items-center">
        <img src={logo} alt="Hosting Pari" className="mr-2" />
      </div>
      <span className="lg:hidden absolute top-[1.2rem] right-[1rem] text-[4rem]">
        <GiHamburgerMenu />
      </span>{" "}
      <ul className="hidden lg:flex items-center space-x-12 text-gray-700 border border-[#DDD] rounded-full pl-6 pr-3 py-2">
        <li>
          <a
            href="#"
            className="text-[1.2rem] font-semibold hover:text-blue-600"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-[1.2rem] font-semibold hover:text-blue-600"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-[1.2rem] font-semibold hover:text-blue-600"
          >
            Hosting
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-[1.2rem] font-semibold hover:text-blue-600"
          >
            Domains
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-[1.2rem] font-semibold hover:text-blue-600"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-[1.2rem] font-semibold hover:text-blue-600"
          >
            Contact
          </a>
        </li>
        <button className="bg-[#1e3a8a] text-white px-6 py-3 rounded-full text-[1.2rem] font-semibold">
          Get Started
        </button>
      </ul>
    </nav>
  );
};

export default NavBar;
