import React from "react";
import "./form.css";
import { Button2 } from "../../../util/button/button";
const JoinUsForm = () => {
  return (
    <div className="joinusform-section">
      <div className="joinusform-image child1">
        <img src="./images/joinus.jpg" alt="" />
      </div>
      <div className="joinus-form child2">
        <div className="joinusform-card">
          <h3 className="joinusform-header-text">Join Us Form</h3>
          <div className="inside-joinusform">
            <div className="form-row">
              <div className="form-group col-sm-6">
                <div className="joinusform-input">
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
                <div className="joinusform-input">
                  <input
                    placeholder="Contact No."
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
              <div className="joinusform-input">
                <input
                  placeholder="Email ID"
                  id="txt_email"
                  type="text"
                  Required="required"
                  name="email"
                />
                <i className="fas fa-envelope-open-text"></i>
              </div>
            </div>
            <div className="form-group ">
              <div className="joinusform-input">
                <input
                  placeholder="Linkedin Profile URL"
                  id="txt_link"
                  type="text"
                  Required="required"
                  name="link"
                />
                <i class="fas fa-link"></i>
              </div>
            </div>
            <div className="joinusform-input">
              <textarea
                placeholder="How can you contribute to help the community?"
                id="txt_desc"
                rows="6"
                cols="20"
                name="desc"
                Required="required"
              ></textarea>
              <i className="fas fa-comment-dots"></i>
            </div>
            <div className="joinusform-input">
              <label className="mb-2">Interested Domain</label>
              <select>
                <option value="android">Android</option>
                <option value="web">Web</option>
                <option value="iot">IoT</option>
                <option value="ai">AI</option>
                <option value="ml">ML</option>
                <option value="poster">Poster Designing</option>
                <option value="video">Video Editing</option>
                <option value="content">Content Writing</option>
                <option value="social">Social Media Handling</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group ">
              <div className="joinusform-input">
                <input
                  placeholder="Other - if the domain is not listed above"
                  id="txt_other"
                  type="text"
                  Required="required"
                  name="other"
                />
                <i class="fas fa-pencil-alt"></i>
              </div>
            </div>
            <div className="form-group ">
              <div className="joinusform-input">
                <input
                  placeholder="Department"
                  id="txt_dept"
                  type="text"
                  Required="required"
                  name="dept"
                />
                <i class="fas fa-building"></i>
              </div>
            </div>
            <div className="joinusform-input1">
              <label className="mb-4 YearOfStudy">Year of Study</label>
              <div className="radioButtons">
                <div class="radio-item">
                  <input type="radio" name="one" />
                  <label className="mx-3 label">1st</label>
                </div>
                <div class="radio-item">
                  <input type="radio" name="one" />
                  <label className="mx-3 label">2nd</label>
                </div>
                <div class="radio-item">
                  <input type="radio" name="one" />
                  <label className="mx-3 label">3rd</label>
                </div>
                <div class="radio-item">
                  <input type="radio" name="one" />
                  <label className="mx-3 label">4th</label>
                </div>
              </div>
            </div>
            <div className="form-group ">
              <div className="joinusform-input">
                <input
                  placeholder="College Name"
                  id="txt_college"
                  type="text"
                  Required="required"
                  name="college"
                />
                <i class="fas fa-graduation-cap"></i>
              </div>
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
export default JoinUsForm;
