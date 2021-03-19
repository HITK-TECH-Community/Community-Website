import React from "react";
import { Button2 } from "../../components/util/Button/index";
import style from "./ContactUs.module.scss";

export const ContactUs = (props) => {
  let dark = props.theme;
  return (
    <div
      className={
        dark
          ? `${style["contact-section"]} ${style["contact-section-dark"]}`
          : `${style["contact-section"]} ${style["contact-section-light"]}`
      }
    >
      <div className={style["contact-parent"]}>
        <div className={`${style["contact-child"]} ${style["child1"]}`}>
          <img
            src="./images/contact-us-image.png"
            alt=""
            className={style["contact-image"]}
          />
        </div>

        <div className={`${style["contact-child"]} ${style["child2"]}`}>
          <div
            className={
              dark
                ? `${style["contact-card"]} ${style["contact-card-dark"]}`
                : `${style["contact-card"]} ${style["contact-card-light"]}`
            }
          >
            <h1
              className={
                dark
                  ? `${style["contact-header-text"]} ${style["contact-header-text-dark"]}`
                  : `${style["contact-header-text"]} ${style["contact-header-text-light"]}`
              }
            >
              Get in touch
            </h1>
            <div className={style["inside-contact"]}>
              <div
                className={
                  dark
                    ? `${style["contact-input"]} ${style["contact-input-dark"]}`
                    : `${style["contact-input"]} ${style["contact-input-light"]}`
                }
              >
                <input
                  id="txt_name"
                  type="text"
                  required="required"
                  name="name"
                  placeholder="Your Name"
                />
                <i className="fas fa-user"></i>
              </div>
              <div
                className={
                  dark
                    ? `${style["contact-input"]} ${style["contact-input-dark"]}`
                    : `${style["contact-input"]} ${style["contact-input-light"]}`
                }
              >
                <input
                  id="txt_email"
                  type="text"
                  required="required"
                  name="email"
                  placeholder="Your Email"
                />
                <i className="fas fa-envelope-open-text"></i>
              </div>
              <div
                className={
                  dark
                    ? `${style["contact-input"]} ${style["contact-input-dark"]}`
                    : `${style["contact-input"]} ${style["contact-input-light"]}`
                }
              >
                <input
                  id="txt_subject"
                  type="text"
                  required="required"
                  name="subject"
                  placeholder="Your Subject"
                />
                <i className="fas fa-pencil-alt"></i>
              </div>
              <div
                className={
                  dark
                    ? `${style["contact-input"]} ${style["contact-input-dark"]}`
                    : `${style["contact-input"]} ${style["contact-input-light"]}`
                }
              >
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
              <div className={style["submit-btn"]}>
                <Button2
                  className={style["submit-btn-text"]}
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
