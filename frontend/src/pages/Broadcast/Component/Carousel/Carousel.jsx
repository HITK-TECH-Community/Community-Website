import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import style from "./carousel.module.scss";
import styles from "../../../Home/components/Motive/motive.module.scss";
import "./custom-owl-carousel-style.scss";
import { Modals } from "./Modal/index.js";
import dataa from "../../../../test_data/broadcast_text.json";

export function Carousel({ head }) {
  const [open, setOpen] = useState(false);

  const handleOpen = (s, h, i) => {
    setOpen(true);
    setData({ head: h, desc: s, img: i });
  };

  const handleClose = () => {
    setOpen(false);
    setData({});
  };

  const [data, setData] = useState({});
  const state = {
    options: {
      loop: true,
      responsive: {
        0: {
          items: 1,
        },
        500: {
          items: 2,
          margin: 20,
        },
        800: {
          items: 2,
          margin: 0,
        },
        1000: {
          items: 2,
          margin: 50,
        },
        1100: {
          items: 4,
        },
      },
    },
  };

  return (
    <React.Fragment>
      <Modals open={open} handleClose={handleClose} data={data} />
      <div className={style["slider-div"]}>
        <div className={styles["motive"]}>
          <h1 className={style["carousel-head"]}>{head}</h1>
          <div className={styles["dash"]}></div>
        </div>
        <OwlCarousel
          className={`${style["slide"]} owl-theme `}
          {...state.options}
          autoplay={true}
          responsiveClass={true}
          nav={false}
        >
          {dataa.map((item, i) => (
            <div className={style["slide-card"]}>
              <h3 className={style["card-head"]}>{item.title}</h3>
              <div
                className={style["card-text"]}
                onClick={() => handleOpen(item.desc, item.title, item.link)}
              >
                {item.desc.substring(0, 600)}...
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </React.Fragment>
  );
}
