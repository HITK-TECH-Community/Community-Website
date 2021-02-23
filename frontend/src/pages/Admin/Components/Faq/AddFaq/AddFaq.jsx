import React, { useState } from "react";
import styles from "./add-faq.module.scss";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { Profile } from "../../Profile";
import { Dashboard } from "../../Dashboard";
import { Contact } from "../../Contact";
import { About } from "../../About";
import { Setting } from "../../Setting";
import { Invite } from "../../Setting/Invite";
import { Manage } from "../../Setting/Manage";
import style from "../../../admin.module.scss";
import { Broadcast } from "../../Broadcast";
import { Button2 } from "../../../../../components/util/button/button";

export function AddFaq() {
  const [tab, setTab] = useState(5);
  return (
    <div>
      <div style={{ minHeight: "100vh" }}>
        <div className={style["dashing"]}>
          <div className={style["left"]}>
            <div className={style["welcome-section"]} onClick={() => setTab(0)}>
              <img
                src="./images/admin.png"
                className={style["img-admin"]}
                alt="admin_img"
              />
              <h1 className={style["h1"]}>Welcome Admin!</h1>
            </div>
            <div
              className={
                tab === 1 ? style["features-icons"] : style["features-icons1"]
              }
              onClick={() => setTab(1)}
            >
              <DashboardIcon style={{ fontSize: 23.32 }} />
              <div className={style["span"]}>Dashboard</div>
            </div>
            <div
              className={
                tab === 2 ? style["features-icons"] : style["features-icons1"]
              }
              onClick={() => setTab(2)}
            >
              <i className="fas fa-bullhorn fa-fw fa-lg" aria-hidden="true"></i>
              <div className={style["span"]}>Broadcasts</div>
            </div>
            <div
              className={
                tab === 3 ? style["features-icons"] : style["features-icons1"]
              }
              onClick={() => setTab(3)}
            >
              <i
                className="fas fa-user-circle fa-fw fa-lg"
                aria-hidden="true"
              ></i>
              <div className={style["span"]}>Contact Us</div>
            </div>
            <div
              className={
                tab === 4 ? style["features-icons"] : style["features-icons1"]
              }
              onClick={() => setTab(4)}
            >
              <i className="fas fa-users fa-fw fa-lg" aria-hidden="true"></i>
              <div className={style["span"]}>About Us</div>
            </div>
            <div
              className={
                tab === 5 ? style["features-icons"] : style["features-icons1"]
              }
              onClick={() => setTab(5)}
            >
              <i className="fas fa-question fa-fw fa-lg" aria-hidden="true"></i>
              <div className={style["span"]}>Manage FAQs</div>
            </div>
            <div
              className={
                tab === 6 ? style["features-icons"] : style["features-icons1"]
              }
              onClick={() => setTab(6)}
            >
              <i className="fas fa-cog fa-fw fa-lg" aria-hidden="true"></i>
              <div className={style["span"]}>Settings</div>
            </div>
          </div>
          <div className={style["right"]}>
            {tab === 0 ? (
              <Profile />
            ) : tab === 1 ? (
              <Redirect to="/dashboard" />
            ) : tab === 2 ? (
              <Broadcast />
            ) : tab === 3 ? (
              <Contact />
            ) : tab === 4 ? (
              <About />
            ) : tab === 5 ? (
              <div className={styles["faq-section"]}>
                <div className={styles["faq-parent"]}>
                  <div className={styles["faq-child"] + " " + styles["child1"]}>
                    <div className={styles["faq-card"]}>
                      <h1 className={styles["faq-header-text"]}>FAQ</h1>
                      <div className={styles["inside-faq"]}>
                        <div className={styles["faq-input"]}>
                          <input
                            id="txt_name"
                            type="text"
                            required="required"
                            name="question"
                            placeholder="Question"
                          />
                          <i className="fas fa-question-circle"></i>
                        </div>
                        <div className={styles["faq-input"]}>
                          <input
                            id="txt_email"
                            type="text"
                            required="required"
                            name="answer"
                            placeholder="Answer"
                          />
                          <i className="fas fa-comment-dots"></i>
                        </div>
                        <div className={styles["submit-btn"]}>
                          <Button2
                            className={styles["submit-btn-text"]}
                            label="Submit"
                            type="submit"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : tab === 6 ? (
              <Setting setTab={setTab} />
            ) : tab === 7 ? (
              <Invite />
            ) : tab === 8 ? (
              <Manage />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
