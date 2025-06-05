import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Aside from "./components/pages/Aside/Aside";
import MainContent from "./components/MainContent";

import Home from "./components/pages/Home/Home.jsx";
import About from "./components/pages/About/About.jsx";
import Skills from "./components/pages/Skills/Skills.jsx";
import Portfolio from "./components/pages/Portfolio/Portfolio.jsx";
import Contact from "./components/pages/Contact/Contact.jsx";

import "./App.css";
import "./Hamburger.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <Router>
      <div className="main-container">
        {/* Hamburger Button */}
        <div className="hamburger-wrapper">
          <div className="hamburger-btn" onClick={toggleMenu}>
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </div>

          {/* Dropdown Menu */}
          {menuOpen && (
            <div className="dropdown-menu">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
              <Link to="/skills" onClick={() => setMenuOpen(false)}>
                Skills
              </Link>
              <Link to="/portfolio" onClick={() => setMenuOpen(false)}>
                Portfolio
              </Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </div>
          )}
        </div>

        {/* Aside and Main Content */}
        <div className="aside-container">
          <Aside />
        </div>

        <div className="main-content">
          {/* Route switch */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
