import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Modals } from "../../../../../Broadcast/Component/Carousel/Modal/index.js";
import { Delete, Edit } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { useSelector } from "react-redux";
import { SimpleToast } from "../../../../../../components/util/Toast";
import style from "./card.module.scss";
import DOMPurify from "dompurify";
import {
  UpdateBoardCast,
  deleteBoardcast,
} from "../../../../../../service/Broadcast.jsx";

export function Card(props) {
  let dark = props.theme;
  const [flipped, setFlipped] = useState(false);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const [toast, setToast] = useState({
    toastStatus: false,
    toastType: "",
    toastMessage: "",
  });
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
    setToast({ ...toast, toastStatus: false });
  };
  async function deleteCard(id) {
    const res = await deleteBoardcast(id, setToast, toast);
    if (res) {
      props.setHandleDelete(props.handleDelete + 1);
    }
  }

  const handleApprove = async () => {
    const { project } = props;
    const data = {
      id: project._id,
      content: project.content,
      link: project.link,
      expiresOn: project.expiresOn,
      imageUrl: project.imageUrl,
      tags: project.tags,
      isApproved: true,
      title: project.title,
      approving: true,
    };
    const res = await UpdateBoardCast(data, setToast, toast);
    if (res) {
      props.setHandleDelete(props.handleDelete + 1);
    }
  };

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

  const sanitizedContent = DOMPurify.sanitize(props.project.content);

  const truncatedContent =
    sanitizedContent.length > 250
      ? sanitizedContent.substring(0, 250) + "..."
      : sanitizedContent;

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
            <div
              className={style["card-content"]}
              dangerouslySetInnerHTML={{ __html: truncatedContent }}
            />
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
                  onClick={() => {
                    props.setIndex(props.index);
                  }}
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

            <div className={style["button-group"]}>
              {!props?.project?.isApproved && (
                <button
                  className={style["button-approve"]}
                  onClick={handleApprove}
                >
                  Approve
                </button>
              )}
              <button
                className={style["button-delete"]}
                onClick={() => deleteCard(props.id)}
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      </ReactCardFlip>
      {toast.toastStatus && (
        <SimpleToast
          open={toast.toastStatus}
          message={toast.toastMessage}
          handleCloseToast={handleCloseDeleteToast}
          severity={toast.toastType}
        />
      )}
    </div>
  );
}
