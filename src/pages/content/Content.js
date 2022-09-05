// import { useState } from "react";
import { Link } from "react-router-dom";
import FileCV from "../../assets/images/CV MAMAN TERBARU.pdf";
import { accordion } from "../../data";
import Contents from "./Contents";
import "./content.css";

export default function Content() {
  return (
    <div>
      ini content bro <br />
      <p>
        Downlaod CV disini{" "}
        <a download href={FileCV}>
          Maman
        </a>
      </p>
      <Link to="/">kembali</Link>
      <div className="accordion">
        {accordion.map(({ id, question, answer }) => {
          return <Contents key={id} question={question} answer={answer} />;
        })}
      </div>
    </div>
  );
}
