import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Modals from "../../Carousel/Modal/Modals";
import { Delete, Edit } from "@material-ui/icons";
import { IconButton, makeStyles } from "@material-ui/core";

import "./card.css";

const useStyles = makeStyles({
  iconButton: {
    background: "rgba(255,255,255,0.05)",
    margin: 5,
    "&:hover": {
      backgroundColor: "rgba(255,255,255, 0.1)",
    },
    "&:focus": {
      outline: "none",
    },
    "& > span": {
      color: "white",
    },
  },
});
function deleteCard(id) {
  const cardElement = document.getElementById(id);
  cardElement.classList.add("gonnaRemove");
  setTimeout(() => cardElement.remove(), 1000);
}
function Card(props) {
  const styles = useStyles();
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
  return (
    <div id={props.id} className={`cardContainer`}>
      <Modals open={open} handleClose={handleClose} data={data} />
      <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
        <div className="card-item" onMouseEnter={handleClick}>
          <div className="clickable-card">
            <div className="card-title">{props.project.head}</div>
            <div className="card-content">
              {props.project.desc.substring(0, 400)}...
            </div>
          </div>
        </div>

        <div className="card-item" onMouseLeave={handleClick}>
          <div className="clickable-card">
            {props.admin ? (
              <div className="admin-controls">
                <IconButton
                  className={styles.iconButton}
                  onClick={props.handler}
                >
                  <Edit />
                </IconButton>
                <IconButton
                  className={styles.iconButton}
                  onClick={() => deleteCard(props.id)}
                >
                  <Delete />
                </IconButton>
              </div>
            ) : null}
            <div
              className="card-title"
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
              className="but"
            >
              View Details
            </button>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default Card;
