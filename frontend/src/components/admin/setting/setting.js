import React from "react";
import style from "./setting.module.css";
const Setting = () => {
  return (
    <div>
      <div className="team container">
        <h1>Invite Admins</h1>
        <div className={style.dash}></div>
      </div>
      <div className={style.admin_section}>
        <div className={style.admin_card}>
          <h3 className={style.admin_header_text}> </h3>
          <div className={style.inside_admin}>
            <div className={style.form_row}></div>
            <div className={style.admin_input}>
              <input
                placeholder="Email ID"
                id="txt_email"
                type="text"
                Required="required"
                name="email"
              />
              <i className="far fa-envelope"></i>
            </div>
          </div>
          <div className={style.wrap}>
            <button className={style.button}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Setting;
