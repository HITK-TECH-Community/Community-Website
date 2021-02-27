import React from "react";
import { Button2 } from "../../../../components/util/Button/index";
import style from "./resource-sharing-form.module.scss";

export function ResourceSharingForm() {
  return (
    <div className={`${style["resource-form"]} ${style["child2"]}`}>
      <div className={style["resource-card"]}>
        <h3 className={style["resource-header-text"]}>Resource Sharing Form</h3>
        <div className={style["inside-resource"]}>
          <div className={`form-group ${style["form-group"]}`}>
            <div className={style["resource-input"]}>
              <input
                placeholder="Name"
                id="txt_name"
                type="text"
                required="required"
                name="name"
              />
              <i className="fas fa-user"></i>
            </div>
          </div>

          <div className={`form-group ${style["form-group"]}`}>
            <div className={style["resource-input"]}>
              <input
                placeholder="Email ID"
                id="txt_email"
                type="text"
                required="required"
                name="email"
              />
              <i className="fas fa-envelope"></i>
            </div>
          </div>

          <div className={`form-group ${style["form-group"]}`}>
            <div className={style["resource-input"]}>
              <input
                placeholder="Resource URL"
                id="txt_link"
                type="text"
                required="required"
                name="link"
              />
              <i className="fas fa-link"></i>
            </div>
          </div>

          <div className={style["resource-input"]}>
            <textarea
              placeholder="Resource Description"
              id={style["txt-desc"]}
              rows="6"
              cols="20"
              name="resourcedesc"
              required="required"
            ></textarea>
            <i className="fas fa-comment-dots"></i>
          </div>
          <div className={style["resource-input1"]}>
            <div>
              <label className={`mb-3 ${style["level-of-trust"]}`}>
                Level Of Trust
              </label>
            </div>
            <div className={style["radio-buttons"]}>
              <div className={style["radio-item"]}>
                <input type="radio" id="ritema" name="one" />
                <label className={`mx-3 ${style["label"]}`} htmlFor="ritema">
                  1
                </label>
              </div>
              <div className={style["radio-item"]}>
                <input type="radio" id="ritemb" name="one" />
                <label className={`mx-3 ${style["label"]}`} htmlFor="ritemb">
                  2
                </label>
              </div>
              <div className={style["radio-item"]}>
                <input type="radio" id="ritemc" name="one" />
                <label className={`mx-3 ${style["label"]}`} htmlFor="ritemc">
                  3
                </label>
              </div>
              <div className={style["radio-item"]}>
                <input type="radio" id="ritemd" name="one" />
                <label className={`mx-3 ${style["label"]}`} htmlFor="ritemd">
                  4
                </label>
              </div>
              <div className={style["radio-item"]}>
                <input type="radio" id="riteme" name="one" />
                <label className={`mx-3 ${style["label"]}`} htmlFor="riteme">
                  5
                </label>
              </div>
            </div>
          </div>
          <div className={style["resource-input"]}>
            <div className={style["valid-until"]}>
              <input
                required
                name="dob"
                className={style["textbox-n"]}
                type="date"
                id="date"
                placeholder="Valid Until:&nbsp;"
              />
            </div>
          </div>
          <div className={style["resource-input"]}>
            <textarea
              placeholder="Additional Info (Optional)"
              id="txt_info"
              rows="6"
              cols="20"
              name="info"
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
      </div>
    </div>
  );
}
