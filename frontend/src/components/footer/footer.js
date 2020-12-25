import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer__addr">
        <h1 class="footer__logo">HITK Tech Community</h1>
        <address>
          <i class="fas fa-map-marker-alt"></i> 505 Simpson Square, 505 Simpson Square, 505 Simpson Square
          <br />
        </address>
        <p>Copyright © 2020 HITK Tech Community</p>
      </div>

      <ul class="footer__nav">
        <li class="nav__item">
          <h2 class="nav__title">Navigation</h2>

          <ul class="nav__ul">
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

        <li class="nav__item">
          <h2 class="nav__title">Other</h2>

          <ul class="nav__ul">
            <li>
              <a href="#">Privacy Policy</a>
            </li>

            <li>
              <a href="#">Terms of Use</a>
            </li>

            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </li>
        <li class="nav__item">
          <h2 class="nav__title">Social</h2>
          <ul class="nav__ul">
            <li>Be sure to give us a follow on the below social links</li>
          </ul>
          <a
            href="https://www.linkedin.com/company/hitk-tech-community"
            target="_blank"
          >
            <i className="fab fa-linkedin  fa-2x"></i>
          </a>
          <a href="https://join.slack.com/t/hitkteckcommunity/shared_invite/zt-jgr1sd87-lhiXHO_x63Kt7h8VBxDaFw" target="_blank">
            <i className="fab fa-slack  fa-2x"></i>
          </a>
          {/* FYI - Uncomment it after we have a facebook page
          <a href="https://facebook.com" target="_blank">
            <i className="fab fa-facebook  fa-2x"></i>
          </a> */}
          <a href="mailto:hitktechcommunity@gmail.com" target="_blank">
            <i className="fas fa-envelope  fa-2x"></i>
          </a>
          <a href="https://github.com/HITK-TECH-Community/" target="_blank">
            <i className="fab fa-github  fa-2x"></i>
          </a>
        </li>
      </ul>
      <div className="footer-dash">
        <div className="footer-text">
          <p>
            Made with{" "}
            <i className="fas fa-heart" style={{ color: "#DB3328" }}></i> by HITK
            Tech Community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
