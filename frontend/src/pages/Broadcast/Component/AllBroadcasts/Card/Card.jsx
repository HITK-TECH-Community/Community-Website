import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Modals } from "../../Carousel/Modal/index.js";
import { Delete, Edit } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { useSelector } from "react-redux";
import { END_POINT } from "../../../../../config/api";
import { SimpleToast } from "../../../../../components/util/Toast";
import style from "./card.module.scss";

export function Card(props) {
  let dark = props.theme;
  const [flipped, setFlipped] = useState(false);
  const [openDeleteSuccess, setOpenDeleteSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});

  const handleClick = () => {
    setFlipped(!flipped);
  };

  const handleOpen = (s, h, i) => {
    setOpen(true);
    setData({ head: h, desc: s, img: i });
  };

  const handleClose = () => {
    setOpen(false);
    setData({});
  };

  const handleCloseDeleteToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenDeleteSuccess(false);
  };

  function deleteCard(id) {
    var api = `${END_POINT}/broadcast/${id}`;
    const token = localStorage.getItem("token");
    return fetch(api, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        setSuccessMessage("Broadcast deleted successfully");
        setOpenDeleteSuccess(true);
        props.setHandleDelete(props.handleDelete + 1);
      })
      .catch((err) => console.log(err));
  }

  const isSuperAdmin = useSelector((state) => state.isSuperAdmin);
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
            <div className={style["card-content"]}>
              {props.project.content.substring(0, 400)}...
            </div>
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
                  props.project.content,
                  props.project.title,
                  props.project.imageUrl[0]
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
      {openDeleteSuccess && (
        <SimpleToast
          open={openDeleteSuccess}
          message={successMessage}
          handleCloseToast={handleCloseDeleteToast}
          severity="success"
        />
      )}
    </div>
  );
}
