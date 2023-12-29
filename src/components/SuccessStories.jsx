import React from "react";
import { brandLogos } from "../constants/constants";

const SuccessStories = () => {
  return (
    <div className="flex flex-col p-8 sm:p-[6rem] justify-start">
      <div className="sm:w-[50%] w-full mb-6">
        <h5 className="mt-6 text-lg font-semibold uppercase sm:mt-0">
          SUCCESS STORIES
        </h5>
        <h3 className="mt-3 mb-4 text-4xl sm:text-5xl leading-12 sm:leading-[4rem] sm:mt-3 sm:mb-10 ">
          Our works drive businesses forward
        </h3>
      </div>
      <div className="flex flex-wrap items-center justify-between mb-10">
        {brandLogos.map((brand) => {
          return (
            <div key={brand.id} className="w-[5rem] sm:w-[9rem] my-4">
              <img src={brand.path} alt={brand.name} className="w-full" />
            </div>
          );
        })}
      </div>
      <div className="mb-10">
        <button className="border border-[#303030] rounded-full py-3 px-8 active:border-none active:bg-[#E32185] transition">
          <span>View all</span>
        </button>
      </div>
    </div>
  );
};

export default SuccessStories;
