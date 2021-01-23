import React from "react";
import "./not_found.css";

const NotFound = () => {
  return (
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
      <a href="/" class="back"><i class="fas fa-arrow-left"></i> Go Home!</a>
    </div>
  );
};

export default NotFound;
