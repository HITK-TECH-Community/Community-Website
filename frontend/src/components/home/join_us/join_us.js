import React, { Fragment } from "react";

import "./join_us.css";

const Test = () => {
  return (
    <Fragment>
      <div className="join-us">
        <h1 className="title">Join Us</h1>
        <h2 className="subtitle">
          Connect with hundreds of other Tech Enthusiasts to stay updated of
          every opportunities.
        </h2>
        <button className="join-us-btn">
          <a
            href="https://www.linkedin.com/company/hitk-tech-community"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow us on Linked<i className="fab fa-linkedin"></i>
          </a>
        </button>
      </div>
    </Fragment>
  );
};

export default Test;
