import React, { useEffect, useState } from "react";
import style from "./qanda.module.scss";
import { END_POINT } from "../../../../../config/api";

export function QandA({ setTab, setQId, tab }) {
  const [cards, setCards] = useState([]);
  const getdata = async () => {
    try {
      const url = `${END_POINT}/question/getallquestions`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const res = await response.json();
      setCards(res);
    } catch (error) {
      console.log(error);
      alert("Failed to fetch!");
    }
  };
  useEffect(() => {
    getdata();
  }, [tab]);
  return (
    <div>
      <h1 className={style["head"]}>Question</h1>
      <div className={style["manage-qas"]}>
        {cards?.map((d, index) => (
          <div className={style["crd"]} key={index}>
            <h2 className="head1"> {d.title} </h2>
            <div className={style["content"]}>
              <h3 style={{ fontWeight: "bolder" }}>{d.description}</h3>
            </div>
            <div className={style["content"]}>
              <h5>Status</h5> {`${d.isApproved ? "Approved" : "Not Approved"}`}
            </div>
            <div style={{ display: "flex" }}>
              {d.tags.map((tag) => (
                <p className={style["tags"]}>{tag}</p>
              ))}
            </div>
            <button
              id={`${d._id}`}
              onClick={(e) => {
                setQId(e.currentTarget.id);
                setTab(19);
              }}
              className={style["manage"]}
            >
              Manage Q&A
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
