import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Modals } from "../../Carousel/Modal/index.js";
import style from "./card.module.scss";

export function Card(props) {
  let dark = props.theme;
  const [flipped, setFlipped] = useState(false);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});

  const handleClick = () => {
    setFlipped(!flipped);
  };

  const handleOpen = (s, h, i, l) => {
    setOpen(true);
    setData({ head: h, desc: s, img: i, link: l });
  };

  const handleClose = () => {
    setOpen(false);
    setData({});
  };

  const date = new Date(props.project.createdAt.slice(0, 10));
  var months = [
    "January",
    "February",
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

  return (
    <div id={props.id} className={style["card-container"]}>
      <Modals theme={dark} open={open} handleClose={handleClose} data={data} />
      <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
        <div
          className={
            dark
              ? `${style["card-item-dark"]} ${style["card-item"]}`
              : `${style["card-item-light"]} ${style["card-item"]}`
          }
          onClick={handleClick}
        >
          <div className={style["clickable-card"]}>
            <div className={style["card-title"]}>{props.project.title}</div>
            <div className={style["card-content"]} dangerouslySetInnerHTML={{__html: props.project.content}} />
            <div className={style["card-date"]}>
              {months[date.getMonth()]},{date.getFullYear()}
            </div>
          </div>
        </div>

        <div
          className={
            dark
              ? `${style["card-item-dark"]} ${style["card-item"]}`
              : `${style["card-item-light"]} ${style["card-item"]}`
          }
          onClick={handleClick}
        >
          <div className={style["clickable-card"]}>
            <div
              className={
                dark
                  ? `${style["card-title-dark"]} ${style["card-title"]}`
                  : `${style["card-title-light"]} ${style["card-title"]}`
              }
              style={{ marginTop: "60px", marginBottom: "50px" }}
            >
              {props.project.title}
            </div>
            <button
              onClick={() =>
                handleOpen(
                  props.project.content,
                  props.project.title,
                  props.project.imageUrl[0],
                  props.project.link
                )
              }
              className={
                dark
                  ? `${style["but-dark"]} ${style["but"]}`
                  : `${style["but-light"]} ${style["but"]}`
              }
            >
              View Details
            </button>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
}
