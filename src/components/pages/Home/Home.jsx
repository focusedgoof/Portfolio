import React, { useEffect, useRef } from "react";
import "./Home.css";
import Typed from "typed.js";

const Home = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typingRef.current, {
      strings: ["AI/ML Enthusiast", "Web Developer", "Technical Writer"],
      typeSpeed: 180,
      backSpeed: 140,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home section">
      <div className="container">
        <div className="row">
          {/* Text and mobile image first */}
          <div className="home-info">
            <h3 className="my-profession">
              I'm a <span className="typing" ref={typingRef} />
            </h3>
            <p>
              Hi, I'm Sakshi — a Delhi-based Software Developer at Impetus
              Technologies. With 2 years of industry experience and a strong
              background in Computer Science, I blend practical development
              skills with a passion for research. I enjoy building meaningful
              tech solutions and continuously exploring new challenges. Outside
              of work, you'll find me running marathons, playing sports, or
              tending to my garden.
            </p>

            {/* Mobile-first image display */}
            <div className="home-img mobile-profile">
              <img id="profile" src="Images/profile.webp" alt="profile" />
              <div className="aside-social">
                <a
                  href="https://scholar.google.com/citations?user=2C5mSX8AAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-google-scholar"></i>
                </a>
                <a
                  href="https://twitter.com/sakshinegi2001"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a
                  href="https://medium.com/@focusedgoof"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-medium"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/sakshi-negi-2001/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>

            <a
              href="https://drive.google.com/file/d/1vuhktPfkWQmLop7ajvDvpq3Jz_RpEQDH/view?usp=sharing"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          </div>

          {/* Desktop image display */}
          <div className="home-img desktop-profile padd-15">
            <img id="profile" src="Images/profile.webp" alt="profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
