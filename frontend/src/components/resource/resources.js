import React from "react";
import {Button2} from "../util/button/button";
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
            </div>
            <div className="resource-input1">
              <label>Trust Level of Resource</label>
              <br />
              <div className="form-check">
                <input
                  id="trust1"
                  className="trust"
                  type="checkbox"
                  Required="required"
                  name="trustlevel"
                />
                <label for="trust1">1</label>
                <input
                  id="trust2"
                  className="trust"
                  type="checkbox"
                  Required="required"
                  name="trustlevel"
                />
                <label for="trust2">2</label>
                <input
                  id="trust3"
                  className="trust"
                  type="checkbox"
                  Required="required"
                  name="trustlevel"
                />
                <label for="trust3">3</label>
                <input
                  id="trust4"
                  className="trust"
                  type="checkbox"
                  Required="required"
                  name="trustlevel"
                />
                <label for="trust4">4</label>
                <input
                  id="trust5"
                  className="trust"
                  type="checkbox"
                  Required="required"
                  name="trustlevel"
                />
                <label for="trust5">5</label>
              </div>
            </div>
            <div className="resource-input">
              <label>Valid Until</label>
              <br />
              <div className="valid-until">
                <input
                  id="validity"
                  type="date"
                  Required="required"
                  name="dob"
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
