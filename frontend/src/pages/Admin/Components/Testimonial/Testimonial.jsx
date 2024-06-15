import React from "react";
import style from "./testimonial.module.scss";
import { AiFillEdit } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

export function Testimonial(props) {
  return (
    <div className={style["broadcast"]}>
      <h1 style={{ textAlign: "center" }}> Testimonial </h1>
      <div className={style["cards"]}>
        <div className={style["card-item"]}>
          <div className={style["clickable-card"]}>
            <div className={style["card-title"]}>
              <div onClick={() => props.setTab(21)} style={{ color: "white" }}>
                CREATE TESTIMONIAL
              </div>
              <AiOutlinePlus className={style["add"]} />
            </div>
            <div className={style["card-content"]}>
              <p style={{ textAlign: "left" }}>To Create a new Testimonial</p>
              <p
                // onClick={openEditor}
                style={{ color: "red", cursor: "pointer", textAlign: "left" }}
              >
                <div onClick={() => props.setTab(21)} style={{ color: "red" }}>
                  CLICK HERE
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className={style["card-item"]}>
          <div className={style["clickable-card"]}>
            <div className={style["card-title"]}>
              MANAGE TESTIMONIAL
              <AiFillEdit className={style["editt"]} />
            </div>
            <div className={style["card-content"]}>
              <div
                onClick={() => props.setTab(22)}
                className={style["main-btn"]}
              >
                Manage here
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
