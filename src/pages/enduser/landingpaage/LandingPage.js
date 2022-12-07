import React from 'react';
import '../styles.css';
import rectangle from './../../../assets/img/rectangle.png';
import Icon from '@mdi/react';
import {
  mdiBank,
  mdiTextBoxOutline,
  mdiAlert
} from '@mdi/js';

const LandingPage = () => {
  return (
    <div>
      <div className="banner">
        <div className="content">
          <h1 className='text-white'>Find your own Office Zone </h1>
          <h3 className='text-white'>With our global network of workspaces, find the office zone you want</h3>
          <button className="btn">Show now</button>
        </div>
      </div>

      <div
        id="about"
      >
        <div className="container py-5">
          <div className="row">
            <div className="col-md-5">
              <h1 className='fw-bold'>Offices to suit your usiness and budget</h1>
              <p className='text-lg' style={{textAlign: 'justify', textJustify: 'inter-word'}}>
              We provide a variety of business class office spaces to accommodate your 
              budget and business needs. No extra fees or incidentals!
              </p>
            </div>
            <div className="col-md-7 text-center">
              <img
                src={rectangle}
                alt="rectangle"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

    <div
      id="workspace"
      style={{background: "rgba(134, 181, 246, 0.2)"}}
    >
      <div className="container pt-5">
        <h3 className='col-md-4 fw-bold'>Take control of your workspace</h3>
        <div className="row mb-3">
          <div className="col-md-12 col-lg-12 pt-5">
            <div className="row">
              <div className="col-md-4 col-lg-4 pe-5">
                <div className="d-flex align-items-center">
                  <Icon
                    path={mdiBank}
                    size={1.3}
                    style={{ marginRight: '.7rem' }}
                  />
                  <h2>Right space</h2>
                </div>
                <p className='text-lg pt-3'>
                  Build a professional workplace for your team or enjoy a labor-intensive 
                  coworking space environment. Everything you need is right here.
                </p>
              </div>
              <div className="col-md-4 col-lg-4 pe-5">
                <div className="d-flex align-items-center">
                  <Icon
                    path={mdiTextBoxOutline}
                    size={1.3}
                    style={{ marginRight: '.7rem' }}
                  />
                  <h2>As you need</h2>
                </div>
                <p className='text-lg pt-3' >
                  meet all the needs of the office that you want and according to all the needs that you want
                </p>
              </div>
              <div className="col-md-4 col-lg-4">
                  <div className="d-flex align-items-center">
                      <Icon
                        path={mdiAlert}
                        size={1.3}
                        style={{ marginRight: '.7rem' }}
                    />
                    <h2>Privacy and Safety</h2>
                  </div>
                <p className='text-lg pt-3' >
                  Build a professional workplace for your team or enjoy a labor-intensive 
                  coworking space environment. Everything you need is right here.
                </p>
              </div>
            </div>
            <br/>
          </div>
        </div>
      </div>
    </div>  
    </div>
  )
}

export default LandingPage