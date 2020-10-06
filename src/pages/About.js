import React from 'react';
import image from '../assets/images/about.png';
import Common from '../components/Common';

const About = () => {
  return (
    <>
      <Common title='Why trust us ? ' imgsrc={image} visit='/contact' btname='Contact Now' />

    </>

  );
};

export default About;
