import React from "react";
import Overview from "./overview/overview";
import Motive from "./motive/motive";
import Carousel from "./carousel/carousel";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Overview />
      <Motive />
      <Carousel />
    </div>
  );
};

export default Home;
