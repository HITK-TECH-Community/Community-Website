import React from "react";
import style from "./logged-in.module.scss";
import { Button3 } from "../../util/Button/Button";

export const LoggedIn = () => {
  return (
    <div className={style["not-found"]}>
      <div className={style["error"]}>
        <div>
          <img
            className={style["error-logo"]}
            src="./images/error.png"
            alt="404"
          />
        </div>
        <p className={style["error-text"]}>You are already Logged In!</p>
        <div className={style["error-content"]}>
          Please visit here to access your Dashboard.
        </div>
        <a href="/dashboard">
          <Button3 label="Go to Dashboard!" type="submit" />
        </a>
      </div>
    </div>
  );
};
