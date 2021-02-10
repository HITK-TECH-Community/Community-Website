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
                  <i className="fas fa-user"></i>
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
                  <i class="fas fa-phone"></i>
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
                <i className="fas fa-envelope-open-text"></i>
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
                <i class="fas fa-link"></i>
              </div>
            </div>
            <div className={styles.joinusformInput}>
              <textarea
                placeholder="How can you contribute to help the community?"
                id="txt_desc"
                rows="6"
                cols="20"
                name="desc"
                Required="required"
              ></textarea>
              <i className="fas fa-comment-dots"></i>
            </div>
            <div className={styles.joinusformInput}>
              <label className="mb-2">Interested Domain</label>
              <select>
                <option value="android">Android</option>
                <option value="web">Web</option>
                <option value="iot">IoT</option>
                <option value="ai">AI</option>
                <option value="ml">ML</option>
                <option value="poster">Poster Designing</option>
                <option value="video">Video Editing</option>
                <option value="content">Content Writing</option>
                <option value="social">Social Media Handling</option>
                <option value="other">Other</option>
              </select>
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
                <i class="fas fa-pencil-alt"></i>
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
                <i class="fas fa-building"></i>
              </div>
            </div>
            <div className={styles.joinusformInput1}>
              <label className={`mb-4 ${styles.YearOfStudy}`}>
                Year of Study
              </label>
              <div className={styles.radioButtons}>
                <div class="radio-item">
                  <input type="radio" name="one" />
                  <label className={`mx-3 ${styles.label}`}>1st</label>
                </div>
                <div class="radio-item">
                  <input type="radio" name="one" />
                  <label className={`mx-3 ${styles.label}`}>2nd</label>
                </div>
                <div class="radio-item">
                  <input type="radio" name="one" />
                  <label className={`mx-3 ${styles.label}`}>3rd</label>
                </div>
                <div class="radio-item">
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
                <i class="fas fa-graduation-cap"></i>
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
