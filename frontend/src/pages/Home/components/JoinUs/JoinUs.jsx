import React, { Fragment } from "react";

import styles from "./join-us.module.scss";
import { Button3 } from "../../../../components/util/Button";

export const JoinUs = () => {
  return (
    <Fragment>
      <div className={styles["join-us"]}>
        <h1 className={styles["title"]}>Join Us</h1>
        <div className={styles["dash"]}></div>
        <h2 className={styles["subtitle"]}>
          Join us in the mission of reducing the knowledge gap in students.
        </h2>
        <a href="/join_us_form">
          <Button3 label="Join Us!" type="submit" />
        </a>
      </div>
    </Fragment>
  );
};
