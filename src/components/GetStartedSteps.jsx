import React from "react";
import { steps } from "../utils/constant";
import StepsImage from "../assets/steps.png";

const GetStartedSteps = () => {
  return (
    <div className="bg-[#1e3a8a] text-white py-12 px-6 text-center relative">
      <h2 className="text-[2.6rem] font-semibold my-3">
        Get Your Website Online in 3 Simple Steps
      </h2>
      <p className="mb-6 mt-3 max-w-[750px] mx-auto">
        We turn your ideas into reality with the perfect domain and
        budget-friendly hosting. Your all-in-one solution for building a
        powerful online presence.🎯 No stress, no downtime—just a smooth
        transition to a high-performance website!
      </p>

      <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="w-full max-w-[700px]">
          <img
            data-aos="zoom-in"
            data-aos-delay="200"
            className="w-full"
            src={StepsImage}
            alt="Website Setup Illustration"
          />
        </div>
        <div className="flex flex-col items-start gap-6">
          {steps.map((step, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={index * 200}
              key={index}
              className="w-full md:w-[550px] text-left flex items-center gap-4"
            >
              <span className="text-[2.8rem] bg-[#e4ebff] p-2 rounded-xl border-2 border-[#c1c7d0]">
                {step.icon}
              </span>

              <div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-gray-300">{step.description}</p>
              </div>
            </div>
          ))}
          <div className="mt-8">
            <button className="px-6 py-3 bg-white text-blue-900 font-bold rounded-lg hover:bg-gray-200">
              Get Started →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedSteps;
