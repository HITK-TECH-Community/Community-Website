import React, { useState } from "react";
import { Button2 } from "../../../../../components/util/Button";
import style from "./Invite.module.scss";
export const Invite = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState({});
  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (this.formValidation()) {
      console.log("Form submitted");
    } else {
      console.log("Form has errors.");
    }
  };

  const formValidation = () => {
    const emailError = {};
    let isValid = true;
    if (email.trim().length < 1) {
      isValid = false;
      emailError.emptyEmail = "* Email cannot be empty";
    }

    if (typeof email !== "undefined") {
      let lastAtPos = email.lastIndexOf("@");
      let lastDotPos = email.lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          email.indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          email.length - lastDotPos > 2
        )
      ) {
        isValid = false;
        emailError.invalidEmail = "* Email is not valid";
      }
    }
    setEmailError(emailError);
    return isValid;
  };

  return (
    <div className={style["cont"]}>
      <div className="container">
        <div className={style["dash"]}></div>
      </div>
      <div className={style["admin_section"]}>
        <div className={style["admin_card"]}>
          <h1 className={style["h1"]}>Invite Admins</h1>
          <div className={style["inside_admin"]}>
            <div className={style["form_row"]}></div>
            <div className={style["admin_input"]}>
              <input
                placeholder="Email ID"
                id="txt_email"
                type="text"
                required="required"
                name="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <i className="far fa-envelope"></i>
            </div>
            {Object.keys(emailError).map((key) => {
              return <div style={{ color: "red" }}>{emailError[key]}</div>;
            })}
            <div className={style["submit-btn"]}>
              <Button2
                className={style["submit-btn-text"]}
                label="Submit"
                type="submit"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
