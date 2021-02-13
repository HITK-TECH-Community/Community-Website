import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Carousel.css";
import style from "../../home/motive/motive.module.css";
import Modals from "./Modal/Modals";
import { dataa } from "../../../test_data/broadcasttext";
export default function Owl({ head, cards }) {
  let s1t = dataa[0].title;
  let s1d = dataa[0].desc;
  let s1l = dataa[0].link;
  let s2t = dataa[1].title;
  let s2d = dataa[1].desc;
  let s2l = dataa[1].link;

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
          <div className="slide-card" onClick={() => handleOpen(s1d, s1t, s1l)}>
            <h3 className="card-head">{s1t}</h3>
            <div className="card-text">{s1d.substring(0, 600)}...</div>
          </div>
          <div className="slide-card" onClick={() => handleOpen(s2d, s2t, s2l)}>
            <h3 className="card-head">{s2t}</h3>
            <div className="card-text">{s2d.substring(0, 600)}...</div>
          </div>
          <div className="slide-card" onClick={() => handleOpen(s1d, s1t, s1l)}>
            <h3 className="card-head">{s1t}</h3>
            <div className="card-text">{s1d.substring(0, 600)}...</div>
          </div>
          <div className="slide-card" onClick={() => handleOpen(s2d, s2t, s2l)}>
            <h3 className="card-head">{s2t}</h3>
            <div className="card-text">{s2d.substring(0, 600)}...</div>
          </div>
          <div className="slide-card" onClick={() => handleOpen(s1d, s1t, s1l)}>
            <h3 className="card-head">{s1t}</h3>
            <div className="card-text">{s1d.substring(0, 600)}...</div>
          </div>
          <div className="slide-card" onClick={() => handleOpen(s2d, s2t, s2l)}>
            <h3 className="card-head">{s2t} </h3>
            <div className="card-text">{s2d.substring(0, 600)}...</div>
          </div>
        </OwlCarousel>
      </div>
    </React.Fragment>
  );
}
