import React, { useState } from "react";
import "./admin.css";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Profile from "./profile/profile";
import Dashboard from "./dashboard/dashboard";
import Broadcast from "./broadcast/broadcast";
import Contact from "./contact/contact";
import About from "./about/about";
import FAQ from "./faq/faq";
import Setting from "./setting/setting";

const Admin = () => {
  const [tab, setTab] = useState(1);
  return (
    <div style={{ minHeight: "100vh" }}>
      <div className="dashing">
        <div className="left">
          <div className="welcome-section" onClick={() => setTab(0)}>
            <img
              src="./images/admin.png"
              className="img_admin"
              alt="admin_img"
            />
            <h1 className="h1">Good Morning Admin</h1>
          </div>
          <div
            className={tab === 1 ? "features-icons" : "features-icons1"}
            onClick={() => setTab(1)}
          >
            <DashboardIcon />
            <div className="span">Dashboard</div>
          </div>
          <div
            className={tab === 2 ? "features-icons" : "features-icons1"}
            onClick={() => setTab(2)}
          >
            <i class="fa fa-bullhorn" aria-hidden="true"></i>
            <div className="span">Broadcasts</div>
          </div>
          <div
            className={tab === 3 ? "features-icons" : "features-icons1"}
            onClick={() => setTab(3)}
          >
            <i class="fa fa-user-circle" aria-hidden="true"></i>
            <div className="span">Contact Us</div>
          </div>
          <div
            className={tab === 4 ? "features-icons" : "features-icons1"}
            onClick={() => setTab(4)}
          >
            <i class="fa fa-users" aria-hidden="true"></i>
            <div className="span">About Us</div>
          </div>
          <div
            className={tab === 5 ? "features-icons" : "features-icons1"}
            onClick={() => setTab(5)}
          >
            <i class="fa fa-question" aria-hidden="true"></i>
            <div className="span">Manage FAQs</div>
          </div>
          <div
            className={tab === 6 ? "features-icons" : "features-icons1"}
            onClick={() => setTab(6)}
          >
            <i class="fa fa-cog" aria-hidden="true"></i>
            <div className="span">Settings</div>
          </div>
        </div>
        <div className="right">
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
            <Setting />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Admin;
