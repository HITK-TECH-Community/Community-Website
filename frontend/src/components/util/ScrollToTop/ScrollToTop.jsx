import React, { useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import style from "./scroll-to-top.module.scss";

export const ScrollTop = (props) => {
  let dark = props.theme;
  console.log(dark);
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <FaAngleDoubleUp
      className={dark ? style["scroll-top-dark"] : style["scroll-top"]}
      onClick={scrollTop}
      size={70}
      style={{
        display: showScroll ? "flex" : "none",
      }}
    />
  );
};
