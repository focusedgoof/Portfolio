import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Contact Me</h2>
          </div>
        </div>

        <div>
          <h4 className="contact-title padd-15">FEEL FREE TO REACH OUT</h4>
          <div className="row">
            {/* Contact Info Start */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-phone"></i>
              </div>
              <h4>Call me on</h4>
              <p>+91 9650506774</p>
            </div>
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-map-marker-alt"></i>
              </div>
              <h4>Location</h4>
              <p>Delhi, India</p>
            </div>
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-envelope"></i>
              </div>
              <h4>Email</h4>
              <p>sakshi12502negi@gmail.com</p>
            </div>
            {/* Contact Info End */}
          </div>
        </div>

        <div>
          <h3 className="contact-title padd-15">LET'S GET IN TOUCH</h3>
          {/* Contact Form */}
          <div className="row form">
            <form
              className="contact-form padd-15"
              action="https://formsubmit.co/sakshinegi1924@gmail.com"
              method="POST"
            >
              {/* FormSubmit settings */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />
              <input
                type="hidden"
                name="_next"
                value=" https://sakshi-negi-2205.vercel.app/"
              />

              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      required
                    />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Subject"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea
                      name="message"
                      className="form-control"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="form-item col-12 padd-15">
                  <button type="submit" className="btn">
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
