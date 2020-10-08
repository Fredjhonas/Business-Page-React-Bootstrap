import React from 'react';
import image from '../assets//images/home.png';
import Common from '../components/Common';
// import '../assets/styles/App.scss';

const Home = () => {
  return (
    <>
      <Common title='Grow your business with ' subtitle='You will reach the sky' imgsrc={image} visit='/services' btname='Get Started' />
    </>

  );
};

export default Home;
