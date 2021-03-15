import React, { useState } from "react";
import { Button2 } from "../../components/util/Button/index";
import style from "./ContactUs.module.scss";

export const ContactUs = () => {
  //setting form values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");

  //setting custom form error messages
  const [nameErr, setNameErr] = useState({});
  const [emailErr, setEmailErr] = useState({});
  const [subjectErr, setSubjectErr] = useState({});
  const [msgErr, setMsgErr] = useState({});

  const [submited, setSubmited] = useState(false);

  //setting form validations
  const validation = () => {
    const nameErr = {};
    const emailErr = {};
    const subjectErr = {};
    const msgErr = {};

    let isValid = true;

    //name
    if (!name.trim()) {
      nameErr.nameRequired = "* Name is required ";
      isValid = false;
    } else if (name.trim().length < 3) {
      nameErr.nameRequired = "* Name must be atleast 3 characters";
      isValid = false;
    }

    if (name.match("^\\d+$")) {
      nameErr.nameRequired = "* Name must be in characters";
      isValid = false;
    }

    //email
    // eslint-disable-next-line
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(email)) {
      emailErr.emailRequired = "* Please Enter Valid Email";
      isValid = false;
    }
    if (!email.trim()) {
      emailErr.emailRequired = "* Email is required";
      isValid = false;
    }

    //subject
    if (subject.trim().length < 5) {
      subjectErr.subjectRequired = "* Subject must be atleast 5 characters";
      isValid = false;
    }
    if (!subject.trim()) {
      subjectErr.subjectRequired = "* Subject is required";

      isValid = false;
    }

    //message
    if (msg.trim().length < 8) {
      msgErr.msgRequired = "* Message must be atleast 8 characters";

      isValid = false;
    }
    if (!msg.trim()) {
      msgErr.msgRequired = "* Message is required";

      isValid = false;
    }

    //setting up errors in state
    setNameErr(nameErr);
    setEmailErr(emailErr);
    setSubjectErr(subjectErr);
    setMsgErr(msgErr);

    return isValid;
  };

  //handling submit
  const handleSubmit = (e) => {
    e.preventDefault();

    //if isValid = true, form submission trigger
    const isValid = validation();

    if (isValid) {
      setSubmited(true);

      //resetting values in state after submission of form
      setName("");
      setEmail("");
      setSubject("");
      setMsg("");
    }
  };
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
            {submited ? (
              <React.Fragment>
                <div className={style["inside-card"]}>
                  <h1 className={style["card-heading"]}>
                    We have heard you!! <br /> We will soon get back to you if
                    required!
                  </h1>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <h1 className={style["contact-header-text"]}>Get In Touch</h1>
                <div className={style["inside-contact"]}>
                  <form onSubmit={handleSubmit}>
                    <div className={style["contact-input"]}>
                      <input
                        autoFocus="on"
                        autoComplete="off"
                        name="name"
                        id="txt_name"
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <i className="fas fa-user"></i>
                      {Object.keys(nameErr).map((key) => {
                        return (
                          <div className={style["validation"]} key={key}>
                            {nameErr[key]}
                          </div>
                        );
                      })}
                    </div>
                    <div className={style["contact-input"]}>
                      <input
                        autoComplete="off"
                        name="email"
                        id="txt_email"
                        type="text"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <i className="fas fa-envelope-open-text"></i>
                      {Object.keys(emailErr).map((key) => {
                        return (
                          <div className={style["validation"]} key={key}>
                            {emailErr[key]}
                          </div>
                        );
                      })}
                    </div>
                    <div className={style["contact-input"]}>
                      <input
                        autoComplete="off"
                        name="subject"
                        id="txt_subject"
                        type="text"
                        placeholder="Your Subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                      <i className="fas fa-pencil-alt"></i>
                      {Object.keys(subjectErr).map((key) => {
                        return (
                          <div className={style["validation"]} key={key}>
                            {subjectErr[key]}
                          </div>
                        );
                      })}
                    </div>
                    <div className={style["contact-input"]}>
                      <textarea
                        autoComplete="off"
                        name="message"
                        id="txt_message"
                        rows="4"
                        cols="20"
                        placeholder="Your Message"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                      ></textarea>
                      <i className="fas fa-comment-dots"></i>
                      {Object.keys(msgErr).map((key) => {
                        return (
                          <div className={style["validation"]} key={key}>
                            {msgErr[key]}
                          </div>
                        );
                      })}
                    </div>
                    <div className={style["submit-btn"]}>
                      <Button2
                        className={style["submit-btn-text"]}
                        label="Let's Talk!"
                        type="submit"
                      />
                    </div>
                  </form>
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
