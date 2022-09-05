import React from "react";
import SectionHead from "../SectionHead";
import Zuma from "../../assets/images/icon-face.svg";
import "./article.css";
import { dataCard } from "../../data";
import Card from "./Card";
// import { Link } from "react-router-dom";

export default function Article() {
  return (
    <section>
      <div className="memo">
        <SectionHead icon={Zuma} title="Ini gambar gatau" />
        <div className="cards">
          {dataCard.map(({ id, title, description, images }) => {
            return (
              <Card className="card-content" key={id}>
                <h2>{title}</h2>
                <p>{description}</p>
                <img src={images} width={300} alt="images card" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
