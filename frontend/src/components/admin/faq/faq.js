import React from "react";
import styles from "./faq.module.css";
import { AiFillEdit } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function faq() {
  return (
    <div className={styles.faq}>
      <h1 style={{ textAlign: "center" }}> FAQS </h1>
      <div className={styles.cards}>
        <div className={styles.carditem}>
          <div className={styles.clickablecard}>
            <div className={styles.cardtitle}>
              <Link to="/add_faq" style={{ color: "white" }}>
                ADD FAQ
              </Link>
              <AiOutlinePlus className={styles.add} />
            </div>
            <div className={styles.cardcontent}>
              <p style={{ textAlign: "left" }}>To add a new faq</p>
              <p
                style={{ color: "red", cursor: "pointer", textAlign: "left" }}
              >
                <Link to="/add_faq" style={{ color: "red" }}>
                  CLICK HERE
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.carditem}>
          <div className={styles.clickablecard}>
            <div className={styles.cardtitle}>
              MANAGE FAQ
              <AiFillEdit className={styles.editt} />
            </div>
            <div className={styles.cardcontent}>
              <button className={styles.mainbtn} type="submit">
                Manage here
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
