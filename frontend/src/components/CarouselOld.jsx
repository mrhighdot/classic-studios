import { useRef, forwardRef } from "react";
import { PiArrowCircleLeftFill, PiArrowCircleRightFill } from "react-icons/pi";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import image1 from "../assets/images/old-tv-set-2023-05-23-16-00-01-utc.webp";
import image2 from "../assets/images/pexels-cindy-bartillon-15461137(1).webp";
import image3 from "../assets/images/pexels-ibrahim-mersim-18966777.webp";
import image4 from "../assets/images/pexels-marina-endzhirgli-18933193_1.webp";

const Carousel = () => {
  const prevSlide = useRef(null);
  const nextSlide = useRef(null);
  return (
    <section className="w-full h-[100dvh] flex items-center justify-center">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          prevEl: prevSlide.current,
          nextEl: nextSlide.current,
        }}
        // pagination={{
        //   dynamicBullets: true,
        // }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // scrollbar={{ draggable: true }}
        loop={true}
        className="flex items-center justify-center w-full h-full"
      >
        <SwiperSlide className="flex items-center justify-center w-full h-auto overflow-hidden">
          <img src={image1} alt="" className="object-cover w-full h-full" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center w-full h-auto overflow-hidden">
          <img src={image2} alt="" className="object-cover w-full h-full" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center w-full h-auto overflow-hidden">
          <img src={image3} alt="" className="object-cover w-full h-full" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center w-full h-auto overflow-hidden">
          <img src={image4} alt="" className="object-cover w-full h-full" />
        </SwiperSlide>
      </Swiper>
      {/* Arrows */}
      <div className="absolute z-40 bottom-[4rem] flex w-full justify-center">
        <div className="flex gap-8 text-4xl text-[#E32185] bg-[#ffffffed] px-3 py-2 rounded-full">
          <button ref={prevSlide} className="text-4xl prev-slide">
            <PiArrowCircleLeftFill ref={prevSlide} />
          </button>
          <button ref={nextSlide} className="text-4xl next-slide">
            <PiArrowCircleRightFill ref={nextSlide} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
