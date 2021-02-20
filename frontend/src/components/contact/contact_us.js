import React from "react";
import { Button2 } from "../util/button/button";
import styles from "./contact_us.module.css";
const ContactUs = () => {
  return (
    <div className={styles.contactSection}>
      <div className={styles.contactParent}>
        <div className={`${styles.contactChild} ${styles.child1}`}>
          <img
            src="./images/contact-us-image.png"
            alt=""
            className={styles.contactImage}
          />
        </div>

        <div className={`${styles.contactChild} ${styles.child2}`}>
          <div className={styles.contactCard}>
            <h1 className={styles.contactHeaderText}>Get in touch</h1>
            <div className={styles.insideContact}>
              <div className={styles.contactInput}>
                <input
                  id="txt_name"
                  type="text"
                  required="required"
                  name="name"
                  placeholder="Your Name"
                />
                <i className="fas fa-user"></i>
              </div>
              <div className={styles.contactInput}>
                <input
                  id="txt_email"
                  type="text"
                  required="required"
                  name="email"
                  placeholder="Your Email"
                />
                <i className="fas fa-envelope-open-text"></i>
              </div>
              <div className={styles.contactInput}>
                <input
                  id="txt_subject"
                  type="text"
                  required="required"
                  name="subject"
                  placeholder="Your Subject"
                />
                <i className="fas fa-pencil-alt"></i>
              </div>
              <div className={styles.contactInput}>
                <textarea
                  id="txt_message"
                  rows="4"
                  cols="20"
                  name="message"
                  required="required"
                  placeholder="Your Message"
                ></textarea>
                <i className="fas fa-comment-dots"></i>
              </div>
              <div className={styles.submitBtn}>
                <Button2
                  className={styles.submitBtnText}
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
