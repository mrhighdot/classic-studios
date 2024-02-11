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
      <section>hello</section>
    </div>
  );
};

export default Testimonials;
