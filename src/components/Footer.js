import React from "react";
import LogoFooter from "../assets/images/logo.png";
import "./footer.css";

export default function Footer() {
  return (
    <div className="rows-footer">
      <div className="cols-footer">
        <img src={LogoFooter} width={120} alt="Logo footer" />
      </div>
      <div className="cols-footer">
        <p className="cp">Copyrights Maman 2022</p>
      </div>
      <div className="cols-footer">
        <p className="media-social">
          Ikuti saya di <span>JfeStudio</span>
        </p>
      </div>
    </div>
  );
}
