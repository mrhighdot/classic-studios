import React, { useState, useEffect } from "react";
import video1 from "../assets/videos/001.mp4";
import video2 from "../assets/videos/002.mp4";
import video3 from "../assets/videos/003.mp4";
import { PiArrowCircleLeftFill, PiArrowCircleRightFill } from "react-icons/pi";

import { VideoComponent } from ".";

const Carousel = () => {
  const autoSlide = true;
  const autoSlideInterval = 6000;
  const [current, setCurrent] = useState(0);
  const prev = () =>
    setCurrent((current) => (current === 0 ? videos.length - 1 : current - 1));
  const next = () =>
    setCurrent((current) => (current === videos.length - 1 ? 0 : current + 1));

  console.log(current);

  const videos = [
    {
      id: 1,
      cover: video1,
    },
    {
      id: 2,
      cover: video2,
    },
    {
      id: 3,
      cover: video3,
    },
  ];

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <>
      <section className="h-[100dvh] w-full items-center justify-center flex overflow-hidden flex-row relative">
        <sction className="flex w-full h-full overflow-hidden bg-red-700">
          {/* {videos.map((view) => {
            return (
              <VideoComponent
                className="flex items-center justify-center w-full h-full overflow-hidden"
                video={view.cover}
                key={view.id}
              />
            );
          })} */}
          <VideoComponent
            className="object-cover w-full h-full overflow-hidden"
            video={video3}
            // style={{ objectfit: "cover", width: "100%", height: "100%" }}
          />
        </sction>
      </section>
    </>
  );
};

export default Carousel;

//flex items-center justify-center h-full overflow-hidden transition-transform ease-out bg-emerald-500 duration-600
