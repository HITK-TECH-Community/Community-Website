import React, { useState } from "react";
import style from "./all-broadcasts.module.scss";
import styles from "../../../Home/components/Motive/motive.module.scss";
import dataa from "../../../../test_data/broadcast_text.json";
import { InputBase } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { DropMenu } from "../../../../components/util/DropMenu/index.js";
import { Card } from "./Card/index.js";
import { Edit } from "./Edit/index.js";

export function AllBroadcasts(props) {
  const [array, setArray] = useState([...dataa]);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [isAdmin] = useState(true);

  const dark = props.theme;

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
    <main
      className={dark ? `${style["main"]} ${style["dark"]}` : style["main"]}
    >
      <Edit
        theme={dark}
        visible={visible}
        setVisible={setVisible}
        handleChange={handleChange}
        data={array[index]}
      />
      <div id={style["hero"]}>
        <div className={styles["motive"]}>
          <h1
            className={
              dark
                ? `${style["carousel-head-dark"]}`
                : `${style["carousel-head"]}`
            }
            id={style["heading"]}
          >
            All Broadcasts
          </h1>
          <div
            className={
              dark
                ? `${style["dash"]} ${style["dash-dark"]}`
                : `${style["dash"]} ${style["dash-light"]}`
            }
          ></div>
        </div>
      </div>
      <div className={style["appbar-wrap"]}>
        <div className={style["appbar"]}>
          <div
            className={
              dark
                ? `${style["search"]} ${style["search-dark"]}`
                : `${style["search"]} ${style["search-light"]}`
            }
          >
            <div className={style["search-icon"]}>
              <Search />
            </div>
            <InputBase
              placeholder="Find a Broadcast…"
              className={
                dark
                  ? `${style["input-input"]} ${style["input-input-dark"]}`
                  : `${style["input-input"]} ${style["input-input-light"]}`
              }
              inputProps={{ "aria-label": "search" }}
              name="search-box"
            />
          </div>
          <div className={style["filters"]}>
            <DropMenu
              theme={dark}
              className={style["filter-btn"]}
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
            <DropMenu
              theme={dark}
              className={style["filter-btn"]}
              ListName="Filter by Year"
              ListItems={["2021", "2020"]}
            />
          </div>
        </div>
      </div>
      <div id={style["all-cards"]}>
        {array.map((element, i) => {
          return (
            <Card
              theme={dark}
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
