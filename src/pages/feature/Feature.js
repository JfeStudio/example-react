import React from "react";
import { Link } from "react-router-dom";
import SectionHead from "../../components/SectionHead";
import images from "../../assets/images/icon-male.svg";
import Testimonial from "../../components/Testimonial";
import Slider from "../../components/Slider";

export default function Feature() {
  return (
    <div>
      Feature
      <SectionHead
        props="title-head"
        icon={images}
        title="di buat menggunakan manual slide"
      />
      <Testimonial />
      <SectionHead
        props="title-head"
        icon={images}
        title="dibuat menggunakan swiperjs"
      />
      <Slider />
      <Link to="/">kembali</Link>
    </div>
  );
}
