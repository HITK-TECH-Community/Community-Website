import React, { useState, useEffect } from "react";
import style from "./admin.module.scss";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { Profile } from "./Components/Profile";
import { Dashboard } from "./Components/Dashboard";
import { Broadcast } from "./Components/Broadcast";
import { Contact } from "./Components/Contact";
import { ManageTeams } from "./Components/MangeTeams";
import { AddTeamMember } from "./Components/AddTeamMember";
import { About } from "./Components/About";
import { JoinUs } from "./Components/JoinUs";
import { Resource } from "./Components/Resource";
import { Faq } from "./Components/Faq";
import { Setting } from "./Components/Setting";
import { Invite } from "./Components/Setting/Invite";
import { Manage } from "./Components/Setting/Manage";
import { ResetPassword } from "./Components/Setting/ResetPassword/ResetPassword";
import { AddBroadcasts } from "./Components/Broadcast/AddBroadcasts";
import { AddFaq } from "./Components/Faq/AddFaq";
import { logout } from "../../store/actions/auth";
import decode from "jwt-decode";

import { useDispatch } from "react-redux";

export const Admin = (props) => {
  const [tab, setTab] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleNav = () => setIsMenuOpen(!isMenuOpen);
  const closeMobileMenu = () => setIsMenuOpen(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    try {
      const { exp } = decode(token);
      if (Date.now() >= exp * 1000) {
        localStorage.setItem("expired", true);
        logout(dispatch); //Key expired
      }
    } catch (err) {
      logout(dispatch);
    }
    return true;
  }, [dispatch]);

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
          <ul
            className={
              isMenuOpen ? `${style["menu"]} ${style["active"]}` : style["menu"]
            }
          >
            <li onClick={closeMobileMenu}>
              <div
                className={
                  tab === 1 ? style["features-icons"] : style["features-icons1"]
                }
                onClick={() => setTab(1)}
              >
                <DashboardIcon style={{ fontSize: 23.32 }} />
                <div className={style["span"]}>Dashboard</div>
              </div>
            </li>
            <li onClick={closeMobileMenu}>
              <div
                className={
                  tab === 2 ? style["features-icons"] : style["features-icons1"]
                }
                onClick={() => setTab(2)}
              >
                <i
                  className="fas fa-bullhorn fa-fw fa-lg"
                  aria-hidden="true"
                ></i>
                <div className={style["span"]}>Broadcasts</div>
              </div>
            </li>
            <li onClick={closeMobileMenu}>
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
            </li>
            <li onClick={closeMobileMenu}>
              <div
                className={
                  tab === 4 ? style["features-icons"] : style["features-icons1"]
                }
                onClick={() => setTab(4)}
              >
                <i className="fas fa-users fa-fw fa-lg" aria-hidden="true"></i>
                <div className={style["span"]}>About Us</div>
              </div>
            </li>
            <li onClick={closeMobileMenu}>
              <div
                className={
                  tab === 11
                    ? style["features-icons"]
                    : style["features-icons1"]
                }
                onClick={() => setTab(11)}
              >
                <i
                  className="fas fa-handshake fa-fw fa-lg"
                  aria-hidden="true"
                ></i>
                <div className={style["span"]}>Join Us</div>
              </div>
            </li>
            <li onClick={closeMobileMenu}>
              <div
                className={
                  tab === 12
                    ? style["features-icons"]
                    : style["features-icons1"]
                }
                onClick={() => setTab(12)}
              >
                <i className="fas fa-book fa-fw fa-lg" aria-hidden="true"></i>
                <div className={style["span"]}>Resources</div>
              </div>
            </li>
            <li onClick={closeMobileMenu}>
              <div
                className={
                  tab === 5 ? style["features-icons"] : style["features-icons1"]
                }
                onClick={() => setTab(5)}
              >
                <i
                  className="fas fa-question fa-fw fa-lg"
                  aria-hidden="true"
                ></i>
                <div className={style["span"]}>FAQs</div>
              </div>
            </li>
            <li onClick={closeMobileMenu}>
              <div
                className={
                  tab === 6 ? style["features-icons"] : style["features-icons1"]
                }
                onClick={() => setTab(6)}
              >
                <i className="fas fa-cog fa-fw fa-lg" aria-hidden="true"></i>
                <div className={style["span"]}>Settings</div>
              </div>
            </li>
            <li onClick={closeMobileMenu}>
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
            </li>
          </ul>
          <div className={style["menu-icon"]} onClick={toggleNav}>
            <i
              className={isMenuOpen ? "fas fa-angle-up" : "fas fa-angle-down"}
            ></i>
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
            <About setTab={setTab} />
          ) : tab === 11 ? (
            <JoinUs />
          ) : tab === 12 ? (
            <Resource />
          ) : tab === 5 ? (
            <Faq setTab={setTab} />
          ) : tab === 6 ? (
            <Setting setTab={setTab} theme={props.theme} />
          ) : tab === 7 ? (
            <Invite />
          ) : tab === 8 ? (
            <Manage />
          ) : tab === 9 ? (
            <AddBroadcasts />
          ) : tab === 10 ? (
            <AddFaq />
          ) : tab === 13 ? (
            <ManageTeams />
          ) : tab === 14 ? (
            <AddTeamMember />
          ) : tab === 15 ? (
            <ResetPassword />
          ) : null}
        </div>
      </div>
    </div>
  );
};
