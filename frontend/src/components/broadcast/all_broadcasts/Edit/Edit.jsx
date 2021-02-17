import React from "react";
import style from "./Edit.module.scss";
import { TextField } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

export default function Edit(props) {
  console.log(props.data);
  return props.visible ? (
    <div className={style.popup}>
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
