import React from "react";
import style from "./not-found.module.scss";
import { Button3 } from "../../util/Button/Button";

export const NotFound = () => {
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
        <p className={style["error-text"]}>Looks like you're lost!</p>
        <div className={style["error-content"]}>
          The page you are looking for is not available.
        </div>
        <a href="/">
          <Button3 label="Go Home!" type="submit" />
        </a>
      </div>
    </div>
  );
};
