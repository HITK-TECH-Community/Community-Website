import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Modals from "../../Carousel/Modal/Modals";
import "./card.css";
function Card({ project }) {
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
            <div className="card-title">{project[0]}</div>
            <div className="card-content">
              {project[1].substring(0, 400)}...
            </div>
          </div>
        </div>

        <div className="card-item" onMouseLeave={handleClick}>
          <div className="clickable-card">
            <div
              className="card-title"
              style={{ marginTop: "60px", marginBottom: "50px" }}
            >
              {project[0]}
            </div>
            <button
              onClick={() => handleOpen(project[1], project[0], project[2])}
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
