import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from "./Carousel.module.css";
import style from "../../home/motive/motive.module.css";
import "./customOwlCarouselStyle.css";
import Modals from "./Modal/Modals";
import dataa from "../../../test_data/broadcast_text.json";

export default function Owl({ head }) {
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
      <div className={styles.sliderDiv}>
        <div className={style.motive}>
          <h1 className={styles.carouselHead}>{head}</h1>
          <div className={style.dash}></div>
        </div>
        <OwlCarousel
          className={`owl-theme ${styles.slide} `}
          {...state.options}
          autoplay={true}
          responsiveClass={true}
          nav={false}
        >
          {dataa.map((item, i) => (
            <div className={styles.slideCard}>
              <h3 className={styles.cardHead}>{item.title}</h3>
              <div
                className={styles.cardText}
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
