import React, { useState } from "react";
import style from "./all-broadcasts.module.css";
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
      <div className={style.hero}>
        <div className={style.motive}>
          <h1 className={style.carouselHead}>All Broadcasts</h1>
          <div className={style.dash}></div>
        </div>
      </div>
      <div className={style.appbarWrap}>
        <div className={style.appbar}>
          <div className={style.search}>
            <div className={style.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Find a Broadcast…"
              className={style.inputInput}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={style.filters}>
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
      <div className={style.allCards}>
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
