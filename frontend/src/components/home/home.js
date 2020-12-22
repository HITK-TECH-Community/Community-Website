import React from 'react';

import Overview from './overview/overview';
import JoinUs from './join_us/join_us';
import Motive from './motive/motive';
import Carousel from './carousel/owldemo1';
import './home.css';

const Home = () => {
  return (
    <div className='home'>
      <Overview />
      <JoinUs />
      <Motive />
      <Carousel/>
    </div>
  );
};

export default Home;
