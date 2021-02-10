import React from "react";
import "./all_broadcasts.css";

import { InputBase } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import Dropmenu from "./../../dropmenu/DropMenu";
import Card from "./card/card";

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

  return (
    <main>
      <div id="hero">
        <div className="motive">
          <h1 className="carousel-head">All Broadcasts</h1>
          <div className="dash"></div>
        </div>
      </div>
      <div className="appbarWrap">
        <div className="appbar">
          <div className="search">
            <div className="searchIcon">
              <Search />
            </div>
            <InputBase
              placeholder="Find a Broadcast…"
              className="inputInput"
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
