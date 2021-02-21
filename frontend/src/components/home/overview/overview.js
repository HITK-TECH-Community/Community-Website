import React from "react";
import styles from "./overview.module.css";

const Overview = () => {
  return (
    <div className="content container">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className={styles.overview}>
            <div>
              <h1>HITK Tech Community</h1>
              <div className={styles.dash}></div>
              <p>
                A community driven by tech enthusiasts and open-source
                contributors, to help students of HITK to be part of the
                open-source ecosystem by providing right resources at right
                time.
              </p>
            </div>
            <img
              src="./images/logo.png"
              alt="HITK Tech Community Official Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
