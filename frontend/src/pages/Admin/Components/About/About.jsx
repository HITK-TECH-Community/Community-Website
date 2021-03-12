import React from "react";
import style from "./about-us.module.scss";
import { AiFillEdit } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

export function About(props) {
  const cards = [
    {
      name: "Manage Teams",
      icon: <i className='fas fa-users-cog fa-lg'></i>,
      description:"You can manage your dynamic teams here.",
      tab: 13,
    },
    {
      name: "Add Team Member",
      icon: <i class="fas fa-user-plus fa-lg"></i>,
      description:"You can add your dynamic team members here.",
      tab: 14,
      btn_txt: "Click Here to " 
    },
  ];
  return (
    <div>
      <h1 className={style["head"]}>About Us</h1>
      <div className={style["about-us"]}>
        <div className={style["crd"]}>
          <div className={style["clickable-card"]}>
            <div className={style["card-title"]}>
              <Link onClick={() => props.setTab(14)} style={{ color: "white" }}>
              Add Team Member
              </Link>
              <AiOutlinePlus className={style["add"]} />
            </div>
            <div className={style["card-content"]}>
              <p style={{ textAlign: "left" }}>To add a new team member</p>
              <p style={{ color: "red", cursor: "pointer", textAlign: "left" }}>
                <Link onClick={() => props.setTab(14)} style={{ color: "red" }}>
                  CLICK HERE
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className={style["crd"]}>
          <div className={style["clickable-card"]}>
            <div className={style["card-title"]}>
              Manage Teams
              <AiFillEdit className={style["editt"]} />
            </div>
            <div className={style["card-content"]}>
              <button className={style["main-btn"]} onClick={()=>props.setTab(13)}>
                Manage here
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
