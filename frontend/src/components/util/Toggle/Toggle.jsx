import React from "react";
import style from "./toggle.module.scss";

export const Toggle = (props) => {
  return (
    <div className={style["container"]}>
      <label className={style["switch"]}>
        <input type="checkbox" onChange={() => props.handleClick()} />
        <span className={`${style["slider"]} ${style["round"]}`}></span>
      </label>
    </div>
  );
};
