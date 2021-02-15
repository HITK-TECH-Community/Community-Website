import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Carousel.css";
import style from "../../home/motive/motive.module.css";
import Modals from "./Modal/Modals";
import dataa from "../../../test_data/broadcast_text.json";
import EditIcon from "@material-ui/icons/Edit";
import Edit from "./Edit/Edit";

export default function Owl({ head }) {
  const [open, setOpen] = useState(false);
  const [array, setArray] = useState([...dataa]);
  const [index, setIndex] = useState();
  const [visible, setVisible] = useState(false);

  const handleOpen = (s, h, i) => {
    setOpen(true);
    setData({ head: h, desc: s, img: i });
  };

  const handleClose = () => {
    setOpen(false);
    setData({});
  };
  const [isAdmin] = useState(true);

  const handler = (i) => {
    setIndex(i);
    setVisible(true);
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
  const handleChange = (e) => {
    let a = [...array];
    let o = { ...a[index], [e.target.name]: e.target.value };
    a[index] = o;
    setArray(a);
  };

  return (
    <React.Fragment>
      <Edit
        visible={visible}
        setVisible={setVisible}
        handleChange={handleChange}
        data={array[index]}
      />
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
          {array.map((item, i) => (
            <div className="slide-card">
              <h3 className="card-head">
                {item.title}
                {isAdmin ? (
                  <EditIcon
                    style={{ float: "right" }}
                    onClick={() => handler(i)}
                  />
                ) : null}
              </h3>
              <div
                className="card-text"
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
