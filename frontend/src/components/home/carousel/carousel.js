import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./carousel.css";
import "../motive/motive.css";
export class Owldemo1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
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
      },
    };
  }
  render() {
    return (
      <div className="carousel-div">
        <div className="motive">
          <h1 style={{ color: "#121f3a" }}>Curious to know More about Us?</h1>
          <div className="dash"></div>
        </div>
        <OwlCarousel
          className="owl-theme"
          {...this.state.options}
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
            <img className="owl-image" alt="" src="./images/about.png" />
          </div>
        </OwlCarousel>
      </div>
    );
  }
}

export default Owldemo1;
