import React from 'react';
import { Button2 } from "../util/button/button";
import "./resources.css";

const Resources = () => {
    return (
        <div className="resource-section">
            <div className="resource-parent">
                <div className="resource-child child1">
                    <img src="./images/resource.png" alt="An image showing team" className="resource-image" />
                </div>
                <div className="resource-child child2">
                    <h3 className="resource-header-text">Share your Resources here</h3>
                    <div className="resouce-form">
                        <div className="resource-input">
                            <input
                                id="txt_name"
                                type="text"
                                Required="required"
                                name="name"
                                placeholder="Your Name "
                            />
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="resource-input">
                            <input
                                id="email_id"
                                type="email"
                                Required="required"
                                name="email"
                                placeholder="Your Email "
                            />
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="resource-input">
                            <input
                                id="phone_no"
                                type="tel"
                                Required="required"
                                name="phone_no"
                                placeholder="Your Phone No. "
                            />
                            <i className="fas fa-phone"></i>
                        </div>
                        <div className="resource-input">
                            <textarea
                                id="description"
                                rows="1"
                                cols="10"
                                name="message"
                                Required="required"
                                placeholder="Your Message "
                            ></textarea>
                            <i className="fas fa-comment-dots"></i>
                        </div>
                        <div className="resource-input">
                            <input
                                id="resource_url"
                                type="url"
                                Required="required"
                                name="phone_no"
                                placeholder="Resource URL "
                            />
                            <i className="fas fa-link"></i>
                        </div>
                        <div className="resource-input-new">
                            <label className="mb-4 levelOfTrust">Level Of Trust</label>
                            <div className="radioButtons">
                                <input type="radio" name="one" />
                                <label className="mx-3 label">1</label>
                                <input type="radio" name="one" />
                                <label className="mx-3 label">2</label>
                                <input type="radio" name="one" />
                                <label className="mx-3 label">3</label>
                                <input type="radio" name="one" />
                                <label className="mx-3 label">4</label>
                                <input type="radio" name="one" />
                                <label className="mx-3 label">5</label>
                            </div>
                        </div>
                        <div className="resource-input">
                            <div className="valid-until">
                                <input
                                required
                                name="dob"
                                type="date"
                                id="date"
                                placeholder="Valid Until:&nbsp;"
                                />
                            </div>
                        </div>
                        <div className="resource-input">
                            <textarea
                                    id="additional"
                                    rows="1"
                                    cols="10"
                                    name="additional"
                                    placeholder="Additional Information(Optional)"
                                ></textarea>
                            <i className="fas fa-pencil-alt"></i>
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
