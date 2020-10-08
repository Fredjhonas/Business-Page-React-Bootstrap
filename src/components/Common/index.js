import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const Common = (props) => {
  const { title, subtitle, btname, imgsrc, visit } = props;

  return (
    <>
      <section id='header' className='d-flex align-items-center'>
        <div className='container-fluid nav_bg'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row'>
                <div className='col-md-12 col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justified-content-center flex-column'>
                  <h1>{title}<strong className='brand-name'><br />Sky Hosting</strong></h1>
                  <h2 className='my-3'>{subtitle}</h2>
                  <div className='mt-3'>
                    <NavLink to={visit} className='btn-get-started'>{btname}</NavLink>
                  </div>
                </div>
                <div className='col-lg-6 order-1 order-xl-2 header-img'>
                  <img src={imgsrc} className='img-fluid animated' alt='about img' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  );
};

export default Common;
