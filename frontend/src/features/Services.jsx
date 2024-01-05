import React from "react";
import image from "assets/images/pexels-ibrahim-mersim-18966777.webp";
import { services } from "constants/constants";
import { AuditRequest, Cover, FAQs } from "components";

const Services = () => {
  return (
    <section className="w-full ">
      <Cover header="Our Services" name="our-service" image={image}>
        Solutions for business growth
      </Cover>
      {/* Description */}
      <div className="flex flex-col p-8 sm:p-[6rem] items-center">
        <div className="mb-6 sm:mb-[6rem] flex flex-col items-center">
          <h2 className="mb-3 text-3xl text-semibold">
            We lead with customer-first strategies:
          </h2>
          <p className="text-[#939598]">
            Driving growth through personalized experiences for truly end-to-end
            business building.
          </p>
        </div>
        {/* Actual Services */}
        <div className="flex flex-row flex-wrap items-start justify-center w-full gap-4">
          {services.map((service) => {
            return (
              <div
                key={service.id}
                className="flex flex-col border-[#303030] border-2 h-auto rounded-lg sm:w-[16rem] p-6"
              >
                <img
                  src={service.icon}
                  alt={service.job}
                  className="w-[1.5rem] mb-2"
                />
                <h3 className="mb-2 text-2xl font-bold">{service.job}</h3>
                <p>{service.description.slice(0, 40) + "..."}</p>
              </div>
            );
          })}
        </div>
        {/* Strategy */}
        <div className="w-full my-6 sm:mt-[6rem] flex gap-4 sm:gap-8 flex-col sm:flex-row">
          {/* Image and Header */}
          <div className="w-full">
            {/* Image */}
            <div className="h-[18rem] w-full rounded-lg mb-8">
              <img
                src={image}
                alt="image1"
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="mb-3 text-3xl text-semibold">
              We are committed to your strategy
            </h2>
          </div>
          <div className="w-full">
            <p className="leading-7">
              We are committed to your strategy and intuitively understand how
              to deliver value in the digital economy. Through the most
              effective digital marketing options, Renaissance makes it happen
              seamlessly. Every day, we help brands think big, execute smart and
              deliver growth. We employ an intelligent digital marketing
              strategy to consistently unlock value from digital investments in
              a rapidly advancing world. From simple to the infinitely complex.
            </p>
          </div>
        </div>
        <FAQs />
      </div>
    </section>
  );
};

export default Services;
