import React from "react";
import { faqs } from "../utils/constant";
import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-[#e4ebff] p-8 rounded-xl mx-auto">
      <h2 className="text-[2rem] text-center font-bold my-3">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col lg:flex-row justify-center gap-4 mt-6 bg-[#d9e3ff] p-6 rounded-lg shadow-lg">
        <div>
          <h2 className="text-[2rem] font-bold my-3">
            Got Questions? We’ve Got Answers!
          </h2>
          <p className="mb-6 text-[1.2rem]">
            Find answers to common queries about our hosting services, features,
            and support.
          </p>
          <button className="bg-[#1e3a8a] mt-8 text-white px-6 py-3 rounded-full text-[1.2rem] font-semibold">
            Get In Touch
          </button>
        </div>
        <div className="mt-6 border-t max-w-[700px] w-full border-gray-300">
          {faqs.map((faq, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <div className="border-b border-gray-300">
                  <Disclosure.Button
                    className={`flex justify-between w-full p-4 text-left text-lg font-medium hover:text-[#fff] focus:outline-none ${
                      openIndex === index
                        ? "bg-[#1e3a8a] text-white rounded-t-lg"
                        : "text-gray-900 hover:bg-[#1e3a8a]"
                    }`}
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  >
                    {faq.question}
                    <span className="border-2 border-[#a4bcff] bg-[#e4ebff] p-2 rounded-full">
                      {openIndex === index ? (
                        <FaMinus className="w-5 h-5 text-gray-600" />
                      ) : (
                        <FaPlus className="w-5 h-5 text-gray-600" />
                      )}
                    </span>
                  </Disclosure.Button>
                  {openIndex === index && (
                    <Disclosure.Panel className="w-full px-4 py-6 bg-[#1e3a8a] text-[#fff] rounded-b-lg">
                      {faq.answer}
                    </Disclosure.Panel>
                  )}
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
