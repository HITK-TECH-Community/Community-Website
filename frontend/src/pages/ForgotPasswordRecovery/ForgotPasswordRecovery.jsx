import React, { useState } from "react";
import style from "./ForgotPasswordRecovery.module.scss";
import { Button2 } from "../../components/util/Button/index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export function ForgotPasswordRecovery() {
  const [new_password, setNewPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const notify = () => {
    toast.warning("Passwords does not match", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
    });
    setNewPassword("");
    setConfirmPassword("");
  };
  function handleSubmit(e) {
    e.preventDefault();
    if (new_password === confirm_password) {
      console.log("password changed");
      setNewPassword("");
      setConfirmPassword("");
    } else {
      notify();
    }
  }

  return (
    <>
      <div className={style["forgot-password-recovery-section"]}>
        <div
          className={`${style["forgot-password-recovery-image"]} ${style["child1"]}`}
        >
          <img
            src="./images/forgot-password-recovery.jpg"
            alt="Forgot-Password-Recovery-Illustration"
          ></img>
        </div>

        <div
          className={`${style["forgot-password-recovery-form"]} ${style["child2"]}`}
        >
          <div className={style["forgot-password-recovery-card"]}>
            <h1 className={style["card-heading"]}>Reset your Password</h1>

            <form onSubmit={handleSubmit}>
              <div className={style["inside-card"]}>
                <div className={style["forgot-password-recovery-input"]}>
                  <input
                    type="password"
                    id="new password"
                    required="required"
                    name="new password"
                    placeholder="New Password"
                    value={new_password}
                    className={style["input-forgot-password-recovery"]}
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                    }}
                  ></input>

                  <input
                    type="password"
                    id="confirm password"
                    name="confirm password"
                    required="required"
                    value={confirm_password}
                    placeholder="Confirm Password"
                    className={style["input-forgot-password-recovery"]}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  ></input>
                </div>

                <div className={style["submit-btn"]}>
                  <Button2
                    type="submit"
                    label="Submit"
                    className={style["submit-btn-text"]}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
