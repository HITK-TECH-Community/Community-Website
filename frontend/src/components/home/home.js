import React from "react";
import Overview from "./overview/overview";
import Motive from "./motive/motive";
import Carousel from "./carousel/carousel";
import JoinUs from "./join_us/join_us";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Overview />
      <Motive />
      <Carousel />
      <JoinUs />
    </div>
  );
};

export default Home;
