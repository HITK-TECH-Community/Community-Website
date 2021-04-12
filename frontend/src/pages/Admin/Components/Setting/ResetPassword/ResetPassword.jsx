import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Button2 } from "../../../../../components/util/Button";
import { END_POINT } from "./../../../../../config/api";
import { SimpleToast } from "./../../../../../components/util/Toast/Toast";
import style from "./reset-password.module.scss";

export function ResetPassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hideOldPassword, setHideOldPassword] = useState(false);
  const [hideNewPassword, setHideNewPassword] = useState(false);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(false);
  const [passwordChanged, setPasswordChange] = useState(false);
  const oldPasswordInput = useRef("oldpassword");
  const newPasswordInput = useRef("newpassword");
  const confirmPasswordInput = useRef("confirmpassword");

  const token = useSelector((state) => state.token);

  const [openSuccess, setOpenSuccessToast] = React.useState(false);
  const [openError, setOpenErrorToast] = React.useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleCloseToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSuccessToast(false);
    setOpenErrorToast(false);
    setToastMessage("");
  };

  hideOldPassword
    ? (oldPasswordInput.current = "text")
    : (oldPasswordInput.current = "password");

  hideNewPassword
    ? (newPasswordInput.current = "text")
    : (newPasswordInput.current = "password");

  hideConfirmPassword
    ? (confirmPasswordInput.current = "text")
    : (confirmPasswordInput.current = "password");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setOpenErrorToast(true);
      setToastMessage("New password and Confirm password are different");
      return;
    }
    return fetch(`${END_POINT}/admin/password`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ oldPassword, newPassword }),
    })
      .then((response) => {
        if (response.status === 200) {
          setOpenSuccessToast(true);
          setPasswordChange(true);
        }
        response
          .json()
          .then((res) => {
            if (res.statusCode === 400) {
              setOpenErrorToast(true);
              setToastMessage(res.message);
            }
          })
          .catch((err) => {
            console.log("Error: ", err);
          });
      })
      .catch((err) => {
        console.error("must be a backend problem🤔:", err);
      });
  };

  return (
    <div className={style["cont"]}>
      <div className="container">
        <div className={style["dash"]}></div>
      </div>
      <div className={style["admin_section"]}>
        <div className={style["admin_card"]}>
          {passwordChanged ? (
            <React.Fragment>
              <h1 className={style["card-heading"]}>Password Changed</h1>
              <div className={style["inside-card"]}>
                <p style={{ textAlign: "center" }}>
                  You have successfully changed your password 🎉
                </p>
                <br />
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <h1 className={style["h1"]}>Reset Password</h1>
              <form onSubmit={handleSubmit}>
                <div className={style["inside_admin"]}>
                  <div className={style["form_row"]}></div>
                  <div className={style["admin_input"]}>
                    <input
                      placeholder="Old Password"
                      id="oldpassword"
                      name="oldpassword"
                      type={oldPasswordInput.current}
                      onChange={(e) => {
                        setOldPassword(e.currentTarget.value);
                      }}
                    />
                    <i
                      className={
                        hideOldPassword ? "fa fa-eye" : "fa fa-eye-slash"
                      }
                      onClick={() => setHideOldPassword(!hideOldPassword)}
                    ></i>
                  </div>
                  <div className={style["admin_input"]}>
                    <input
                      placeholder="New Password"
                      id="newpassword"
                      name="newpassword"
                      type={newPasswordInput.current}
                      onChange={(e) => {
                        setNewPassword(e.currentTarget.value);
                      }}
                    />
                    <i
                      className={
                        hideNewPassword ? "fa fa-eye" : "fa fa-eye-slash"
                      }
                      onClick={() => setHideNewPassword(!hideNewPassword)}
                    ></i>
                  </div>

                  <div className={style["admin_input"]}>
                    <input
                      placeholder="Confirm Password"
                      id="conformpassword"
                      name="confirmpassword"
                      type={confirmPasswordInput.current}
                      onChange={(e) => {
                        setConfirmPassword(e.currentTarget.value);
                      }}
                    />
                    <i
                      className={
                        hideConfirmPassword ? "fa fa-eye" : "fa fa-eye-slash"
                      }
                      onClick={() =>
                        setHideConfirmPassword(!hideConfirmPassword)
                      }
                    ></i>
                  </div>

                  <div className={style["submit-btn"]}>
                    <Button2
                      className={style["submit-btn-text"]}
                      label="Submit"
                      type="submit"
                    />
                  </div>
                </div>
              </form>
            </React.Fragment>
          )}
        </div>
      </div>
      <SimpleToast
        open={openSuccess}
        message="Password Changed Successfully"
        handleCloseToast={handleCloseToast}
        severity="success"
      />
      <SimpleToast
        open={openError}
        message={toastMessage}
        handleCloseToast={handleCloseToast}
        severity="error"
      />
    </div>
  );
}
