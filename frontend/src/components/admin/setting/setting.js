import React from "react";
import "./setting.css";
const Setting = () => {
  return (
    <div>
      <div className="team container">
        <h1>Invite Admins</h1>
        <div className="dash"></div>
      </div>
      <div className="admin-section ">
        <div className="admin-card">
          <h3 className="admin-header-text"> </h3>
          <div className="inside-admin">
            <div className="form-row"></div>
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
          <div class="wrap">
            <button class="button">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Setting;
