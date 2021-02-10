import React from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import styles from "./add_broadcasts.module.css";
function AddBroadcasts() {
  return (
    <div className={styles.editor}>
      <div className={styles.motive}>
        <h1 className={styles.heading}>ADD BROADCAST</h1>
        <div className={styles.dash}></div>
      </div>
      <div className={styles.header}>
        <p className={styles.headingg}>Broadcast heading</p>
        <input type="text" placeholder="Type here..."></input>
      </div>
      <div>
        <p className={styles.headingg}>Enter the Broadcast content here...</p>
        <SunEditor
          lang="en"
          placeholder="Please type here..."
          height="500px"
          className="edit"
        />
      </div>
    </div>
  );
}

export default AddBroadcasts;
