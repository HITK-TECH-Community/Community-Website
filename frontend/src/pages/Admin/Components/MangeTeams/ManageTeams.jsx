import React from "react";
import style from "./manage-teams.module.scss";
import cards from "../../../../test_data/teams"

export function ManageTeams() {
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
