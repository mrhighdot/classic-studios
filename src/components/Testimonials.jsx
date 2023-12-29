import { useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { PiArrowCircleLeftFill, PiArrowCircleRightFill } from "react-icons/pi";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Importing Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import quote from "assets/icons/others/quote.svg";
import image2 from "assets/images/pexels-cindy-bartillon-15461137(1).webp";
import image3 from "assets/images/pexels-ibrahim-mersim-18966777.webp";
import image4 from "assets/images/pexels-marina-endzhirgli-18933193_1.webp";

const Testimonials = () => {
  const prevSlide = useRef(null);
  const nextSlide = useRef(null);
  return (
    <div className="flex flex-col px-8 py-12 sm:p-[6rem] text-white bg-[#303030]">
      <div className="sm:w-[50%] w-full mb-6">
        <h5 className="mt-6 text-lg font-semibold uppercase sm:mt-0">
          Our testimonials
        </h5>
        <h3 className="mt-3 mb-4 sm:leading-[4rem] text-4xl sm:text-5xl leading-12 sm:mt-3 sm:mb-10 ">
          Data-driven, customer-centric marketing services
        </h3>
      </div>
      <div className="bg-white rounded-lg sm:p-[3rem] p-[1.5rem] flex flex-col sm:flex-row mb-10">
        <div className="text-[#303030] mt-4 sm:mt-0 sm:mr-[4rem]">
          <img src={quote} alt="quote" className="mb-5 w-[50px] sm:w-auto" />
          <h4 className="my-8 text-2xl sm:text-3xl sm:mt-2">
            The staff are friendly and know their job
          </h4>
          {/* Name */}
          <div className="flex flex-col gap-1 mb-8">
            <span className="font-bold">John Doe</span>
            <span>Rabito Staff</span>
            <div className="flex gap-4 mt-2 text-[#E32185]">
              <button
                ref={prevSlide}
                onClick={() => console.log("Left Clicked")}
              >
                <PiArrowCircleLeftFill className="text-3xl" ref={prevSlide} />
              </button>
              <button
                ref={nextSlide}
                onClick={() => console.log("Right Clicked")}
              >
                <PiArrowCircleRightFill className="text-3xl" ref={nextSlide} />
              </button>
            </div>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            prevEl: prevSlide.current,
            nextEl: nextSlide.current,
          }}
          className="w-full h-[12rem] sm:h-[24rem] overflow-hidden rounded-lg "
        >
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
      </div>
    </div>
  );
};

export default Testimonials;
