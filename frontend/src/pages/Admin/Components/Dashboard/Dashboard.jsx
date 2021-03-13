import React, { useEffect } from "react";
import style from "./dashboard.module.scss";
import { useSelector } from "react-redux";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import { SimpleToast } from "../../../../components/util/Toast";

export const Dashboard = (props) => {
  const [openLoginSuccess, setOpenLoginSuccessToast] = React.useState(false);
  const handleCloseToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenLoginSuccessToast(false);
  };

  const isSuperAdmin = useSelector(state => state.isSuperAdmin);

  useEffect(() => {
    const login = window.location.search.substring(1);
    if (isSuperAdmin && login) {
      setOpenLoginSuccessToast(true);
      window.history.replaceState(null, null, window.location.pathname);
    }
  }, [isSuperAdmin]);

  const data = [
    {
      name: "Broadcasts",
      icon: <i className="fa fa-bullhorn fa-lg" aria-hidden="true"></i>,
      tab: 2,
    },
    {
      name: "Contact Us",
      icon: <PermContactCalendarIcon style={{ fontSize: 23 }} />,
      tab: 3,
    },
    {
      name: "About Us",
      icon: <i className="fa fa-users fa-lg" aria-hidden="true"></i>,
      tab: 4,
    },
    {
      name: "Join Us",
      icon: <i className="fa fa-handshake fa-lg" aria-hidden="true"></i>,
      tab: 11,
    },
    {
      name: "Resources",
      icon: <i className="fa fa-book fa-lg" aria-hidden="true"></i>,
      tab: 12,
    },
    {
      name: "FAQ",
      icon: <LiveHelpIcon style={{ fontSize: 23 }} />,
      tab: 5,
    },
  ];

  return (
    <React.Fragment>
      <h1 className={style["head"]}>Dashboard</h1>
      <div className={style["dash-board"]}>
        {data.map(d => (
          <div className={style["crd"]} key={d.name} onClick={() => props.setTab(d.tab)}>
            <div className={style["head1"]}>
              {d.icon}
              <h4> {d.name} </h4>
            </div>
            <div className={style["content"]}>Get all your {d.name} related details here!</div>
          </div>
        ))}
      </div>
      <SimpleToast
        open={openLoginSuccess}
        message="Successfully Logged In!"
        handleCloseToast={handleCloseToast}
        severity="success"
      />
    </React.Fragment>
  )
}
