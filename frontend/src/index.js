import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './fonts/FuturaLT-Book.ttf';

import './index.css';
// Creating css conflicts while using element tag such as 'nav'
// as these classes are available to the entire app
// Kindly import it to the required component only
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
// import 'bootstrap-social/bootstrap-social.css';

ReactDOM.render(<App />, document.getElementById('root'));
