import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./join-us.module.scss";
import { Button3 } from "../../../../components/util/Button";

export const JoinUs = (props) => {
  let dark = props.theme;

  return (
    <Fragment>
      <div
        className={
          dark
            ? `${styles["join-us"]} ${styles["join-us-dark"]}`
            : `${styles["join-us"]} ${styles["join-us-light"]}`
        }
      >
        <h1 className={styles["title"]}>Join Us</h1>
        <div className={styles["dash"]}></div>
        <h2 className={styles["subtitle"]}>
          Join us in the mission of reducing the knowledge gap in students.
        </h2>
        <Link to="/join-us-form">
          <Button3 label="Join Us!" type="submit" />
        </Link>
      </div>
    </Fragment>
  );
};
