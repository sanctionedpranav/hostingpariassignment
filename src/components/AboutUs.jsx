import React from "react";
import AboutusImage from "../assets/aboutus.png";
import { actualnumbers } from "../utils/constant";

const AboutUs = () => {
  return (
    <div className="bg-[#eff3ff] p-4 md:p-8">
      <div className="bg-[#1e3a8a] py-14 px-10 md:px-16 rounded-[4rem]">
        <div className="flex flex-col 2xl:flex-row items-center justify-center gap-[5rem]">
          <div className="max-w-[40rem] text-[#fff]">
            <span className="bg-[#3052b3] border font-semibold rounded-full text-[1rem] px-5 py-3">
              About Us?
            </span>
            <h2 className="text-[1.6rem] leading-[35px] font-semibold mt-10 mb-6">
              Empowering Your Online Journey with Reliable Hosting Solutions
            </h2>
            <p className="mb-6 tracking-wide text-[1.1rem]">
              At HostingPari, we are dedicated to providing fast, secure, and
              scalable web hosting services designed to meet the needs of
              businesses and individuals alike. Whether you're just starting
              your online presence or scaling up, we’ve got you covered with
              top-tier solutions that keep your website running smoothly.
            </p>
            <p className="mb-6 tracking-wide text-[1.1rem]">
              With over a decade of experience in the industry, our team works
              tirelessly to offer the best-in-class infrastructure, cutting-edge
              technology, and 24/7 customer support to ensure your website is
              always performing at its best. We pride ourselves on building
              lasting relationships with our clients, supporting them every step
              of the way as they grow and succeed.
            </p>
          </div>
          <img
            src={AboutusImage}
            alt="Happy customer"
            className="bg-[#e8eeff] rounded-[2rem] md:mr-8 max-w-full"
          />
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center mt-10">
          {actualnumbers?.map((element, index) => {
            return (
              <div
                key={index}
                className={`relative border text-center text-[#fff] max-w-[370px] w-full pt-16 pb-12 
                ${index === 0 ? "rounded-tl-2xl rounded-bl-2xl" : ""}
                ${index === 3 ? "rounded-tr-2xl rounded-br-2xl" : ""}
                `}
              >
                <div
                  className="absolute top-0 right-[50%] left-[50%] h-1 w-6 bg-white "
                  style={{
                    boxShadow: "0px 36px 60px 10px #ffffff",
                  }}
                />

                <h2 className="text-[32px] leading-[35px] font-semibold mt-10 mb-6">
                  {element?.number}
                </h2>
                <p className="text-[20px]">{element?.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
