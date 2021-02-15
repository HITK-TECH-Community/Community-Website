import React from "react";
import style from "./dashboard.module.css";

import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";

const Dashboard = (props) => {
  const data = [
    {
      name: "Broadcasts",
      count: 2,
      icon: <i className="fa fa-bullhorn" aria-hidden="true"></i>,
      tab: 2,
    },
    {
      name: "Contact Us",
      count: 4,
      icon: <PermContactCalendarIcon />,
      tab: 3,
    },
    {
      name: "About Us",
      count: 5,
      icon: <i className="fa fa-users" aria-hidden="true"></i>,
      tab: 4,
    },
    {
      name: "FAQ",
      count: 2,
      icon: <LiveHelpIcon />,
      tab: 5,
    },
  ];

  const dashboard = (
    <React.Fragment>
      <h1 className={style.head}>Dashboard</h1>
      <div className={style.dash_board}>
        {data.map((d) => (
          <div
            className={style.crd}
            key={d.name}
            onClick={() => props.setTab(d.tab)}
          >
            <div className={style.head1}>
              {d.icon}
              <h4> {d.name} </h4>
            </div>
            <div> Get all your {d.name} related details here! </div>
            <div className={style.count}> {d.count} </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );

  return dashboard;
};
export default Dashboard;
