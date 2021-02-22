import React from "react";
import style from "./broadcast.module.css";
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
        <div className={style.submitBtn}>
          <button className={style.myb}>All Broadcasts</button>
        </div>
      </Link>
    </div>
  );
};

export default Broadcasts;
