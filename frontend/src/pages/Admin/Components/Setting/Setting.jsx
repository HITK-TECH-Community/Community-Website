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
            <div className={style["card-content"]}>
              <div className={style["head1"]}>
              <span><i className="fas fa-user fa-fw fa-lg" aria-hidden="true"></i></span>
              <h4> My Profile </h4>
              </div>
              <div className={style["content"]}>
                Want to manage your profile? Visit here!
              </div>
            </div>
          </div>
          <div
            className={
              dark
                ? `${style["card-item-dark"]} ${style["card"]}`
                : `${style["card-item-light"]} ${style["card"]}`
            }
            onClick={() => props.setTab(7)}
          >
            <div className={style["card-content"]}>
              <div className={style["head1"]}>
              <span><i className="fas fa-user-plus fa-fw fa-lg" aria-hidden="true"></i></span>
              <h4> Invite Admin </h4>
              </div>
              <div className={style["content"]}>
                Want to invite a new admin? Visit here!
              </div>
            </div>
          </div>
          <div
            className={
              dark
                ? `${style["card-item-dark"]} ${style["card"]}`
                : `${style["card-item-light"]} ${style["card"]}`
            }
            onClick={() => props.setTab(8)}
          >
            <div className={style["card-content"]}>
              <div className={style["head1"]}>
              <span><i className="fas fa-user fa-fw fa-lg" aria-hidden="true"></i></span>
              <h4> Admins </h4>
              </div>
              <div className={style["content"]}>
                Want to manage the admins? Visit here!
              </div>
            </div>
          </div>
          <div
            className={
              dark
                ? `${style["card-item-dark"]} ${style["card"]}`
                : `${style["card-item-light"]} ${style["card"]}`
            }
            onClick={() => props.setTab(15)}
          >
            <div className={style["card-content"]}>
              <div className={style["head1"]}>
              <span><i className="fas fa-key fa-fw fa-lg" aria-hidden="true"></i></span>
              <h4> Password </h4>
              </div>
              <div className={style["content"]}>
                Want to reset your password? Visit here!
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
