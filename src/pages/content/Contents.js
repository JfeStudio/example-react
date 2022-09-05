import { useState } from "react";
import iconPlus from "../../assets/images/icon-plus.svg";
import iconsMinus from "../../assets/images/icon-minus.svg";

export default function Contents({ question, answer }) {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false);

  return (
    <article className="accordion-content">
      <div
        className="accordion-heading"
        onClick={() => setIsAnswerShowing((prev) => !prev)}
      >
        <h4>{question}</h4>
        <span>
          {isAnswerShowing ? (
            <img src={iconsMinus} width={15} height={15} alt="icon" />
          ) : (
            <img src={iconPlus} width={15} height={15} alt="icon" />
          )}
        </span>
      </div>
      {isAnswerShowing && <p>{answer}</p>}
    </article>
  );
}
