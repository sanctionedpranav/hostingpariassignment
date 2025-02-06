import React, { useState } from "react";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaAngleDown } from "react-icons/fa6";
import { dropdown } from "../utils/constant";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex justify-between items-center py-4 px-12 bg-white shadow-md">
      <div className="text-2xl font-bold text-blue-600 flex items-center">
        <img src={logo} alt="Hosting Pari" className="mr-2" />
      </div>
      <span className="lg:hidden absolute top-[1.4rem] right-[1rem] text-[3rem]">
        <GiHamburgerMenu />
      </span>
      <ul className="hidden lg:flex items-center space-x-12 text-gray-700 border border-[#DDD] rounded-full px-6 py-2">
        {[
          { name: "Home", link: "#" },
          { name: "About Us", link: "#" },
          { name: "Domains", link: "#" },
          { name: "Pricing", link: "#" },
          { name: "Contact", link: "#" },
        ].map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              className="text-[1.2rem] font-semibold hover:underline underline-offset-4 hover:text-blue-600"
            >
              {item.name}
            </a>
          </li>
        ))}
        <li
          className="relative"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <a
            href="#"
            className="text-[1.2rem] font-semibold hover:text-blue-600 hover:underline underline-offset-4 flex items-center gap-1"
          >
            <span>Hosting</span>
            <FaAngleDown className="text-[1.2rem]" />
          </a>
          {isOpen && (
            <ul className="absolute z-50 top-5 left-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden transition-opacity duration-300 ease-in-out border-2 drop-shadow-lg">
              {dropdown.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="block px-5 py-4 text-gray-700 hover:bg-[#3052b3] hover:text-white transition border-b"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
        <button className="bg-[#1e3a8a] text-white px-6 py-3 rounded-full text-[1.2rem] font-semibold">
          Get Started
        </button>
      </ul>
    </nav>
  );
};

export default NavBar;
