import React from "react";
import "./all_broadcasts.css";
import dataa from "../../../test_data/broadcast_text.json";
import { InputBase } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import Dropmenu from "./../../dropmenu/DropMenu";
import Card from "./card/card";

function AllBroadcasts() {
  const arrayCards = [
    [dataa[0].title, dataa[0].desc, dataa[0].link],
    [dataa[1].title, dataa[1].desc, dataa[1].link],
    [dataa[0].title, dataa[0].desc, dataa[0].link],
    [dataa[1].title, dataa[1].desc, dataa[1].link],
    [dataa[0].title, dataa[0].desc, dataa[0].link],
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
