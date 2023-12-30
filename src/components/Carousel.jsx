import React, { useState, useEffect } from "react";
import { PiArrowCircleLeftFill, PiArrowCircleRightFill } from "react-icons/pi";
import { images } from "constants/constants";

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
      <div className="h-[100dvh] w-full items-center justify-center flex overflow-hidden flex-row relative">
        <div className="flex w-full h-full overflow-hidden bg-red-700">
          {images.map((view) => {
            return (
              <div
                key={view.id}
                className="flex items-center justify-center h-full min-w-[100vw]"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                <img
                  src={view.cover}
                  key={view.id}
                  className="object-cover w-full h-full"
                />
              </div>
            );
          })}
          {/* {Array.from({ length: 5 }, (_, index) => (
          <div key={index} className="w-full bg-yellow-300">{index}</div>
        ))} */}
        </div>
      </div>

      <div className="absolute z-40 bottom-[4rem] flex w-full justify-center">
        <div className="flex gap-8 text-4xl text-[#E32185] bg-[#ffffffed] px-3 py-2 rounded-full">
          <button className="text-4xl prev-slide" onClick={prev}>
            <PiArrowCircleLeftFill />
          </button>
          <button className="text-4xl next-slide" onClick={next}>
            <PiArrowCircleRightFill />
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;

//flex items-center justify-center h-full overflow-hidden transition-transform ease-out bg-emerald-500 duration-600
