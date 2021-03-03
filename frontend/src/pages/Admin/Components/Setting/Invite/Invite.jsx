import React from "react";
import { Button2 } from "../../../../../components/util/Button";
import style from "./Invite.module.scss";

export const Invite = () => {
  return (
    <div className={style["cont"]}>
      <div className="container">
        <div className={style["dash"]}></div>
      </div>
      <div className={style["admin_section"]}>
        <div className={style["admin_card"]}>
          <h1 className={style["h1"]}>Invite Admins</h1>
          <div className={style["inside_admin"]}>
            <div className={style["form_row"]}></div>
            <div className={style["admin_input"]}>
              <input
                placeholder="Email ID"
                id="txt_email"
                type="text"
                required="required"
                name="email"
              />
              <i className="far fa-envelope"></i>
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
    </div>
  );
};
