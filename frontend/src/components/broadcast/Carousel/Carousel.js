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
  let title1 = dataa[0].title;
  let desc1 = dataa[0].desc;
  let link1 = dataa[0].link;
  let title2 = dataa[1].title;
  let desc2 = dataa[1].desc;
  let link2 = dataa[1].link;

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
          <div
            className={styles.slideCard}
            onClick={() => handleOpen(desc1, title1, link1)}
          >
            <h3 className={styles.cardHead}>{title1}</h3>
            <div className={styles.cardText}>{desc1.substring(0, 600)}...</div>
          </div>
          <div
            className={styles.slideCard}
            onClick={() => handleOpen(desc2, title2, link2)}
          >
            <h3 className={styles.cardHead}>{title2}</h3>
            <div className={styles.cardText}>{desc2.substring(0, 600)}...</div>
          </div>
          <div
            className={styles.slideCard}
            onClick={() => handleOpen(desc1, title1, link1)}
          >
            <h3 className={styles.cardHead}>{title1}</h3>
            <div className={styles.cardText}>{desc1.substring(0, 600)}...</div>
          </div>
          <div
            className={styles.slideCard}
            onClick={() => handleOpen(desc2, title2, link2)}
          >
            <h3 className={styles.cardHead}>{title2}</h3>
            <div className={styles.cardText}>{desc2.substring(0, 600)}...</div>
          </div>
          <div
            className={styles.slideCard}
            onClick={() => handleOpen(desc1, title1, link1)}
          >
            <h3 className={styles.cardHead}>{title1}</h3>
            <div className={styles.cardText}>{desc1.substring(0, 600)}...</div>
          </div>
          <div
            className={styles.slideCard}
            onClick={() => handleOpen(desc2, title2, link2)}
          >
            <h3 className={styles.cardHead}>{title2} </h3>
            <div className={styles.cardText}>{desc2.substring(0, 600)}...</div>
          </div>
        </OwlCarousel>
      </div>
    </React.Fragment>
  );
}
