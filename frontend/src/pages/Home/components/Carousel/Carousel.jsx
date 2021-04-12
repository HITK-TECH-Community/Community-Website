import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./owl-carousel-styles.css";
import style from "../Motive/motive.module.scss";
import style2 from "./carousel.module.scss";

export function Carousel(props) {
  let dark = props.theme;
  var buttonTheme = [];
  
  if(dark) {
    buttonTheme = ["<div class='nav-btn prev-slide white'></div>","<div class='nav-btn next-slide white'></div>"]
  }
  else  {
    buttonTheme = ["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"]
  }

  const options = {
    loop: true,
    margin: 45,
    nav: true,
    navText: buttonTheme,
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
        items: 3,
      },
    },
  };
  return (
    <div className={style2["carousel-div"]}>
      <div
        className={
          dark
            ? `motive ${style["motive"]} ${style2["motive"]} ${style["motive-dark"]}`
            : `motive ${style["motive"]} ${style2["motive"]}`
        }
      >
        <h1>Curious to know More about Us?</h1>
        <div
          className={
            dark
              ? `${style2["dash"]} ${style2["dash-dark"]}`
              : `${style2["dash"]} ${style2["dash-light"]}`
          }
        ></div>
      </div>
      <div className="container">
        <OwlCarousel
          className="owl-theme"
          {...options}
          autoplay={true}
          responsiveClass={true}>
          <div>
            <img className="owl-image" alt="" src="./images/help.png" />
          </div>
          <div>
            <img className="owl-image" alt="" src="./images/aim.png" />
          </div>
          <div>
            <img className="owl-image" alt="" src="./images/outcome.png" />
          </div>
          <div>
            <img className="owl-image" alt="" src="./images/guidelines.png" />
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
}
