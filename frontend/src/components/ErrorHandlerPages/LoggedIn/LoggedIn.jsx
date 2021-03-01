import React from "react";
import style from "./logged-in.module.scss";
import { Button3 } from "../../util/Button/Button";

export const LoggedIn = () => {
  return (
    <div className={style["not-found"]}>
      <div className={style["error1"]}>
        <div className={style["img_1"]}>
          <img
            className={style["error-logo1"]}
            src="./images/admin.png"
            alt="Admin"
          />
        </div>
        <div className={style["img_2"]}>
          <p className={style["error-text"]}>You are already Logged In!!</p>
          <div className={style["error-content"]}>
            Please visit your Dashboard Here!👇
          </div>
          <a href="/dashboard">
            <Button3 label="Go to Dashboard!" type="submit" />
          </a>
        </div>
      </div>
    </div>
  );
};
