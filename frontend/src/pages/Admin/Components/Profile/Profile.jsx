import React from "react";
import style from "./profile.module.scss";
// import EditIcon from "@material-ui/icons/Edit";

export function Profile() {
  return (
    <div className={style["profile-container"]}>
      <h2 className={style["heads"]}>My Profile</h2>
      <div className={style["profile-card"]}>
        <div className={style["user-details"]}>
          <img
            className={style["photos"]}
            src="./images/admin.png"
            alt="profile_pic"
          />
          <div className={style["details"]}>
            <div className={style["edits"]}>
              <h4>Super Admin Name</h4>
              {/* <EditIcon /> */}
            </div>
            <div className={style["edits"]}>
              <h4>xyz@gmail.com</h4>
            </div>
            <div className={style["edits"]}>
              <h4>+91-1234567891</h4>
            </div>
          </div>
        </div>
        <div className={style["account"]}>
          <h2>Account Information</h2>
          <div className={style["detail"]}>
            <div className={style["conts"]}>
              <h4>FullName </h4>
              <input
                type="text"
                className={style["inp"]}
                value="Aman Prateek"
              />
            </div>
            <div className={style["conts"]}>
              <h4>Email Id </h4>
              <input
                type="text"
                className={style["inp"]}
                value="amanpra333@gmail.com"
              />
            </div>
            <div className={style["conts"]}>
              <h4>Contact No. </h4>
              <input type="text" className={style["inp"]} value="9625341429" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
