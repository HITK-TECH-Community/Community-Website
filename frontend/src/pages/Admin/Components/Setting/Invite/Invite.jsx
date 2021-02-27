import React from "react";
import style from "./Invite.module.scss";

export const Invite = () => {
  return (
    <div className={style["cont"]}>
      <div className="container">
        <h1 className={style["h1"]}>Invite Admins</h1>
        <div className={style["dash"]}></div>
      </div>
      <div className={style["admin_section"]}>
        <div className={style["admin_card"]}>
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
          </div>
          <div className={style["wrap"]}>
            <button className={style["button"]}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
