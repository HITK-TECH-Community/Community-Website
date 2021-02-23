import React from "react";
import style from "./faq.module.scss";
import { AiFillEdit } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

export function Faq(props) {
  return (
    <div className={style["faq"]}>
      <h1 style={{ textAlign: "center" }}> FAQS </h1>
      <div className={style["cards"]}>
        <div className={style["card-item"]}>
          <div className={style["clickable-card"]}>
            <div className={style["card-title"]}>
              <Link onClick={() => props.setTab(10)} style={{ color: "white" }}>
                ADD FAQ
              </Link>
              <AiOutlinePlus className={style["add"]} />
            </div>
            <div className={style["card-content"]}>
              <p style={{ textAlign: "left" }}>To add a new faq</p>
              <p style={{ color: "red", cursor: "pointer", textAlign: "left" }}>
                <Link onClick={() => props.setTab(10)} style={{ color: "red" }}>
                  CLICK HERE
                </Link>
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
              <button className={style["main-btn"]} type="submit">
                Manage here
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
