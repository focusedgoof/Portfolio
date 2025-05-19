import React, { useEffect, useState } from "react";
import "./Aside.css";

const navItems = [
  { id: "home", icon: "fa-home", label: "Home" },
  { id: "about", icon: "fa-user", label: "About" },
  { id: "skill", icon: "fa-list", label: "Skills" },
  { id: "portfolio", icon: "fa-briefcase", label: "Portfolio" },
  { id: "contact", icon: "fa-comments", label: "Contact" },
];

const Aside = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [prevSection, setPrevSection] = useState(null);
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const toggleAside = () => {
    setIsAsideOpen((prev) => !prev);
  };

  const handleNavClick = (id) => {
    setPrevSection(activeSection);
    setActiveSection(id);
    if (window.innerWidth < 1200) toggleAside();
  };

  useEffect(() => {
    navItems.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) {
        section.classList.remove("active", "back-section", "open");
      }
    });

    const current = document.getElementById(activeSection);
    const previous = document.getElementById(prevSection);

    if (previous) previous.classList.add("back-section");
    if (current) current.classList.add("active");

    if (isAsideOpen) {
      document.querySelectorAll(".section").forEach((section) => {
        section.classList.add("open");
      });
    } else {
      document.querySelectorAll(".section").forEach((section) => {
        section.classList.remove("open");
      });
    }

    const aside = document.querySelector(".aside");
    const toggler = document.querySelector(".nav-toggler");
    if (aside) aside.classList.toggle("open", isAsideOpen);
    if (toggler) toggler.classList.toggle("open", isAsideOpen);
  }, [activeSection, prevSection, isAsideOpen]);

  return (
    <div className="aside">
      <div className="logo">
        <a href="#home"><span>SAKSHI</span> NEGI</a>
      </div>

      <div className="nav-toggler" onClick={toggleAside}>
        <span></span>
      </div>

      <ul className="nav">
        {navItems.map(({ id, icon, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={activeSection === id ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(id);
              }}
            >
              <i className={`fa ${icon}`}></i>
              {label}
            </a>
          </li>
        ))}
      </ul>

      <div className="aside-social">
        <a href="https://www.instagram.com/skshi_negi_22/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
        <a href="https://twitter.com/sakshinegi2001" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter"></i></a>
        <a href="https://medium.com/@sakshi12502negi" target="_blank" rel="noopener noreferrer"><i className="fab fa-medium"></i></a>
        <a href="https://www.linkedin.com/in/sakshi-negi-2001/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
      </div>
    </div>
  );
};

export default Aside;
