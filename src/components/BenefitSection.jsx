import React from "react";
import { benefits } from "../utils/constant";
import BenefitImage from "../assets/benefits image.png";
import { FaCheck } from "react-icons/fa6";

const BenefitSection = () => {
  return (
    <div className="bg-[#f2f5ff] py-14 px-10 rounded-lg flex flex-col lg:flex-row items-center justify-center gap-[5rem]">
      <img
        data-aos="fade-right"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-delay="200"
        src={BenefitImage}
        alt="Happy customer"
        className="bg-[#e8eeff] rounded-[2rem] md:mr-8"
        style={{
          boxShadow: "10px 10px 0px 0px rgba(18, 50, 137, 0.13)",
        }}
      />
      <div className="max-w-[40rem]">
        <span className="bg-[#d9e3ff] font-semibold rounded-full text-[1rem] px-3 py-2">
          Why Us?
        </span>
        <h2 className="text-[2.6rem] font-semibold my-3">
          Benefits Of Choosing Us
        </h2>
        <p className="mb-6">
          We provide top-tier hosting solutions designed to keep your website
          fast, secure, and always online. Here’s why businesses trust us
        </p>
        <ul className="space-y-2 flex flex-col gap-[0.8rem]">
          {benefits.map((benefit, index) => (
            <li
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-delay={index * 200}
              key={index}
              className="flex items-center space-x-4"
            >
              <span className="text-[#fff] bg-[#577adf] p-2 rounded-md">
                <FaCheck />
              </span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        <button className="bg-[#1e3a8a] mt-8 text-white px-6 py-3 rounded-full text-[1.2rem] font-semibold">
          Get Started →
        </button>
      </div>
    </div>
  );
};

export default BenefitSection;
