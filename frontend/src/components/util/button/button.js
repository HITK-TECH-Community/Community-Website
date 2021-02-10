import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./button.css";

const Button = (props) => {
  const { text, path } = props;

  return (
    <Link to={path}>
      <button className="btn">
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

export default Button;

export const Button1 = (props) => {
  return (
    <button type={props?.type || "button"} className="main-btn">
      {props?.label}
    </button>
  );
};

export const Button2 = (props) => {
  return (
    <button type={props?.type || "button"} className="main-btn main-btn-2">
      {props?.label}
    </button>
  );
};

export const Button3 = (props) => {
  return (
    <button
      type={props?.type || "button"}
      className="main-btn main-btn-2 main-btn-3"
    >
      {props?.label}
    </button>
  );
};
