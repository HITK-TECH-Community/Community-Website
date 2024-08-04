import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import style from "./carousel.module.scss";
import styles from "../../../Home/components/Motive/motive.module.scss";
import "./custom-owl-carousel-style.scss";
import { Modals } from "./Modal/index.js";
import Loader from "../../../../components/util/Loader";
import { boardcast } from "../../../../service/Broadcast.jsx";
import { SimpleToast } from "../../../../components/util/Toast/Toast.jsx";
import DOMPurify from "dompurify";

export function Carousel(props) {
  const head = props.head;
  let dark = props.theme;
  const [toast, setToast] = useState({
    toastStatus: false,
    toastType: "",
    toastMessage: "",
  })
  const [open, setOpen] = useState(false);
  const [dataa, setDataa] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const handleOpen = (s, h, i, l) => {
    setOpen(true);
    setData({ head: h, desc: s, img: i, link: l });
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
      backgroundPosition: "center",
      backgroundBlendMode: "screen",
      backgroundImage: `linear-gradient(45deg,rgba(255, 0, 90, 1) 0%,
      rgba(10, 24, 61, 1) 90%), url(${item.imageUrl[0]})`,
    };
    return style;
  });

  const cardImageArrayDark = dataa.map((item, i) => {
    const style = {
      height: "13em",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundBlendMode: "screen",
      backgroundImage: `linear-gradient(45deg, 
        #4e4376 0%, 
        #2b5876 90%),url(${item.imageUrl[0]})`,
    };
    return style;
  });

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    setLoaded(false);
    const result = await boardcast(setToast,toast)
    const approvedBroadcasts = result.filter(broadcast => broadcast.isApproved);
    setDataa(approvedBroadcasts);
    setLoaded(true);
  }
  const handleCloseToast = (event,reason) => {
    if (reason === "clickaway") {
      return;
    }
    setToast({ ...toast, toastStatus: false });
  };

  const truncatedContent = (content, maxLength) => {
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + '...';
    }
    return content;
  };

  return !isLoaded ? (
    <Loader />
  ) : (
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
              onClick={() =>
                handleOpen(item.content, item.title, item.imageUrl[0], item?.link)
              }
            >
              <div 
                style={dark ? cardImageArrayDark[i] : cardImageArrayLight[i]}
              ></div>
              
              <h3 className={style["card-head"]}>{item.title}</h3>
              <div className={style["card-text"]} 
              dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(truncatedContent(item.content, 170)),}} />
            </div>
          ))}
        </OwlCarousel>
        {toast.toastStatus && (
        <SimpleToast
          open={toast.toastStatus}
          message={toast.toastMessage}
          handleCloseToast={handleCloseToast}
          severity={toast.toastType}
        />
      )}
      </div>
    </React.Fragment>
  );
}
