import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Owl.css";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';



export class Owldemo1 extends Component {
    render() {
    

    return (
        
       
        <div className="Bottom_bgbox">
        <div className="Bottom_bgbox_first">
      <div className="motive">
          <h1 style={{ color: "#121f3a" }}>Recently Broadcast</h1>
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
            <img className="owl-image" alt="" src="./images/help.png" />
          </div>
          <div>
            <img className="owl-image" alt="" src="./images/help.png" />
          </div>
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
            <img className="owl-image" alt="" src="./images/help.png" />
          </div>
          <div>
            <img className="owl-image" alt="" src="./images/about.png" />
          </div>
          <div>
            <img className="owl-image" alt="" src="./images/help.png" />
          </div>
          <div>
            <img className="owl-image" alt="" src="./images/help.png" />
          </div>
        </OwlCarousel>
      </div>
     </div>
      
    );
  }
}


export default Owldemo1;
