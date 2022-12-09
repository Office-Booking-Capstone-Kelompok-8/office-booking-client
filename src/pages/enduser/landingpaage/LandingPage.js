import React from 'react';
import '../styles.css';
import Navbar from '../../../components/landingpage/navbar/Navbar';
import Footer from '../../../components/landingpage/navbar/Footer';
import rectangle from './../../../assets/img/rectangle.png';
import central from './../../../assets/img/central-jakarta.png';
import west from './../../../assets/img/west-jakarta.png';
import south from './../../../assets/img/south-jakarta.png';
import north from './../../../assets/img/north-jakarta.png';
import east from './../../../assets/img/east-jakarta.png';
import room1 from './../../../assets/img/room1.png';
import room2 from './../../../assets/img/room2.png';
import google from './../../../assets/img/google.png';
import appstore from './../../../assets/img/app-store.png';
import Icon from '@mdi/react';
import { mdiBank, mdiTextBoxOutline, mdiAlert } from '@mdi/js';

const LandingPage = () => {
  return (
    <div style={{ position: 'relative'}}>
      <Navbar/>
        <div className="mt-5" style={{backgroundColor: "#FAFAFA"}}>
          <div className="banner">
            <div className="row d-flex-justify-content-center" style={{marginLeft:"7rem"}}>
                <h1 className="text-white fw-bold" style={{fontSize: 50}}>Find your own Office Zone </h1>
                <h3 className="text-white fw-bold pt-3" style={{fontSize: 20}}>
                  With our global network of workspaces, find the office zone you want
                </h3>
            </div>
          </div>

          <div id="about">
            <div className="container py-5 ">
              <div className="col-md-12 col-lg-12 pt-4 d-flex justify-content-center">
                <div className="row ">
                  <div className="col-md-4 pt-5">
                    <h1 className="fw-bold pt-5" style={{fontSize: 34}}>
                      Offices to suit your usiness and budget
                    </h1>
                    <p
                      style={{fontSize: 20}}
                    >
                      We provide a variety of business className office spaces to
                      accommodate your budget and business needs. No extra fees or
                      incidentals!
                    </p>
                  </div>
                  <div className="col-md-8 text-center">
                    <img src={rectangle} alt="rectangle" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="workspace" style={{ background: 'rgba(134, 181, 246, 0.2)' }}>
            <div className="container pt-5">
              <h1 className="col-md-4 fw-bold" style={{fontSize: 34}}>
                Take control of your workspace
              </h1>
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
                        <h3 style={{fontSize: 30}}>Right space</h3>
                      </div>
                      <p className="text-neutral pt-3" style={{fontSize: 20}}>
                        Build a professional workplace for your team or enjoy a
                        labor-intensive coworking space environment. Everything you
                        need is right here.
                      </p>
                    </div>
                    <div className="col-md-4 col-lg-4 pe-5">
                      <div className="d-flex align-items-center">
                        <Icon
                          path={mdiTextBoxOutline}
                          size={1.3}
                          style={{ marginRight: '.7rem' }}
                        />
                        <h3 style={{fontSize: 30}}>As you need</h3>
                      </div>
                      <p className="text-neutral pt-3" style={{fontSize: 20}}>
                        meet all the needs of the office that you want and according
                        to all the needs that you want
                      </p>
                    </div>
                    <div className="col-md-4 col-lg-4">
                      <div className="d-flex align-items-center">
                        <Icon
                          path={mdiAlert}
                          size={1.3}
                          style={{ marginRight: '.7rem' }}
                        />
                        <h3 style={{fontSize: 30}}>Privacy and Safety</h3>
                      </div>
                      <p className="text-neutral pt-3" style={{fontSize: 20}}>
                        Build a professional workplace for your team or enjoy a
                        labor-intensive coworking space environment. Everything you
                        need is right here.
                      </p>
                    </div>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>

          <div id="city">
            <div className="pt-5">
              <h1 className="fw-bold" style={{fontSize: 34, marginLeft: 100}}>
                City
              </h1>
              <div className="row mb-3">
                <div className="col-md-12 col-lg-12 pt-5 d-flex justify-content-center">
                  <div className="row gx-4">
                    <div className="col-md-2 col-lg-2 me-4" 
                      style={{ backgroundImage: "url(" + central + ")", width: 240, height: 320}}
                      >
                      <div style={{paddingTop: 250}}>
                        <h5 className='text-white fw-bold' >Central Jakarta</h5>
                        <span className='text-white text-md'>IDR From 1.000.000</span>
                      </div>
                    </div>
                    <div className="col-md-2 col-lg-2 me-4" 
                      style={{ backgroundImage: "url(" + west + ")", width: 240, height: 320}}
                      >
                      <div style={{paddingTop: 250}}>
                        <h5 className='text-white fw-bold' >West Jakarta</h5>
                        <span className='text-white text-md'>IDR From 1.000.000</span>
                      </div>
                    </div>
                    <div className="col-md-2 col-lg-2 me-4" 
                      style={{ backgroundImage: "url(" + south + ")", width: 240, height: 320}}
                      >
                      <div style={{paddingTop: 250}}>
                        <h5 className='text-white fw-bold' >South Jakarta</h5>
                        <span className='text-white text-md'>IDR From 1.000.000</span>
                      </div>
                    </div>
                    <div className="col-md-2 col-lg-2 me-4" 
                      style={{ backgroundImage: "url(" + north + ")", width: 240, height: 320}}
                      >
                      <div style={{paddingTop: 250}}>
                        <h5 className='text-white fw-bold' >North Jakarta</h5>
                        <span className='text-white text-md'>IDR From 1.000.000</span>
                      </div>
                    </div>
                    <div className="col-md-2 col-lg-2 " 
                      style={{ backgroundImage: "url(" + east + ")", width: 240, height: 320}}
                      >
                      <div style={{paddingTop: 250}}>
                        <h5 className='text-white fw-bold' >East Jakarta</h5>
                        <span className='text-white text-md'>IDR From 1.000.000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="answers">
            <div className="pt-5">
              <div className="row mb-3 d-flex justify-content-center" >
                <div className="col-md-10 col-lg-10 pt-5" style={{ marginLeft: 200}}>
                  <div className="row">
                    <div className="col-md-3 col-lg-3" style={{paddingTop: 100, marginRight: 90}} >
                      <h3 className='fw-bold' style={{fontSize: 34}}>Find answers to questions about 
                        <h3 className='text-primary fw-bold'>Office Zone</h3>
                      </h3>
                      <span style={{fontSize: 20}}>Provide every answer of all your questions and needs.</span>
                    </div>
                    <div className="col-md-6 col-lg-6" >
                      <div className="accordion accordion-flush bg-dark" id="accordionFlushExample" >
                        <div className="accordion-item pt-3" >
                          <h2 className="accordion-header" id="flush-headingOne">
                            <button style={{fontSize: 20}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                              What additional services are offered?
                            </button>
                          </h2>
                          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body pt-3">You can also add access to printing and scanning facilities, full call management services, mail delivery, tea and coffee, catering, custom designed offices, furniture and equipment, and additional access to meeting rooms.</div>
                          </div>
                        </div>
                        <div className="accordion-item pt-3">
                          <h2 className="accordion-header" id="flush-headingTwo">
                            <button style={{fontSize: 20}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                              I don't want to be tied to a long term office lease contract, can I use the office space for my small team?
                            </button>
                          </h2>
                          <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion</div>
                          </div>
                        </div>
                        <div className="accordion-item pt-3">
                          <h2 className="accordion-header" id="flush-headingThree">
                            <button style={{fontSize: 20}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                              May we put our logo on the workspace or should we use the provided decorations and furnishings?
                            </button>
                          </h2>
                          <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion</div>
                          </div>
                        </div>
                        <div className="accordion-item pt-3">
                          <h2 className="accordion-header" id="flush-headingFour">
                            <button style={{fontSize: 20}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                              May we put our logo on the workspace or should we use the provided decorations and furnishings?
                            </button>
                          </h2>
                          <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body ">Placeholder content for this accordion</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="room">
            <div className="pt-5" style={{ marginLeft: 210}}>
              <div className="row mb-3 d-flex justify-content-center">
                <div className="col-md-12 col-lg-12 pt-5">
                  <div className="row">
                    <div className="col-md-3 col-lg-3" >
                      <img src={room1}
                        className="room1"
                        alt="room1"
                      />
                    </div>
                    <div className="col-md-3 col-lg-3" >
                      <img src={room2}
                        className="room2"
                        alt="room2"
                      />
                    </div>
                    <div className="col-md-6 col-lg-6" style={{paddingTop: 180}} >
                      <h3 className='fw-bold'>Find the room you need in 
                        <h3 className='text-primary fw-bold'>Office Zone <span className='text-black fw-bold'> app</span></h3>
                      </h3>
                      <div>
                      <img src={google}
                        className="google pe-4"
                        alt="google"
                      />
                      <img src={appstore}
                        className="appstore"
                        alt="appstore"
                      />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
    </div>
  );
};

export default LandingPage;