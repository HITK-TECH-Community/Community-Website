import React from "react";
import "./broadcast.css";
import Carousel from "./Carousel/Carousel";

const Broadcasts = () => {
  return (
    <div>
      <div>
        <Carousel head="Recent Broadcasts" />
      </div>
      <div>
        <Carousel head="Previous Broadcasts" />
      </div>
    </div>
  );
};

export default Broadcasts;
