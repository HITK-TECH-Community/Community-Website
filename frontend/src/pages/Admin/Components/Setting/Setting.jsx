import React from "react";
import style from "./setting.module.scss";

export function Setting(props) {
  let dark = props.theme;
  return (
    <React.Fragment>
      <h1 className={style["h1"]}>Settings</h1>
      <div className={style["container"]}>
        <div className={style["contain"]}>
          <div
            className={
              dark
                ? `${style["card-item-dark"]} ${style["card"]}`
                : `${style["card-item-light"]} ${style["card"]}`
            }
            onClick={() => props.setTab(0)}
          >
            <i className="fas fa-user fa-fw fa-lg" aria-hidden="true"></i>
            <p className={style["para"]}>My Profile</p>
          </div>
          <div
            className={
              dark
                ? `${style["card-item-dark"]} ${style["card"]}`
                : `${style["card-item-light"]} ${style["card"]}`
            }
            onClick={() => props.setTab(7)}
          >
            <i className="fas fa-user-plus fa-fw fa-lg" aria-hidden="true"></i>
            <p className={style["para"]}>Invite Admin</p>
          </div>
          <div
            className={
              dark
                ? `${style["card-item-dark"]} ${style["card"]}`
                : `${style["card-item-light"]} ${style["card"]}`
            }
            onClick={() => props.setTab(8)}
          >
            <i className="fas fa-users fa-fw fa-lg" aria-hidden="true"></i>
            <p className={style["para"]}>Manage Admins</p>
          </div>
          <div
            className={
              dark
                ? `${style["card-item-dark"]} ${style["card"]}`
                : `${style["card-item-light"]} ${style["card"]}`
            }
            onClick={() => props.setTab(15)}
          >
            <i className="fas fa-key fa-fw fa-lg" aria-hidden="true"></i>
            <p className={style["para"]}>Reset Password</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
