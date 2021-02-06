import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const closeMobileMenu = () => setIsNavOpen(false);
  const completedClass = isNavOpen ? styles.active : "";
  const i = isNavOpen ? styles.fatimes : styles.fabars;
  const icon = isNavOpen ? "fa-times" : "fa-bars";
  return (
    <Fragment>
      <nav className={styles.navbardiv}>
        <NavLink to="/" className={styles.navbarlogo}>
          <img
            src="./community-logo.png"
            alt="logo"
            width="45px"
            height="45px"
          />
        </NavLink>
        <div className={styles.menuicon} onClick={toggleNav}>
          <i className={`${i} fas ${icon}`}></i>
        </div>
        <ul className={`${styles.navmenu} ${completedClass}`}>
          <li className={styles.navitem}>
            <NavLink
              activeClassName={styles.activelink}
              to="/"
              className={styles.navlinks}
              onClick={closeMobileMenu}
              exact
            >
              Home
            </NavLink>
          </li>
          <li className={styles.navitem}>
            <NavLink
              activeClassName={styles.activelink}
              to="/about-us"
              className={styles.navlinks}
              onClick={closeMobileMenu}
              exact
            >
              About Us
            </NavLink>
          </li>
          <li className={styles.navitem}>
            <NavLink
              activeClassName={styles.activelink}
              to="/resources"
              className={styles.navlinks}
              onClick={closeMobileMenu}
              exact
            >
              Resources
            </NavLink>
          </li>
          <li className={styles.navitem}>
            <NavLink
              activeClassName={styles.activelink}
              to="/broadcasts"
              className={styles.navlinks}
              onClick={closeMobileMenu}
              exact
            >
              Broadcasts
            </NavLink>
          </li>
          <li className={styles.navitem}>
            <NavLink
              activeClassName={styles.activelink}
              to="/contact-us"
              className={styles.navlinks}
              onClick={closeMobileMenu}
              exact
            >
              Contact Us
            </NavLink>
          </li>
          <li className={styles.navitem}>
            <NavLink
              to="/faqs"
              className={styles.navlinks}
              onClick={closeMobileMenu}
              activeClassName={styles.activelink}
              exact
            >
              FAQs
            </NavLink>
          </li>
          {/* <li className="nav-item ">
            <NavLink
              to="/admin-dashboard"
              className={styles.navlinks}
              onClick={closeMobileMenu}
              activeClassName={styles.activelink}
              exact
            >
              DashBoard
            </NavLink>
          </li> */}
          <li className={styles.navitem}>
            <Link
              to="/admin"
              className={styles.navlinksmobile}
              onClick={closeMobileMenu}
              exact
            >
              admin ?
            </Link>
          </li>
        </ul>
        <NavLink
          to="/admin"
          activeClassName={styles.buttondiv}
          className={styles.navadminbutton}
          exact
        >
          admin ?
        </NavLink>
      </nav>
    </Fragment>
  );
};

export default Navbar;
