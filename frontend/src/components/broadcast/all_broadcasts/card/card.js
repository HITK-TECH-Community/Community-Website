import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Modals from "../../Carousel/Modal/Modals";
import EditIcon from "@material-ui/icons/Edit";
import "./card.css";
function Card(props) {
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
    <>
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
              <div className="editor">
                <EditIcon
                  style={{ cursor: "pointer" }}
                  onClick={props.handler}
                />
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
    </>
  );
}

export default Card;
