import React, { useEffect, useState } from "react";
import style from "./Edit.module.scss";
import { TextField } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

export default function Edit(props) {
  const [a, seta] = useState();
  function scrolls() {
    let b = window.scrollY;
    seta(b);
  }
  useEffect(() => {
    window.addEventListener("scroll", scrolls);
  }, []);

  return props.visible ? (
    <div className={style.popup} style={{ top: a }}>
      <div className={style.div}>
        <h1>
          Edit modal
          <CloseIcon
            style={{ float: "right", cursor: "pointer" }}
            onClick={() => props.setVisible(false)}
          />
        </h1>
        <form>
          <div className={style.form}>
            <h5>Title:</h5>
            <TextField
              type="text"
              name="title"
              placeholder="Title"
              multiline
              value={props.data.title}
              className={style.input}
              onChange={props.handleChange}
            />
          </div>
          <div className={style.form}>
            <h5>Description:</h5>
            <TextField
              type="text"
              name="desc"
              multiline
              placeholder="Description"
              value={props.data.desc}
              className={style.input}
              onChange={props.handleChange}
            />
          </div>
          <div className={style.form}>
            <h5>Link:</h5>
            <TextField
              type="text"
              name="link"
              placeholder="Link"
              className={style.input}
              onChange={props.handleChange}
              value={props.data.link}
              multiline
            />
          </div>
          <button
            className={style.btns1}
            onClick={() => props.setVisible(false)}
          >
            Edit
          </button>
        </form>
      </div>
    </div>
  ) : null;
}
