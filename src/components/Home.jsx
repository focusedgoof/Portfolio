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
    <section className="home section active" id="home">
      <div className="container">
        <div className="row">
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
            <a
              href="https://drive.google.com/file/d/1vuhktPfkWQmLop7ajvDvpq3Jz_RpEQDH/view?usp=sharing"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          </div>
          <div className="home-img padd-15">
            <img id="profile" src="Images/profile.png" alt="profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
