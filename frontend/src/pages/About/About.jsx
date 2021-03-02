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

export const About = () => {
  const classes = useStyles();
  return (
    <div className={style["root"]}>
      <div className={style["about-section"]}>
        <img src="./images/about-us.jpg" alt="" className={style["aboutus-img"]} />
      </div>
      <div className={style["about"]}>
        <div className="row">
          <div className="col-lg-6">
            <h1>Who are we and what we do?</h1>
            <div className={style["dash"]}></div>
            <h4 className={style["by-line"] + "text-left"}>By Students, For Students</h4>
          </div>
          <div className="col-lg-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus
              eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos
              cupiditate dolore doloribus!
            </p>
            <p>
              Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla
              eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!
            </p>
            <p>
              Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam
              beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!
            </p>
          </div>
        </div>
      </div>
      <div className={style["team"]}>
        <Typography variant="h4">Founder and Co-Founders</Typography>
        <div className={style["dash"]}></div>
        <div className={style["row1"]}>
          {Object.keys(teamData).map(role => {
            if (role !== "member") {
              return teamData[role].map(roleObject => {
                console.log(roleObject.name);
                return (
                  <div className={style["card1"]}>
                    <div className={style["photo"]}>
                      <img alt="profile" className={style["cover"]} src={roleObject.profile_pic} />
                      <div className={style["team-social"]}>
                        <i
                          href={roleObject.linkedin}
                          className={style["card-footer"] + ` fab fa-linkedin fa-2x in`}
                        ></i>
                        <i
                          href={roleObject.twitter}
                          className={style["card-footer"] + ` fab fa-twitter-square fa-2x`}
                        ></i>
                        <i
                          href={roleObject.github}
                          className={style["card-footer"] + ` fab fa-github-square fa-2x`}
                        ></i>
                      </div>
                    </div>
                    <div className={classes.details}>
                      <CardContent className={classes.content}>
                        <Typography component="h6" variant="h6">
                          {roleObject.name}
                        </Typography>
                        <MDBBadge pill className={style["info"] + ` ` + style["badge"]}>
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

        <Typography variant="h4">Core Members</Typography>
        <div className={style["dash"]}></div>
        <div className={style["row2"]}>
          {Object.keys(teamData).map(role => {
            if (role === "member") {
              return teamData[role].map(roleObject => {
                console.log(roleObject.name);
                return (
                  <div className={style["card1"]}>
                    <div className={style["photo"]}>
                      <img alt="profile" className={style["cover"]} src={roleObject.profile_pic} />
                      <div className={style["team-social"]}>
                        <i
                          href={roleObject.linkedin}
                          className={style["card-footer"] + ` fab fa-linkedin fa-2x in`}
                        ></i>
                        <i
                          href={roleObject.twitter}
                          className={style["card-footer"] + ` fab fa-twitter-square fa-2x`}
                        ></i>
                        <i
                          href={roleObject.github}
                          className={style["card-footer"] + ` fab fa-github-square fa-2x`}
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
                          {roleObject.tags.map(badge => {
                            console.log(badge);
                            return (
                              <MDBBadge
                                className={
                                  (badge === "Open Source" && style["primary"]) ||
                                  (badge === "Social Media" && style["default"]) ||
                                  (badge === "Broadcast" && style["broadcast"]) ||
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
