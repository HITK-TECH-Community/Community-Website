import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Carousel.css";
import "../../home/motive/motive.css";
import Modals from "./Modal/Modals";

export default function Owl(props) {
  let str2 = `Hola learners🙋🏻‍♀️🙋🏻‍♂️
                Developing a passion for learning will never cease to grow 
                and so we have brought another opportunity for you. 🔥
                OpenMined is providing you the private AI series, which will
                 be free of cost. In this series of courses,
                you'll learn how privacy is impacting every industry and 
                how to build real-world products with privacy-preserving AI technology.
                Wondering how will you be mentored?🤔 You will get to learn
                 from the best minds in the industry and throughout the journey, 
                you will get to hear from a number of interviewed guests. 😇✨
                📚The Courses include :
                ▪️Privacy and Society [Beginner] 
                ▪️Foundations of private computation [Intermediate] 
                ▪️Federated learning across enterprises [Intermediate] 
                ▪️Federated learning on mobile [Intermediate] 
                What are you waiting for?
 
               🔖Signup for private AI Series: https://courses.openmined.org/
               🔖Subscribe to the private AI series YouTube channel:
               https://youtu.be/-b0CQFr6xyA
             🗓️The course will start form January 2021`;

  let str1 = `Crio Winter of Doing is here!!🤩🤩 India's top startups are
                lining up their tech challenges for you!! Join India's largest
                tech externship program for developers. ✅Work on challenging
                tech projects (externships) from exciting startups ✅ Interact
                with the biggest names in India's tech industry ✅ Participate
                in engaging Masterclass sessions from top engineers in the
                country ✅Get discovered by Crio's hiring partners Apply now ❗
                👇 https://www.crio.do/crio-winter-of-doing/ Limited slots are
                available ❗❗ Thank you, With regards, HITK Tech Community👩‍💻👨‍💻
                (By HITK students,For HITK students)`;

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
        <div className="motive">
          <h1 className="carousel-head">{props.head}</h1>
          <div className="dash"></div>
        </div>
        <OwlCarousel
          className="owl-theme slide "
          {...state.options}
          autoplay={true}
          responsiveClass={true}
          nav={false}
        >
          <div
            className="slide-card"
            onClick={() =>
              handleOpen(
                str1,
                "Crio Winter Of Doing",
                "https://i.pinimg.com/originals/4c/52/f9/4c52f9eb7ff10b55e35ab24634db6a57.jpg"
              )
            }
          >
            <h3 className="card-head"> Crio Winter Of Doing </h3>
            <div className="card-text">{str1.substring(0, 600)}...</div>
          </div>
          <div
            className="slide-card"
            onClick={() =>
              handleOpen(
                str2,
                "Private AI Series",
                "https://images-na.ssl-images-amazon.com/images/I/81A%2BqqYaYFL._SL1280_.jpg"
              )
            }
          >
            <h3 className="card-head"> Private AI Series </h3>
            <div className="card-text">{str2.substring(0, 600)}...</div>
          </div>
          <div
            className="slide-card"
            onClick={() =>
              handleOpen(
                str1,
                "Crio Winter Of Doing",
                "https://i.pinimg.com/originals/4c/52/f9/4c52f9eb7ff10b55e35ab24634db6a57.jpg"
              )
            }
          >
            <h3 className="card-head"> Crio Winter Of Doing </h3>
            <div className="card-text">{str1.substring(0, 600)}...</div>
          </div>
          <div
            className="slide-card"
            onClick={() =>
              handleOpen(
                str2,
                "Private AI Series",
                "https://images-na.ssl-images-amazon.com/images/I/81A%2BqqYaYFL._SL1280_.jpg"
              )
            }
          >
            <h3 className="card-head"> Private AI Series </h3>
            <div className="card-text">{str2.substring(0, 600)}...</div>
          </div>
          <div
            className="slide-card"
            onClick={() =>
              handleOpen(
                str1,
                "Crio Winter Of Doing",
                "https://i.pinimg.com/originals/4c/52/f9/4c52f9eb7ff10b55e35ab24634db6a57.jpg"
              )
            }
          >
            <h3 className="card-head"> Crio Winter Of Doing </h3>
            <div className="card-text">{str1.substring(0, 600)}...</div>
          </div>
          <div
            className="slide-card"
            onClick={() =>
              handleOpen(
                str2,
                "Private AI Series",
                "https://images-na.ssl-images-amazon.com/images/I/81A%2BqqYaYFL._SL1280_.jpg"
              )
            }
          >
            <h3 className="card-head"> Private AI Series </h3>
            <div className="card-text">{str2.substring(0, 600)}...</div>
          </div>
        </OwlCarousel>
      </div>
    </React.Fragment>
  );
}
