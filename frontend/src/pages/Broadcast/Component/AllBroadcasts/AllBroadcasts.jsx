import React, { useState, useEffect } from "react";
import style from "./all-broadcasts.module.scss";
import styles from "../../../Home/components/Motive/motive.module.scss";
import dataa from "../../../../test_data/broadcast_text.json";
import { InputBase } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { DropMenu } from "../../../../components/util/DropMenu/index.js";
import { Card } from "./Card/index.js";
import { Edit } from "./Edit/index.js";
import { END_POINT } from "./../../../../config/api";

export function AllBroadcasts(props) {
  const [array, setArray] = useState([]);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [isAdmin] = useState(true);
  const [tags, setTags] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [page, setPage] = useState("");

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

  useEffect(() => {
    var api = `${END_POINT}/broadcast?page=${page}&tags=${tags}&year=${year}&month=${month}`;
    if (tags === "") {
      api = `${END_POINT}/broadcast?page=${page}&year=${year}&month=${month}`;
    }
    if (page === "") {
      const tempApi = api.split("page=&");
      api = tempApi.join("");
    }
    if (year === "") {
      const tempApi = api.split("year=&");
      api = tempApi.join("");
    }
    if (month === "") {
      const tempApi = api.split("month=");
      api = tempApi.join("");
      api.replace("&month=", "");
    }
    if (tags === "" && page === "" && year === "" && month === "") {
      api = `${END_POINT}/broadcast`;
    }
    return fetch(api, {
      method: "GET",
    })
      .then((response) =>
        response
          .json()
          .then((res) => {
            setArray(res);
          })
          .catch((error) => console.log(error))
      )
      .catch((err) => console.log(err));
  }, [tags, page, year, month]);

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
              value={tags}
              onChange={(e) => {
                setTags(e.currentTarget.value);
              }}
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
              value={month}
              onChange={(e) => {
                setMonth(e.currentTarget.value);
              }}
            />
            <DropMenu
              theme={dark}
              className={style["filter-btn"]}
              ListName="Filter by Year"
              ListItems={["2021", "2020"]}
              value={year}
              onChange={(e) => {
                setYear(e.currentTarget.value);
              }}
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
