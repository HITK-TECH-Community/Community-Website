import React, { useState } from "react";
import "./all_broadcasts.css";
import dataa from "../../../test_data/broadcast_text.json";
import { InputBase } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import Dropmenu from "./../../dropmenu/DropMenu";
import Card from "./card/card";
import Edit from "./Edit/Edit";

function AllBroadcasts() {
  const [array, setArray] = useState([...dataa]);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  const [isAdmin] = useState(true);

  const handler = (i) => {
    setIndex(i);
    setVisible(true);
  };
  const handleChange = (e) => {
    let a = [...array];
    let o = { ...a[index], [e.target.name]: e.target.value };
    a[index] = o;
    setArray(a);
  };

  return (
    <main>
      <Edit
        visible={visible}
        setVisible={setVisible}
        handleChange={handleChange}
        data={array[index]}
      />
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
        {array.map((element, i) => {
          return (
            <Card
              project={element}
              key={`card-${i}`}
              id={`card-${i}`}
              handler={() => handler(i)}
              admin={isAdmin}
            />
          );
        })}
      </div>
    </main>
  );
}

export default AllBroadcasts;
