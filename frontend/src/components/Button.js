import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles/button.css';

const Button = (props) => {
  const { text, path } = props;

  return (
    <Link to={path}>
      <button className='btn'>
        {text}
        <span>?</span>
      </button>
    </Link>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Button;
