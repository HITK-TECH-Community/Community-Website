import React from "react";
import style from "./resources.module.scss";
import { ResourceSharingForm } from "./components/ResourceSharingForm/index";

export const Resources = (props) => {
  let dark = props.theme;

  return (
    <div
      className={
        dark
          ? `${style["resource-section"]} ${style["resource-section-dark"]}`
          : `${style["resource-section"]} ${style["resource-section-light"]}`
      }
    >
      <div className={`${style["resource-image"]} ${style["child1"]}`}>
        <img src="./images/resource.png" alt="" />
      </div>
      <ResourceSharingForm theme={dark} />
    </div>
  );
};
