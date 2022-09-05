import React from "react";
import SectionHead from "./SectionHead";
import iconMale from "../assets/images/icon-face.svg";

export default function Gallery() {
  const galleryLength = 12;
  const images = [];

  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../assets/images/product${i}.jpg`));
  }

  return (
    <>
      <SectionHead icon={iconMale} title="Gallery" />
      <div className="galleries">
        {images.map((images, index) => {
          return (
            <article className="gallery" key={index}>
              <img src={images} width={150} alt={`images ${index + 1}`} />
            </article>
          );
        })}
      </div>
    </>
  );
}
