import React, { useState, useRef, useEffect } from "react";
import { Button2 } from "../../components/util/Button/index";
import style from "./login.module.scss";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions/actions";
import { END_POINT } from "../../config/api";
import { SimpleToast } from "../../components/util/Toast";
import { Link } from "react-router-dom";
import Joi from "joi-browser";

export function Login(props) {
  const [hidePassword, setHidePassword] = useState(false);
  const passwordInput = useRef("password");
  const schema = { email: "", password: "" };
  const [credential, setCredential] = useState(schema);
  const dispatch = useDispatch();
  const dark = props.theme;
  const [errorObj, setErrorObj] = useState({});

  const validationSchema = {
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  };

  const isFormValid = () => {
    const check = Joi.validate(credential, validationSchema, {
      abortEarly: false,
    });
    if (!check.error) return true;
    const errors = {};
    check.error.details.map((item) => {
      if (!errors[item.path[0]]) errors[item.path[0]] = item.message;
      return 0;
    });
    setErrorObj(errors);
    return false;
  };

  const validateField = (input) => {
    const { name, value } = input;
    const obj = { [name]: value };
    const obj_schema = { [name]: validationSchema[name] };
    const result = Joi.validate(obj, obj_schema);

    return result.error ? result.error.details[0].message : null;
  };

  const handleChange = (e) => {
    const { currentTarget: input } = e;
    const errors = { ...errorObj };
    const errorMessage = validateField(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    setCredential({ ...credential, [e.target.name]: e.target.value });
    setErrorObj(errors);
  };

  const logout = useSelector((state) => state.logout);
  const expired = useSelector((state) => state.expired);
  const [openLogoutSuccess, setOpenLogoutSuccessToast] = React.useState(false);
  const [openError1, setOpenError1Toast] = React.useState(false); //backend error
  const [openError2, setOpenError2Toast] = React.useState(false); //unauthorized
  const [openError3, setOpenError3Toast] = React.useState(false); //unknown Error
  const [openError4, setOpenError4Toast] = React.useState(false); //Key Expired

  const handleCloseToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenLogoutSuccessToast(false);
    setOpenError1Toast(false);
    setOpenError2Toast(false);
    setOpenError3Toast(false);
    setOpenError4Toast(false);
  };

  useEffect(() => {
    if (logout) {
      if (expired) {
        setOpenError4Toast(true);
        localStorage.removeItem("expired");
      } else {
        setOpenLogoutSuccessToast(true);
      }
      localStorage.removeItem("log");
      dispatch({ type: actions.LOG_OUT });
    }
  }, [logout, dispatch, expired]);

  function loginUser(e) {
    e.preventDefault();
    if (isFormValid()) {
      return fetch(`${END_POINT}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credential),
      })
        .then((response) =>
          response
            .json()
            .then((res) => {
              if (response.status === 200) {
                localStorage.setItem("token", res.token);
                localStorage.setItem("isSuperAdmin", res.isSuperAdmin);
                window.location = "/dashboard?loggedin";
              } else if (response.status === 400) {
                setOpenError2Toast(true);
              } else {
                setOpenError3Toast(true);
              }
            })
            .catch((err) => setOpenError3Toast(true))
        )
        .catch((err) => {
          setOpenError1Toast(true);
          console.error("must be a backend problem🤔:", err);
        });
    }
  }

  hidePassword
    ? (passwordInput.current = "text")
    : (passwordInput.current = "password");

  return (
    <>
      <div
        className={
          dark
            ? `${style["login-section-dark"]}`
            : `${style["login-section-light"]}`
        }
      >
        <div
          className={
            dark
              ? `${style["login-image-dark"]} ${style["child1-dark"]}`
              : `${style["login-image-light"]} ${style["child1-light"]}`
          }
        >
          <img src="./images/login.png" alt="login-illustration" />
        </div>
        <div className={`${style["login-form"]} ${style["child2"]}`}>
          <div
            className={
              dark
                ? `${style["login-card-dark"]} ${style["login-card"]}`
                : `${style["login-card-light"]} ${style["login-card"]}`
            }
          >
            <h1
              className={
                dark
                  ? `${style["card-heading-dark"]} ${style["card-heading"]}`
                  : `${style["card-heading-light"]} ${style["card-heading"]}`
              }
            >
              Welcome Back
            </h1>
            <form onSubmit={loginUser} noValidate>
              <div className={style["inside-card"]}>
                <div
                  className={
                    dark
                      ? `${style["login-input-dark"]} ${style["login-input"]}`
                      : `${style["login-input-light"]} ${style["login-input"]}`
                  }
                >
                  <input
                    autocomplete="off"
                    id="username"
                    type="email"
                    name="email"
                    placeholder="Username"
                    onChange={handleChange}
                    className={
                      dark
                        ? `${style["input-login-dark"]} ${style["input-login"]}`
                        : `${style["input-login-light"]} ${style["input-login"]}`
                    }
                  />
                  <i className="fas fa-user"></i>
                  <div
                    className={`${style["validation"]} d-sm-none d-md-block`}
                  >
                    {errorObj["email"] && <div>* {errorObj["email"]}</div>}
                  </div>
                </div>
                <div
                  className={
                    dark
                      ? `${style["login-input-dark"]} ${style["login-input"]}`
                      : `${style["login-input-light"]} ${style["login-input"]}`
                  }
                >
                  <input
                    id="password"
                    name="password"
                    placeholder="Password"
                    className={
                      dark
                        ? `${style["input-login-dark"]} ${style["input-login"]}`
                        : `${style["input-login-light"]} ${style["input-login"]}`
                    }
                    type={passwordInput.current}
                    onChange={handleChange}
                  />
                  <i
                    className={hidePassword ? "fa fa-eye" : "fa fa-eye-slash"}
                    onClick={() => setHidePassword(!hidePassword)}
                  ></i>
                  <div
                    className={`${style["validation"]} d-sm-none d-md-block`}
                  >
                    {errorObj["password"] && (
                      <div>* {errorObj["password"]}</div>
                    )}
                  </div>
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
                  <h5 style={{ textAlign: "center" }}>Forgot your password?</h5>
                </Link>
              </div>
            </form>
            {/* <div style={{ color: "red", textAlign: "center", fontWeight: "bold" }}>{status}</div> */}
          </div>
        </div>
      </div>
      <SimpleToast
        open={openLogoutSuccess}
        message="Successfully Logged Out!"
        handleCloseToast={handleCloseToast}
        severity="success"
      />
      <SimpleToast
        open={openError1}
        message="Connection Error! Please try again later"
        handleCloseToast={handleCloseToast}
        severity="error"
      />
      <SimpleToast
        open={openError2}
        message="Invalid Username or Password! Try again."
        handleCloseToast={handleCloseToast}
        severity="error"
      />
      <SimpleToast
        open={openError3}
        message="Invalid Username or Password! Try again."
        handleCloseToast={handleCloseToast}
        severity="error"
      />
      <SimpleToast
        open={openError4}
        message="Please login again"
        handleCloseToast={handleCloseToast}
        severity="info"
      />
    </>
  );
}
