import React, { useState } from "react";
import { Button2 } from "../../components/util/Button/index";
import Recaptcha from "react-recaptcha";
import style from "./ContactUs.module.scss";
import Joi from "joi-browser";

export const ContactUs = (props) => {
  const [isverfied, verified] = useState(false);
  const recaptchaLoaded = () => {
    console.log("Recaptcha loaded");
  };

  const verifyCallback = (response) => {
    if (response) {
      verified(true);
    }
  };

  let dark = props.theme;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formerrors, setFormErrors] = useState({});
  const [submited, setSubmited] = useState(false);

  const schema = {
    name: Joi.string().trim().required().min(3).label("Name"),
    email: Joi.string().trim().email().required().label("Email"),
    subject: Joi.string().trim().required().min(5).label("Subject"),
    message: Joi.string().trim().required().min(8).label("Message"),
  };
  const validate = () => {
    const result = Joi.validate(formData, schema, { abortEarly: false });
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };
  const validateProperty = (input) => {
    const { name, value } = input;
    const obj = { [name]: value };
    const obj_schema = { [name]: schema[name] };
    const result = Joi.validate(obj, obj_schema);
    return result.error ? result.error.details[0].message : null;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    Object.keys(formData).map((key) => {
      if (formData[key] === "" || formData[key] === null) {
        errors[key] = `${key} is required`;
      }
      return 0;
    });
    if (errors !== 0) {
      setFormErrors(errors);
    }
    if (errors) {
      setSubmited(false);
    } else {
      setSubmited(true);
      setFormData("");
    }
  };
  const handleChange = (e) => {
    const { currentTarget: input } = e;
    const errors = { ...formerrors };
    const errorMessage = validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...formData };
    data[input.name] = input.value;
    setFormData({ ...data, [input.name]: input.value });
    setFormErrors(errors);
  };
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
          {submited ? (
            <React.Fragment>
              <div className={style["goodbye-card"]}>
                <h1 className={style["card-heading"]}>Hello There !</h1>
                <div className={style["inside-card"]}>
                  <p style={{ textAlign: "center" }}>
                    We have heard you! 😄 <br />
                    We will get back to you very soon if required!
                  </p>
                </div>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
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
                  Get In Touch
                </h1>
                <div className={style["inside-contact"]}>
                  <form onSubmit={handleSubmit}>
                    <div
                      className={
                        dark
                          ? `${style["contact-input"]} ${style["contact-input-dark"]}`
                          : `${style["contact-input"]} ${style["contact-input-light"]}`
                      }
                    >
                      <input
                        autoFocus="on"
                        autoComplete="off"
                        name="name"
                        id="txt_name"
                        type="text"
                        placeholder="Your Name"
                        onChange={handleChange}
                      />
                      <i className="fas fa-user"></i>
                      {formerrors["name"] && (
                        <div className={style["validation"]}>
                          * {formerrors["name"]}
                        </div>
                      )}
                    </div>
                    <div
                      className={
                        dark
                          ? `${style["contact-input"]} ${style["contact-input-dark"]}`
                          : `${style["contact-input"]} ${style["contact-input-light"]}`
                      }
                    >
                      <input
                        name="email"
                        autoComplete="off"
                        id="txt_email"
                        type="text"
                        placeholder="Your Email"
                        onChange={handleChange}
                      />
                      <i className="fas fa-envelope-open-text"></i>
                      {formerrors["email"] && (
                        <div className={style["validation"]}>
                          * {formerrors["email"]}
                        </div>
                      )}
                    </div>
                    <div
                      className={
                        dark
                          ? `${style["contact-input"]} ${style["contact-input-dark"]}`
                          : `${style["contact-input"]} ${style["contact-input-light"]}`
                      }
                    >
                      <input
                        autoComplete="off"
                        name="subject"
                        id="txt_subject"
                        type="text"
                        placeholder="Your Subject"
                        onChange={handleChange}
                      />
                      <i className="fas fa-pencil-alt"></i>
                      {formerrors["subject"] && (
                        <div className={style["validation"]}>
                          * {formerrors["subject"]}
                        </div>
                      )}
                    </div>
                    <div
                      className={
                        dark
                          ? `${style["contact-input"]} ${style["contact-input-dark"]}`
                          : `${style["contact-input"]} ${style["contact-input-light"]}`
                      }
                    >
                      <textarea
                        autoComplete="off"
                        name="message"
                        id="txt_message"
                        rows="4"
                        cols="20"
                        placeholder="Your Message"
                        onChange={handleChange}
                      ></textarea>
                      <i className="fas fa-comment-dots"></i>
                      {formerrors["message"] && (
                        <div className={style["validation"]}>
                          * {formerrors["message"]}
                        </div>
                      )}
                    </div>
                    <div className={style["text-xs-center"]}>
                      <div
                        className={style["g-recaptcha"]}
                        data-sitekey="my-public-key"
                      >
                        <Recaptcha
                          sitekey="6LfHF5kaAAAAABDfNo0xJAtK3aKoL_HN12Sy0uiV"
                          render="explicit"
                          onloadCallback={recaptchaLoaded}
                          verifyCallback={verifyCallback}
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
                  </form>
                </div>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};
