import React from "react";
import "./dashboard.css";

import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";

const Dashboard = () => {
  const data = [
    {
      name: "Broadcasts",
      count: 2,
      icon: <i class="fa fa-bullhorn" aria-hidden="true"></i>,
    },
    {
      name: "Contact Us",
      count: 4,
      icon: <PermContactCalendarIcon />,
    },
    {
      name: "About Us",
      count: 5,
      icon: <i class="fa fa-users" aria-hidden="true"></i>,
    },
    {
      name: "FAQ",
      count: 2,
      icon: <LiveHelpIcon />,
    },
  ];

  const dashboard = (
    <React.Fragment>
      <h1 className="heads">Dashboard</h1>
      <div className="dash_board">
        {data.map((d) => (
          <div className="crd" key={d.name}>
            <div className="head1">
              {d.icon}
              <h4> {d.name} </h4>
            </div>
            <div> Get all your {d.name} related details here! </div>
            <div className="count"> {d.count} </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );

  return dashboard;
};
export default Dashboard;
