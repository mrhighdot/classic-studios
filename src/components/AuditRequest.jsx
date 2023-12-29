import React from "react";
import { Link } from "react-router-dom";

const AuditRequest = () => {
  return (
    <div className="flex flex-col sm:gap-[4rem] sm:flex-row px-8 py-12 sm:p-[6rem] text-white bg-[#303030] justify-between items-start">
      <div className="sm:w-[50%] w-full mb-6">
        <h3 className="mt-3 mb-4 text-4xl sm:text-5xl leading-14 sm:mt-0 sm:leading-[4rem] sm:mb-10 ">
          See how we can help your business grow with the various marketing
          solutions
        </h3>
      </div>
      <div className="w-full sm:w-[50%]">
        <p>Ready to speak with a marketing expert? Give us a ring</p>
        <div className="my-10">
          <button className="bg-white rounded-full py-3 px-8 active:border-none active:bg-[#E32185] transition">
            <Link to="/contact">
              <button className="text-[#303030] active:text-white">
                Get a free audit
              </button>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuditRequest;
