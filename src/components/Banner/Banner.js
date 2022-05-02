import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import banner1 from "../../images/Banner-1.jpg";
import banner2 from "../../images/Banner-2.jpg";
import banner3 from "../../images/Banner-3.jpg";
const Banner = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={banner3} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
