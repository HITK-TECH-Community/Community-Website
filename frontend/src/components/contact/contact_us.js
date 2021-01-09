import React from "react";
import { Button2 } from "../util/button/button";
import "./contact_us.css";
const ContactUs = () => {
  return (
    <div className="contact-section">
      <div className="contact-parent">
        <div className="contact-child child1">
          <img src="./images/contact-us-image.png" alt="" className="contact-image" />
        </div>

        <div className="contact-child child2">
          <div className="contact-card">
            <h1 className="contact-header-text">Get in touch</h1>
            <div className="inside-contact">
              <div className="contact-input">
                <input
                  id="txt_name"
                  type="text"
                  Required="required"
                  name="name"
                  placeholder="Your Name"
                />
                <i className="fas fa-user"></i>
              </div>
              <div className="contact-input">
                <input
                  id="txt_email"
                  type="text"
                  Required="required"
                  name="email"
                  placeholder="Your Email"
                />
                <i className="fas fa-envelope-open-text"></i>
              </div>
              <div className="contact-input">
                <input
                  id="txt_subject"
                  type="text"
                  Required="required"
                  name="subject"
                  placeholder="Your Subject"
                />
                <i className="fas fa-pencil-alt"></i>
              </div>
              <div className="contact-input">
                <textarea
                  id="txt_message"
                  rows="4"
                  cols="20"
                  name="message"
                  Required="required"
                  placeholder="Your Message"
                ></textarea>
                <i className="fas fa-comment-dots"></i>
              </div>
                <div className="submit-btn">
                <Button2
                  className="submit-btn-text"
                  label="Let's Talk!"
                  type="submit"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
