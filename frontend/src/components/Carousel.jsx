import React, { useState, useEffect } from "react";
import { PiArrowCircleLeftFill, PiArrowCircleRightFill } from "react-icons/pi";
import { images } from "constants/constants";
import { VideoComponent } from ".";

const Carousel = () => {
  const autoSlide = true;
  const autoSlideInterval = 6000;
  const [current, setCurrent] = useState(0);
  const prev = () =>
    setCurrent((current) => (current === 0 ? images.length - 1 : current - 1));
  const next = () =>
    setCurrent((current) => (current === images.length - 1 ? 0 : current + 1));

  console.log(current);
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <>
      <section className="h-[100dvh] w-full items-center justify-center flex overflow-hidden flex-row relative">
        <sction className="flex w-full h-full overflow-hidden bg-red-700">
          {/* {images.map((view) => {
            return (
              <section
                key={view.id}
                className="flex items-center justify-center h-full min-w-[100vw] transition-transform duration-600"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                <img
                  src={view.cover}
                  key={view.id}
                  className="object-cover w-full h-full"
                />
               
              </section>
            );
          })} */}
          <VideoComponent
            className=""
            video="https://www.pexels.com/video/brook-stream-lake-river-19292126/"
          />
        </sction>
      </section>
    </>
  );
};

export default Carousel;

//flex items-center justify-center h-full overflow-hidden transition-transform ease-out bg-emerald-500 duration-600
