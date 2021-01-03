import React from "react";
import "./not_found.css";

const NotFound = () => {
  return (
    <div className="error">
      <h1 className="error-type">404</h1>
      <p className="error-text">
        The page you are looking for does not exist...
      </p>
    </div>
  );
};

export default NotFound;
