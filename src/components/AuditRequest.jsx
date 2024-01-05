import React from "react";
import { Link } from "react-router-dom";

const AuditRequest = () => {
  return (
    <div className="flex flex-col sm:gap-[4rem] sm:flex-row px-8 py-6 sm:p-[6rem] text-white bg-[#303030] justify-center items-center">
      <div className="flex items-start justify-start">
        <div className="sm:w-[50%] w-full">
          <h3 className="mt-3 mb-4 text-4xl sm:text-5xl leading-14 sm:mt-0 sm:leading-[4rem] ">
            See how we can help your business grow with the various marketing
            solutions
          </h3>
        </div>
        <div className="w-full sm:w-[50%]">
          <p>Ready to speak with a marketing expert? Give us a ring</p>
          <div className="mt-6">
            <button className="bg-white rounded-full py-3 px-8  active:text-white active:border-none active:bg-primary hover:bg-primary focus:text-black transition duration-500">
              <Link to="/contact">
                <span className="text-[#303030] active:text-white active:border-none active:bg-primary hover:bg-primary focus:text-black transition duration-500">
                  Get a free audit
                </span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditRequest;
