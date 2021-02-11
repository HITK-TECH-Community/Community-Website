import React from "react";
import styles from "./form.module.css";
import { Button2 } from "../../../util/button/button";
const JoinUsForm = () => {
  return (
    <div className={styles.joinusformSection}>
      <div className={`${styles.joinusformImage} ${styles.child1}`}>
        <img src="./images/joinus.jpg" alt="" />
      </div>
      <div className={`${styles.joinusForm} ${styles.child2}`}>
        <div className={styles.joinusformCard}>
          <h3 className={styles.joinusformHeaderText}>Join Us Form</h3>
          <div className={styles.insideJoinusform}>
            <div className={styles.formRow}>
              <div className={`${styles.formGroup} col-sm-6`}>
                <div className={styles.joinusformInput}>
                  <input
                    placeholder="Name"
                    id="txt_name"
                    type="text"
                    Required="required"
                    name="name"
                  />
                  <i className={`fas fa-user ${styles.user}`}></i>
                </div>
              </div>
              <div className={`${styles.formGroup2} col-sm-6`}>
                <div className={styles.joinusformInput}>
                  <input
                    placeholder="Contact No."
                    id="phone"
                    type="tel"
                    Required="required"
                    name="phone"
                  />
                  <i className={`fas fa-phone ${styles.phone}`}></i>
                </div>
              </div>
            </div>
            <div className={styles.formGroup}>
              <div className={styles.joinusformInput}>
                <input
                  placeholder="Email ID"
                  id="txt_email"
                  type="text"
                  Required="required"
                  name="email"
                />
                <i className={`fas fa-envelope-open-text ${styles.envelope}`}></i>
              </div>
            </div>
            <div className={styles.formGroup}>
              <div className={styles.joinusformInput}>
                <input
                  placeholder="Linkedin Profile URL"
                  id="txt_link"
                  type="text"
                  Required="required"
                  name="link"
                />
                <i className={`fas fa-link ${styles.link}`}></i>
              </div>
            </div>
            <div className={styles.joinusformInput}>
              <textarea
                placeholder="How can you contribute to help the community?"
                id="txt_desc"
                rows="2"
                cols="20"
                name="desc"
                Required="required"
              ></textarea>
              <i className={`fas fa-comment-dots ${styles.comments}`}></i>
            </div>
            <div className={styles.joinusformInput1}>
              <label className={`mb-4 ${styles.ID}`}>Interested Domains</label>
              <div className={styles.checkbuttons}>
              <div class="row">
              <div class="col-xl-6">
                <div className={`${styles.form_check} form-check-inline ${styles.checkbox_item}`}>
                  <input
                      name="ml"
                      type="checkbox"
                    />
                  <label className={`${styles.mx_3} ${styles.label}`}>
                    Machine Learning
                  </label>
                </div>
                </div>
                <div class="col-xl-6">
                <div className={`${styles.form_check} form-check-inline ${styles.checkbox_item}`}>
                  <input
                      name="ai"
                      type="checkbox"
                    />
                  <label className={`${styles.mx_3} ${styles.label}`}>
                    Artificial Intelligence
                  </label>
                </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-6">
                <div className={`${styles.form_check} form-check-inline ${styles.checkbox_item}`}>
                  <input
                      name="android"
                      type="checkbox"
                    />
                  <label className={`${styles.mx_3} ${styles.label}`}>
                      Android
                  </label>
                </div>
                </div>
                <div class="col-xl-6">
                <div className={`${styles.form_check} form-check-inline ${styles.checkbox_item}`}>
                  <input
                      name="web"
                      type="checkbox"
                    />
                  <label className={`${styles.mx_3} ${styles.label}`}>
                    Web Development
                  </label>
                </div>
                </div>
              </div>
              <div class="row">
              <div class="col-xl-6">
              <div className={`${styles.form_check} form-check-inline ${styles.checkbox_item}`}>
                  <input
                      name="poster"
                      type="checkbox"
                    />
                  <label className={`${styles.mx_3} ${styles.label}`}>
                    Poster Designing
                  </label>
                </div>
                </div>
                <div class="col-xl-6">
                <div className={`${styles.form_check} form-check-inline ${styles.checkbox_item}`}>
                  <input
                      name="video"
                      type="checkbox"
                    />
                  <label className={`${styles.mx_3} ${styles.label}`}>
                    Video Editing
                  </label>
                </div>
                </div>
              </div>
              <div class="row">
              <div class="col-xl-6">
                <div className={`${styles.form_check} form-check-inline ${styles.checkbox_item}`}>
                  <input
                      name="social"
                      type="checkbox"
                    />
                  <label className={`${styles.mx_3} ${styles.label}`}>
                    Social Media Handler
                  </label>
                </div>
                </div>
                <div class="col-xl-6">
                <div className={`${styles.form_check} form-check-inline ${styles.checkbox_item}`}>
                    <input
                        name="iot"
                        type="checkbox"
                      />
                    <label className={`${styles.mx_3} ${styles.label}`}>
                      IoT
                    </label>
                </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-6">
                <div className={`${styles.form_check} form-check-inline ${styles.checkbox_item}`}>
                  <input
                      name="content"
                      type="checkbox"
                    />
                  <label className={`${styles.mx_3} ${styles.label}`}>
                    Content Writing
                  </label>
                </div>
                </div>
                <div class="col-xl-6">
                <div className={`${styles.form_check} form-check-inline ${styles.checkbox_item}`}>
                  <input
                      name="other"
                      type="checkbox"
                    />
                  <label className={`${styles.mx_3} ${styles.label}`}>
                    Other
                  </label>
                </div>
                </div>
              </div>
              </div>
            </div>
            <div className={styles.formGroup}>
              <div className={styles.joinusformInput}>
                <input
                  placeholder="Other - if the domain is not listed above"
                  id="txt_other"
                  type="text"
                  Required="required"
                  name="other"
                />
                <i className={`fas fa-pencil-alt ${styles.pencil}`}></i>
              </div>
            </div>
            <div className={styles.formGroup}>
              <div className={styles.joinusformInput}>
                <input
                  placeholder="Department"
                  id="txt_dept"
                  type="text"
                  Required="required"
                  name="dept"
                />
                <i className={`fas fa-building ${styles.building}`}></i>
              </div>
            </div>
            <div className={styles.joinusformInput1}>
              <label className={`mb-4 ${styles.YearOfStudy}`}>
                Year of Study
              </label>
              <div className={styles.radioButtons}>
                <div className={styles.radio_item}>
                  <input type="radio" name="one" />
                  <label className={`mx-3 ${styles.label}`}>1st</label>
                </div>
                <div className={styles.radio_item}>
                  <input type="radio" name="one" />
                  <label className={`mx-3 ${styles.label}`}>2nd</label>
                </div>
                <div className={styles.radio_item}>
                  <input type="radio" name="one" />
                  <label className={`mx-3 ${styles.label}`}>3rd</label>
                </div>
                <div className={styles.radio_item}>
                  <input type="radio" name="one" />
                  <label className={`mx-3 ${styles.label}`}>4th</label>
                </div>
              </div>
            </div>
            <div className={styles.formGroup}>
              <div className={styles.joinusformInput}>
                <input
                  placeholder="College Name"
                  id="txt_college"
                  type="text"
                  Required="required"
                  name="college"
                />
                <i className={`fas fa-graduation-cap ${styles.graduation}`}></i>
              </div>
            </div>
            <div className={styles.submitBtn}>
              <Button2
                className={styles.submitBtnText}
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
export default JoinUsForm;
