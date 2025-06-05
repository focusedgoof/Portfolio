import React from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";

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