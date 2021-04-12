import React from "react";
import style from "./broadcast.module.scss";
import { Carousel } from "./Component/Carousel/index.js";
import { Link } from "react-router-dom";

export const Broadcast = (props) => {
  let dark = props.theme;
  return (
    <div className={dark ? style["dark"] : ``}>
      <div>
        <Carousel theme={dark} head="Recent Broadcasts" />
      </div>
      <div>
        <Carousel theme={dark} head="Previous Broadcasts" />
      </div>
      <Link to="/all-broadcasts">
        <div className={style["submit-btn"]}>
          <button
            className={
              dark
                ? `${style["myb"]} ${style["myb-dark"]}`
                : `${style["myb"]} ${style["myb-light"]}`
            }
          >
            All Broadcasts
          </button>
        </div>
      </Link>
    </div>
  );
};
