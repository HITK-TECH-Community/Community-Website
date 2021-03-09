import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import style from "./button.module.scss";

export const Button = (props) => {
  const { text, path } = props;
  return (
    <Link to={path}>
      <button className={style["btn"]}>
        {text}
        <span>?</span>
      </button>
    </Link>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export const Button1 = (props) => {
  return (
    <button type={props?.type || "button"} className={`${style["main-btn"]} ${props.className}`}>
      {props?.label}
    </button>
  );
};

export const Button2 = (props) => {
  return (
    <button
      type={props?.type || "button"}
      className={`${style["main-btn"]} ${style["main-btn-2"]} ${props.className}`}
    >
      {props?.label}
    </button>
  );
};

export const Button3 = (props) => {
  return (
    <button
      type={props?.type || "button"}
      className={`${style["main-btn"]} ${style["main-btn-2"]} ${style["main-btn-3"]}`}
    >
      {props?.label}
    </button>
  );
};
