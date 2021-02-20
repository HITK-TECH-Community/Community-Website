import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "./navbar.module.scss";

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const closeMobileMenu = () => setIsNavOpen(false);

  return (
    <Fragment>
      <nav className={style["navbar-div"]}>
        <NavLink to="/" className={style["navbar-logo"]}>
          <img
            src="./community-logo.png"
            alt="logo"
            width="45px"
            height="45px"
          />
        </NavLink>
        <div className={style["menu-icon"]} onClick={toggleNav}>
          <i className={isNavOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={style[isNavOpen ? "nav-menu active" : "nav-menu"]}>
          <li className={style["nav-item"]}>
            <NavLink
              activeClassName={style["active-link"]}
              to="/"
              className={style["nav-links"]}
              onClick={closeMobileMenu}
              exact
            >
              Home
            </NavLink>
          </li>
          <li className={style["nav-item"]}>
            <NavLink
              activeClassName={style["active-link"]}
              to="/about-us"
              className={style["nav-links"]}
              onClick={closeMobileMenu}
              exact
            >
              About Us
            </NavLink>
          </li>
          <li className={style["nav-item"]}>
            <NavLink
              activeClassName={style["active-link"]}
              to="/resources"
              className={style["nav-links"]}
              onClick={closeMobileMenu}
              exact
            >
              Resources
            </NavLink>
          </li>
          <li className={style["nav-item"]}>
            <NavLink
              activeClassName={style["active-link"]}
              to="/broadcasts"
              className={style["nav-links"]}
              onClick={closeMobileMenu}
              exact
            >
              Broadcasts
            </NavLink>
          </li>
          <li className={style["nav-item"]}>
            <NavLink
              activeClassName={style["active-link"]}
              to="/contact-us"
              className={style["nav-links"]}
              onClick={closeMobileMenu}
              exact
            >
              Contact Us
            </NavLink>
          </li>
          <li className={style["nav-item"]}>
            <NavLink
              to="/faqs"
              className={style["nav-links"]}
              onClick={closeMobileMenu}
              activeClassName={style["active-link"]}
              exact
            >
              FAQs
            </NavLink>
          </li>
          {/* <li className="nav-item ">
            <NavLink
              to="/admin-dashboard"
              className="nav-links"
              onClick={closeMobileMenu}
              activeClassName="active-link"
              exact
            >
              DashBoard
            </NavLink>
          </li> */}
          <li className={style["nav-item"]}>
            <Link
              to="/admin"
              className={style["nav-links-mobile"]}
              onClick={closeMobileMenu}
              exact
            >
              admin ?
            </Link>
          </li>
        </ul>
        <NavLink
          to="/admin"
          activeClassName={style["button-div"]}
          className={style["nav-admin-button"]}
          exact
        >
          admin ?
        </NavLink>
      </nav>
    </Fragment>
  );
};
