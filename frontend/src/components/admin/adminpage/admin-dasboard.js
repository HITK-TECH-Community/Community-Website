import React from "react";
import "./admin.css";
import { Card, ImageHeader, CardBody } from "react-simple-card";
const AdminDashboard = () => {
  return (
    <div>
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
        <div className="team container">
          <h1>Invite Admins</h1>
          <div className="dash"></div>
        </div>
        <div className="admin-section ">
          <div className="admin-form child2">
            <div className="admin-card">
              <h3 className="admin-header-text"> </h3>
              <div className="inside-admin">
                <div className="form-row">
                  <div className="form-group col-sm-6"></div>
                </div>

                <div className="form-group ">
                  <div className="admin-input">
                    <input
                      placeholder="Email ID"
                      id="txt_email"
                      type="text"
                      Required="required"
                      name="email"
                    />
                    <i className="far fa-envelope"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminDashboard;
