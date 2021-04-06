import React from "react";
import style from "./get-involved.module.scss";

export const GetInvolved = (props) => {
  const dark = props.theme;
  const arrayCards = [
    [
      "Report Issues",
      "If you came across something that isn't woring properly on this website, feel free to open up an issue for the same",
    ],
    [
      "Code Fixes",
      "If you find any bug/inconsistency in our codebase, feel free to open up an issue for the same",
    ],
    [
      "Improve Documentation",
      "If you want us to improve our documentation, feel free to open up an issue for the same",
    ],
    [
      "New Feature",
      "If you think we are missing any feature, or having nay feature can make your the website better. Let us know by opening up an issue for the same",
    ],
    [
      "Contribute",
      "If you can help up in solving the openend issue, feel free to claim any openend issue and come up with a PR",
    ],
  ];
  return (
    <main id={dark ? `${style["main-dark"]}` : style["main"]}>
      <div id={style["hero"]}>
        <div id={style["heading"]}>
          <div id={dark ? `${style["title-dark"]}` : style["title"]}>
            Get Involved!
          </div>
        </div>
      </div>
      <div id={style["all-cards"]}>
        {arrayCards.map((element, i) => {
          return (
            <div
              className={
                dark
                  ? `${style["card-item-dark"]}`
                  : `${style["card-item"]} ${style["card-item2"]} key={${i}}`
              }
            >
              <a
                href="https://github.com/HITK-TECH-Community/Community-Website"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className={
                    dark
                      ? `${style["clickable-card-dark"]}`
                      : style["clickable-card"]
                  }
                >
                  <div
                    className={
                      dark ? `${style["card-title-dark"]}` : style["card-title"]
                    }
                  >
                    {element[0]}
                  </div>
                  <div className={style["card-content"]}>{element[1]}</div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </main>
  );
};
