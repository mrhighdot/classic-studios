import React from "react";
import {
  AuditRequest,
  Carousel,
  Circle,
  Hero,
  ServicesCard,
  SuccessStories,
  Testimonials,
} from "../components";
import { WhatWeDo } from ".";

const Home = () => {
  return (
    <>
      <div className="w-full h-full ">
        <Carousel />
        {/* <Hero /> */}
      </div>
      <div className="flex items-center justify-center ">
        <Circle />
      </div>
      <div>
        <WhatWeDo />
        <ServicesCard />
        {/* <Testimonials /> */}
        <SuccessStories />
      </div>
    </>
  );
};

export default Home;
