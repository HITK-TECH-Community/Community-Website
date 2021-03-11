import React from "react";
import style from "./manage-teams.module.scss";

export function ManageTeams(props) {
  const cards = [
    {
      name: "Team 1",
      icon: <i className='fas fa-users fa-lg'></i>,
      description:"Elite",
    },
    {
      name: "Team 2",
      icon: <i class="fas fa-users fa-lg"></i>,
      description:"Semi Elite",
    },
    {
      name: "Team 3",
      icon: <i class="fas fa-users fa-lg"></i>,
      description:"Experts",
    },
    {
      name: "Team 4",
      icon: <i class="fas fa-users fa-lg"></i>,
      description:"Operational",
    },
  ];
  return (
    <div>
      <h1 className={style["head"]}>Teams</h1>
      <div className={style["manage-teams"]}>
        {cards.map((d) => (
          <div
            className={style["crd"]}
            key={d.name}
          >
            <div className={style["head1"]}>
              {d.icon}
              <h4> {d.name} </h4>
            </div>
            <div className={style["content"]}>
              {d.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
