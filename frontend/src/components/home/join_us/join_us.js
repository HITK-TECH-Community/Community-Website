import React, { Fragment } from "react";
import { Button2 } from "../../util/button/button";
import styles from "./join_us.module.css";

const JoinUs = () => {
  return (
    <Fragment>
      <div className={styles.joinUs}>
        <h1 className={styles.title}>Join Us</h1>
        <div className={styles.dash}></div>
        <h2 className={styles.subtitle}>
          Join us in the mission of reducing the knowledge gap in students.
        </h2>
        <a href="/join_us_form">
          <Button2 label="Join Us!" type="submit" />
        </a>
      </div>
    </Fragment>
  );
};

export default JoinUs;
