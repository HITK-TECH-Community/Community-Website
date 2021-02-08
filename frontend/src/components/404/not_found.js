import React from "react";
import styles from "./not_found.module.css";
import { Button3 } from "../util/button/button";

const NotFound = () => {
  return (
    <div className={styles.not_found}>
      <div className={styles.error}>
        <div className={styles.ppLogoContainer}>
          <img
            className={styles.errorLogo}
            src="./images/error.png"
            alt="404"
          />
        </div>
        <p className={styles.errorText}>Looks like you're lost!</p>
        <div className={styles.errorContent}>
          The page you are looking for is not available.
        </div>
        <a href="/">
          <Button3 label="Go Home!" type="submit" />
        </a>
      </div>
    </div>
  );
};

export default NotFound;
