import React, { useState } from "react";

export default function Nav() {
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <nav className="navigation">
      <a
        href="#hero"
        onClick={() => setActiveNav("#home")}
        className={activeNav === "#home" ? "active" : ""}
      >
        home
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        About
      </a>
      <a
        href="#profile"
        onClick={() => setActiveNav("#profile")}
        className={activeNav === "#profile" ? "active" : ""}
      >
        Profile
      </a>
      <a
        href="#feature"
        onClick={() => setActiveNav("#feature")}
        className={activeNav === "#feature" ? "active" : ""}
      >
        Feature
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        Services
      </a>
    </nav>
  );
}
