import React from "react";

export default function Card({ props, children }) {
  return <article className={`card ${props}`}>{children}</article>;
}
