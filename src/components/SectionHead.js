import React from "react";

export default function SectionHead({ icon, title, props }) {
  return (
    <div className={`${props}`}>
      <img src={icon} width={30} height={30} alt="gatau" />
      <h2>{title}</h2>
    </div>
  );
}
