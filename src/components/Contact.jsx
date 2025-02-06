import React from "react";
import { contact } from "../utils/constant";

const Contact = () => {
  return (
    <div className="py-20 px-10">
      <div className="max-w-[50rem] mx-auto text-center">
        <span className="bg-[#3052b3] border font-semibold rounded-full text-[1.1rem] text-[#1e3a8a] bg-[#f8f8f8] px-6 py-3">
          Contact
        </span>
        <h2 className="text-[2rem] font-bold my-3">
          Get in Touch – We’re Here to Help!
        </h2>
        <p className="mb-6 text-[1.2rem]">
          Have questions or need assistance? Our support team is always ready to
          help you with quick and effective solutions. Reach out through any of
          the channels below!
        </p>
      </div>

      <div className="bg-[#1e3a8a] rounded-[2.5rem] py-14 px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {contact.map((element, index) => (
            <div
              key={index}
              className="max-w-[500px] py-10 px-16 rounded-[1.4rem] shadow-md flex flex-col justify-center items-center text-center bg-[#fff]"
              style={{
                boxShadow: "0px 0px 10px 0px rgba(30, 59, 138, 0.71)",
              }}
            >
              <div className="text-[#fff] text-[2.2rem] bg-[#1e3a8a] p-3 rounded-[1rem]">
                <div>{element?.icon}</div>
              </div>{" "}
              <h3 className="text-[24px] font-bold mt-2">
                {element.title}
              </h3>
              <p className="text-[1.2rem] leading-[22px] my-2">
                {element.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
