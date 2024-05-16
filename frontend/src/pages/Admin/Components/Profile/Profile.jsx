import React, { useEffect, useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import style from "./profile.module.scss";

export function Profile(props) {
  const [name, setName] = useState("Super Admin Name");
  const [email, setEmail] = useState("xyz@gmail.com");
  const [phone, setPhone] = useState("+91-123456789");
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    let Name = props.adminData.firstName + " " + props.adminData.lastName;
    setName(Name);
    setEmail(props.adminData.email);
    setPhone(props.adminData.contact);
  }, props);

  return (
    <div className={style["profile-container"]}>
      <h1>My Profile</h1>
      <div className={style["profile-card"]}>
        <div className={style["icon-container"]} onClick={() => setEdit(!edit)}>
          {edit ? (
            <CloseIcon className={style["icon"]} />
          ) : (
            <EditIcon className={style["icon"]} />
          )}
        </div>
        <div className={style["image-container"]}>
          <img
            src="./images/admin.png"
            className={style["img-admin"]}
            alt="admin_img"
          />
        </div>
        <div className={style["card-info"]}>
          {edit ? (
            <>
              <div className={style["form"]}>
                <div className={style["input-wrapper"]}>
                  <input type="text" placeholder="Name" disabled />
                </div>
                <div className={style["input-wrapper"]}>
                  <input type="text" placeholder="Email" disabled />
                </div>
                <div className={style["input-wrapper"]}>
                  <input type="text" placeholder="Contact number" disabled />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={style["name"]}>{name}</div>
              <div className={style["line"]}></div>
              <div className={style["contact"]}>
                <div className={style["contact-details"]}>{email}</div>
                <div className={style["contact-details"]}>{phone}</div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
