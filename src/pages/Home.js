import React from 'react';
import image from '../assets/Error-404.jpg';
import { NavLink } from 'react-router-dom';
import Common from '../components/Common';
// import '../assets/styles/App.scss';

const Home = () => {
  return (
    <>
      <Common title='Grow your business with ' imgsrc={image} visit='/services' btname='Get Started' />
    </>

  );
};

export default Home;
