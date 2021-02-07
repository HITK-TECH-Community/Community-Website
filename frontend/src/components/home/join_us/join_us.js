import React, { Fragment } from "react";
import "./join_us.css";

const JoinUs = () => {
  return (
    <Fragment>
      <div className="join-us">
        <h1 className="title">Join Us</h1>
        <div className="dash"></div>
        <h2 className="subtitle">
          Join us in the mission of reducing the knowledge gap in students.
        </h2>
        <a href="/join_us_form">
          <button type="submit" className="mainbtn mainbtn2">
            Join Us
          </button>
        </a>
      </div>
    </Fragment>
  );
};

export default JoinUs;
