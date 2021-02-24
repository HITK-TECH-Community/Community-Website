import React from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import styles from "./add-broadcasts.module.scss";
import { Button2 } from "../../../../../components/util/Button/index";

export function AddBroadcasts() {
  return (
    <div className={styles["editor"]}>
      <div className={styles["motive"]}>
        <h1 className={styles["heading"]}>ADD BROADCAST</h1>
        <div className={styles["dash"]}></div>
      </div>
      <div className={styles["header"]}>
        <p className={styles["headingg"]}>Broadcast heading</p>
        <input
          type="text"
          className={styles["inputs"]}
          placeholder="Type here..."
        ></input>
      </div>
      <div>
        <p className={styles["headingg"]}>
          Enter the Broadcast content here...
        </p>
        <SunEditor
          lang="en"
          placeholder="Please type here..."
          height="500px"
          className={styles["edit"]}
        />
        <div className={styles["submit-btn"]}>
          <Button2
            className={styles["submit-btn-text"]}
            label="Submit"
            type="submit"
          />
        </div>
      </div>
    </div>
  );
}
