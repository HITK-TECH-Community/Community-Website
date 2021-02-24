import React from "react";
import style from "./resources.module.scss";
import { ResourceSharingForm } from "./components/ResourceSharingForm/index";

export const Resources = () => {
  return (
    <div className={style["resource-section"]}>
      <div className={`${style["resource-image"]} ${style["child1"]}`}>
        <img src="./images/resource.png" alt="" />
      </div>
      <ResourceSharingForm />
    </div>
  );
};
