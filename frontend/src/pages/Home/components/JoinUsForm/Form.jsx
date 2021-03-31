import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./form.module.scss";
import { Button2 } from "../../../../components/util/Button/index";

// schema for user's name , email , college name , Linkedln Link and Radio Buttons selection
const schema = yup.object().shape({
  name: yup.string().min(2).max(20).required(),
  phone: yup
    .string()
    .matches(/^[6-9]\d{9}$/, "Contact should have 10 digits")
    .required(),
  email: yup.string().email("Invalid email").required(),
  college: yup.string().required(),
  link: yup
    .string()
    .url()
    .matches(
      /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
      "Enter correct Linkedln url!"
    )
    .required(),
  one: yup.string().required("Select year of study"),
});

export const JoinUsForm = (props) => {
  let dark = props.theme;
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
    // this connected the yup library with react-hook-form library
  });

  const submitForm = (data) => {
    console.log(data);
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
          <form onSubmit={handleSubmit(submitForm)}>
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
                      ref={register}
                    />
                    <i className={`fas fa-user ${styles["user"]}`}></i>
                    <p style={{ color: "red", fontSize: 18 }}>
                      {" "}
                      {errors.name?.message}
                    </p>
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
                      ref={register}
                    />
                    <i className={`fas fa-phone ${styles["phone"]}`}></i>
                    <p style={{ color: "red", fontSize: 18 }}>
                      {" "}
                      {errors.phone?.message}
                    </p>
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
                    ref={register}
                  />
                  <i
                    className={`fas fa-envelope-open-text ${styles["envelope"]}`}
                  ></i>
                  <p style={{ color: "red", fontSize: 18 }}>
                    {" "}
                    {errors.email?.message}
                  </p>
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
                    ref={register}
                  />
                  <i className={`fas fa-link ${styles["link"]}`}></i>
                  <p style={{ color: "red", fontSize: 18 }}>
                    {" "}
                    {errors.link?.message}
                  </p>
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
                ></textarea>
                <i className={`fas fa-comment-dots ${styles["comments"]}`}></i>
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
                    ref={register}
                  />
                  <i
                    className={`fas fa-graduation-cap ${styles["graduation"]}`}
                  ></i>
                  <p style={{ color: "red", fontSize: 18 }}>
                    {" "}
                    {errors.college?.message}
                  </p>
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
