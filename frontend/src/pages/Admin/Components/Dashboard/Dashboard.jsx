import React from "react";
import style from "./dashboard.module.scss";

import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";

export const Dashboard = (props) => {
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
      name: "FAQ",
      icon: <LiveHelpIcon style={{ fontSize: 23 }} />,
      tab: 5,
    },
  ];

  const dashboard = (
    <React.Fragment>
      <h1 className={style["head"]}>Dashboard</h1>
      <div className={style["dash-board"]}>
        {data.map((d) => (
          <div
            className={style["crd"]}
            key={d.name}
            onClick={() => props.setTab(d.tab)}
          >
            <div className={style["head1"]}>
              {d.icon}
              <h4> {d.name} </h4>
            </div>
            <div className={style["content"]}>
              Get all your {d.name} related details here!
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );

  return dashboard;
};
