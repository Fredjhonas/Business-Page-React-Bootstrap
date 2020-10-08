import React from 'react';
import Sdata from '../components/Sdata';
import Card from '../components/Card';
import '../assets/styles/pages/services.scss';

const Services = () => {
  return (
    <>
      <div className='my-3'>
        <h1 className='text-center'>Our services for you</h1>
      </div>
      <div className='container-fluid mb-5' id='service-cards'>
        <div className='row'>
          <div className='col-8-lg mx-auto'>
            <div className='row gy-4'>
              {
                Sdata.map((val, ind) => {
                  return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />;
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default Services;
