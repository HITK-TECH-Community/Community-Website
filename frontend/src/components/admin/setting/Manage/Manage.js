import React, { useState } from "react";
import style from "./Manage.module.css";
import DeleteIcon from "@material-ui/icons/Delete";

export default function Manage() {
  const [data, setData] = useState([
    "Abhishek",
    "Aman",
    "Dikshit",
    "Adarsh",
    "Utkarsh",
    "Vatan",
  ]);
  const handler = (i) => {
    let a = [...data];
    a.splice(i, 1);
    setData(a);
  };
  console.log(data);
  return (
    <div>
      <h1 className={style.h1}>Manage Admins</h1>
      <div className={style.container}>
        {data.map((item, i) => (
          <div className={style.card} key={item + i}>
            <img
              src="https://cdn.mos.cms.futurecdn.net/3kZ3hc2YMB6LXiPohtyfKa.jpg"
              alt="pic"
              className={style.img}
            />
            <h3 className={style.h3}>{item}</h3>
            <div>
              <i class="fab fa-linkedin fa-2x card_footer in"></i>
              <i class="fab fa-twitter-square fa-2x card_footer"></i>
              <i class="fab fa-github-square fa-2x card_footer"></i>
            </div>
            <div className={style.icon} onClick={() => handler(i)}>
              <DeleteIcon />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
