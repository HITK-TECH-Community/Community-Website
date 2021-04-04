import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import style from "./carousel.module.scss";
import styles from "../../../Home/components/Motive/motive.module.scss";
import "./custom-owl-carousel-style.scss";
import { Modals } from "./Modal/index.js";
import dataa from "../../../../test_data/broadcast_text.json";

export function Carousel(props) {
  const head = props.head;
  let dark = props.theme;

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

  const cardImageArrayLight = dataa.map((item, i) => {
    const style = {
      height: "13em",
      backgroundSize: "cover",
      backgroundBlendMode: "screen",
      clipPath: "polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)",
      backgroundImage: `linear-gradient(45deg,rgba(255, 0, 90, 1) 0%,rgba(10, 24, 61, 1) 90%),url(${item.link})`,
    };
    return style;
  });

  const cardImageArrayDark = dataa.map((item, i) => {
    const style = {
      height: "13em",
      backgroundSize: "cover",
      backgroundBlendMode: "screen",
      clipPath: "polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)",
      backgroundImage: `linear-gradient(45deg, 
        #4e4376 0%, 
        #2b5876 90%),url(${item.link})`,
    };
    return style;
  });

  return (
    <React.Fragment>
      <Modals theme={dark} open={open} handleClose={handleClose} data={data} />
      <div className={style["slider-div"]}>
        <div className={styles["motive"]}>
          <h1
            className={
              dark
                ? `${style["carousel-head-dark"]} ${style["carousel-head"]}`
                : `${style["carousel-head-light"]} ${style["carousel-head"]}`
            }
          >
            {head}
          </h1>
          <div
            className={
              dark
                ? `${style["dash"]} ${style["dash-dark"]}`
                : `${style["dash"]} ${style["dash-light"]}`
            }
          ></div>
        </div>
        <OwlCarousel
          className={`${style["slide"]} owl-theme `}
          {...state.options}
          autoplay={true}
          responsiveClass={true}
          nav={false}
        >
          {dataa.map((item, i) => (
            <div
              className={
                dark
                  ? `${style["slide-card-dark"]} ${style["slide-card"]}`
                  : `${style["slide-card-light"]} ${style["slide-card"]}`
              }
              onClick={() => handleOpen(item.desc, item.title, item.link)}
            >
              <div
                style={dark ? cardImageArrayDark[i] : cardImageArrayLight[i]}
              ></div>

              <h3 className={style["card-head"]}>{item.title}</h3>
              <div className={style["card-text"]}>
                {item.desc.substring(0, 210)}...
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </React.Fragment>
  );
}
