import style from "./card.module.scss";
import { useState } from "react";
import { END_POINT } from "../../../../../config/api";
import axios from "axios";
import { SimpleToast } from "../../../../../components/util/Toast";

export function Card(props) {
  const [isLoaded, setIsLoaded] = useState(true);
  const [openDeleteToast, setDeleteToast] = useState(false);
  const [openDeleteError, setDeleteError] = useState(false);

  const onClickDelete = async (id) => {
    const token = localStorage.getItem("token");
    setIsLoaded(false);
    try {
      const response = await axios.delete(`${END_POINT}/joinUs/deleteJoinUs`, {
        headers: { Authorization: `Bearer ${token}` },
        data: { itemId: id },
      });
      const message = await response.data;
      setIsLoaded(true);
      if (message.message === "Deleted successfully") {
        setDeleteToast(true);
      } else {
        setDeleteError(true);
      }
    } catch (err) {
      setDeleteError(true);
      setIsLoaded(true);
    }
  };

  const handleDeleteToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setDeleteToast(false);
  };

  const handleDeleteError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setDeleteError(false);
  };

  return (
    <div>
      {isLoaded ? (
        <div className={style["card-item"]}>
          <div className={style["card-info"]}>
            <h1>{props.content.name}</h1>
            <h2 className={style["card-detail"]}>{props.content.college}</h2>
            <h3 className={style["card-detail"]}>
              Department : {props.content.department}
            </h3>
            <h3 className={style["card-detail"]}>
              Domain : {props.content.interestedDomain}
            </h3>
            <h3 className={style["card-detail"]}>
              Year : {props.content.year}
            </h3>
            <h3 className={style["card-detail"]}>{props.content.contact}</h3>
            <p>{props.content.description}</p>
            <p>{props.content.email}</p>
            <a
              className={style["card-link"]}
              href={props.content.linkdin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <div className={style["button-group"]}>
              <button
                className={style["button-delete"]}
                onClick={() => onClickDelete(props.content._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <SimpleToast
        open={openDeleteToast}
        message="Resource deleted successfully!"
        handleCloseToast={handleDeleteToast}
        severity="success"
      />
      <SimpleToast
        open={openDeleteError}
        message="Something went wrong. Try again!"
        handleCloseToast={handleDeleteError}
        severity="error"
      />
    </div>
  );
}
