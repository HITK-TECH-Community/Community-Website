import React from "react";
import style from "./not-found.module.scss";
import { Button3 } from "../../util/Button/Button";

export const NotFound = (props) => {
  const dark = props.theme;
  return (
    <main className={dark ? style["main-dark"] : style["main"]}>
      <div className={dark ? style["not-found-dark"] : style["not-found"]}>
        <div className={style["error"]}>
          <div>
            <img
              className={dark ? style["error-logo-dark"] : style["error-logo"]}
              src="./images/error.png"
              alt="404"
            />
          </div>
          <p className={dark ? style["error-text-dark"] : style["error-text"]}>
            Looks like you're lost!
          </p>
          <div
            className={
              dark ? style["error-content-dark"] : style["error-content"]
            }
          >
            The page you are looking for is not available.
          </div>
          <div className={style["goback"]}>
            <a href="/">
              <Button3 label="Go Home!" type="submit" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};
