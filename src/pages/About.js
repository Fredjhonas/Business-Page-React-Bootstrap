import React from 'react';
import image from '../assets/images/about.png';
import Common from '../components/Common';

const About = () => {
  return (
    <>
      <Common title='Why trust us ? ' subtitle='We have 25 years of support with more than 5000 clients. Your safety and progress is our priority' imgsrc={image} visit='/contact' btname='Contact Now' />

    </>

  );
};

export default About;
