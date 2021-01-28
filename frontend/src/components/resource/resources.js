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
            <div className="form-group">
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
              <div>
                <label className="mb-3 levelOfTrust">Level Of Trust</label>
              </div>
              <div className="radioButtons">
                <div class="radio-item">
                  <input type="radio" id="ritema" name="one" />
                  <label className="mx-3 label" for="ritema">
                    1
                  </label>
                </div>
                <div class="radio-item">
                  <input type="radio" id="ritemb" name="one" />
                  <label className="mx-3 label" for="ritemb">
                    2
                  </label>
                </div>
                <div class="radio-item">
                  <input type="radio" id="ritemc" name="one" />
                  <label className="mx-3 label" for="ritemc">
                    3
                  </label>
                </div>
                <div class="radio-item">
                  <input type="radio" id="ritemd" name="one" />
                  <label className="mx-3 label" for="ritemd">
                    4
                  </label>
                </div>
                <div class="radio-item">
                  <input type="radio" id="riteme" name="one" />
                  <label className="mx-3 label" for="riteme">
                    5
                  </label>
                </div>
              </div>
            </div>
            <div className="resource-input">
              <div className="valid-until">
                <input
                  required
                  name="dob"
                  class="textbox-n"
                  type="date"
                  id="date"
                  placeholder="Valid Until:&nbsp;"
                />
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
              <i className="fas fa-pencil-alt"></i>
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
