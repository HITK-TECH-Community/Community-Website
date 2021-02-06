import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./button.module.css";

const Button = (props) => {
  const { text, path } = props;

  return (
    <Link to={path}>
      <button className={styles.btn}>
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
    <button type={props?.type || "button"} className={styles.mainbtn}>
      {props?.label}
    </button>
  );
};

export const Button2 = (props) => {
  return (
    <button
      type={props?.type || "button"}
      className={`${styles.mainbtn} ${styles.mainbtn2}`}
    >
      {props?.label}
    </button>
  );
};
