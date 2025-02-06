import React from "react";
import { plans } from "../utils/constant";
import AgentImage from "../assets/agent.png";
import { GoZap } from "react-icons/go";

const HostingPlans = () => {
  return (
    <div className="text-center py-10 px-3">
      <h2 className="text-3xl font-bold">Hosting Solutions For Every Need</h2>
      <p className="max-w-[750px] mx-auto mt-2">
        Find the perfect hosting solution tailored to your needs—whether you're
        launching a personal blog, managing a growing business, or running
        high-traffic applications.
      </p>

      <div className="flex flex-col xl:flex-row gap-[2rem] mt-6 lg:pl-10">
        <div
          data-aos="fade-up"
          className="text-center lg:text-left md:max-w-[500px] mx-auto"
        >
          <h2 className="text-[1.6rem] font-semibold my-3">
            A Team of Experts at Your Service
          </h2>
          <p className="mb-6">
            Our experienced support team is ready to assist you with any
            questions—quickly and efficiently. Get expert guidance in your
            preferred language and keep your hosting worry-free
          </p>
          <img
            src={AgentImage}
            alt="Happy agent"
            className="rounded-[1rem] md:mr-8 pr-3"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {plans.map((plan, index) => (
            <div
              data-aos="zoom-in"
              data-aos-delay={index * 200}
              key={index}
              className="bg-[#e4ebff] p-5 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <div className="text-[#fff] text-[2.2rem] bg-[#1e3a8a] p-3 rounded-lg">
                <GoZap />
              </div>{" "}
              <h3 className="text-xl font-semibold mt-2">{plan.title}</h3>
              <p className="text-[1.2rem] leading-[22px] my-2">
                {plan.description}
              </p>
              <p className="text-2xl font-bold text-[#1e3a8a] mt-2">
                {plan.price}
              </p>
              <button className="mt-4 bg-[#1e3a8a] text-white px-4 py-2 rounded-full hover:bg-[#1e3c8c]">
                View Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HostingPlans;
