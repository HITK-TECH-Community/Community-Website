import React, { useState } from "react";
import style from "./admin.module.css";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Profile from "./profile/profile";
import Dashboard from "./dashboard/dashboard";
import Broadcast from "./broadcast/broadcast";
import Contact from "./contact/contact";
import About from "./about/about";
import FAQ from "./faq/faq";
import Setting from "./setting/setting";
import Invite from "./setting/Invite/Invite";
import Manage from "./setting/Manage/Manage";

const Admin = () => {
  const [tab, setTab] = useState(1);
  return (
    <div style={{ minHeight: "100vh" }}>
      <div className={style.dashing}>
        <div className={style.left}>
          <div className={style.welcome_section} onClick={() => setTab(0)}>
            <img
              src="./images/admin.png"
              className={style.img_admin}
              alt="admin_img"
            />
            <h1 className={style.h1}>Good Morning Admin</h1>
          </div>
          <div
            className={tab === 1 ? style.features_icons : style.features_icons1}
            onClick={() => setTab(1)}
          >
            <DashboardIcon />
            <div className={style.span}>Dashboard</div>
          </div>
          <div
            className={tab === 2 ? style.features_icons : style.features_icons1}
            onClick={() => setTab(2)}
          >
            <i class="fa fa-bullhorn" aria-hidden="true"></i>
            <div className={style.span}>Broadcasts</div>
          </div>
          <div
            className={tab === 3 ? style.features_icons : style.features_icons1}
            onClick={() => setTab(3)}
          >
            <i class="fa fa-user-circle" aria-hidden="true"></i>
            <div className={style.span}>Contact Us</div>
          </div>
          <div
            className={tab === 4 ? style.features_icons : style.features_icons1}
            onClick={() => setTab(4)}
          >
            <i class="fa fa-users" aria-hidden="true"></i>
            <div className={style.span}>About Us</div>
          </div>
          <div
            className={tab === 5 ? style.features_icons : style.features_icons1}
            onClick={() => setTab(5)}
          >
            <i class="fa fa-question" aria-hidden="true"></i>
            <div className={style.span}>Manage FAQs</div>
          </div>
          <div
            className={tab === 6 ? style.features_icons : style.features_icons1}
            onClick={() => setTab(6)}
          >
            <i class="fa fa-cog" aria-hidden="true"></i>
            <div className={style.span}>Setting</div>
          </div>
        </div>
        <div className={style.right}>
          {tab === 0 ? (
            <Profile />
          ) : tab === 1 ? (
            <Dashboard setTab={setTab} />
          ) : tab === 2 ? (
            <Broadcast />
          ) : tab === 3 ? (
            <Contact />
          ) : tab === 4 ? (
            <About />
          ) : tab === 5 ? (
            <FAQ />
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
  );
};

export default Admin;
