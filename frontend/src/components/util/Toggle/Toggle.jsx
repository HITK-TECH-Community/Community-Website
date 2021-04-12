import React from "react";
import style from "./toggle.module.scss";

export const Toggle = (props) => {
  const mobile = props.class;

  return (
    <div className={`${style["container"]} ${mobile}`}>
      <input
        type="checkbox"
        id="check"
        className={style["checkbox"]}
        checked={props.theme}
        onChange={() => props.handleClick()}
      />
      <label htmlFor="check" className={style["label"]}>
        <i className={`fas fa-moon ${style["moon"]}`}></i>
        <i className={`fas fa-sun ${style["sun"]}`}></i>
        <div className={style["slider"]}></div>
      </label>
    </div>
  );
};
