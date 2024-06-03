import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Joi from "joi-browser";
import { Button2 } from "../../../../components/util/Button/index";
import style from "./resource-sharing-form.module.scss";
import Loader from "../../../../components/util/Loader";
import { SimpleToast } from "../../../../components/util/Toast";
import { postResources } from "../../../../service/Resources";

export function ResourceSharingForm(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState({
    toastStatus: false,
    toastType: "",
    toastMessage: "",
  });

  let dark = props.theme;

  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    url: "",
    description: "",
    trustLevel: null,
    expiryDate: "",
    additionalInfo: "",
  });

  const [formerrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const schema = {
    name: Joi.string().trim().required().min(3).label("Name"),
    email: Joi.string().trim().email().required().label("Email"),
    url: Joi.string().uri().required().label("Url"),
    description: Joi.string().trim().required().min(8).label("Description"),
    trustLevel: Joi.required().label("TrustLevel"),
    expiryDate: Joi.date().required().label("ExpiryDate"),
    additionalInfo: Joi.string().trim().label("AdditionalInfo"),
  };

  const validate = () => {
    const result = Joi.validate(formdata, schema, { abortEarly: false });
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    Object.keys(formdata).map((key) => {
      if (formdata[key] === "" || formdata[key] === null) {
        errors[key] = `${key} is not allowed to be empty`;
      }
      return 0;
    });
    if (errors !== 0) {
      setFormErrors(errors);
    }
    if (errors) {
      setSubmitted(false);
    } else {
      setIsLoading(true);
      await postResources(formdata, setToast, toast);
      setFormData("");
      setIsLoading(false);
      setSubmitted(true);
      console.log("Submitted");
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

  const handleCloseResourceToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setToast({ ...toast, toastStatus: false });
  };

  return (
    <div
      className={
        dark
          ? `${style["resource-form"]} ${style["resource-form-dark"]} ${style["child2"]}`
          : `${style["resource-form"]} ${style["resource-form-light"]} ${style["child2"]}`
      }
    >
      {submitted ? (
        isLoading ? (
          <React.Fragment>
            <div className={style["goodbye-card"]}>
              <Loader height="25vh" />
            </div>
          </React.Fragment>
        ) : toast.toastType === "error" ? (
          <React.Fragment>
            <div className={style["goodbye-card"]}>
              <h1 className={style["card-heading"]}>OOPS !</h1>
              <div className={style["inside-card"]}>
                <p style={{ textAlign: "center" }}>
                  Sorry for the inconvenience caused, our servers are currently
                  facing some issues. 🔧 <br />
                  Please try again later!
                </p>
              </div>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className={style["goodbye-card"]}>
              <h1 className={style["card-heading"]}>Hello There !</h1>
              <div className={style["inside-card"]}>
                <p style={{ textAlign: "center" }}>
                  Congratulations !!! ✨ <br />
                  Your Resource has been successfully added. 😄
                </p>
              </div>
            </div>
          </React.Fragment>
        )
      ) : (
        <div
          className={
            dark
              ? `${style["resource-card"]} ${style["resource-card-dark"]} `
              : `${style["resource-card"]} ${style["resource-card-light"]}`
          }
        >
          <h3
            className={
              dark
                ? `${style["resource-header-text"]} ${style["resource-header-text-dark"]} `
                : `${style["resource-header-text"]} ${style["resource-header-text-light"]}`
            }
          >
            Resource Sharing Form
          </h3>
          <form onSubmit={handleSubmit}>
            <div className={style["inside-resource"]}>
              <div className={`form-group ${style["form-group"]}`}>
                <div
                  className={
                    dark
                      ? `${style["resource-input"]} ${style["resource-input-dark"]} `
                      : `${style["resource-input"]} ${style["resource-input-light"]}`
                  }
                >
                  <input
                    autoFocus="on"
                    placeholder="Name"
                    id="txt_name"
                    type="text"
                    name="name"
                    onChange={handleChange}
                  />
                  <i className="fas fa-user"></i>
                  <div
                    className={`${style["validation"]} validation d-sm-none d-md-block`}
                  >
                    {formerrors["name"] ? (
                      <div>* {formerrors["name"]}</div>
                    ) : (
                      <div>&nbsp; &nbsp;</div>
                    )}
                  </div>
                </div>
              </div>

              <div className={`form-group ${style["form-group"]}`}>
                <div
                  className={
                    dark
                      ? `${style["resource-input"]} ${style["resource-input-dark"]} `
                      : `${style["resource-input"]} ${style["resource-input-light"]}`
                  }
                >
                  <input
                    placeholder="Email ID"
                    id="txt_email"
                    type="email"
                    name="email"
                    onChange={handleChange}
                  />
                  <i className="fas fa-envelope"></i>
                  <div
                    className={`${style["validation"]} validation d-sm-none d-md-block`}
                  >
                    {formerrors["email"] ? (
                      <div>* {formerrors["email"]}</div>
                    ) : (
                      <div>&nbsp; &nbsp;</div>
                    )}
                  </div>
                </div>
              </div>

              <div className={`form-group ${style["form-group"]}`}>
                <div
                  className={
                    dark
                      ? `${style["resource-input"]} ${style["resource-input-dark"]} `
                      : `${style["resource-input"]} ${style["resource-input-light"]}`
                  }
                >
                  <input
                    placeholder="Resource URL"
                    id="txt_link"
                    type="url"
                    name="url"
                    onChange={handleChange}
                  />
                  <i className="fas fa-link"></i>
                  <div
                    className={`${style["validation"]} validation d-sm-none d-md-block`}
                  >
                    {formerrors["url"] ? (
                      <div>* {formerrors["url"]}</div>
                    ) : (
                      <div>&nbsp; &nbsp;</div>
                    )}
                  </div>
                </div>
              </div>

              <div
                className={
                  dark
                    ? `${style["resource-input"]} ${style["resource-input-dark"]} `
                    : `${style["resource-input"]} ${style["resource-input-light"]}`
                }
              >
                <textarea
                  placeholder="Resource Description"
                  id={style["txt-desc"]}
                  rows="6"
                  cols="20"
                  name="description"
                  onChange={handleChange}
                ></textarea>
                <i className="fas fa-comment-dots"></i>
                <div
                  className={`${style["validation"]} validation d-sm-none d-md-block`}
                >
                  {formerrors["description"] ? (
                    <div>* {formerrors["description"]}</div>
                  ) : (
                    <div>&nbsp; &nbsp;</div>
                  )}
                </div>
              </div>
              <div
                className={
                  dark
                    ? `${style["resource-input1"]} ${style["resource-input1-dark"]} `
                    : `${style["resource-input1"]} ${style["resource-input1-light"]}`
                }
              >
                <div>
                  <label
                    className={
                      dark
                        ? `mb-3 ${style["level-of-trust"]} ${style["level-of-trust-dark"]}`
                        : `mb-3 ${style["level-of-trust"]} ${style["level-of-trust-dark"]}`
                    }
                  >
                    Level Of Trust
                  </label>
                </div>
                <div className={style["radio-buttons"]}>
                  <div
                    className={
                      dark
                        ? `${style["radio-item"]} ${style["radio-item-dark"]}`
                        : `${style["radio-item"]} ${style["radio-item-light"]}`
                    }
                  >
                    <input
                      type="radio"
                      id="ritema"
                      name="trustLevel"
                      value={1}
                      onChange={handleChange}
                    />
                    <label
                      className={
                        dark
                          ? `mx-3 ${style["label"]} ${style["label-dark"]}`
                          : `mx-3 ${style["label"]}`
                      }
                      htmlFor="ritema"
                    >
                      1
                    </label>
                  </div>
                  <div
                    className={
                      dark
                        ? `${style["radio-item"]} ${style["radio-item-dark"]}`
                        : `${style["radio-item"]} ${style["radio-item-light"]}`
                    }
                  >
                    <input
                      type="radio"
                      id="ritemb"
                      name="trustLevel"
                      value={2}
                      onChange={handleChange}
                    />
                    <label
                      className={
                        dark
                          ? `mx-3 ${style["label"]} ${style["label-dark"]}`
                          : `mx-3 ${style["label"]}`
                      }
                      htmlFor="ritemb"
                    >
                      2
                    </label>
                  </div>
                  <div
                    className={
                      dark
                        ? `${style["radio-item"]} ${style["radio-item-dark"]}`
                        : `${style["radio-item"]} ${style["radio-item-light"]}`
                    }
                  >
                    <input
                      type="radio"
                      id="ritemc"
                      name="trustLevel"
                      value={3}
                      onChange={handleChange}
                    />
                    <label
                      className={
                        dark
                          ? `mx-3 ${style["label"]} ${style["label-dark"]}`
                          : `mx-3 ${style["label"]}`
                      }
                      htmlFor="ritemc"
                    >
                      3
                    </label>
                  </div>
                  <div
                    className={
                      dark
                        ? `${style["radio-item"]} ${style["radio-item-dark"]}`
                        : `${style["radio-item"]} ${style["radio-item-light"]}`
                    }
                  >
                    <input
                      type="radio"
                      id="ritemd"
                      name="trustLevel"
                      value={4}
                      onChange={handleChange}
                    />
                    <label
                      className={
                        dark
                          ? `mx-3 ${style["label"]} ${style["label-dark"]}`
                          : `mx-3 ${style["label"]}`
                      }
                      htmlFor="ritemd"
                    >
                      4
                    </label>
                  </div>
                  <div
                    className={
                      dark
                        ? `${style["radio-item"]} ${style["radio-item-dark"]}`
                        : `${style["radio-item"]} ${style["radio-item-light"]}`
                    }
                  >
                    <input
                      type="radio"
                      id="riteme"
                      name="trustLevel"
                      value={5}
                      onChange={handleChange}
                    />
                    <label
                      className={
                        dark
                          ? `mx-3 ${style["label"]} ${style["label-dark"]}`
                          : `mx-3 ${style["label"]}`
                      }
                      htmlFor="riteme"
                    >
                      5
                    </label>
                  </div>
                  <div
                    className={`${style["validation"]} validation d-sm-none d-md-block`}
                  >
                    {formerrors["trustLevel"] ? (
                      <div>* {formerrors["trustLevel"]}</div>
                    ) : (
                      <div>&nbsp; &nbsp;</div>
                    )}
                  </div>
                </div>
              </div>
              <div
                className={
                  dark
                    ? `${style["resource-input"]} ${style["resource-input-dark"]} `
                    : `${style["resource-input"]} ${style["resource-input-light"]}`
                }
              >
                <div>
                  <label
                    className={
                      dark
                        ? `mb-3 ${style["level-of-trust"]} ${style["level-of-trust-dark"]}`
                        : `mb-3 ${style["level-of-trust"]} ${style["level-of-trust-dark"]}`
                    }
                  >
                    Resource expiry date
                  </label>
                </div>
                <div className={style["valid-until"]}>
                  <input
                    name="expiryDate"
                    className={style["textbox-n"]}
                    type="date"
                    id="date"
                    placeholder="Valid Until:&nbsp;"
                    onChange={handleChange}
                  />
                  <div
                    className={`${style["validation"]} validation d-sm-none d-md-block`}
                  >
                    {formerrors["expiryDate"] ? (
                      <div>* {formerrors["expiryDate"]}</div>
                    ) : (
                      <div>&nbsp; &nbsp;</div>
                    )}
                  </div>
                </div>
              </div>
              <div
                className={
                  dark
                    ? `${style["resource-input"]} ${style["resource-input-dark"]} `
                    : `${style["resource-input"]} ${style["resource-input-light"]}`
                }
              >
                <textarea
                  placeholder="Additional Info (Optional)"
                  id="txt_info"
                  rows="6"
                  cols="20"
                  name="additionalInfo"
                  onChange={handleChange}
                ></textarea>
                <i className="fas fa-pencil-alt"></i>
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
        </div>
      )}
      {toast.toastStatus && (
        <SimpleToast
          open={toast.toastStatus}
          message={toast.toastMessage}
          handleCloseToast={handleCloseResourceToast}
          severity={toast.toastType}
        />
      )}
    </div>
  );
}
