import React from "react";
import style from "./resources.module.css";
import { Button2 } from "../util/button/button";

const Resources = () => {
  return (
    <div className={style.resourceSection}>
      <div className={`${style.resourceImage} ${style.child1}`}>
        <img src="./images/resource.png" alt="" />
      </div>
      <div className={`${style.resourceForm} ${style.child2}`}>
        <div className={style.resourceCard}>
          <h3 className={style.resourceHeaderText}>Resource Sharing Form</h3>
          <div className={style.insideResource}>
            <div className={`form-group ${style.formGroup}`}>
              <div className={style.resourceInput}>
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

            <div className={`form-group ${style.formGroup}`}>
              <div className={style.resourceInput}>
                <input
                  placeholder="Email ID"
                  id="txt_email"
                  type="text"
                  Required="required"
                  name="email"
                />
                <i className="fas fa-envelope"></i>
              </div>
            </div>

            <div className={`form-group ${style.formGroup}`}>
              <div className={style.resourceInput}>
                <input
                  placeholder="Resource URL"
                  id="txt_link"
                  type="text"
                  Required="required"
                  name="link"
                />
                <i class="fas fa-link"></i>
              </div>
            </div>

            <div className={style.resourceInput}>
              <textarea
                placeholder="Resource Description"
                id={style.txt_desc}
                rows="6"
                cols="20"
                name="resourcedesc"
                Required="required"
              ></textarea>
              <i className="fas fa-comment-dots"></i>
            </div>
            <div className={style.resourceInput1}>
              <div>
                <label className={`mb-3 ${style.levelOfTrust}`}>
                  Level Of Trust
                </label>
              </div>
              <div className={style.radioButtons}>
                <div class={style.radioItem}>
                  <input type="radio" id="ritema" name="one" />
                  <label className={`mx-3 ${style.label}`} for="ritema">
                    1
                  </label>
                </div>
                <div class={style.radioItem}>
                  <input type="radio" id="ritemb" name="one" />
                  <label className={`mx-3 ${style.label}`} for="ritemb">
                    2
                  </label>
                </div>
                <div class={style.radioItem}>
                  <input type="radio" id="ritemc" name="one" />
                  <label className={`mx-3 ${style.label}`} for="ritemc">
                    3
                  </label>
                </div>
                <div class={style.radioItem}>
                  <input type="radio" id="ritemd" name="one" />
                  <label className={`mx-3 ${style.label}`} for="ritemd">
                    4
                  </label>
                </div>
                <div class={style.radioItem}>
                  <input type="radio" id="riteme" name="one" />
                  <label className={`mx-3 ${style.label}`} for="riteme">
                    5
                  </label>
                </div>
              </div>
            </div>
            <div className={style.resourceInput}>
              <div className={style.validUntil}>
                <input
                  required
                  name="dob"
                  class={style.textboxN}
                  type="date"
                  id="date"
                  placeholder="Valid Until:&nbsp;"
                />
              </div>
            </div>
            <div className={style.resourceInput}>
              <textarea
                placeholder="Additional Info (Optional)"
                id="txt_info"
                rows="6"
                cols="20"
                name="info"
              ></textarea>
              <i className="fas fa-pencil-alt"></i>
            </div>
            <div className={style.submitBtn}>
              <Button2
                className={style.submitBtnText}
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
export default Resources;
