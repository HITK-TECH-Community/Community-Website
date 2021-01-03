import React from "react";
import Overview from "./overview/overview";
import JoinUs from "./join_us/join_us";
import Motive from "./motive/motive";
import Carousel from "./carousel/carousel";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Overview />
      <Motive />
      {/* <JoinUs /> */}
      <Carousel />
    </div>
  );
};

export default Home;
