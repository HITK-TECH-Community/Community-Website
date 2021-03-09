import React, { useState } from "react";
import { Button1, Button2 } from "../../components/util/Button/index";
import style from "./ForgotPassword.module.scss";
// import { END_POINT } from "../../config/api";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

export function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [submited, setSubmited] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  function submitForgotPassword(e) {
    e.preventDefault();
    return setSubmited(true);
    // TODO : Connect with backend Api
    // return fetch(`${END_POINT}/auth/forgot-password`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({email}),
    // }).then((response) =>response.json()).then((res) => {
    //   if (res.status === 200) {
    //     setSubmited(true)
    //   } else {
    //     setStatus("Some Error Occured");
    //   }
    // });
  }

  return (
    <>
      <div className={style["forgot-password-section"]}>
        <div className={`${style["forgot-password-image"]} ${style["child1"]}`}>
          <img
            src="./images/forgot-password.png"
            alt="forgot-password-illustration"
          />
        </div>
        <div className={`${style["forgot-password-form"]} ${style["child2"]}`}>
          <div className={style["forgot-password-card"]}>
            {submited ? (
              <React.Fragment>
                <h1 className={style["card-heading"]}>Mail Sent</h1>
                <div className={style["inside-card"]}>
                  <p style={{ textAlign: "center" }}>
                    An invitation link has been sent on your registered email,
                    please check your inbox for further steps.
                  </p>
                  <Grid container spacing={3}>
                    <Grid xs={6} style={{ padding: "5%" }}>
                      <Link to="/">
                        <Button2
                          id="home-btn"
                          label="Home"
                          className={style["back-button"]}
                        />
                      </Link>
                    </Grid>
                    <Grid xs={6} style={{ padding: "5%" }}>
                      <Link to="/admin">
                        <Button1
                          id="login-btn"
                          label="Login"
                          className={`${style["back-button"]} ${style["no-border"]}`}
                        />
                        {console.log(style["back-button"])}
                      </Link>
                    </Grid>
                  </Grid>
                  <br />
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <h1 className={style["card-heading"]}>Trouble Logging In?</h1>
                <form onSubmit={submitForgotPassword}>
                  <div className={style["inside-card"]}>
                    <div className={style["forgot-password-input"]}>
                      <input
                        autocomplete="off"
                        id="username"
                        type="email"
                        required="required"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        className={style["input-forgot-password"]}
                        onInvalid={(e)=>{ e.target.setCustomValidity("Enter a valid Email Id") }}
                        onInput={(e)=>{ e.target.value?.match(new RegExp(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)) && e.target.setCustomValidity("") }}
                      />
                      <i className="fas fa-at"></i>
                    </div>
                    <div className={style["submit-btn"]}>
                      <Button2
                        id="btn"
                        label="Submit"
                        type="submit"
                        className={style["submit-btn-text"]}
                      />
                    </div>
                  </div>
                </form>
              </React.Fragment>
            )}
            <div
              style={{ color: "red", textAlign: "center", fontWeight: "bold" }}
            >
              {status}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
