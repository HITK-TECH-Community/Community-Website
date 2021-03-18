import React from "react";
import { Button2 } from "../../components/util/Button/index";
import Recaptcha from "react-recaptcha";
import style from "./ContactUs.module.scss";

export class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
    this.state = {
      isVerified: false,
    };
  }

  recaptchaLoaded() {
    console.log("Recaptcha loaded");
  }

  verifyCallback(response) {
    if (response) {
      this.setState({
        isVerified: true,
      });
    }
  }
  render() {
    return (
      <div className={style["contact-section"]}>
        <div className={style["contact-parent"]}>
          <div className={`${style["contact-child"]} ${style["child1"]}`}>
            <img
              src="./images/contact-us-image.png"
              alt=""
              className={style["contact-image"]}
            />
          </div>

          <div className={`${style["contact-child"]} ${style["child2"]}`}>
            <div className={style["contact-card"]}>
              <h1 className={style["contact-header-text"]}>Get in touch</h1>
              <div className={style["inside-contact"]}>
                <div className={style["contact-input"]}>
                  <input
                    id="txt_name"
                    type="text"
                    required="required"
                    name="name"
                    placeholder="Your Name"
                  />
                  <i className="fas fa-user"></i>
                </div>
                <div className={style["contact-input"]}>
                  <input
                    id="txt_email"
                    type="text"
                    required="required"
                    name="email"
                    placeholder="Your Email"
                  />
                  <i className="fas fa-envelope-open-text"></i>
                </div>
                <div className={style["contact-input"]}>
                  <input
                    id="txt_subject"
                    type="text"
                    required="required"
                    name="subject"
                    placeholder="Your Subject"
                  />
                  <i className="fas fa-pencil-alt"></i>
                </div>
                <div className={style["contact-input"]}>
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
                <div class={style["text-xs-center"]}>
                  <div
                    class={style["g-recaptcha"]}
                    data-sitekey="my-public-key"
                  >
                    <Recaptcha
                      sitekey="6LfBC4QaAAAAAHoFhHxXordvHQd9tLOUic8WFllR"
                      render="explicit"
                      onloadCallback={this.recaptchaLoaded}
                      verifyCallback={this.verifyCallback}
                    />
                  </div>
                </div>
                <br></br>
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
  }
}
