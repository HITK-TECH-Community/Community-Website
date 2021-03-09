import React, { useState, useRef, useEffect } from "react";
import { Button2 } from "../../components/util/Button/index";
import style from "./login.module.scss";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions/actions";
import { END_POINT } from "../../config/api";
import { SimpleToast } from "../../components/util/Toast";
import { Link } from "react-router-dom";

export function Login() {
  const [hidePassword, setHidePassword] = useState(false);
  const passwordInput = useRef("password");
  const schema = { email: "", password: "" };
  const [credential, setCredential] = useState(schema);
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  const logout = useSelector((state) => state.logout);
  const [open, setOpenToast] = React.useState(false);

  const handleCloseToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenToast(false);
  };

  useEffect(() => {
    if (logout) {
      setOpenToast(true);
      localStorage.removeItem("log");
      dispatch({ type: actions.LOG_OUT });
    }
  }, [logout, dispatch]);

  function loginUser(e) {
    e.preventDefault();
    return fetch(`${END_POINT}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credential),
    }).then((response) =>
      response.json().then((res) => {
        if (response.status === 200) {
          localStorage.setItem("token", res.token);
          localStorage.setItem("isSuperAdmin", res.isSuperAdmin);
          window.location = "/dashboard";
        } else {
          setStatus("Unauthorised");
        }
      })
    );
  }

  hidePassword
    ? (passwordInput.current = "text")
    : (passwordInput.current = "password");

  return (
    <>
      <div className={style["login-section"]}>
        <div className={`${style["login-image"]} ${style["child1"]}`}>
          <img src="./images/login.png" alt="login-illustration" />
        </div>
        <div className={`${style["login-form"]} ${style["child2"]}`}>
          <div className={style["login-card"]}>
            <h1 className={style["card-heading"]}>Welcome Back</h1>
            <form onSubmit={loginUser}>
              <div className={style["inside-card"]}>
                <div className={style["login-input"]}>
                  <input
                    autocomplete="off"
                    id="username"
                    type="email"
                    required="required"
                    name="email"
                    placeholder="Username"
                    onChange={handleChange}
                    className={style["input-login"]}
                  />
                  <i className="fas fa-user"></i>
                </div>
                <div className={style["login-input"]}>
                  <input
                    id="password"
                    required="required"
                    name="password"
                    placeholder="Password"
                    className={style["input-login"]}
                    type={passwordInput.current}
                    onChange={handleChange}
                  />
                  <i
                    className={hidePassword ? "fa fa-eye" : "fa fa-eye-slash"}
                    onClick={() => setHidePassword(!hidePassword)}
                  ></i>
                </div>
                <div className={style["submit-btn"]}>
                  <Button2
                    id="btn"
                    label="Sign In"
                    type="submit"
                    className={style["submit-btn-text"]}
                  />
                </div>
                <Link to="/forgot-password">
                  <h5 style={{textAlign:'center'}}>
                    Forgot your password?
                  </h5>
                </Link>
              </div>
            </form>
            <div
              style={{ color: "red", textAlign: "center", fontWeight: "bold" }}
            >
              {status}
            </div>
          </div>
        </div>
      </div>
      <SimpleToast
        open={open}
        message="Successfully Logged Out!"
        handleCloseToast={handleCloseToast}
      />
    </>
  );
}
