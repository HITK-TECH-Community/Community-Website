import React, { useEffect, useState } from "react";
import Joi from "joi-browser";
import MultiSelect from "react-multi-select-component";
import { SimpleToast } from "../../../../components/util/Toast";
import { postJoinUs, PostJoinUs } from '../../../../service/JoinUs';

import styles from "./form.module.scss";
import { Button2 } from "../../../../components/util/Button/index";
export const JoinUsForm = (props) => {
  let dark = props.theme;

  const [formdata, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    linkdin: "",
    description: "",
    otherDomain: "",
    department: "",
    year: null,
    college: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false)

  const options = [
    { label: "Machine Learning", value: "ml" },
    { label: "Artificial Intelligence", value: "ai" },
    { label: "Android", value: "android" },
    { label: "Web Devlopment", value: "web" },
    { label: "Poster Making", value: "poster" },
    { label: "Video Editing", value: "video" },
    { label: "Social Media", value: "social" },
    { label: "IOT", value: "iot" },
    { label: "Content", value: "content" },
    { label: "Others", value: "other" },
  ];

  const [domains, setDomains] = useState([]);
  const [domainError, setDomainError] = useState();

  const [formerrors, setFormErrors] = useState({});
  const [toast, setToast] = useState({
    toastStatus: false,
    toastType: "",
    toastMessage: "",
  });

  const schema = {
    name: Joi.string().required(),
    contact: Joi.number().required(),
    email: Joi.string().email().required().required(),
    linkdin: Joi.string().uri().required(),
    description: Joi.string().required(),
    otherDomain: Joi.string(),
    department: Joi.string().required(),
    year: Joi.number().required().required(),
    college: Joi.string().required(),
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    console.log(errors);
    if (domains.length === 0) {
      setDomainError("* Domains cannot be empty");
    } else {
      setDomainError("");
    }
    if (errors === null || Object.keys(errors).length === 0) {
      setFormErrors({});
      let data = { ...formdata, interestedDomain: domains.map((value)=>value.label) }
      let res = await postJoinUs(data, setToast)
      if (res == true)
        setIsSubmitted(true)
    } else {
      setFormErrors(errors);
      setToast({ toastStatus: true, toastMessage: "Fill all the fields", toastType: "error" })
    }
  };

  return (
    <>
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
          {
            isSubmitted ?
              <React.Fragment>
                <div className={styles["goodbye-card"]}>
                  <h1 className={styles["card-heading"]}>Hello There !</h1>
                  <div className={styles["inside-card"]}>
                    <p style={{ textAlign: "center" }}>
                      Your request is in process! 😄 <br />
                      we will get back to you soon!
                    </p>
                  </div>
                </div>
              </React.Fragment>
              :
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
                            name="name"
                            onChange={handleChange}
                          />
                          <i className={`fas fa-user ${styles["user"]}`}></i>
                          <div
                            className={`${styles["validation"]} validation d-sm-none d-md-block`}
                          >
                            {formerrors["name"] ? (
                              <div>* {formerrors["name"]}</div>
                            ) : (
                              <div>&nbsp; &nbsp;</div>
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
                            name="contact"
                            onChange={handleChange}
                          />
                          <i className={`fas fa-phone ${styles["phone"]}`}></i>
                          <div
                            className={`${styles["validation"]} validation d-sm-none d-md-block`}
                          >
                            {formerrors["phone"] ? (
                              <div>* {formerrors["phone"]}</div>
                            ) : (
                              <div>&nbsp; &nbsp;</div>
                            )}
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
                          placeholder="Email ID"
                          id="txt_email"
                          type="text"
                          name="email"
                          onChange={handleChange}
                        />
                        <i
                          className={`fas fa-envelope-open-text ${styles["envelope"]}`}
                        ></i>
                        <div
                          className={`${styles["validation"]} validation d-sm-none d-md-block`}
                        >
                          {formerrors["email"] && <div>* {formerrors["email"]}</div>}
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
                          name="linkdin"
                          onChange={handleChange}
                        />
                        <i className={`fas fa-link ${styles["link"]}`}></i>
                        <div
                          className={`${styles["validation"]} validation d-sm-none d-md-block`}
                        >
                          {formerrors["link"] ? (
                            <div>* {formerrors["link"]}</div>
                          ) : (
                            <div>&nbsp; &nbsp;</div>
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
                        name="description"
                        onChange={handleChange}
                      ></textarea>
                      <i className={`fas fa-comment-dots ${styles["comments"]}`}></i>
                      <div
                        className={`${styles["validation"]} validation d-sm-none d-md-block`}
                      >
                        {formerrors["desc"] ? (
                          <div>* {formerrors["desc"]}</div>
                        ) : (
                          <div>&nbsp; &nbsp;</div>
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
                      <MultiSelect
                        options={options} // Options to display in the dropdown
                        value={domains} // Preselected value to persist in dropdown
                        onChange={setDomains} // Function will trigger on change event
                        labelledBy={"Domains"} // Property name to display in the dropdown options
                        className={
                          dark ? styles["dropdown-dark"] : styles["dropdown"]
                        }
                      />

                      <div
                        className={`${styles["validation"]} validation d-sm-none d-md-block`}
                      >
                        {domainError ? (
                          <div>{domainError}</div>
                        ) : (
                          <div>&nbsp; &nbsp;</div>
                        )}
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
                          name="otherDomain"
                          onChange={handleChange}
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
                          name="department"
                          onChange={handleChange}
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
                      <div>
                        <div className={styles["radioButtons"]}>
                          <div
                            className={
                              dark
                                ? `${styles["radio-item"]} ${styles["radio-item-dark"]}`
                                : `${styles["radio-item"]} ${styles["radio-item-light"]}`
                            }
                          >
                            <input
                              type="radio"
                              name="year"
                              value={1}
                              onChange={handleChange}
                            />
                            <label className={`mx-3 ${styles["label"]}`}>1st</label>
                          </div>
                          <div
                            className={
                              dark
                                ? `${styles["radio-item"]} ${styles["radio-item-dark"]}`
                                : `${styles["radio-item"]} ${styles["radio-item-light"]}`
                            }
                          >
                            <input
                              type="radio"
                              name="year"
                              value={2}
                              onChange={handleChange}
                            />
                            <label className={`mx-3 ${styles["label"]}`}>2nd</label>
                          </div>
                          <div
                            className={
                              dark
                                ? `${styles["radio-item"]} ${styles["radio-item-dark"]}`
                                : `${styles["radio-item"]} ${styles["radio-item-light"]}`
                            }
                          >
                            <input
                              type="radio"
                              name="year"
                              value={3}
                              onChange={handleChange}
                            />
                            <label className={`mx-3 ${styles["label"]}`}>3rd</label>
                          </div>
                          <div
                            className={
                              dark
                                ? `${styles["radio-item"]} ${styles["radio-item-dark"]}`
                                : `${styles["radio-item"]} ${styles["radio-item-light"]}`
                            }
                          >
                            <input
                              type="radio"
                              name="year"
                              value={4}
                              onChange={handleChange}
                            />
                            <label className={`mx-3 ${styles["label"]}`}>4th</label>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`${styles["validation"]} validation d-sm-none d-md-block`}
                      >
                        {formerrors["year"] ? (
                          <div>* {formerrors["year"]}</div>
                        ) : (
                          <div>&nbsp; &nbsp;</div>
                        )}
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
                          name="college"
                          onChange={handleChange}
                        />
                        <i
                          className={`fas fa-graduation-cap ${styles["graduation"]}`}
                        ></i>
                        <div
                          className={`${styles["validation"]} validation d-sm-none d-md-block`}
                        >
                          {formerrors["college"] ? (
                            <div>* {formerrors["college"]}</div>
                          ) : (
                            <div>&nbsp; &nbsp;</div>
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
          }
        </div>
      </div>
      {toast.toastStatus && (
        <SimpleToast
          open={toast.toastStatus}
          message={toast.toastMessage}
          handleCloseToast={() => { setToast({ toastStatus: false, toastMessage: "", toastType: '' }) }}
          severity={toast.toastType}
        />
      )}
    </>
  );
};
