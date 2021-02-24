import React from "react";
import style from "./broadcast.module.scss";
import { Carousel } from "./Component/Carousel/index.js";
import { Link } from "react-router-dom";
export const Broadcast = () => {
  return (
    <div>
      <div>
        <Carousel head="Recent Broadcasts" />
      </div>
      <div>
        <Carousel head="Previous Broadcasts" />
      </div>
      <Link to="/all-broadcasts">
        <div className={style["submit-btn"]}>
          <button className={style["myb"]}>All Broadcasts</button>
        </div>
      </Link>
    </div>
  );
};
