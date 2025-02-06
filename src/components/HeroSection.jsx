import React from "react";
import HeroImage from "../assets/herosection.png";

const HeroSection = () => {
  return (
    <div
      className="relative flex items-center text-center text-white py-20 px-6 bg-cover bg-center h-[600px]"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>
      <div className="relative z-10 max-w-[50rem] mx-auto">
        <h1 className="text-[1.8rem] md:text-5xl font-bold leading-8">
          Effortless Hosting Solutions To Scale Your Website And Business
        </h1>
        <p className="mt-8 text-lg max-w-[28rem] mx-auto">
          Enjoy seamless integration, fast speeds, and top-tier support to help
          your business grow with ease.
        </p>
        <button className="bg-[#1e3a8a] mt-8 text-white px-6 py-3 rounded-full text-[1.2rem] font-semibold">
          Get Started →
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
