import React from 'react';

import Overview from '../sections/home/overview';
import JoinUs from '../sections/home/join_us';
import Motive from '../sections/home/motive';

import './styles/home.css';

const Home = () => {
  return (
    <div className='home'>
      <Overview />
      <JoinUs />
      <Motive />
    </div>
  );
};

export default Home;
