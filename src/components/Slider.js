import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { slider } from "../data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Slider() {
  return (
    <div className="sliders">
      <Swiper
        className="container-slider"
        spaceBetween={30}
        // klw mau bisa di atur SwiperSlidenya pake auto untuk perviewnya + loop + centered
        slidesPerView={"auto"}
        centeredSlides={true}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {slider.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="slider">
              <di className="slider-avatar">
                <img src={avatar} alt={name} />
              </di>
              <h4>{name}</h4>
              <p>{review}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
