import React, { useState } from "react";
import Joi from "joi-browser";
import { Button2 } from "../../components/util/Button/index";
import style from "./ForgotPassword.module.scss";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

export function ForgotPassword(props) {
  const [status, setStatus] = useState("");
  const [submited, setSubmited] = useState(false);
  let dark = props.theme;

  const [formdata, setFormData] = useState({
    email: "",
  });

  const [formerrors, setFormErrors] = useState({});

  const schema = {
    email: Joi.string().email().min(3).max(100).required(),
  };

  const validate = () => {
    const result = Joi.validate(formdata, schema, { abortEarly: false });
    if (!result.error) return true;
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
    Object.keys(formdata).map((key) => {
      if (formdata[key] === "" || formdata[key] === null) {
        errors[key] = `${key} is not allowed to be empty`;
      }
      return 0;
    });
    if (errors["info"]) {
      delete errors["info"];
    }
    if (Object.keys(errors).length !== 0) {
      setFormErrors(errors);
    }
    if (Object.keys(errors).length !== 0) {
      console.log(errors);
    } else {
      //Call the Server
      console.log("Submitted");
      submitForgotPassword();
    }
  };

  const handleChange = (e) => {
    const { currentTarget: input } = e;
    const errors = { ...formerrors };
    const errorMessage = validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...formdata };
    data[input.name] = input.value;
    setFormData({ ...data, [input.name]: input.value });
    setFormErrors(errors);
  };

  function submitForgotPassword(e) {
    return setSubmited(true);
  }

  return (
    <>
      <div
        className={
          dark
            ? `${style["forgot-password-section-dark"]}`
            : `${style["forgot-password-section-light"]}`
        }
      >
        <div
          className={
            dark
              ? `${style["forgot-password-image-dark"]} ${style["child1-dark"]}`
              : `${style["forgot-password-image-light"]} ${style["child1-light"]}`
          }
        >
          <img
            src="./images/forgot-password.png"
            alt="forgot-password-illustration"
          />
        </div>
        <div className={`${style["forgot-password-form"]} ${style["child2"]}`}>
          <div
            className={
              dark
                ? `${style["forgot-password-card-dark"]} ${style["forgot-password-card"]}`
                : `${style["forgot-password-card-light"]} ${style["forgot-password-card"]}`
            }
          >
            {submited ? (
              <React.Fragment>
                <h1
                  className={
                    dark
                      ? `${style["card-heading-dark"]} ${style["card-heading"]}`
                      : `${style["card-heading-light"]} ${style["card-heading"]}`
                  }
                >
                  Mail Sent
                </h1>
                <div
                  className={
                    dark
                      ? `${style["inside-card-dark"]}`
                      : `${style["inside-card-light"]}`
                  }
                >
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
                        <Button2
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
                <h1
                  className={
                    dark
                      ? `${style["card-heading-dark"]} ${style["card-heading"]}`
                      : `${style["card-heading-light"]} ${style["card-heading"]}`
                  }
                >
                  Trouble Logging In?
                </h1>
                <form onSubmit={handleSubmit} noValidate>
                  <div
                    className={
                      dark
                        ? `${style["inside-card-light"]}`
                        : `${style["inside-card-light"]}`
                    }
                  >
                    <div className={`form-group ${style["form-group"]}`}>
                      <div
                        className={
                          dark
                            ? `${style["forgot-password-input-dark"]} ${style["forgot-password-input"]}`
                            : `${style["forgot-password-input-light"]} ${style["forgot-password-input"]}`
                        }
                      >
                        <input
                          autocomplete="off"
                          id="username"
                          type="email"
                          name="email"
                          placeholder="Email"
                          onChange={handleChange}
                          className={
                            dark
                              ? `${style["input-forgot-password-dark"]} ${style["input-forgot-password"]}`
                              : `${style["input-forgot-password-light"]} ${style["input-forgot-password"]}`
                          }
                        />
                        <i className="fas fa-at"></i>
                        <div
                          className={`${style["validation"]} validation d-sm-none d-md-block`}
                        >
                          {formerrors["email"] && (
                            <div>* {formerrors["email"]}</div>
                          )}
                        </div>
                      </div>
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
