import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./fonts/FuturaLT-Book.ttf";

import "./index.css";
// Creating css conflicts while using element tag such as 'nav'
// as these classes are available to the entire app
// Kindly import it to the required component only
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
// import 'bootstrap-social/bootstrap-social.css';

//redux
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducers/reducer";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
