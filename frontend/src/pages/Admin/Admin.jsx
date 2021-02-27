import React, { useState } from "react";
import style from "./admin.module.scss";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { Profile } from "./Components/Profile";
import { Dashboard } from "./Components/Dashboard";
import { Broadcast } from "./Components/Broadcast";
import { Contact } from "./Components/Contact";
import { About } from "./Components/About";
import { Faq } from "./Components/Faq";
import { Setting } from "./Components/Setting";
import { Invite } from "./Components/Setting/Invite";
import { Manage } from "./Components/Setting/Manage";
import { AddBroadcasts } from "./Components/Broadcast/AddBroadcasts";
import { AddFaq } from "./Components/Faq/AddFaq";
import { logout } from "../../store/actions/auth";

import { useDispatch } from "react-redux";

export const Admin = () => {
  const [tab, setTab] = useState(1);
  const dispatch = useDispatch();
  return (
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
          <div
            className={style["features-icons1"]}
            onClick={() => logout(dispatch)}
          >
            <i
              className="fas fa-sign-out-alt fa-fw fa-lg"
              aria-hidden="true"
            ></i>
            <div className={style["span"]}>Logout</div>
          </div>
        </div>
        <div className={style["right"]}>
          {tab === 0 ? (
            <Profile />
          ) : tab === 1 ? (
            <Dashboard setTab={setTab} />
          ) : tab === 2 ? (
            <Broadcast setTab={setTab} />
          ) : tab === 3 ? (
            <Contact />
          ) : tab === 4 ? (
            <About />
          ) : tab === 5 ? (
            <Faq setTab={setTab} />
          ) : tab === 6 ? (
            <Setting setTab={setTab} />
          ) : tab === 7 ? (
            <Invite />
          ) : tab === 8 ? (
            <Manage />
          ) : tab === 9 ? (
            <AddBroadcasts />
          ) : tab === 10 ? (
            <AddFaq />
          ) : null}
        </div>
      </div>
    </div>
  );
};
