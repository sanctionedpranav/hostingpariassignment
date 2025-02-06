import React, { useState } from "react";
import { perfectPlans } from "../utils/constant";
import { FaCheck } from "react-icons/fa6";

const PerfectPlan = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <div className="py-12 bg-gray-100 text-center">
      <h2 className="text-[2rem] font-bold my-3">Choose Your Perfect Plan</h2>
      <p className="mb-6 text-[1.2rem]">
        Affordable, Secure, and Scalable Hosting for Your Needs
      </p>

      <div className="flex justify-center items-center mt-6">
        <span
          className={`mr-2 font-semibold ${
            billingCycle === "monthly" ? "text-blue-600" : "text-gray-500"
          }`}
        >
          Monthly
        </span>
        <button
          className="relative w-14 h-7 bg-[#1e3a8a] rounded-full flex items-center px-1"
          onClick={() =>
            setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")
          }
        >
          <div
            className={`w-6 h-6 bg-white rounded-full shadow-md transform ${
              billingCycle === "yearly" ? "translate-x-7" : "translate-x-0"
            } transition-transform`}
          ></div>
        </button>
        <span
          className={`ml-2 font-semibold ${
            billingCycle === "yearly" ? "text-blue-600" : "text-gray-500"
          }`}
        >
          Yearly
        </span>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8">
        {perfectPlans.map((plan, index) => (
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            key={index}
            className={`p-6 w-80 shadow-lg rounded-xl border ${plan.borderColor} ${plan.bgColor}`}
          >
            <div className="flex items-center gap-2">
              <span className="text-[2rem] text-[#fff] bg-[#1e3a8a] p-2 rounded-lg">
                {" "}
                {plan?.icon}
              </span>
              <h3
                className={`text-[2rem] font-semibold text-center ${plan.textColor}`}
              >
                {plan.name}
              </h3>
            </div>
            <p
              className={`text-left text-[2rem] mt-2 font-bold ${plan.textColor}`}
            >
              {billingCycle === "monthly"
                ? plan.monthlyPrice
                : plan.yearlyPrice}
            </p>
            <ul className={`mt-4 space-y-2 ${plan.textColor}`}>
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span
                    className={`text-[#fff] bg-${plan.checkbg} p-2 rounded-md`}
                  >
                    <FaCheck />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className={`mt-6 w-full py-2 rounded-full ${
                plan.popular
                  ? "bg-white text-blue-600"
                  : "bg-[#1e3a8a] text-white"
              } font-semibold hover:opacity-90`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerfectPlan;
