import Card from "./article/Card";
import { testimonial } from "../data";
import { useState } from "react";
import iconPrev from "../assets/images/chev-prev.svg";
import iconNext from "../assets/images/chev-next.svg";
import "./testimonial.css";

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const { name, quote, job, avatar } = testimonial[index];

  const prevTestimonialButton = () => {
    setIndex((prev) => prev - 1);

    if (index <= 0) {
      setIndex(testimonial.length - 1);
    }
  };

  const nextTestimonialButton = () => {
    setIndex((prev) => prev + 1);

    if (index >= testimonial.length - 1) {
      setIndex(0);
    }
  };

  return (
    <div className="testimonials">
      <Card>
        <div className="testimonial-avatar">
          <img src={avatar} alt={name} />
        </div>
        <p className="testimonial-quote">{`${quote}`}</p>
        <h5 className="testimonial-name">{name}</h5>
        <p className="testimonial-job">{job}</p>
      </Card>
      <div className="btn-testimonial">
        <button className="btn-prev" onClick={prevTestimonialButton}>
          <img src={iconPrev} width={30} height={30} alt="prev" />
        </button>
        <button className="btn-next" onClick={nextTestimonialButton}>
          <img src={iconNext} width={30} height={30} alt="next" />
        </button>
      </div>
    </div>
  );
}
