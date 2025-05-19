import React from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const MainContent = () => {
  return (
    <div className="main-content">
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default MainContent;