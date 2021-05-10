import React, { useState } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import styles from "./add-broadcasts.module.scss";
import { Button2 } from "../../../../../components/util/Button/index";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import "react-textarea-markdown-editor/build/TextareaMarkdownEditor.css";
import TextareaMarkdownEditor from "react-textarea-markdown-editor";
export function AddBroadcasts() {
  const [tags, setTags] = useState([]);

  const selectedTags = (tags) => console.log(tags);
  const addTags = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      setTags([...tags, event.target.value]);
      selectedTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };

  const removeTags = (index) => {
    setTags([...tags.filter((tag) => tags.indexOf(tag) !== index)]);
  };

  // const handleChange=(target)=>{
  //   // setTag({ ...tag, name: target.value })
  //   const tag=[...tag];
  //   tag.push(target);
  //   setTag(tag)
  // }

  return (
    <div className={styles["editor"]}>
      <div className={styles["motive"]}>
        <h1 className={styles["heading"]}>ADD BROADCAST</h1>
        <div className={styles["dash"]}></div>
      </div>
      <div>
        <form>
          <div
            className={`${styles["contact-input"]} ${styles["contact-input-light"]}`}
          >
            <input
              autoFocus="on"
              autoComplete="off"
              name="title"
              id="txt_name"
              type="text"
              placeholder="Title"
            />
            <i className="fas fa-pencil-alt"></i>
          </div>
          <div
            className={`${styles["contact-input"]} ${styles["contact-input-light"]}`}
          >
            <TextareaMarkdownEditor
              name="content"
              autoComplete="off"
              rows="9"
              cols="20"
              id="content"
              type="text"
              placeholder="Content"
            />
          </div>
          <div
            className={`${styles["contact-input"]} ${styles["contact-input-light"]}`}
          >
            <input
              autoComplete="off"
              name="expires_on"
              id="date"
              type="date"
              placeholder="Expires On"
            />
          </div>
          <div
            className={`${styles["contact-input"]} ${styles["contact-input-light"]}`}
          >
            <input
              autoComplete="off"
              name="link"
              id="img_url"
              type="url"
              placeholder="Image URL"
            />
            <i className="fas fa-link"></i>
          </div>
          <div
            className={`${styles["contact-input"]} ${styles["contact-input-light"]}`}
          >
            <input
              autoComplete="off"
              name="link"
              id="resource_url"
              type="url"
              placeholder="Resource URL"
            />
            <i className="fas fa-link"></i>
          </div>
          <div
            className={`${styles["contact-input"]} ${styles["contact-input-light"]}`}
          >
            <ReactTagInput
              tags={tags}
              placeholder="Type the tag and press enter"
              onChange={(newTags) => setTags(newTags)}
            />
          </div>
          <br></br>
        </form>
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
