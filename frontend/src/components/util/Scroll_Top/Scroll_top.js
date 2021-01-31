import React, { Component } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import cn from "classnames";

import "./Scroll_top.css";

class ScrollToTop extends Component {
  state = {
    visible: false,
  };

  scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  toggleVisibility = () => {
    if (window.pageYOffset > 50) {
      this.setState({
        visible: true,
      });
    } else {
      this.setState({
        visible: false,
      });
    }
  };

  componentDidMount() {
    document.addEventListener("scroll", this.toggleVisibility);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.toggleVisibility);
  }

  render() {
    return (
      <FaArrowAltCircleUp
        className={cn("ScrollToTop", { visible: this.state.visible })}
        onClick={this.scrollToTop}
      />
    );
  }
}

export default ScrollToTop;
