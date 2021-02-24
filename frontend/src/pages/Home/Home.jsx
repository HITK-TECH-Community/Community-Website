import React from "react";
import { Overview } from "./components/Overview/index";
import { Motive } from "./components/Motive/index";
import { Carousel } from "./components/Carousel/index";
import { JoinUsForm } from "./components/JoinUsForm/index";
import styles from "./home.module.scss";

export const Home = () => {
  return (
    <div className={styles["home"]}>
      <Overview />
      <Motive />
      <Carousel />
      <JoinUsForm />
    </div>
  );
};
