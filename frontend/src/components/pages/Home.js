import React from 'react';

import Overview from '../sections/home/Overview';
import JoinUs from '../sections/home/JoinUs';
import Motive from '../sections/home/Motive';

import './styles/Home.css';

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
