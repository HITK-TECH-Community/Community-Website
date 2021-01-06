import React from "react";
import { Button2 } from "../util/button/button";
import "./resources.css";
const Resources = () => {
  return (
    <div className="resource-section ">
      <div className="resource-parent">
        <div className="resource-child child1">
          <img src="./images/resource.png" alt="" className="resource-image" />
        </div>
        <div className="resource-child child2">
          <h3 className="resource-header-text">Resource Sharing Form</h3>
          <div className="inside-resource">
            <div className="resource-input">
              <label>Name</label>
              <input
                id="txt_name"
                type="text"
                Required="required"
                name="name"
              />
              <i className="fas fa-user"></i>
            </div>
            <div className="resource-input">
              <label>Email ID</label>
              <input
                id="txt_email"
                type="text"
                Required="required"
                name="email"
              />
              <i className="fas fa-envelope-open-text"></i>
            </div>
            <div className="resource-input">
              <label>Phone No.</label>
              <input id="phone" type="tel" Required="required" name="phone" />
              <i className="fas fa-phone-square-alt"></i>
            </div>
            <div className="resource-input">
              <label>Resource Description</label>
              <textarea
                id="txt_desc"
                rows="6"
                cols="20"
                name="resourcedesc"
                Required="required"
              ></textarea>
              <i className="fas fa-pen-square"></i>
            </div>
            <div className="resource-input">
              <label>Resource URL</label>
              <input
                id="txt_link"
                type="text"
                Required="required"
                name="link"
              />
              <i className="fas fa-link"></i>
            </div>
            <div className="resource-input">
              <label>Trust Level of Resource</label>
              <br />
              <div className="rad">
                <input
                  id="trust1"
                  className="trust"
                  type="radio"
                  Required="required"
                  name="trustlevel"
                />
                <label for="trust1">1</label>
                <input
                  id="trust2"
                  className="trust"
                  type="radio"
                  Required="required"
                  name="trustlevel"
                />
                <label for="trust2">2</label>
                <input
                  id="trust3"
                  className="trust"
                  type="radio"
                  Required="required"
                  name="trustlevel"
                />
                <label for="trust3">3</label>
                <input
                  id="trust4"
                  className="trust"
                  type="radio"
                  Required="required"
                  name="trustlevel"
                />
                <label for="trust4">4</label>
                <input
                  id="trust5"
                  className="trust"
                  type="radio"
                  Required="required"
                  name="trustlevel"
                />
                <label for="trust5">5</label>
              </div>
            </div>
            <div className="resource-input">
              <label>Valid Until</label>
              <input id="validity" type="date" Required="required" name="dob" />
            </div>
            <div className="resource-input">
              <label>Additional Info (Optional)</label>
              <textarea id="txt_info" rows="6" cols="20" name="info"></textarea>
              <i className="far fa-comment-alt"></i>
            </div>
            <div style={{ textAlign: "center" }}>
              <Button2 label="Submit" type="submit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resources;
