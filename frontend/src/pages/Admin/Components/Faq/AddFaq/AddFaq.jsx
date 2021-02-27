import React from "react";
import styles from "./add-faq.module.scss";
import { Button2 } from "../../../../../components/util/Button/index";

export function AddFaq() {
  return (
    <div className={styles["faq-section"]}>
      <div className={styles["faq-parent"]}>
        <div className={styles["faq-child"] + " " + styles["child1"]}>
          <div className={styles["faq-card"]}>
            <h1 className={styles["faq-header-text"]}>Add &nbsp; Faq</h1>
            <div className={styles["inside-faq"]}>
              <div className={styles["faq-input"]}>
                <input
                  id="txt_name"
                  type="text"
                  required="required"
                  name="question"
                  placeholder="Question"
                />
                <i className="fas fa-question-circle"></i>
              </div>
              <div className={styles["faq-input"]}>
                <input
                  id="txt_email"
                  type="text"
                  required="required"
                  name="answer"
                  placeholder="Answer"
                />
                <i className="fas fa-comment-dots"></i>
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
    </div>
  );
}
