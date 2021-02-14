import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Carousel.css";
import style from "../../home/motive/motive.module.css";
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
      <div className="slider-div">
        <div className={style.motive}>
          <h1 className="carousel-head">{head}</h1>
          <div className={style.dash}></div>
        </div>
        <OwlCarousel
          className="owl-theme slide "
          {...state.options}
          autoplay={true}
          responsiveClass={true}
          nav={false}
        >
          <div
            className="slide-card"
            onClick={() => handleOpen(desc1, title1, link1)}
          >
            <h3 className="card-head">{title1}</h3>
            <div className="card-text">{desc1.substring(0, 600)}...</div>
          </div>
          <div
            className="slide-card"
            onClick={() => handleOpen(desc2, title2, link2)}
          >
            <h3 className="card-head">{title2}</h3>
            <div className="card-text">{desc2.substring(0, 600)}...</div>
          </div>
          <div
            className="slide-card"
            onClick={() => handleOpen(desc1, title1, link1)}
          >
            <h3 className="card-head">{title1}</h3>
            <div className="card-text">{desc1.substring(0, 600)}...</div>
          </div>
          <div
            className="slide-card"
            onClick={() => handleOpen(desc2, title2, link2)}
          >
            <h3 className="card-head">{title2}</h3>
            <div className="card-text">{desc2.substring(0, 600)}...</div>
          </div>
          <div
            className="slide-card"
            onClick={() => handleOpen(desc1, title1, link1)}
          >
            <h3 className="card-head">{title1}</h3>
            <div className="card-text">{desc1.substring(0, 600)}...</div>
          </div>
          <div
            className="slide-card"
            onClick={() => handleOpen(desc2, title2, link2)}
          >
            <h3 className="card-head">{title2} </h3>
            <div className="card-text">{desc2.substring(0, 600)}...</div>
          </div>
        </OwlCarousel>
      </div>
    </React.Fragment>
  );
}
