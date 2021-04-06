import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { MDBBadge } from "mdbreact";
import teamData from "../../test_data/team-roles.json";

import style from "./about.module.scss";
import "./about.scss";

const useStyles = makeStyles(() => ({
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
}));

export const About = (props) => {
  let dark = props.theme;

  const classes = useStyles();
  return (
    <div className={dark ? `${style["dark"]}` : ``}>
      <div className={style["about-section"]}>
        <img
          src="./images/about_us_cover.png"
          alt=""
          className={style["aboutus-img"]}
        />
      </div>
      <div
        className={
          dark
            ? `${style["about"]} ${style["about-dark"]}`
            : `${style["about"]} ${style["about-light"]}`
        }
      >
        <div className="row">
          <div className="col-lg-5">
            <h1>Who are we and what we do?</h1>
            <div
              className={
                dark
                  ? `${style["dash"]} ${style["dash-dark"]}`
                  : `${style["dash"]} ${style["dash-light"]}`
              }
            ></div>
            <h4 className={dark ? `${style["text-dark"]}` : ``}>
              By Students, For Students
            </h4>
          </div>
          <div className={dark ? `col-lg-7 ${style["text-dark"]}` : `col-lg-7`}>
            <p>
              HITK Tech Community is a platform built by the students and for
              the students with the main intent of increasing awareness towards
              plethora of opportunities and internships in tech all around/over
              the year. This will not only give practical work
              experience/exposure to students, but will also help everyone to
              know and grab their required opportunities in time!
            </p>
            <p>
              In HITK Tech Community, we will have mentors from almost all
              domains and members of the community can just put up their queries
              and any member having the answer or insight to get the solution
              will respond to it. Along with addressing the students' queries,
              all mentors will be sharing the valuable event opportunities like:
              <br /> <br />
              🍁 Internships &nbsp; 🍁 Competitions &nbsp; 🍁 Webinars &nbsp; 🍁
              Job openings <br />
              🍁 Openings for collaborations in projects
              <br />
              🍁 Contribution in open source projects
            </p>
            <p>
              This community is going to help accelerate students' learning, and
              bring them closer to like-minded individuals, who could all be a
              valuable asset in their journey towards a better future in
              technology.
            </p>
          </div>
        </div>
      </div>
      <div className={style["team"]}>
        <Typography
          variant="h4"
          className={dark ? `${style["about-dark"]}` : ``}
        >
          Founder and Co-Founders
        </Typography>
        <div
          className={
            dark
              ? `${style["dash"]} ${style["dash-dark"]}`
              : `${style["dash"]} ${style["dash-light"]}`
          }
        ></div>
        <div className={style["row1"]}>
          {Object.keys(teamData).map((role) => {
            if (role !== "member") {
              return teamData[role].map((roleObject) => {
                return (
                  <div
                    className={
                      dark
                        ? `${style["card1"]} ${style["card1-dark"]}`
                        : `${style["card1"]} ${style["card1-light"]}`
                    }
                  >
                    <div className={style["photo"]}>
                      <img
                        alt="profile"
                        className={style["cover"]}
                        src={roleObject.profile_pic}
                      />
                      <div className={style["team-social"]}>
                        <i
                          href={roleObject.linkedin}
                          className={
                            dark
                              ? `${style["card-footer"]} +  fab fa-linkedin fa-2x in in-dark`
                              : `${style["card-footer"]} +  fab fa-linkedin fa-2x in in-light`
                          }
                        ></i>
                        <i
                          href={roleObject.twitter}
                          className={
                            dark
                              ? `${style["card-footer"]} fab fa-twitter-square fa-twitter-square-dark fa-2x`
                              : `${style["card-footer"]} fab fa-twitter-square fa-twitter-square-light fa-2x`
                          }
                        ></i>
                        <i
                          href={roleObject.github}
                          className={
                            dark
                              ? `${style["card-footer"]} fab fa-github-square fa-github-square-dark fa-2x`
                              : `${style["card-footer"]} fab fa-github-square fa-github-square-light fa-2x`
                          }
                        ></i>
                      </div>
                    </div>
                    <div className={classes.details}>
                      <CardContent className={classes.content}>
                        <Typography component="h6" variant="h6">
                          {roleObject.name}
                        </Typography>
                        <MDBBadge
                          pill
                          className={style["info"] + ` ` + style["badge"]}
                        >
                          {role.toUpperCase()}
                        </MDBBadge>
                        <div>
                          <p>{roleObject.description}</p>
                        </div>
                        <br />
                      </CardContent>
                    </div>
                  </div>
                );
              });
            }
            return null;
          })}
        </div>

        <Typography
          variant="h4"
          className={dark ? `${style["about-dark"]}` : ``}
        >
          Board Members
        </Typography>
        <div
          className={
            dark
              ? `${style["dash"]} ${style["dash-dark"]}`
              : `${style["dash"]} ${style["dash-light"]}`
          }
        ></div>
        <div className={style["row2"]}>
          {Object.keys(teamData).map((role) => {
            if (role === "member") {
              return teamData[role].map((roleObject) => {
                return (
                  <div
                    className={
                      dark
                        ? `${style["card1"]} ${style["card1-dark"]}`
                        : `${style["card1"]} ${style["card1-light"]}`
                    }
                  >
                    <div className={style["photo"]}>
                      <img
                        alt="profile"
                        className={style["cover"]}
                        src={roleObject.profile_pic}
                      />
                      <div className={style["team-social"]}>
                        <i
                          href={roleObject.linkedin}
                          className={
                            dark
                              ? `${style["card-footer"]} fab fa-linkedin fa-2x in in-dark`
                              : `${style["card-footer"]} fab fa-linkedin fa-2x in in-light`
                          }
                        ></i>
                        <i
                          href={roleObject.twitter}
                          className={
                            dark
                              ? `${style["card-footer"]} fab fa-twitter-square fa-twitter-square-dark fa-2x`
                              : `${style["card-footer"]} fab fa-twitter-square fa-twitter-square-light fa-2x`
                          }
                        ></i>
                        <i
                          href={roleObject.github}
                          className={
                            dark
                              ? `${style["card-footer"]} fab fa-github-square fa-github-square-dark fa-2x`
                              : `${style["card-footer"]} fab fa-github-square fa-github-square-light fa-2x`
                          }
                        ></i>
                      </div>
                    </div>
                    <div className={classes.details}>
                      <CardContent className={classes.content}>
                        <Typography component="h6" variant="h6">
                          {roleObject.name}
                        </Typography>
                        <div>
                          <p>{roleObject.description}</p>
                        </div>
                        <div className={style["badge-container"]}>
                          {roleObject.tags.map((badge) => {
                            return (
                              <MDBBadge
                                className={
                                  (badge === "Open Source" &&
                                    style["primary"]) ||
                                  (badge === "Social Media" &&
                                    style["default"]) ||
                                  (badge === "Broadcast" &&
                                    style["broadcast"]) ||
                                  (badge === "Core Team" && style["info"])
                                }
                              >
                                {badge}
                              </MDBBadge>
                            );
                          })}
                        </div>
                        <br />
                      </CardContent>
                    </div>
                  </div>
                );
              });
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};
