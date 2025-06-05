import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Aside.css";

const navItems = [
  { path: "/", icon: "fa-home", label: "Home" },
  { path: "/about", icon: "fa-user", label: "About" },
  { path: "/skills", icon: "fa-list", label: "Skills" },
  { path: "/portfolio", icon: "fa-briefcase", label: "Portfolio" },
  { path: "/contact", icon: "fa-comments", label: "Contact" },
];

const Aside = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="aside">
      <div className="logo">
        <Link to="/"><span>SAKSHI</span> NEGI</Link>
      </div>

      <div className="nav-toggler" onClick={() => document.querySelector(".aside").classList.toggle("open")}>
        <span></span>
      </div>

      <ul className="nav">
        {navItems.map(({ path, icon, label }) => (
          <li key={path}>
            <Link
              to={path}
              className={currentPath === path ? "active" : ""}
            >
              <i className={`fa ${icon}`}></i>
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="aside-social">
        <a href="https://scholar.google.com/citations?user=2C5mSX8AAAAJ&hl=en" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-google-scholar"></i></a>
        <a href="https://twitter.com/sakshinegi2001" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter"></i></a>
        <a href="https://medium.com/@focusedgoof" target="_blank" rel="noopener noreferrer"><i className="fab fa-medium"></i></a>
        <a href="https://www.linkedin.com/in/sakshi-negi-2001/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
      </div>
    </div>
  );
};

export default Aside;
