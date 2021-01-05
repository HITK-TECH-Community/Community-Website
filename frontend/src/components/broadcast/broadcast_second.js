import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./owl.css";
import Card from './card.js'




export class Owldemo1 extends Component {
    render() {


    return (

        <div className="Bottom_bgbox">
        <div className="Bottom_bgbox_first">
      <div className="motive">
          <h1 style={{ color: "#1B2431" }}>Previsely Broadcast</h1>
          <div className="dash"></div>
        </div>
        </div>
      <div className="carousel-div">

        <OwlCarousel
          items={5}
          className="owl-theme"
          loop
          nav
          margin={35}
          autoplay={true}
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