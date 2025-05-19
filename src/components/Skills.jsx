import React from "react";
import "./Skills.css";


const Skills = () => {
  return (
     <section class="skill section" id="skill">
                <div class="container">
                    <div class="row">
                        <div class="section-title padd-15">
                            <h2>Skills</h2>
                        </div>
                    </div>
                    <div class="row">
                      {/*skill item Start*/}
                        <div class="skill-item padd-15">
                            <div class="skill-item-inner">
                                <div class="icon">
                                    <i class="fa-solid fa-laptop-code"></i>
                                </div>
                                <h4>Web Development</h4>
                                <p>I am fluent in Full Stack Web Development, with hands-on experience in building
                                    applications using Angular and React on the frontend, and Django on the backend. I
                                    specialize in developing responsive UI and efficient backend systems with clean
                                    code.</p>
                            </div>
                        </div>
                        <div class="skill-item padd-15">
                            <div class="skill-item-inner">
                                <div class="icon">
                                    <i class="fa-solid fa-search"></i>
                                </div>
                                <h4>Machine Learning</h4>
                                <p>I have extensively explored Machine Learning, developed multiple projects in the
                                    domain,
                                    and contributed to the field through the publication of research papers and a filed
                                    patent. My work reflects a strong foundation in both practical implementation and
                                    academic research.
                                </p>
                            </div>
                        </div>
                        <div class="skill-item padd-15">
                            <div class="skill-item-inner">
                                <div class="icon">
                                    <i class="fa-solid fa-book-open-reader"></i>
                                </div>
                                <h4>Technical Writing</h4>
                                <p>I actively engage in technical writing, contributing to research papers and book
                                    chapters. I also try to share insights through articles on platforms like Medium and
                                    Hashnode, aiming to make complex topics more accessible and engaging.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*skill item End*/}                  
                                       


                    {/*skill logo Start*/}
                    <div class="row">
                        <div class="skill-logo padd-15">
                            <div class="skill-lang">
                                <p>Languages</p>
                                <div class="skill-logo-non-transition padd-15">
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
                                        alt="cplusplus" />
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                                        alt="python" />
                                </div>
                            </div>
                            <div class="skill-framework padd-15 ">
                                <p>Frameworks and Tools</p>
                                <div class="skill-logo-transition">
                                    <img src="https://cdn.worldvectorlogo.com/logos/arduino-1.svg" alt="arduino" />
                                    <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
                                        alt="firebase" />
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                                        alt="html5" />
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                                        alt="css3" />
                                    <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
                                        alt="bootstrap" />
                                    <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                                        alt="tailwind" />
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                                        alt="react" />
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
                                        alt="sass" />
                                    <img src="https://cdn.worldvectorlogo.com/logos/django.svg" alt="django" />
                                    <img src="https://fastapi.tiangolo.com/img/icon-white.svg" alt="fast-api" />
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                                        alt="mysql" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"
                                        alt="scikit_learn" />
                                    <img src="https://pandas.pydata.org/static/img/pandas_white.svg" alt="pandas" />
                                    <img src="https://numpy.org/images/logo.svg" alt="numpy" />
                                    <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" />
                                    <img src="https://www.adobe.com/cc-shared/assets/img/product-icons/svg/photoshop-40.svg"
                                        alt="photoshop" />
                                    <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" />
                                </div>

                            </div>
                        </div>
                    </div>
                    {/*skill logo End */}
                </div>
            </section>
  );
};

export default Skills;