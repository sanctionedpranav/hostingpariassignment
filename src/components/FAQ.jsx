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
      <div className="flex flex-col lg:flex-row justify-center mt-6 bg-[#d9e3ff] p-6 rounded-lg shadow-lg">
        <div>
          <h3 className="text-xl font-semibold">
            Got Questions? We’ve Got Answers!
          </h3>
          <p className="text-gray-600 mt-2">
            Find answers to common queries about our hosting services, features,
            and support.
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
            Get In Touch
          </button>
        </div>
        <div className="mt-6 border-t border-gray-300">
          {faqs.map((faq, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <div className="border-b border-gray-300">
                  <Disclosure.Button className="flex justify-between w-full p-4 text-left text-lg font-medium text-gray-900 hover:bg-[#1e3a8a] bg-[#1e3a8a] hover:text-[#fff] focus:outline-none">
                    {faq.question}
                    {open ? (
                      <FaMinus className="w-5 h-5 text-blue-600" />
                    ) : (
                      <FaPlus className="w-5 h-5 text-gray-600" />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 py-6 bg-[#1e3a8a] text-[#fff] rounded-lg">
                    {faq.answer}
                  </Disclosure.Panel>
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
