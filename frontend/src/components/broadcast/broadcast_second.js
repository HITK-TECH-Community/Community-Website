import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./owl.css";
import Card from "./card.js";

export class Owldemo1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        loop: true,
        margin: 15,
        responsive: {
          0: {
            nav: false,
            items: 1,
          },
          497: {
            nav: false,
            items: 2,
          },
          551: {
            nav: false,
            items: 3,
            margin:125,
          },
          800: {
            nav: false,
            items: 3,
            margin: 0,
          },
          1000: {
            nav: true,
            items: 4,
            margin: 50,
          },
          1100: {
            nav: true,
            items: 5,
          },
        },
      },
    };
  }
  render() {
    return (
      <div className="Bottom_bgbox">
        <div className="Bottom_bgbox_first">
          <div className="motive">
            <h1 style={{ color: "#1B2431" }}>Recently Broadcast</h1>
            <div className="dash"></div>
          </div>
        </div>

        <div className="carousel-div">
          <OwlCarousel
            className="owl-theme"
            {...this.state.options}
            autoplay={true}
            responsiveClass={true}

          >
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
          </OwlCarousel>
        </div>
      </div>
    );
  }
}

export default Owldemo1;
