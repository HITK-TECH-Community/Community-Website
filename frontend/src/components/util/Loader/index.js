import React, { Component } from "react";

class LoaderFull extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading1: false,
      loading2: false,
    };
  }

  componentDidMount() {
    setTimeout(
      function () {
        this.setState({ loading1: true });
      }.bind(this),
      100
    );
    setTimeout(
      function () {
        this.setState({ loading2: true });
      }.bind(this),
      200
    );
  }

  render() {
    return (
      <div
        className="d-flex align-items-center w-100"
        style={{ height: "75vh" }}
      >
        <div className="text-center w-100">
          <div
            className="spinner-grow mx-1"
            style={{ height: 16, width: 16 }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
          {this.state.loading1 ? (
            <div
              className="spinner-grow mx-1"
              style={{ height: 16, width: 16 }}
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <span className="px-2 mx-1"></span>
          )}
          {this.state.loading2 ? (
            <div
              className="spinner-grow mx-1"
              style={{ height: 16, width: 16 }}
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <span className="px-2 mx-1"></span>
          )}
        </div>
      </div>
    );
  }
}

export default LoaderFull;
