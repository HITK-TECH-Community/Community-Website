import React from "react";
import "./all_broadcasts.css";

import { makeStyles, InputBase, fade } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import Dropmenu from "./../../dropmenu/DropMenu";
import Card from "./card/card";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    backgroundColor: fade(theme.palette.common.white, 0.45),
    borderRadius: 15,
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.65),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: 228,
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
    boxShadow: "inset 2px 2px 5px #d0d0d0, inset -2px -2px 5px #ffffff",
    borderRadius: 12,
    height: 21,
    border: "1px solid #eeeeee",
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
      <div id="hero">
        <div className="motive">
          <h1 className="carousel-head">Broadcasts</h1>
          <div className="dash"></div>
        </div>
      </div>
      <div className="appbarWrap">
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
            <Dropmenu ListName="Filter by Year" ListItems={["2021", "2020"]} />
          </div>
        </div>
      </div>
      <div id="allCards">
        {arrayCards.map((element, i) => {
          return <Card project={element} key={`card-${i}`} />;
        })}
      </div>
    </main>
  );
}

export default AllBroadcasts;
