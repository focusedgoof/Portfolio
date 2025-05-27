import React from "react";
import "./About.css";

const About = () => {
  return (
    <section class="about section" id="about">
    <div class="container">
        <div class="row">
            <div class="section-title padd-15">
                <h2>About Me</h2>
            </div>
        </div>
        <div class="row">
            <div class="about-content padd-15">
                <div class="about-container">
                    <div class="personal-info left-about">
                        <p>Hello, I am Sakshi Negi, a Full stack web developer.</p>
                        <p>I'm a 24-year-old Computer Science graduate from DIT University, Dehradun,
                            currently working as a full-time developer at Impetus Technologies for the past
                            two years. I work with Angular, FastAPI, and MySQL, and I'm passionate about
                            AI/ML research. Based in Delhi, I love teaching students at NGOs, staying
                            organized, and engaging in creative, aesthetic-driven projects. Outside of work,
                            I run marathons, garden, collect tech swags, and thrive on social interactions.
                        </p>
                        <p>A fun fact—I played netball professionally and even participated in the Delhi
                            Olympics! With a mix of structure and spontaneity, I’m an extrovert who enjoys
                            building, learning, and connecting.</p>
                        <br/>
                        <div class="btn-con">
                            <a href="https://drive.google.com/file/d/1vuhktPfkWQmLop7ajvDvpq3Jz_RpEQDH/view?usp=sharing"
                                class="main-btn" target="_blank">
                                <span class="btn-text">Download CV</span>
                                <span class="btn-icon"><i class="fas fa-download"></i></span>
                            </a>
                        </div>
                    </div>
                    <div class="personal-info right-about">
                        <div class="about-item">
                            <div class="abt-text">
                                <p class="large-text"> Network</p>
                                <p class="small-text"><a
                                        href="https://www.linkedin.com/in/sakshi-negi-2001/"
                                        target="_blank"> LinkedIn</a></p>
                                <p class="small-text"> <a href="https://medium.com/@sakshi12502negi"
                                        target="_blank">Medium</a></p>
                                <p class="small-text"> <a href="https://github.com/focusedgoof"
                                        target="_blank">Github</a></p>
                            </div>
                        </div>
                        <div class="about-item">
                            <div class="abt-text">
                                <p class="large-text">Socials</p>
                                <p class="small-text"><a href="https://www.instagram.com/skshi_negi_22/" ></a> </p>
                                <p class="small-text"><a href="https://twitter.com/sakshinegi2001" target="_blank">Twitter</a></p>
                                <p class="small-text"><a href="https://www.snapchat.com/add/snegi6133?share_id=2B_ncZGklf8&locale=en-GB" target="_blank">Snapchat</a></p>
                            </div>
                        </div>
                        <div class="about-item">
                            <div class="abt-text">
                                <p class="large-text">Languages</p>
                                <p class="small-text">English</p>
                                <p class="small-text">French(A1)</p>
                                <p class="small-text">German(A1)</p>
                            </div>
                        </div>
                        <div class="about-item">
                            <div class="abt-text">
                                <p class="large-text">Community</p>
                                <p class="small-text">DITU ACM SC</p>
                                <p class="small-text">MAD(NGO)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="education padd-15">
                        <h3 class="title">Education</h3>
                        <div class="row">
                            <div class="timeline-box padd-15">
                                <div class="timeline shadow-dark">
                                       {/*timeline item*/}
                                    <div class="timeline-item">
                                        <div class="circle-dot"></div>
                                        <h3 class="timeline-date">
                                            <i class="fa fa-calendar"></i> 2019-2023
                                        </h3>
                                        <h4 class="timeline-title">Bachleors in CSE</h4>
                                        <p class="timeline-text"><b>DIT University</b></p>
                                        <br/>
                                        <p class="timeline-text">
                                        <ul class="timeline-text">
                                            <li><b>DITU ACM SC</b></li>
                                            <p><em className="highlight">Chief Advisor &gt; Chairperson &gt; Joint Secretary &gt; Student Member</em></p>

                                            <p class="description">* Developed the website for the student chapter</p>
                                            <p class="description">* Mentored 25+ student in web dev, ML and DSA</p>
                                            <p class="description">* Organized 20+ events</p>
                                            <p class="description">* Given workshop on Web Dev, linkedIn and Research
                                                Methodologies</p>
                                            <br/>
                                            <li><b>Make A Difference (MAD)</b></li>
                                            <p class="description"><em class="highlight">Academic support volunteer</em></p>
                                            <p class="description">* I joined the NGO to contribute back to the society</p>
                                            <p class="description">* Taught kids in grade 8 english and maths</p>
                                            <p class="description">* Taught kids in grade 9 english</p>
                                            <br/>
                                            <li><b>Script Foundation</b></li>
                                            <p><em class="highlight">Web Developer</em></p>
                                            <p class="description">* Developed a website for the Dehradun Chapter of script
                                                foundation.</p>

                                        </ul>
                                        </p> 
                                    </div>
                                    <div class="timeline-item">
                                        <div class="circle-dot"></div>
                                        <h3 class="timeline-date">
                                            <i class="fa fa-calendar"></i> 2004-2019
                                        </h3>
                                        <h4 class="timeline-title">High School</h4>
                                        <p class="timeline-text"><b>Arwachin International School</b></p>
                                        <br/>
                                        <ul class="timeline-text">
                                            <p class="description">* Part of the <b>netball team </b>since 9th grade and
                                                participated in various competitions at different levels
                                                Zonal, Inter-zonal, Delhi Olympic.</p>
                                            <p class="description">* Achieved yellow and orange belt in Karate</p>
                                            <p class="description">* Won trophies and medals in sports fest in school.</p>
                                            <p class="description">* Part of a space club in collaboration with <a
                                                    href="https://space-india.com/" target="_blank">Space
                                                    India</a> for 2 modules</p>
                                            <p class="description">* Learnt French(A1) </p>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="experience padd-15">
                        <h3 class="title">Experience</h3>
                        <div class="row">
                            <div class="timeline-box padd-15">
                                <div class="timeline shadow-dark">
                                    {/*timeline item*/}
                                    <div class="timeline-item">
                                        <div class="circle-dot"></div>
                                        <h3 class="timeline-date">
                                            <i class="fa fa-calendar"></i> Oct'23- Present
                                        </h3>
                                        <h4 class="timeline-title">Impetus Technologies</h4>
                                        <p><em class="highlight ">Software Developer</em></p>
                                        <br/>
                                        <ul class="timeline-text">
                                            <li><b>CCO Gen BI</b></li>
                                            <p><em class="highlight">Backend Developer</em></p>
                                            <i class="fa fa-calendar"></i> Dec'24- Present
                                            <p class="timeline-text description">* Designed and optimized SQL queries to
                                                support data retrieval and manipulation tasks within the CCO
                                                Gen
                                                BI project.</p>
                                            <p class="timeline-text description">* Performed application testing to
                                                ensure
                                                data accuracy, functionality, and performance of BI
                                                components.
                                            </p>
                                            <p class="timeline-text description">* Contributed to prompt tuning efforts,
                                                enhancing the project's natural language interaction
                                                capabilities and improving response relevance.</p>
                                            <br/>
                                            <li><b>DnB (client project)</b></li>
                                            <p class="description"><em class="highlight">Angular Developer</em></p>
                                            <i class="fa fa-calendar"></i> March'24- Present
                                            <p class="description">* Developed and maintained unit test cases using Jasmine to
                                                ensure the reliability and functionality of various frontend
                                                components across the application.</p>
                                            <p class="description">* Actively worked on JS linting and SonarQube issue
                                                resolutions, focusing on addressing Major and Critical
                                                severity bugs to enhance code quality and maintainability.
                                            </p>
                                            <p class="description">* Diagnosed and resolved D3.js visualization issues in the
                                                Dashboard application, improving data accuracy and user
                                                experience.</p>
                                            <p class="description">* Identified and fixed accessibility issues across the
                                                application, ensuring compliance with WCAG standards and
                                                enhancing the platform's usability for all users.</p>
                                            <p class="description">* Collaborated with the team to troubleshoot and fix
                                                functional and UI bugs, contributing to overall product
                                                stability and user satisfaction.</p>
                                            <br/>
                                            <li><b>iScreen</b></li>
                                            <p><em class="highlight">React Developer</em></p>
                                            <i class="fa fa-calendar"></i> Dec'23- Feb'24
                                            <p class="timeline-text description">* I contributed to the foundation of an
                                                internal project called iScreen, where I was responsible for
                                                developing the frontend using React. </p>
                                            <p class="timeline-text description">* My work included building key
                                                components such as the admin screen, side navigation bar,
                                                grade and candidate screens, and implementing a dynamic
                                                MetaForm.</p>
                                        </ul>



                                    </div>
                                    <div class="timeline-item">
                                        <div class="circle-dot"></div>
                                        <h3 class="timeline-date">
                                            <i class="fa fa-calendar"></i> Jan'20- Mar'21
                                        </h3>
                                        <h4 class="timeline-title">ACO Homes</h4>
                                        <p><em class="highlight">Assistant Manager</em></p>
                                        <p class="timeline-text description">*One of the founding members of the
                                            startup.</p>
                                        <p class="timeline-text description">*I was working with the social media
                                            accounts and recruiting people for the Website team</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  );
};

export default About;
