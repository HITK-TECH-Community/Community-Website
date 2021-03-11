import React from "react";
import style from "./about-us.module.scss";

export function About(props) {
  const cards = [
    {
      name: "Manage Teams",
      icon: <i className='fas fa-users-cog fa-lg'></i>,
      description:"You can manage your dynamic teams here.",
      tab: 11,
    },
    {
      name: "Add Team Member",
      icon: <i class="fas fa-user-plus fa-lg"></i>,
      description:"You can add your dynamic team members here.",
      tab: 12,
    },
  ];
  return (
    <div>
      <h1 className={style["head"]}>About Us</h1>
      <div className={style["about-us"]}>
        {cards.map((d) => (
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
              {d.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
