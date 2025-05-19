import React from "react";
import "./Contact.css";


const Contact = () => {
  return (
    <section class="contact section" id="contact">
      <div class="container">
        <div class="row">
          <div class="section-title padd-15">
            <h2>Contact Me</h2>
          </div>
        </div>
        <div>
          <h4 class="contact-title padd-15">FEEL FREE TO REACH OUT</h4>
          <div class="row">
            {/*Contact Info Start*/}
            <div class="contact-info-item padd-15">
              <div class="icon">
                <i class="fa fa-phone"></i>
              </div>
              <h4>Call me on</h4>
              <p>+91 9650506774</p>
            </div>
            <div class="contact-info-item padd-15">
              <div class="icon">
                <i class="fa fa-map-marker-alt"></i>
              </div>
              <h4>Location</h4>
              <p>Delhi, India</p>
            </div>
            <div class="contact-info-item padd-15">
              <div class="icon">
                <i class="fa fa-envelope"></i>
              </div>
              <h4>Email</h4>
              <p>sakshi12502negi@gmail.com</p>
            </div>
            <div class="contact-info-item padd-15">
              <div class="icon">
                <i class="fa fa-globe-asia"></i>
              </div>
              <h4>Website</h4>
              <p>www.xyz.com</p>
            </div>
            {/*Contact Info End*/}
          </div>
        </div>
        <div>
          <h3 class="contact-title padd-15">LET'S GET IN TOUCH</h3>
          {/*Contact Form*/}
          <div class="row form">
            <div class="contact-form padd-15">
              <div class="row">
                <div class="form-item col-6 padd-15">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div class="form-item col-6 padd-15">
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="form-item col-12 padd-15">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Subject"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="form-item col-12 padd-15">
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="form-item col-12 padd-15">
                  <button type="submit" class="btn">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
