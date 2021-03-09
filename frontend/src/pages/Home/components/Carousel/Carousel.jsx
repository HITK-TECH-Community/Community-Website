import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./owl-carousel-styles.css";
import style from "../Motive/motive.module.scss";
import style2 from "./carousel.module.scss";

export function Carousel(props) {
  const options = {
    loop: true,
    margin: 45,
    nav: true,
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
      <div className={`motive ${style2["motive"]} ${style["motive"]}`}>
        <h1 style={{ color: "#121f3a" }}>Curious to know More about Us?</h1>
        <div className={style.dash}></div>
      </div>
      <div className="container">
        <OwlCarousel
          className="owl-theme"
          {...options}
          autoplay={true}
          responsiveClass={true}
        >
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
