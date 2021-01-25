import React from "react";
import "./dashboard.css";
import { Card, ImageHeader, CardBody } from "react-simple-card";
const Dashboard = () => {
  return (
    <div>
      <div className="welcome-section">
        <h1>Good Morning, Admin</h1>
        <div className="welcome-section-activity">
          <div className="row">
            <div className="col-md-10">
              <h3 className="online">
                <i class="fas fa-circle"></i>12 Online
              </h3>
              <h3 className="offline">
                <i class="far fa-circle"></i>12 Offline
              </h3>
            </div>
            <div className="col-md-2 "></div>
          </div>
        </div>
      </div>
      <div className="team container">
        <h1>Dashboard</h1>
        <div className="dash"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6 col-sm-8 my-3">
              <div
                className="single-features d-flex mt-30 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0s"
              >
                <div className="features-icon">
                  <i class="fa fa-bullhorn" aria-hidden="true"></i>
                </div>
                <div className="features-content text-left">
                  <h4 className="features-title">
                    <a href="/#">Broadcasts</a>
                  </h4>
                  <h3 className="features-matter">36</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-8 my-3">
              <div
                className="single-features d-flex mt-30 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <div className="features-icon">
                  <i class="fa fa-user-circle" aria-hidden="true"></i>
                </div>
                <div className="features-content text-left">
                  <h4 className="features-title">
                    <a href="/#">Admins</a>
                  </h4>
                  <h3 className="features-matter">2</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-8 my-3">
              <div
                className="single-features d-flex mt-30 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="1s"
              >
                <div className="features-icon">
                  <i className="fa fa-users"></i>
                </div>
                <div className="features-content text-left">
                  <h4 className="features-title">
                    <a href="/#">About Us</a>
                  </h4>
                  <h3 className="features-matter">2</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-8 my-3">
              <div
                className="single-features d-flex mt-30 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <div className="features-icon">
                  <i class="fa fa-wrench" aria-hidden="true"></i>
                </div>

                <div className="features-content text-left">
                  <h4 className="features-title">
                    <a href="/setting">Settings</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="team container">
          <h1>Admins</h1>
          <div className="dash"></div>
          <h4>6 Members</h4>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <Card>
              <ImageHeader imageSrc="https://cdn.mos.cms.futurecdn.net/3kZ3hc2YMB6LXiPohtyfKa.jpg" />
              <CardBody>
                <h4>Name</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                  vero.
                </p>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card>
              <ImageHeader imageSrc="https://cdn.mos.cms.futurecdn.net/3kZ3hc2YMB6LXiPohtyfKa.jpg" />
              <CardBody>
                <h4>Name</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                  vero.
                </p>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className="card">
              <ImageHeader imageSrc="https://cdn.mos.cms.futurecdn.net/3kZ3hc2YMB6LXiPohtyfKa.jpg" />
              <CardBody>
                <h4>Name</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                  vero.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <Card>
              <ImageHeader imageSrc="https://cdn.mos.cms.futurecdn.net/3kZ3hc2YMB6LXiPohtyfKa.jpg" />
              <CardBody>
                <h4>Name</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                  vero.
                </p>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card>
              <ImageHeader imageSrc="https://cdn.mos.cms.futurecdn.net/3kZ3hc2YMB6LXiPohtyfKa.jpg" />
              <CardBody>
                <h4>Name</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                  vero.
                </p>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className="card">
              <ImageHeader imageSrc="https://cdn.mos.cms.futurecdn.net/3kZ3hc2YMB6LXiPohtyfKa.jpg" />
              <CardBody>
                <h4>Name</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                  vero.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
