import React from "react";
import logoHomePage from "../assets/images/logo.png";

export default function Logo() {
  return (
    <div className="logo">
      <img
        className="border"
        src={logoHomePage}
        width={100}
        alt="logo website"
      />
    </div>
  );
}
