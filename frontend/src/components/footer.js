import React from 'react';

import './styles/footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <ul>
        <li>
          <a href='https://www.linkedin.com/company/hitk-tech-community' target="_blank">
            <i className='fab fa-linkedin'></i>
          </a>
        </li>
        <li>
          <a href='https://instagram.com' target="_blank">
            <i className='fab fa-slack'></i>
          </a>
        </li>
        <li>
          <a href='https://facebook.com' target="_blank">
            <i className='fab fa-facebook'></i>
          </a>
        </li>
        <li>
          <a href='http://gitter.im' target="_blank">
            <i className='fab fa-gitter'></i>
          </a>
        </li>
        <li>
          <a href='mailto:hitktechcommunity@gmail.com' target="_blank">
            <i className='fas fa-envelope'></i>
          </a>
        </li>
        <li>
          <a href='https://github.com/HITK-TECH-Community/' target="_blank">
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
