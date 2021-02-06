import React from "react";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <div>
      <footer className={style.footer}>
        <div className={style.footerAddr}>
          <h1 className={style.footerLogo}>HITK Tech Community</h1>
          <address>
            <i className="fas fa-map-marker-alt"></i> 505 Simpson Square, 505
            Simpson Square, 505 Simpson Square
            <br />
          </address>
          <div className={style.newsletter}>
            <h2 className={style.navTitle}>Sign Up for our Newsletter</h2>
            <p>
              Receive updates and news about various Job Opportunities,
              Internships, Webinars and Open Source Events.
            </p>
            <form className="d-flex flex-column flex-md-row align-items-center mt-4">
              <input
                type="text"
                className={`${style.inputFieldFooter} py-2`}
                placeholder="Email Id"
                required
              />
              <button
                type="submit"
                className={`mt-3 mt-md-0 ${style.submitBtnFooter} py-2 px-3`}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <ul className={style.footerNav}>
          <li className={style.navItem}>
            <h2 className={style.navTitle}>Navigation</h2>

            <ul className={style.navUl}>
              <li>
                <a href="/about-us">About</a>
              </li>

              <li>
                <a href="/broadcasts">Broadcasts</a>
              </li>

              <li>
                <a href="/resources">Resources</a>
              </li>

              <li>
                <a href="/contact-us">Contact</a>
              </li>

              <li>
                <a href="/faqs">FAQs</a>
              </li>
            </ul>
          </li>

          <li className={style.navItem}>
            <h2 className={style.navTitle}>Other</h2>

            <ul className={style.navUl}>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>

              <li>
                <a href="/terms">Terms of Use</a>
              </li>

              <li>
                <a href="/get-involved">Get Involved</a>
              </li>
            </ul>
          </li>
          <li>
            <h2 className={style.navTitle}>Social</h2>
            <ul className={style.navUl}>
              <li>Be sure to give us a follow on the below social links</li>
            </ul>
            <div className={`${style.col} col`}>
              <ul className={style.social}>
                <li>
                  <a
                    href="https://www.linkedin.com/company/hitk-tech-community"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={style.outer}>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <div className={style.inner}>
                        <i
                          className={`fab fa-linkedin fa-lg ${style.faLinkedin}`}
                        ></i>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://join.slack.com/t/hitkteckcommunity/shared_invite/zt-jgr1sd87-lhiXHO_x63Kt7h8VBxDaFw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={style.outer}>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <div className={style.inner}>
                        <i
                          className={`fab fa-slack fa-lg ${style.faSlack}`}
                        ></i>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hitktechcommunity@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={style.outer}>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <div className={style.inner}>
                        <i
                          className={`fas fa-envelope fa-lg ${style.faEnvelope}`}
                        ></i>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/HITK-TECH-Community/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={style.outer}>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <div className={style.inner}>
                        <i
                          className={`fab fa-github fa-lg ${style.faGithub}`}
                        ></i>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div className={style.footerDash}>
          <div className={style.footerText}>
            <p>
              Made with{" "}
              <i className="fas fa-heart" style={{ color: "#DB3328" }}></i> by
              HITK Tech Community
            </p>
          </div>
        </div>
      </footer>

      <div className={style.cprtText}>
        <p className={`${style.cprt} py-2`}>
          Copyright © 2020 HITK Tech Community
        </p>
      </div>
    </div>
  );
};

export default Footer;
