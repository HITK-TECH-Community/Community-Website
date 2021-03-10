import React from "react";
import { Link } from "react-router-dom";
import style from "./footer.module.scss";

export class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {},
    };
  }
  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "* Email cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "* Email is not valid";
      }
    }
    this.setState({ errors: errors });
    return formIsValid;
  }

  contactSubmit(e) {
    e.preventDefault();

    if (this.handleValidation()) {
      console.log("Form submitted");
    } else {
      console.log("Form has errors.");
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }
  render() {
    return (
      <div>
        <footer className={style["footer"]}>
          <div className={style["footer-addr"]}>
            <h1 className={style["footer-logo"]}>HITK Tech Community</h1>
            <address>
              <i className="fas fa-map-marker-alt"></i> Heritage Institute of
              Technology, Chowbaga Road, Kolkata, West Bengal - 700107, India
              <br />
            </address>
            <div className={style["newsletter"]}>
              <h2 className={style["nav-title"]}>Sign Up for our Newsletter</h2>
              <p>
                Receive updates and news about various Job Opportunities,
                Internships, Webinars and Open Source Events.
              </p>

              <form
                className="d-flex flex-column flex-md-row align-items-center mt-4"
                onSubmit={this.contactSubmit.bind(this)}
              >
                <input
                  type="text"
                  className={`${style["input-field-footer"]} py-2`}
                  placeholder="Email Id"
                  onChange={this.handleChange.bind(this, "email")}
                  value={this.state.fields["email"]}
                />
                <br />
                <div className={`${style["validation"]} d-sm-block d-md-none`}>
                  <div>{this.state.errors["email"]}</div>
                </div>
                <button
                  type="submit"
                  className={`mt-3 mt-md-0 ${style["submit-btn-footer"]} py-2 px-3 `}
                >
                  Sign Up
                </button>
              </form>
              <div
                className={`${style["validation-new"]} validation-new d-sm-none d-md-block`}
              >
                <div>{this.state.errors["email"]}</div>
              </div>
            </div>
          </div>
          <ul className={style["footer-nav"]}>
            <li className={style["nav-item"]}>
              <h2 className={style["nav-title"]}>Navigation</h2>

              <ul className={style["nav-ul"]}>
                <li>
                  <Link to="/about-us">About</Link>
                </li>

                <li>
                  <Link to="/broadcasts">Broadcasts</Link>
                </li>

                <li>
                  <Link to="/resources">Resources</Link>
                </li>

                <li>
                  <Link to="/contact-us">Contact</Link>
                </li>

                <li>
                  <Link to="/faqs">FAQs</Link>
                </li>
              </ul>
            </li>

            <li className={style["nav-item"]}>
              <h2 className={style["nav-title"]}>Other</h2>

              <ul className={style["nav-ul"]}>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>

                <li>
                  <Link to="/terms">Terms of Use</Link>
                </li>

                <li>
                  <Link to="/get-involved">Get Involved</Link>
                </li>
              </ul>
            </li>
            <li>
              <h2 className={style["nav-title"]}>Social</h2>
              <ul className={style["nav-ul"]}>
                <li>Be sure to give us a follow on the below social links</li>
              </ul>
              <div className={`col ${style["col"]}`}>
                <ul className={style["social"]}>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/hitk-tech-community"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className={style["outer"]}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className={style["inner"]}>
                          <i
                            className={`fab fa-linkedin fa-lg ${style["fa-linkedin-own"]}`}
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
                      <div className={style["outer"]}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className={style["inner"]}>
                          <i
                            className={`fab fa-slack fa-lg ${style["fa-slack-own"]}`}
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
                      <div className={style["outer"]}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className={style["inner"]}>
                          <i
                            className={`fas fa-envelope fa-lg ${style["fa-envelope-own"]}`}
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
                      <div className={style["outer"]}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className={style["inner"]}>
                          <i
                            className={`fab fa-github fa-lg ${style["fa-github-own"]}`}
                          ></i>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <div className={style["footer-dash"]}>
            <div className={style["footer-text"]}>
              <p>
                Made with{" "}
                <i className="fas fa-heart" style={{ color: "#DB3328" }}></i> by
                HITK Tech Community
              </p>
            </div>
          </div>
        </footer>

        <div className={style["cprt-text"]}>
          <p className={`${style["cprt"]} py-2`}>
            Copyright © 2020 HITK Tech Community
          </p>
        </div>
      </div>
    );
  }
}
