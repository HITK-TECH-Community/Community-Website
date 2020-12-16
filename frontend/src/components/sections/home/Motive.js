import React from 'react';
import MotiveLogo from '../../images/motive.png';

import './styles/motive.css';

const Motive = () => {
  return (
    <div className='content'>
      <div className='motive'>
        <img src={MotiveLogo} alt='Goal' />
        <div>
          <h1>
            <i className='fas fa-crosshairs'></i>ur Motive
          </h1>
          <div className='dash'></div>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              atque.
            </li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Motive;
