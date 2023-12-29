import React from "react";
import { Link } from "react-router-dom";
import image3 from "../assets/images/pexels-ibrahim-mersim-18966777.webp";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const WhatWeDo = () => {
  return (
    <div className="z-0 flex items-center justify-between w-full mt-10 font-mont">
      <div className="flex flex-col items-start justify-center p-8 sm:p-[6rem] w-full overflow-hidden">
        <div className="flex items-center justify-center w-full overflow-hidden h-[10rem] sm:h-[20rem] rounded-lg">
          <img src={image3} alt="" className="object-cover w-full h-full" />
        </div>
        <div className="flex flex-col mt-10 sm:flex-row justify-betewwn">
          <div className="sm:w-[50%] w-full ">
            <h5 className="mt-3 text-lg font-semibold uppercase sm:mt-0">
              What we do
            </h5>
            <h2 className="mt-3 sm:text-5xl text-4xl sm:mt-3">
              We solve digital challenges
            </h2>
          </div>
          <div className="sm:w-[50%] w-full my-6 sm:my-0">
            <p className="leading-8">
              Welcome to Brand Surge Marketing! We are a team of passionate
              marketing experts, channel architects, and sales professionals
              dedicated to crafting success stories for individuals, products,
              and businesses alike.
            </p>
            <div className="mt-6 sm:w-[40%] w-[70%] flex justify-between items-center">
              <span className="font-bold">Learn more about us</span>
              <button className="text-2xl">
                <Link to="/services">
                  <HiOutlineArrowNarrowRight />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
