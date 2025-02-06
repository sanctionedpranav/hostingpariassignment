import React from "react";
import { domains } from "../utils/constant";

const DomainSearch = () => {
  return (
    <div className="bg-[#1e3a8a] text-white p-12 text-center">
      <h2 className="text-[1.2rem] font-semibold">Domain Search</h2>
      <div className="flex justify-center max-w-[550px] mx-auto mt-4 bg-[#fff] rounded-full">
        <input
          type="text"
          placeholder="Enter your domain name (e.g. website.com)"
          className="py-3 px-6 w-full rounded-full text-gray-800 outline-none"
        />
        <button className="bg-[#1e3a8a] px-6 py-1 rounded-full">Search</button>
      </div>
      <div className="flex justify-center space-x-2 md:space-x-4 mt-4 px-3">
        {domains.map((element) => (
          <button
            key={element}
            className="bg-[#1e3a8a] px-4 py-2 border rounded-full"
          >
            {element}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DomainSearch;
