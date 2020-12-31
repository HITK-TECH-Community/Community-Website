import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Owl.css";
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';


const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);


const Owlcarsoule=() => {
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
};
export default Owlcarsoule;
