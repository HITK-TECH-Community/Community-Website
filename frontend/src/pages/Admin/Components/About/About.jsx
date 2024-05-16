import React from "react";
import style from "./about-us.module.scss";
import { AiFillEdit } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

export function About(props) {
  return (
    <div className={style["about"]}>
      <h1 style={{ textAlign: "center" }}> About Us </h1>
      <div className={style["cards"]}>
        <div className={style["card-item"]}>
          <div className={style["clickable-card"]}>
            <div className={style["card-title"]}>
              <div onClick={() => props.setTab(14)} style={{ color: "white" }}>
                ADD TEAM MEMBER
              </div>
              <AiOutlinePlus className={style["add"]} />
            </div>
            <div className={style["card-content"]}>
              <p style={{ textAlign: "left" }}>To add a new team member</p>
              <p
                style={{ color: "red", cursor: "pointer", textAlign: "left" }}
              >
                <div onClick={() => props.setTab(14)} style={{ color: "red" }}>
                  CLICK HERE
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className={style["card-item"]}>
          <div className={style["clickable-card"]}>
            <div className={style["card-title"]}>
              MANAGE TEAMS
              <AiFillEdit className={style["editt"]} />
            </div>
            <div className={style["card-content"]}>
              <button
                className={style["main-btn"]}
                onClick={() => props.setTab(13)}
              >
                Manage here
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
