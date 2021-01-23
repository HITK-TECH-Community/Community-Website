import React from "react";
import "./not_found.css";
import { Button2 } from "../util/button/button";

const NotFound = () => {
  return (
    <div className="not_found">
      <div className="error">
        <div className="pp-logo-container">
          <img className="error-logo" src="./images/error.png" alt="404" />
        </div>
        <p className="error-text">
          Looks like you're lost!
        </p>
        <div className="error-content">
            The page you are looking for is not available.
        </div>
        <a href="/">
          <Button2 label="Go Home!" type="submit" />
        </a>
      </div>
    </div>
  );
};

export default NotFound;
