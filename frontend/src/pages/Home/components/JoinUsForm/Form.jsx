import React from "react";
import styles from "./form.module.scss";
import { Button2 } from "../../../../components/util/Button/index";
export const JoinUsForm = (props) => {
  let dark = props.theme;

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
                  />
                  <i className={`fas fa-user ${styles["user"]}`}></i>
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
                />
                <i
                  className={`fas fa-envelope-open-text ${styles["envelope"]}`}
                ></i>
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
                />
                <i className={`fas fa-link ${styles["link"]}`}></i>
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
                      <label className={`${styles["mx-3"]} ${styles["label"]}`}>
                        Machine Learning
                      </label>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div
                      className={`${styles["form_check"]} form-check-inline ${styles["checkbox_item"]}`}
                    >
                      <input name="ai" type="checkbox" />
                      <label className={`${styles["mx-3"]} ${styles["label"]}`}>
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
                      <label className={`${styles["mx-3"]} ${styles["label"]}`}>
                        Android
                      </label>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div
                      className={`${styles["form_check"]} form-check-inline ${styles["checkbox_item"]}`}
                    >
                      <input name="web" type="checkbox" />
                      <label className={`${styles["mx-3"]} ${styles["label"]}`}>
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
                      <label className={`${styles["mx-3"]} ${styles["label"]}`}>
                        Poster Designing
                      </label>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div
                      className={`${styles["form_check"]} form-check-inline ${styles["checkbox_item"]}`}
                    >
                      <input name="video" type="checkbox" />
                      <label className={`${styles["mx-3"]} ${styles["label"]}`}>
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
                      <label className={`${styles["mx-3"]} ${styles["label"]}`}>
                        Social Media Handler
                      </label>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div
                      className={`${styles["form_check"]} form-check-inline ${styles["checkbox_item"]}`}
                    >
                      <input name="iot" type="checkbox" />
                      <label className={`${styles["mx-3"]} ${styles["label"]}`}>
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
                      <label className={`${styles["mx-3"]} ${styles["label"]}`}>
                        Content Writing
                      </label>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div
                      className={`${styles["form_check"]} form-check-inline ${styles["checkbox_item"]}`}
                    >
                      <input name="other" type="checkbox" />
                      <label className={`${styles["mx-3"]} ${styles["label"]}`}>
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
                  required="required"
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
                />
                <i
                  className={`fas fa-graduation-cap ${styles["graduation"]}`}
                ></i>
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
        </div>
      </div>
    </div>
  );
};
