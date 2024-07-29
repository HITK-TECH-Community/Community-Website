import React, { useState, useEffect } from "react";
import style from "./manage-broadcasts.module.scss";
import { InputBase } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { DropMenu } from "../../../../../components/util/DropMenu/index.js";
import { Card } from "../ManageBroadcasts/Card/index.js";
import { Edit } from "../../../../Broadcast/Component/AllBroadcasts/Edit/index.js";
import { END_POINT } from "./../../../../../config/api";
import Loader from "../../../../../components/util/Loader";
import { Button4 } from "../../../../../components/util/Button";
import { customBoardcast } from "../../../../../service/Broadcast.jsx";
import { useSelector } from "react-redux";

export function ManageBroadcasts() {
  const [array, setArray] = useState([]);
  const [index, setIndex] = useState("");
  const [visible, setVisible] = useState(false);
  const [tags, setTags] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [page, setPage] = useState("");
  const [approval, setApproval] = useState("");
  const [isLoaded, setLoaded] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [handleDelete, setHandleDelete] = useState(0);
  const isAdmin = useSelector((state) => state?.isSuperAdmin);

  const filterByApproval = (broadcasts) => {
    let itemsToDisplay = [];
    if (approval == "Approved")
      itemsToDisplay = broadcasts.filter((item) => {
        return item.isApproved === true;
      });
    else if (approval == "Unapproved")
      itemsToDisplay = broadcasts.filter((item) => {
        return item.isApproved === false;
      });
    else itemsToDisplay = broadcasts;
    return itemsToDisplay;
  };

  useEffect(() => {
    if (index === "") setVisible(false);
    else setVisible(true);
  }, [index]);
  const months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const years = [];
  for (var i = 2020; i <= new Date().getFullYear(); ++i) {
    years.push(i.toString());
  }

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

  const filteredItems = array.filter((item) =>
    item.title.toLocaleLowerCase().includes(filterText)
  );

  const itemsToDisplay = filterText ? filteredItems : array;

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
      api = `${END_POINT}/broadcast/all`;
    }
    getData(api);
  }, [month, page, tags, year, handleDelete, approval]);
  const getData = async (api) => {
    setLoaded(false);
    const result = await customBoardcast(api);
    setArray(filterByApproval(result));
    setLoaded(true);
  };
  return (
    <div>
      <Edit
        visible={visible}
        setVisible={setVisible}
        handleChange={handleChange}
        data={array[index]}
      />
      <div id={style["hero"]}>
        <div className={style["motive"]}>
          <h1 className={style["carousel-head"]}>Manage Broadcasts</h1>
          <div className={`${style["dash"]} ${style["dash-light"]}`}></div>
        </div>
      </div>
      <div className={style["appbar-wrap"]}>
        <div className={style["appbar"]}>
          <div className={`${style["search"]} ${style["search-light"]}`}>
            <div className={style["search-icon"]}>
              <Search />
            </div>
            <InputBase
              placeholder="Find a Broadcast…"
              className={`${style["input-input"]} ${style["input-input-light"]}`}
              inputProps={{ "aria-label": "search" }}
              name="search-box"
              value={filterText}
              onChange={(e) => {
                setFilterText(e.target.value.toLocaleLowerCase());
              }}
            />
          </div>
          <div className={style["filters"]}>
            <DropMenu
              className={style["filter-btn"]}
              ListName="Filter by Month"
              ListItems={months}
              value={month}
              onClick={(e) => {
                const { newVal } = e.currentTarget.dataset;
                const index = months.indexOf(newVal) + 1;
                setLoaded(false);
                index !== 0 && setMonth(index);
              }}
            />
            <DropMenu
              className={style["filter-btn"]}
              ListName="Filter by Year"
              ListItems={years}
              value={year}
              onClick={(e) => {
                const { newVal } = e.currentTarget.dataset;
                setLoaded(false);
                setYear(newVal);
              }}
            />
            {isAdmin && (
              <DropMenu
                className={style["filter-btn"]}
                ListName="Filter by Approval"
                ListItems={["Approved", "Unapproved"]}
                value={approval}
                onClick={(e) => {
                  const { newVal } = e.currentTarget.dataset;
                  setLoaded(false);
                  setApproval(newVal);
                }}
              />
            )}
          </div>
        </div>
        <div className={style["filter-info"]}>
          {month !== "" && (
            <Button4
              text={months[month - 1]}
              onClick={(e) => {
                setLoaded(false);
                setMonth("");
              }}
            />
          )}
          {year !== "" && (
            <Button4
              text={year}
              onClick={(e) => {
                setLoaded(false);
                setYear("");
              }}
            />
          )}
          {approval !== "" && (
            <Button4
              text={approval}
              onClick={(e) => {
                setLoaded(false);
                setApproval("");
              }}
            />
          )}
        </div>
      </div>
      <div id={style["all-cards"]}>
        {!isLoaded && <Loader />}
        {isLoaded && !filteredItems.length && (
          <div>
            <h1>No Broadcasts Found !</h1>
          </div>
        )}
        {itemsToDisplay.map((element, i) => {
          return (
            <Card
              project={element}
              key={`card-${i}`}
              id={element._id}
              handler={() => handler(i)}
              index={i}
              setIndex={setIndex}
              handleDelete={handleDelete}
              setHandleDelete={setHandleDelete}
            />
          );
        })}
      </div>
    </div>
  );
}
