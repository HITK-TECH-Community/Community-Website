import React, { useState } from "react";
import Joi from "joi-browser";
import styles from "./form.module.scss";
import { Button2 } from "../../../../components/util/Button/index";

export const JoinUsForm = (props) => {
  let dark = props.theme;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    link: "",
    desc: "",
    dept: null,
    college: "",
  });

  const [formerrors, setFormErrors] = useState({});

  const schema = {
    name: Joi.string().min(3).required(),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    link: Joi.string().uri().required(),
    desc: Joi.string().required(),
    dept: Joi.required(),
    college: Joi.string().required(),
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
          ? `${styles["join-us-form-section"]} ${styles["join-us-form-section-dark"]}`
          : `${styles["join-us-form-section"]} ${styles["join-us-form-section-light"]}`
      }
    >
      <div className={`${styles["join-us-form-image"]} ${styles["child1"]}`}>
        <img src="./images/joinus2.png" alt="" />
      </div>
      <div
        className={
          dark
            ? `${styles["join-us-form"]} ${styles["join-us-form-dark"]}`
            : `${styles["join-us-form"]} ${styles["join-us-form-light"]}`
        }
      >
        <div
          className={
            dark
              ? `${styles["join-us-form-card"]} ${styles["join-us-form-card-dark"]}`
              : `${styles["join-us-form-card"]} ${styles["join-us-form-card-light"]}`
          }
        >
          <h3
            className={
              dark
                ? `${styles["join-us-form-header-text"]} ${styles["join-us-form-header-text-dark"]}`
                : `${styles["join-us-form-header-text"]} ${styles["join-us-form-header-text-light"]}`
            }
          >
            Join Us Form
          </h3>

          <form onSubmit={handleSubmit}>
            <div className={styles["inside-join-us-form"]}>
              <div className={styles["form-row"]}>
                <div className={`${styles["form-group"]} col-sm-6`}>
                  <div
                    className={
                      dark
                        ? `${styles["join-us-form-input"]} ${styles["join-us-form-input-dark"]}`
                        : `${styles["join-us-form-input"]} ${styles["join-us-form-input-light"]}`
                    }
                  >
                    <input
                      placeholder="Name"
                      id="txt_name"
                      type="text"
                      required="required"
                      name="name"
                      onChange={handleChange}
                    />
                    <i className={`fas fa-user ${styles["user"]}`}></i>
                    <div
                      className={`${styles["validation"]} validation d-sm-none d-md-block`}
                    >
                      {formerrors["name"] && (
                        <div style={{ color: "red" }}>{formerrors["name"]}</div>
                      )}
                    </div>
                  </div>
                </div>
                <div className={`${styles["form-group2"]} col-sm-6`}>
                  <div
                    className={
                      dark
                        ? `${styles["join-us-form-input"]} ${styles["join-us-form-input-dark"]}`
                        : `${styles["join-us-form-input"]} ${styles["join-us-form-input-light"]}`
                    }
                  >
                    <input
                      placeholder="Contact No."
                      id="phone"
                      type="tel"
                      required="required"
                      name="phone"
                    />
                    <i className={`fas fa-phone ${styles["phone"]}`}></i>
                  </div>
                </div>
              </div>
              <div className={styles["form-group"]}>
                <div
                  className={
                    dark
                      ? `${styles["join-us-form-input"]} ${styles["join-us-form-input-dark"]}`
                      : `${styles["join-us-form-input"]} ${styles["join-us-form-input-light"]}`
                  }
                >
                  <input
                    placeholder="Email ID"
                    id="txt_email"
                    type="text"
                    required="required"
                    name="email"
                    onChange={handleChange}
                  />
                  <i
                    className={`fas fa-envelope-open-text ${styles["envelope"]}`}
                  ></i>
                  <div
                    className={`${styles["validation"]} validation d-sm-none d-md-block`}
                  >
                    {formerrors["email"] && (
                      <div style={{ color: "red" }}>{formerrors["email"]}</div>
                    )}
                  </div>
                </div>
              </div>
              <div className={styles["form-group"]}>
                <div
                  className={
                    dark
                      ? `${styles["join-us-form-input"]} ${styles["join-us-form-input-dark"]}`
                      : `${styles["join-us-form-input"]} ${styles["join-us-form-input-light"]}`
                  }
                >
                  <input
                    placeholder="Linkedin Profile URL"
                    id="txt_link"
                    type="text"
                    required="required"
                    name="link"
                    onChange={handleChange}
                  />
                  <i className={`fas fa-link ${styles["link"]}`}></i>
                  <div
                    className={`${styles["validation"]} validation d-sm-none d-md-block`}
                  >
                    {formerrors["link"] && (
                      <div style={{ color: "red" }}>{formerrors["link"]}</div>
                    )}
                  </div>
                </div>
              </div>
              <div
                className={
                  dark
                    ? `${styles["join-us-form-input"]} ${styles["join-us-form-input-dark"]}`
                    : `${styles["join-us-form-input"]} ${styles["join-us-form-input-light"]}`
                }
              >
                <textarea
                  placeholder="How can you contribute to help the community?"
                  id="txt_desc"
                  rows="2"
                  cols="20"
                  name="desc"
                  required="required"
                  onChange={handleChange}
                ></textarea>
                <i className={`fas fa-comment-dots ${styles["comments"]}`}></i>
                <div
                  className={`${styles["validation"]} validation d-sm-none d-md-block`}
                >
                  {formerrors["desc"] && (
                    <div style={{ color: "red" }}>{formerrors["desc"]}</div>
                  )}
                </div>
              </div>
              <div
                className={
                  dark
                    ? `${styles["join-us-form-input1"]} ${styles["join-us-form-input1-dark"]}`
                    : `${styles["join-us-form-input1"]} ${styles["join-us-form-input1-light"]}`
                }
              >
                <label className={`mb-4 ${styles["ID"]}`}>
                  Interested Domains
                </label>
                <div className={styles["checkbuttons"]}>
                  <div className="row">
                    <div className="col-xl-6">
                      <div
                        className={`${styles["form_check"]} form-check-inline ${styles["checkbox_item"]}`}
                      >
                        <input name="ml" type="checkbox" />
                        <label
                          className={`${styles["mx-3"]} ${styles["label"]}`}
                        >
                          Machine Learning
                        </label>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div
                        className={`${styles["form_check"]} form-check-inline ${styles["checkbox_item"]}`}
                      >
                        <input name="ai" type="checkbox" />
                        <label
                          className={`${styles["mx-3"]} ${styles["label"]}`}
                        >
                          Artificial Intelligence
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6">
                      <div
                        className={`${styles["form_check"]} form-check-inline ${styles["checkbox_item"]}`}
                      >
                        <input name="android" type="checkbox" />
                        <label
                          className={`${styles["mx-3"]} ${styles["label"]}`}
                        >
                          Android
                        </label>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div
                        className={`${styles["form_check"]} form-check-inline ${styles["checkbox_item"]}`}
                      >
                        <input name="web" type="checkbox" />
                        <label
                          className={`${styles["mx-3"]} ${styles["label"]}`}
                        >
                          Web Development
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6">
                      <div
                        className={`${styles["form_check"]} form-check-inline ${styles["checkbox_item"]}`}
                      >
                        <input name="poster" type="checkbox" />
                        <label
                          className={`${styles["mx-3"]} ${styles["label"]}`}
                        >
                          Poster Designing
                        </label>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div
                        className={`${styles["form_check"]} form-check-inline ${styles["checkbox_item"]}`}
                      >
                        <input name="video" type="checkbox" />
                        <label
                          className={`${styles["mx-3"]} ${styles["label"]}`}
                        >
                          Video Editing
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6">
                      <div
                        className={`${styles["form_check"]} form-check-inline ${styles["checkbox_item"]}`}
                      >
                        <input name="social" type="checkbox" />
                        <label
                          className={`${styles["mx-3"]} ${styles["label"]}`}
                        >
                          Social Media Handler
                        </label>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div
                        className={`${styles["form_check"]} form-check-inline ${styles["checkbox_item"]}`}
                      >
                        <input name="iot" type="checkbox" />
                        <label
                          className={`${styles["mx-3"]} ${styles["label"]}`}
                        >
                          IoT
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6">
                      <div
                        className={`${styles["form_check"]} form-check-inline ${styles["checkbox_item"]}`}
                      >
                        <input name="content" type="checkbox" />
                        <label
                          className={`${styles["mx-3"]} ${styles["label"]}`}
                        >
                          Content Writing
                        </label>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div
                        className={`${styles["form_check"]} form-check-inline ${styles["checkbox_item"]}`}
                      >
                        <input name="other" type="checkbox" />
                        <label
                          className={`${styles["mx-3"]} ${styles["label"]}`}
                        >
                          Other
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["form-group"]}>
                <div
                  className={
                    dark
                      ? `${styles["join-us-form-input"]} ${styles["join-us-form-input-dark"]}`
                      : `${styles["join-us-form-input"]} ${styles["join-us-form-input-light"]}`
                  }
                >
                  <input
                    placeholder="Other - if the domain is not listed above"
                    id="txt_other"
                    type="text"
                    name="other"
                  />
                  <i className={`fas fa-pencil-alt ${styles["pencil"]}`}></i>
                </div>
              </div>
              <div className={styles["form-group"]}>
                <div
                  className={
                    dark
                      ? `${styles["join-us-form-input"]} ${styles["join-us-form-input-dark"]}`
                      : `${styles["join-us-form-input"]} ${styles["join-us-form-input-light"]}`
                  }
                >
                  <input
                    placeholder="Department"
                    id="txt_dept"
                    type="text"
                    required="required"
                    name="dept"
                  />
                  <i className={`fas fa-building ${styles["building"]}`}></i>
                </div>
              </div>
              <div
                className={
                  dark
                    ? `${styles["join-us-form-input1"]} ${styles["join-us-form-input1-dark"]}`
                    : `${styles["join-us-form-input1"]} ${styles["join-us-form-input1-light"]}`
                }
              >
                <label className={`mb-4 ${styles["year-of-study"]}`}>
                  Year of Study
                </label>
                <div className={styles["radioButtons"]}>
                  <div
                    className={
                      dark
                        ? `${styles["radio-item"]} ${styles["radio-item-dark"]}`
                        : `${styles["radio-item"]} ${styles["radio-item-light"]}`
                    }
                  >
                    <input type="radio" name="one" />
                    <label className={`mx-3 ${styles["label"]}`}>1st</label>
                  </div>
                  <div
                    className={
                      dark
                        ? `${styles["radio-item"]} ${styles["radio-item-dark"]}`
                        : `${styles["radio-item"]} ${styles["radio-item-light"]}`
                    }
                  >
                    <input type="radio" name="one" />
                    <label className={`mx-3 ${styles["label"]}`}>2nd</label>
                  </div>
                  <div
                    className={
                      dark
                        ? `${styles["radio-item"]} ${styles["radio-item-dark"]}`
                        : `${styles["radio-item"]} ${styles["radio-item-light"]}`
                    }
                  >
                    <input type="radio" name="one" />
                    <label className={`mx-3 ${styles["label"]}`}>3rd</label>
                  </div>
                  <div
                    className={
                      dark
                        ? `${styles["radio-item"]} ${styles["radio-item-dark"]}`
                        : `${styles["radio-item"]} ${styles["radio-item-light"]}`
                    }
                  >
                    <input type="radio" name="one" />
                    <label className={`mx-3 ${styles["label"]}`}>4th</label>
                  </div>
                </div>
              </div>
              <div className={styles["form-group"]}>
                <div
                  className={
                    dark
                      ? `${styles["join-us-form-input"]} ${styles["join-us-form-input-dark"]}`
                      : `${styles["join-us-form-input"]} ${styles["join-us-form-input-light"]}`
                  }
                >
                  <input
                    placeholder="College Name"
                    id="txt_college"
                    type="text"
                    required="required"
                    name="college"
                    onChange={handleChange}
                  />
                  <i
                    className={`fas fa-graduation-cap ${styles["graduation"]}`}
                  ></i>
                  <div
                    className={`${styles["validation"]} validation d-sm-none d-md-block`}
                  >
                    {formerrors["college"] && (
                      <div style={{ color: "red" }}>
                        {formerrors["college"]}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className={styles["submit-btn"]}>
                <Button2
                  className={styles["submit-btn-text"]}
                  label="Submit"
                  type="submit"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
