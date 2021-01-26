import React from "react";
import "./broadcast.css";
import Carousel from "./Carousel/Carousel";
import { Link } from "react-router-dom";
const Broadcasts = () => {
  return (
    <div>
      <div>
        <Carousel head="Recent Broadcasts" />
      </div>
      <div>
        <Carousel head="Previous Broadcasts" />
      </div>
      <Link to="/all-broadcasts">
        <div className="submit-btn">
          <button
            class="myb"
            style={{ marginBottom: "30px", textAlign: "center" }}
          >
            All Broadcasts
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Broadcasts;
