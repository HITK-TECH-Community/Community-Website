import React from "react";
import { Button2 } from "../util/button/button";
import "./resources.css";

const Resources = () => {
  return (
    <div className="resource-section ">
      <div className="resource-image child1">
        <img src="./images/resource.png" alt="" />
      </div>
      <div className="resource-form child2">
        <div className="resource-card">
          <h3 className="resource-header-text">Resource Sharing Form</h3>
          <div className="inside-resource">
            <div className="form-row">
              <div className="form-group col-sm-6">
                <div className="resource-input">
                  <input
                    placeholder="Name"
                    id="txt_name"
                    type="text"
                    Required="required"
                    name="name"
                  />
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <div className="form-group2 col-sm-6">
                <div className="resource-input">
                  <input
                    placeholder="Phone No."
                    id="phone"
                    type="tel"
                    Required="required"
                    name="phone"
                  />
                  <i class="fas fa-phone"></i>
                </div>
              </div>
            </div>

            <div className="form-group ">
              <div className="resource-input">
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

            <div className="form-group ">
              <div className="resource-input">
                <input
                  placeholder="Resource URL"
                  id="txt_link"
                  type="text"
                  Required="required"
                  name="link"
                />
                <i class="fas fa-link"></i>
              </div>
            </div>

            <div className="resource-input">
              <textarea
                placeholder="Resource Description"
                id="txt_desc"
                rows="6"
                cols="20"
                name="resourcedesc"
                Required="required"
              ></textarea>
              <i className="fas fa-comment-dots"></i>
            </div>
            <div className="resource-input1">
              <select required>
                <option id="" disabled selected hidden>Level Of Trust</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="resource-input">
              <div className="valid-until">
                <input
                  id="validity"
                  type="date"
                  Required="required"
                  name="dob"
                />
                <label class="valid">Valid Until</label>
              </div>
            </div>
            <div className="resource-input">
              <textarea
                placeholder="Additional Info (Optional)"
                id="txt_info"
                rows="6"
                cols="20"
                name="info"
              ></textarea>
              <i className="fas fa-pen-square"></i>
            </div>
            <div className="submit-btn">
              <Button2
                className="submit-btn-text"
                label="Submit"
                type="submit"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resources;
