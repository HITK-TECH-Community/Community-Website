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
      <div class="wrap">
        <button class="button">
          <a href="/all_broadcast" style={{ color: "white" }}>
            View
          </a>
        </button>
      </div>
    </div>
  );
};

export default Broadcasts;
