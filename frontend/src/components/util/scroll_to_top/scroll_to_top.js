import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "./scroll_to_top.css";

const ScrollTop = () => {
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
    <FaArrowCircleUp
      className="scrollTop"
      onClick={scrollTop}
      size={70}
      style={{
        height: 40,
        color: "red",
        display: showScroll ? "flex" : "none",
      }}
    />
  );
};

export default ScrollTop;
