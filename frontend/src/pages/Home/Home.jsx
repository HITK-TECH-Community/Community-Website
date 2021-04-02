import React from "react";
import { Overview } from "./components/Overview/index";
import { Motive } from "./components/Motive/index";
import { Carousel } from "./components/Carousel/index";
import { JoinUs } from "./components/JoinUs/index";

import styles from "./home.module.scss";

export const Home = (props) => {
  let dark = props.theme;
  return (
    <div
      className={
        dark ? `${styles["home"]} ${styles["dark"]}` : `${styles["home"]}`
      }
    >
      <Overview theme={dark} />
      <Motive theme={dark} />
      <Carousel theme={dark} />
      <JoinUs theme={dark} />
    </div>
  );
};
