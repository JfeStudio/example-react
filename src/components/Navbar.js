import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { links } from "../data";
import menuHamburger from "../assets/images/menu-hamburger.svg";
import menuClose from "../assets/images/menu-close.svg";
import "./navbar.css";

export default function Navbar() {
  const [isNavShowsing, setIsNavShowing] = useState(false);

  return (
    <nav>
      <div className="flex">
        <Link to="/" onClick={() => setIsNavShowing(false)}>
          <Logo />
        </Link>
        <ul className={`menu ${isNavShowsing ? "show-menu" : "hide-menu"}`}>
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                  onClick={() => setIsNavShowing((prev) => !prev)}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
          <button className="btn">Login</button>
        </ul>
        <div
          className="menu-hamburger"
          onClick={() => setIsNavShowing((prev) => !prev)}
        >
          {isNavShowsing ? (
            <img src={menuClose} width={30} height={30} alt="button close" />
          ) : (
            <img src={menuHamburger} width={30} height={30} alt="button menu" />
          )}
        </div>
      </div>
    </nav>
  );
}

// onClick={() => setIsNavShowing(!isNavShowsing)}
