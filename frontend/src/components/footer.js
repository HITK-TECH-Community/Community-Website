import React from 'react';

import './styles/Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <ul>
        <li>
          <a href='https://linkedin.com/'>
            <i className='fab fa-linkedin'></i>
          </a>
        </li>
        <li>
          <a href='https://instagram.com'>
            <i className='fab fa-slack'></i>
          </a>
        </li>
        <li>
          <a href='https://facebook.com'>
            <i className='fab fa-facebook'></i>
          </a>
        </li>
        <li>
          <a href='http://gitter.im'>
            <i className='fab fa-gitter'></i>
          </a>
        </li>
        <li>
          <a href='mailto:hitktechcommunity@gmail.com'>
            <i className='fas fa-envelope'></i>
          </a>
        </li>
        <li>
          <a href='https://github.com/HITK-TECH-Community/'>
            <i className='fab fa-github'></i>
          </a>
        </li>
      </ul>
      <div className='footer-text'>
        <p>
          Made with <i className='fas fa-heart'></i> by HITK Tech Community
        </p>
      </div>
    </div>
  );
};

export default Footer;
