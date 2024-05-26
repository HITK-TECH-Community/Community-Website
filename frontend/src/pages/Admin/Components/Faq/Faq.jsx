import React from "react";
import style from "./faq.module.scss";
import { AiFillEdit } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
export function Faq(props) {
  return (
    <div className={style["faq"]}>
      <h1 style={{ textAlign: "center" }}> FAQs and Q&As </h1>
      <div className={style["cards"]}>
        <div className={style["card-item"]}>
          <div className={style["clickable-card"]}>
            <div className={style["card-title"]}>
              <p onClick={() => props.setTab(10)} style={{ color: "white" }}>
                ADD FAQ
              </p>
              <AiOutlinePlus className={style["add"]} />
            </div>
            <div className={style["card-content"]}>
              <p style={{ textAlign: "left" }}>To add a new faq</p>
              <p style={{ color: "red", cursor: "pointer", textAlign: "left" }}>
                <span onClick={() => props.setTab(10)} style={{ color: "red" }}>
                  CLICK HERE
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className={style["card-item"]}>
          <div className={style["clickable-card"]}>
            <div className={style["card-title"]}>
              MANAGE FAQ
              <AiFillEdit className={style["editt"]} />
            </div>
            <div className={style["card-content"]}>
              <p onClick={() => props.setTab(17)} className={style["main-btn"]}>
                Manage here
              </p>
            </div>
          </div>
        </div>
        <div className={style["card-item"]}>
          <div className={style["clickable-card"]}>
            <div className={style["card-title"]}>
              MANAGE Q&A
              <AiFillEdit className={style["editt"]} />
            </div>
            <div className={style["card-content"]}>
              <div
                onClick={() => props.setTab(18)}
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
