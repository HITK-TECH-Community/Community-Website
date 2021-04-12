import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Toggle } from "../util/Toggle/index";
import style from "./navbar.module.scss";

export const Navbar = (props) => {
  const dark = props.theme;
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const closeMobileMenu = () => setIsNavOpen(false);

  return (
    <Fragment>
      <nav className={dark ? style["navbar-div-dark"] : style["navbar-div"]}>
        <NavLink to="/" className={style["navbar-logo"]}>
          <img
            src="./community-logo.png"
            alt="logo"
            width="45px"
            height="45px"
          />
        </NavLink>
        <div
          className={dark ? style["menu-icon-dark"] : style["menu-icon"]}
          onClick={toggleNav}
        >
          <i className={isNavOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul
          className={
            isNavOpen
              ? dark
                ? `${style["nav-menu-dark"]} ${style["active"]}`
                : `${style["nav-menu"]} ${style["active"]}`
              : dark
              ? style["nav-menu-dark"]
              : style["nav-menu"]
          }
        >
          <li className={dark ? style["nav-item-dark"] : style["nav-item"]}>
            <NavLink
              activeClassName={
                dark ? style["active-link-dark"] : style["active-link"]
              }
              to="/"
              className={dark ? style["nav-links-dark"] : style["nav-links"]}
              onClick={closeMobileMenu}
              exact={true}
            >
              Home
            </NavLink>
          </li>
          <li className={dark ? style["nav-item-dark"] : style["nav-item"]}>
            <NavLink
              activeClassName={
                dark ? style["active-link-dark"] : style["active-link"]
              }
              to="/about-us"
              className={dark ? style["nav-links-dark"] : style["nav-links"]}
              onClick={closeMobileMenu}
            >
              About Us
            </NavLink>
          </li>
          <li className={dark ? style["nav-item-dark"] : style["nav-item"]}>
            <NavLink
              activeClassName={
                dark ? style["active-link-dark"] : style["active-link"]
              }
              to="/resources"
              className={dark ? style["nav-links-dark"] : style["nav-links"]}
              onClick={closeMobileMenu}
            >
              Resources
            </NavLink>
          </li>
          <li className={dark ? style["nav-item-dark"] : style["nav-item"]}>
            <NavLink
              activeClassName={
                dark ? style["active-link-dark"] : style["active-link"]
              }
              to="/broadcasts"
              className={dark ? style["nav-links-dark"] : style["nav-links"]}
              onClick={closeMobileMenu}
            >
              Broadcasts
            </NavLink>
          </li>
          <li className={dark ? style["nav-item-dark"] : style["nav-item"]}>
            <NavLink
              activeClassName={
                dark ? style["active-link-dark"] : style["active-link"]
              }
              to="/contact-us"
              className={dark ? style["nav-links-dark"] : style["nav-links"]}
              onClick={closeMobileMenu}
            >
              Contact Us
            </NavLink>
          </li>
          <li className={dark ? style["nav-item-dark"] : style["nav-item"]}>
            <NavLink
              to="/faqs"
              className={dark ? style["nav-links-dark"] : style["nav-links"]}
              onClick={closeMobileMenu}
              activeClassName={
                dark ? style["active-link-dark"] : style["active-link"]
              }
            >
              FAQs
            </NavLink>
          </li>
          <li className={dark ? style["nav-item-dark"] : style["nav-item"]}>
            <Link
              to="/admin"
              className={
                dark
                  ? style["nav-links-mobile-dark"]
                  : style["nav-links-mobile"]
              }
              onClick={closeMobileMenu}
            >
              admin ?
            </Link>
          </li>
          <li className={dark ? style["nav-item-dark"] : style["nav-item"]}>
            <Toggle
              class={style["mobile-toggle"]}
              handleClick={props.handleClick}
              theme={props.theme}
            />
          </li>
        </ul>
        <NavLink
          to="/admin"
          activeClassName={
            dark ? style["button-div-dark"] : style["button-div"]
          }
          className={
            dark ? style["nav-admin-button-dark"] : style["nav-admin-button"]
          }
        >
          admin ?
        </NavLink>

        <Toggle
          class={style["nav-toggle"]}
          handleClick={props.handleClick}
          theme={props.theme}
        />
      </nav>
    </Fragment>
  );
};
