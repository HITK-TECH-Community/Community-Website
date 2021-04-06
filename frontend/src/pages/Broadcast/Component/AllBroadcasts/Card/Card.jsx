import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Modals } from "../../Carousel/Modal/index.js";
import { Delete, Edit } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { useSelector } from "react-redux";

import style from "./card.module.scss";

function deleteCard(id) {
  const cardElement = document.getElementById(id);
  cardElement.classList.add("gonnaRemove");
  setTimeout(() => cardElement.remove(), 1000);
}
export function Card(props) {
  let dark = props.theme;
  const [flipped, setFlipped] = useState(false);
  const handleClick = () => {
    setFlipped(!flipped);
  };
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const handleOpen = (s, h, i) => {
    setOpen(true);
    setData({ head: h, desc: s, img: i });
  };

  const handleClose = () => {
    setOpen(false);
    setData({});
  };
  const isSuperAdmin = useSelector((state) => state.isSuperAdmin);

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
            <div className={style["card-title"]}>{props.project.head}</div>
            <div className={style["card-content"]}>
              {props.project.desc.substring(0, 400)}...
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
            {isSuperAdmin ? (
              <div className={style["admin-controls"]}>
                <IconButton
                  className={style["icon-button"]}
                  onClick={props.handler}
                >
                  <Edit />
                </IconButton>
                <IconButton
                  className={style["icon-button"]}
                  onClick={() => deleteCard(props.id)}
                >
                  <Delete />
                </IconButton>
              </div>
            ) : null}
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
                  props.project.desc,
                  props.project.title,
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
