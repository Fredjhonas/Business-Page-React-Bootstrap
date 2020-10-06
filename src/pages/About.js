import React from 'react';
import image from '../assets/Error-404.jpg';
import { NavLink } from 'react-router-dom';
import Common from '../components/Common';
// import '../assets/styles/App.scss';

const About = () => {
  return (
    <>
      <Common title='Why trust us ? ' imgsrc={image} visit='/contact' btname='Contact Now' />

    </>

  );
};

export default About;
