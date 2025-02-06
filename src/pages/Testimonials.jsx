import React from "react";
import { testimonials } from "../utils/constant";
import { FaStar } from "react-icons/fa6";
import TestimonialImg from "../assets/testi1.png";

const Testimonials = () => {
  return (
    <div className="bg-[#1e3a8a] text-white text-center mt-8 py-10 px-4 md:px-20 w-full shadow-lg">
      <div className="flex flex-col lg:flex-row justify-center bg-[#d9e3ff] rounded-[1.5rem] py-16 px-10 gap-20">
        <div className="text-[#000] text-start">
          <h3 className="text-[2rem] font-bold">
            See what our customers are saying
          </h3>
          <p className="text-[1.2rem]">Trusted by businesses worldwide</p>
          <div className=" text-[2.5rem] font-semibold mt-16 md:mt-24">
            Excellent
          </div>
          <div className="flex items-center justify-start gap-2 mt-2">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="text-[#1e3a8a] text-[2rem] bg-[#b9cbff] p-2 rounded-lg"
              >
                <FaStar />
              </span>
            ))}
            <span className="text-lg">4.8</span>
          </div>
          <p className="text-[1.4rem] mt-4">Based on 1000+ reviews</p>
        </div>

        {/* Testimonials */}
        <div className="h-[520px] overflow-x:hidden overflow-scroll slidingbar">
          <div className="mt-2 space-y-4 ">
            {testimonials.map((testimonial, index) => (
              <div className="bg-[#d9e3ff] text-black p-4 rounded-xl shadow-lg border border-[#b7cafc] flex flex-col max-w-[650px]">
                <p className="text-[1.2rem] text-start font-semibold">
                  {testimonial.review}
                </p>
                <div className="flex flex-col xl:flex-row justify-between">
                  <div className="flex items-center gap-3 mt-3">
                    <img
                      src={TestimonialImg}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full border-2 border-blue-500"
                    />
                    <div className="text-start">
                      <p className="text-[1rem] font-bold">
                        {testimonial.name}
                      </p>
                      <p className="text-[1rem] font-semibold">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-1 mt-2 text-blue-600">
                    <span className="text-md text-[#1e3a8a] font-semibold">
                      4.8
                    </span>
                    <div className="flex items-center justify-start gap-2 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className="text-[#1e3a8a] text-[1rem] bg-[#b9cbff] p-2 rounded-sm"
                        >
                          <FaStar />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
