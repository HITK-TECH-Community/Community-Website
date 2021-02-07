import React, { useState } from "react";
import "./broadcast.css";
import { AiFillEdit } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function Broadcast() {
  // const openEditor = () => {
  //   alert("hello");
  // };
  return (
    <div className="broadcast">
      <h1 style={{ textAlign: "center" }}> Broadcasts </h1>
      <div className="cards">
        <div className="carditem">
          <div className="clickable-card">
            <div className="card-title">
              <Link to="/editor" style={{ color: "white" }}>
                ADD BROADCAST
              </Link>
              <AiOutlinePlus className="add" />
            </div>
            <div className="card-content">
              <p>To add a new broadcast</p>
              <p
                // onClick={openEditor}
                style={{ color: "red", cursor: "pointer" }}
              >
                <Link to="/editor" style={{ color: "red" }}>
                  CLICK HERE
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="carditem">
          <div className="clickable-card">
            <div className="card-title">
              MANAGE BROADCASTS
              <AiFillEdit className="editt" />
            </div>
            <div className="card-content">
              <button className="main-btn" type="submit">
                Manage here
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
