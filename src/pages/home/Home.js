import React from "react";
import About from "../../components/about/About";
import Feature from "../../components/feature/Feature";
import Hero from "../../components/hero/Hero";
import Nav from "../../components/Nav";
import Profile from "../../components/profile/Profile";
import Services from "../../components/services/Services";
// import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Hero />
      <Nav />
      <About />
      <Profile />
      <Feature />
      <Services />
    </>
  );
}
