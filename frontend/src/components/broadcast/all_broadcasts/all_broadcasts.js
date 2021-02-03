import React from "react";
import "./all_broadcasts.css";
import { makeStyles, InputBase, fade } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import Dropmenu from "./../../dropmenu/DropMenu";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.45),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.65),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "235px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function AllBroadcasts() {
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
  const arrayCards = [
    ["Crio Winter Of Doing ", str1],
    ["Private AI Series", str2],
    ["Crio Winter Of Doing ", str1],
    ["Private AI Series", str2],
    ["Crio Winter Of Doing ", str1],
  ];
  const classes = useStyles();
  return (
    <main>
      <div className="appbar">
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <Search />
          </div>
          <InputBase
            placeholder="Find a Broadcast…"
            classes={{
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <div className="filters">
          <Dropmenu
            ListName="Filter by Month"
            ListItems={[
              "January",
              "Febuary",
              "March",
              "April",
              "May",
              "June",
              "August",
              "September",
              "October",
              "November",
              "December",
            ]}
          />
          <Dropmenu
            ListName="Filter by Year"
            ListItems={["2020", "2019", "2018"]}
          />
        </div>
      </div>

      <div id="hero">
        <div className="motive">
          <h1 className="carousel-head">Broadcasts</h1>
          <div className="dash"></div>
        </div>
      </div>
      <div id="allCards">
        {arrayCards.map((element, i) => {
          return (
            <div className="card-item" key={i}>
              <div className="clickable-card">
                <div className="card-title">{element[0]}</div>
                <div className="card-content">
                  {element[1].substring(0, 500)}...
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default AllBroadcasts;
