import React from "react";
import style from "./broadcast.module.scss";
import { AiFillEdit } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

export function Broadcast(props) {
  return (
    <div className={style["broadcast"]}>
      <h1 style={{ textAlign: "center" }}> Broadcasts </h1>
      <div className={style["cards"]}>
        <div className={style["card-item"]}>
          <div className={style["clickable-card"]}>
            <div className={style["card-title"]}>
              <Link onClick={() => props.setTab(9)} style={{ color: "white" }}>
                ADD BROADCAST
              </Link>
              <AiOutlinePlus className={style["add"]} />
            </div>
            <div className={style["card-content"]}>
              <p style={{ textAlign: "left" }}>To add a new broadcast</p>
              <p
                // onClick={openEditor}
                style={{ color: "red", cursor: "pointer", textAlign: "left" }}
              >
                <Link onClick={() => props.setTab(9)} style={{ color: "red" }}>
                  CLICK HERE
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className={style["card-item"]}>
          <div className={style["clickable-card"]}>
            <div className={style["card-title"]}>
              MANAGE BROADCASTS
              <AiFillEdit className={style["editt"]} />
            </div>
            <div className={style["card-content"]}>
              <Link
                to="/all-broadcasts"
                className={style["main-btn"]}
                type="submit"
              >
                Manage here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
