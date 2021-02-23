import React, { useState, Fragment } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

import style from "./dropdown.module.scss";

export const Dropdown = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <Fragment>
      <ul
        onClick={handleClick}
        className={
          click
            ? `${style["dropdown-menu"]} ${style["clicked"]}`
            : style["dropdown-menu"]
        }
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};
