import React, { useEffect } from "react";
import "./../index.css";
import Nav from "../components/Nav/Nav";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Portfolio from "../components/Portfolio/Portfolio";
import Contact from "../components/Contact/Contact";
import Services from "../components/Services/Services";
import Aos from "aos";
import "aos/dist/aos.css";

function Main() {
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 200 });
  }, []);

  return (
    <div className="main-container">
      <Nav />
      <Home />
      <About />
      <Services />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default Main;
