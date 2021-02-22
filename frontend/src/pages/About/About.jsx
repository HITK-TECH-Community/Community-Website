import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card1 from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { MDBBadge } from "mdbreact";

import style from "./about.module.scss";
import "./about.scss";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    paddingTop: "23px",
    paddingBottom: "10px",
    paddingLeft: "10px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: "90%",
    height: "130px",
    borderRadius: "50%",
  },
}));

export const About = () => {
  const classes = useStyles();
  return (
    <div className={style["root"]}>
      <div className={style["about-section"]}>
        <img
          src="./images/about-us.jpg"
          alt=""
          className={style["aboutus-img"]}
        />
      </div>
      <div className={style["about"]}>
        <div className="row">
          <div className="col-lg-6">
            <h1>Who are we and what we do?</h1>
            <div className={style["dash"]}></div>
            <h4 className={style["by-line"] + "text-left"}>
              By Students, For Students
            </h4>
          </div>
          <div className="col-lg-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              dicta minus molestiae vel beatae natus eveniet ratione temporibus
              aperiam harum alias officiis assumenda officia quibusdam deleniti
              eos cupiditate dolore doloribus!
            </p>
            <p>
              Ad dolore dignissimos asperiores dicta facere optio quod commodi
              nam tempore recusandae. Rerum sed nulla eum vero expedita ex
              delectus voluptates rem at neque quos facere sequi unde optio
              aliquam!
            </p>
            <p>
              Tenetur quod quidem in voluptatem corporis dolorum dicta sit
              pariatur porro quaerat autem ipsam odit quam beatae tempora
              quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur
              at!
            </p>
          </div>
        </div>
      </div>
      <div className={style["meet"]}>
        <div className="row">
          <div className={`col-lg-6 text-center`}>
            <h1>MEET THE CREW</h1>
            <h5>
              “Individuals can and do make a difference, but it takes a team to
              really mess things up.”
            </h5>
          </div>
          <div className={`col-sm-6`}>
            <img src="./images/team.png" alt="" className={style["team-img"]} />
          </div>
        </div>
      </div>
      <div className={style["team"]}>
        <div className="row">
          <div className="col-lg-6">
            <div className={style["card1"]} id="founder">
              <Card1 className={classes.root}>
                <div className={"col-4 " + style["photo"]}>
                  <div className="row">
                    <CardMedia
                      className={classes.cover}
                      image="https://cdn.mos.cms.futurecdn.net/3kZ3hc2YMB6LXiPohtyfKa.jpg"
                    />
                  </div>
                  <div className="row">
                    <div className={style["team-social"]}>
                      <i
                        className={
                          style["card-footer"] + ` fab fa-linkedin fa-2x in`
                        }
                      ></i>
                      <i
                        className={
                          style["card-footer"] + ` fab fa-twitter-square fa-2x`
                        }
                      ></i>
                      <i
                        className={
                          style["card-footer"] + ` fab fa-github-square fa-2x`
                        }
                      ></i>
                    </div>
                  </div>
                </div>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h6" variant="h6">
                      Name
                    </Typography>
                    <MDBBadge pill id="founder">
                      FOUNDER
                    </MDBBadge>
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nam vero.
                      </p>
                    </div>
                    <br />
                  </CardContent>
                </div>
              </Card1>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={style["card1"]} id="founder">
              <Card1 className={classes.root}>
                <div className={`col-4 ` + style["photo"]}>
                  <div className="row">
                    <CardMedia
                      className={classes.cover}
                      image="https://cdn.mos.cms.futurecdn.net/3kZ3hc2YMB6LXiPohtyfKa.jpg"
                    />
                  </div>
                  <div className="row">
                    <div className={style["team-social"]}>
                      <i
                        className={
                          style["card-footer"] + ` fab fa-linkedin fa-2x in`
                        }
                      ></i>
                      <i
                        className={
                          style["card-footer"] + ` fab fa-twitter-square fa-2x`
                        }
                      ></i>
                      <i
                        className={
                          style["card-footer"] + ` fab fa-github-square fa-2x`
                        }
                      ></i>
                    </div>
                  </div>
                </div>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h6" variant="h6">
                      Name
                    </Typography>
                    <MDBBadge pill id="founder">
                      CO-FOUNDER
                    </MDBBadge>
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nam vero.
                      </p>
                    </div>
                    <br />
                  </CardContent>
                </div>
              </Card1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className={style["card1"]}>
              <Card1 className={classes.root}>
                <div className={`col-4 ` + style["photo"]}>
                  <div className="row">
                    <CardMedia
                      className={classes.cover}
                      image="https://cdn.mos.cms.futurecdn.net/3kZ3hc2YMB6LXiPohtyfKa.jpg"
                    />
                  </div>
                  <div className="row">
                    <div className={style["team-social"]}>
                      <i
                        className={
                          style["card-footer"] + ` fab fa-linkedin fa-2x in`
                        }
                      ></i>
                      <i
                        className={
                          style["card-footer"] + ` fab fa-twitter-square fa-2x`
                        }
                      ></i>
                      <i
                        className={
                          style["card-footer"] + ` fab fa-github-square fa-2x`
                        }
                      ></i>
                    </div>
                  </div>
                </div>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h6" variant="h6">
                      Name
                    </Typography>
                    <div>
                      <p style={{ marginTop: "13px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nam vero.
                      </p>
                    </div>
                    <MDBBadge pill className={style["default"]}>
                      Social Media
                    </MDBBadge>
                    <MDBBadge className={style["primary"]}>
                      Open Source
                    </MDBBadge>
                    <MDBBadge className={style["info"]}>Core Team</MDBBadge>
                    <MDBBadge className={style["broadcast"]}>
                      Broadcast
                    </MDBBadge>
                    <br />
                  </CardContent>
                </div>
              </Card1>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={style["card1"]}>
              <Card1 className={classes.root}>
                <div className={`col-4 } + style["photo"] `}>
                  <div className="row">
                    <CardMedia
                      className={classes.cover}
                      image="https://cdn.mos.cms.futurecdn.net/3kZ3hc2YMB6LXiPohtyfKa.jpg"
                    />
                  </div>
                  <div className="row">
                    <div className={style["team-social"]}>
                      <i
                        className={
                          style["card-footer"] + ` fab fa-linkedin fa-2x in`
                        }
                      ></i>
                      <i
                        className={
                          style["card-footer"] + ` fab fa-twitter-square fa-2x`
                        }
                      ></i>
                      <i
                        className={
                          style["card-footer"] + ` fab fa-github-square fa-2x`
                        }
                      ></i>
                    </div>
                  </div>
                </div>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h6" variant="h6">
                      Name
                    </Typography>
                    <div>
                      <p style={{ marginTop: "13px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nam vero.
                      </p>
                    </div>
                    <MDBBadge pill className={style["default"]}>
                      Social Media
                    </MDBBadge>
                    <MDBBadge className={style["primary"]}>
                      Open Source
                    </MDBBadge>
                    <MDBBadge className={style["info"]}>Core Team</MDBBadge>
                    <MDBBadge className={style["broadcast"]}>
                      Broadcast
                    </MDBBadge>
                    <br />
                  </CardContent>
                </div>
              </Card1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className={style["card1"]}>
              <Card1 className={classes.root}>
                <div className={`col-4 ` + style["photo"]}>
                  <div className="row">
                    <CardMedia
                      className={classes.cover}
                      image="https://cdn.mos.cms.futurecdn.net/3kZ3hc2YMB6LXiPohtyfKa.jpg"
                    />
                  </div>
                  <div className="row">
                    <div className={style["team-social"]}>
                      <i
                        className={
                          style["card-footer"] + ` fab fa-linkedin fa-2x in`
                        }
                      ></i>
                      <i
                        className={
                          style["card-footer"] + ` fab fa-twitter-square fa-2x`
                        }
                      ></i>
                      <i
                        className={
                          style["card-footer"] + ` fab fa-github-square fa-2x`
                        }
                      ></i>
                    </div>
                  </div>
                </div>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h6" variant="h6">
                      Name
                    </Typography>
                    <div>
                      <p style={{ marginTop: "13px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nam vero.
                      </p>
                    </div>
                    <MDBBadge pill className={style["default"]}>
                      Social Media
                    </MDBBadge>
                    <MDBBadge className={style["primary"]}>
                      Open Source
                    </MDBBadge>
                    <MDBBadge className={style["info"]}>Core Team</MDBBadge>
                    <MDBBadge className={style["broadcast"]}>
                      Broadcast
                    </MDBBadge>
                    <br />
                  </CardContent>
                </div>
              </Card1>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={style["card1"]}>
              <Card1 className={classes.root}>
                <div className={`col-4 } + style["photo"] `}>
                  <div className="row">
                    <CardMedia
                      className={classes.cover}
                      image="https://cdn.mos.cms.futurecdn.net/3kZ3hc2YMB6LXiPohtyfKa.jpg"
                    />
                  </div>
                  <div className="row">
                    <div className={style["team-social"]}>
                      <i
                        className={
                          style["card-footer"] + ` fab fa-linkedin fa-2x in`
                        }
                      ></i>
                      <i
                        className={
                          style["card-footer"] + ` fab fa-twitter-square fa-2x`
                        }
                      ></i>
                      <i
                        className={
                          style["card-footer"] + ` fab fa-github-square fa-2x`
                        }
                      ></i>
                    </div>
                  </div>
                </div>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h6" variant="h6">
                      Name
                    </Typography>
                    <div>
                      <p style={{ marginTop: "13px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nam vero.
                      </p>
                    </div>
                    <MDBBadge pill className={style["default"]}>
                      Social Media
                    </MDBBadge>
                    <MDBBadge className={style["primary"]}>
                      Open Source
                    </MDBBadge>
                    <MDBBadge className={style["info"]}>Core Team</MDBBadge>
                    <MDBBadge className={style["broadcast"]}>
                      Broadcast
                    </MDBBadge>
                    <br />
                  </CardContent>
                </div>
              </Card1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
