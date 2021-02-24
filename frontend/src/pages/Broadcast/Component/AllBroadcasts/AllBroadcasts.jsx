import React, { useState } from "react";
import style from "./all-broadcasts.module.scss";
import dataa from "../../../../test_data/broadcast_text.json";
import { InputBase } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { DropMenu } from "../../../../components/util/DropMenu/index.js";
import { Card } from "./Card/index.js";
import { Edit } from "./Edit/index.js";

export function AllBroadcasts() {
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
    <main className={style["main"]}>
      <Edit
        visible={visible}
        setVisible={setVisible}
        handleChange={handleChange}
        data={array[index]}
      />
      <div id={style["hero"]}>
        <div className={style["motive"]}>
          <h1 className={style["carousel-head"]} id={style["heading"]}>
            All Broadcasts
          </h1>
          <div className={style["dash"]}></div>
        </div>
      </div>
      <div className={style["appbar-wrap"]}>
        <div className={style["appbar"]}>
          <div className={style["search"]}>
            <div className={style["search-icon"]}>
              <Search />
            </div>
            <InputBase
              placeholder="Find a Broadcast…"
              className={style["input-input"]}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={style["filters"]}>
            <DropMenu
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
            <DropMenu ListName="Filter by Year" ListItems={["2021", "2020"]} />
          </div>
        </div>
      </div>
      <div id={style["all-cards"]}>
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
