import React from "react";
import { features } from "../utils/constant";

const Features = () => {
  return (
    <div className="py-20 px-8">
      <div className="max-w-[50rem] mx-auto text-center">
        <span className="bg-[#3052b3] border font-semibold rounded-full text-[1.1rem] text-[#1e3a8a] bg-[#f8f8f8] px-6 py-3">
          Features
        </span>
        <h2 className="text-[2rem] font-bold my-3">
          Powerful Hosting, Packed with Exclusive Features
        </h2>
        <p className="mb-6 text-[1.2rem]">
          Trusted by 100+ companies worldwide
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {features.map((element, index) => (
          <div
            key={index}
            className="max-w-[500px] py-10 px-16 rounded-[1.4rem] shadow-md flex flex-col justify-center items-center text-center"
            style={{
              boxShadow: "0px 0px 10px 0px rgba(30, 59, 138, 0.71)",
            }}
            data-aos="fade-up"
            data-aos-delay={index * 200} // Adds a delay for each card
          >
            <div className="text-[#fff] text-[2.2rem] bg-[#1e3a8a] p-3 rounded-lg">
              <div>{element?.icon}</div>
            </div>
            <h3 className="text-[24px] font-semibold mt-2">{element.title}</h3>
            <p className="text-[1.2rem] leading-[22px] my-2">
              {element.description}
            </p>
            <p className="text-2xl font-bold text-[#1e3a8a] mt-2">
              {element.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
