import React from 'react';
import Navbar from '../../../components/landingpage/navbar/Navbar';
import Footer from '../../../components/landingpage/navbar/Footer';
import backuser from './../../../assets/img/backuser.png';
import Icon from '@mdi/react';
import { 
  mdiMapMarker, 
  mdiArrowExpandAll,
  mdiAccountMultipleOutline
} from '@mdi/js';
import { Link } from 'react-router-dom';
import '../styles.css';

const DetailBuildingUser = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Navbar/>
        <div className='mt-5'>
          <div className='container pt-5'>
            <div className='row'>
              <div className='col-md-8 col-lg-8'>
                <img src="https://www.pinhome.id/kamus-istilah-properti/wp-content/uploads/2021/10/unsplash-3.jpg"
                  className="card-img"
                  alt="office"
                  style={{width: 860,height: 460,borderRadius: 8}}
                />
              </div>
              <div className='col-md-4 col-lg-4'>
                <div className='col-md-2'>
                  <img src="https://www.pinhome.id/kamus-istilah-properti/wp-content/uploads/2021/10/unsplash-3.jpg"
                    className="card-img"
                    alt="office"
                    style={{width: 450,height: 225, borderRadius: 8}}
                  />
                </div>
                <div className="col-md-2 col-lg-2 mt-2" 
                  style={{ 
                    width: 450,
                    height: 225,
                    borderRadius: 8, 
                    background: "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(" + backuser + ")"
                  }}
                  >
                  <div style={{paddingTop: 90}} className="d-flex justify-content-center">
                    <button type="button" className="btn bg-gray" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      See all photos
                    </button>
                    <div className="modal modal-lg fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title fw-bold" id="exampleModalLabel">Room's picture</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body">
                            <div className='row'>
                              <div className='col-md-12 col-lg-12'>
                                <img src="https://www.pinhome.id/kamus-istilah-properti/wp-content/uploads/2021/10/unsplash-3.jpg"
                                  className="card-img"
                                  alt="office"
                                  style={{borderRadius: 8}}
                                />
                              </div>
                            </div>
                            <div className='row pt-2'>
                              <div className='col-md-6 col-lg-6'>
                                <img src="https://www.pinhome.id/kamus-istilah-properti/wp-content/uploads/2021/10/unsplash-3.jpg"
                                  className="card-img"
                                  alt="office"
                                  style={{borderRadius: 8}}
                                />
                              </div>
                              <div className='col-md-6 col-lg-6'>
                                <img src="https://www.pinhome.id/kamus-istilah-properti/wp-content/uploads/2021/10/unsplash-3.jpg"
                                  className="card-img"
                                  alt="office"
                                  style={{borderRadius: 8}}
                                />
                              </div>
                            </div>
                            <h5 className="modal-title fw-bold pt-2" id="exampleModalLabel">Building picture</h5>
                            <div className='row'>
                              <div className='col-md-12 col-lg-12'>
                                <img src="https://www.pinhome.id/kamus-istilah-properti/wp-content/uploads/2021/10/unsplash-3.jpg"
                                  className="card-img"
                                  alt="office"
                                  style={{borderRadius: 8}}
                                />
                              </div>
                            </div>
                            <div className='row pt-2'>
                              <div className='col-md-6 col-lg-6'>
                                <img src="https://www.pinhome.id/kamus-istilah-properti/wp-content/uploads/2021/10/unsplash-3.jpg"
                                  className="card-img"
                                  alt="office"
                                  style={{borderRadius: 8}}
                                />
                              </div>
                              <div className='col-md-6 col-lg-6'>
                                <img src="https://www.pinhome.id/kamus-istilah-properti/wp-content/uploads/2021/10/unsplash-3.jpg"
                                  className="card-img"
                                  alt="office"
                                  style={{borderRadius: 8}}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          <div className="row pt-4">
              <h3 className="fw-bold">Acterna Corp.</h3>
              <div className="col-md-8">
                <div className="d-flex align-items-center">
                  <Icon
                    path={mdiMapMarker}
                    size={1.2}
                    style={{ marginRight: '.7rem' }}
                  />
                  <p className='text-md pt-3'>Pancoran 1, Jl. Prof. DR. Satrio No.23, Karet Semanggi, 
                  Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 29954</p>
                </div>
              </div>
            <div className="col-md-4 justify-content-end pt-3" 
              style={{backgroundColor:"white", width: 400,height: 80, marginLeft:40}}>
              <Link
                to="/detail-building-user"
                className="btn bg-primary text-white text-md"
                style={{width: 370,height: 45}}
              >
                Add building
              </Link>
            </div>
          </div>

          
          <div className="row pt-4">
            <div className='col-md-8' style={{border: "0.5px solid #BFBFBF"}}></div>
              <h5 className="fw-bold pt-5">Building specifications</h5>
              <div className="col-md-8">
                <div className="d-flex align-items-center pt-4">
                  <Icon
                    path={mdiAccountMultipleOutline}
                    size={1.2}
                    style={{ marginRight: '.7rem' }}
                  />
                  <h3 className="text-md">
                    50<span> people</span>
                  </h3>
                </div>
                <div className="d-flex align-items-center pt-4">
                <Icon
                  path={mdiArrowExpandAll}
                  size={1.2}
                  style={{ marginRight: '.7rem' }}
                />
                <h3 className="text-md">
                  350<span> m2</span>
                </h3>
              </div>
            </div>
          </div>
          
          <div className="row pt-4">
            <div className='col-md-8' style={{border: "0.5px solid #BFBFBF"}}></div>
            <h5 className="fw-bold pt-5">Description</h5>
            <div className="col-md-8 pt-4">
              <p>
                Workspace is an area provided by the company for its employees to do their daily work. The current trend shows an open space workspace, which is a workspace without a partition (cubicle). This condition is expected to make it easier for employees to process onboarding, collaborating and interacting easily.
                Meeting Room is an area used to conduct closed meetings or discussions that are confidential (confidential).
                The HRD room is the room used by the personnel division or Human Resources Development to work. Usually the HRD division holds many of the company's internal documents starting from employee documents, company letters and others, so a special area is created for HRD.
                Finance Room is a room used by the finance division to work. Just like HRD, usually the finance division keeps many important documents related to company finances, so to avoid things that are not desirable, the finance division has a separate area.
                Lounge is an area used for relaxing or resting by employees.</p>
            </div>
          </div>

          <div className="row pt-4">
            <div className='col-md-8' style={{border: "0.5px solid #BFBFBF"}}></div>
            <h5 className="fw-bold pt-5">Facilities</h5>
            <div className="row">
              <div className="col-md-3">
                <h5 className='pt-4'>Food & Drink</h5>
                <div className="d-flex align-items-center pt-3">
                  <Icon
                    path={mdiAccountMultipleOutline}
                    size={1.2}
                    style={{ marginRight: '.7rem' }}
                    className="text-primary"
                  />
                  <span>Coffee house on site</span>
                </div>
                <div className="d-flex align-items-center pt-2">
                  <Icon
                    path={mdiAccountMultipleOutline}
                    size={1.2}
                    style={{ marginRight: '.7rem' }}
                    className="text-primary"
                  />
                  <span>Tea/Coffee maker</span>
                </div>
              </div>
              <div className="col-md-3">
                <h5 className='pt-4'>Food & Drink</h5>
                <div className="d-flex align-items-center pt-3">
                  <Icon
                    path={mdiAccountMultipleOutline}
                    size={1.2}
                    style={{ marginRight: '.7rem' }}
                    className="text-primary"
                  />
                  <span>Fire extinguishers</span>
                </div>
                <div className="d-flex align-items-center pt-2">
                  <Icon
                    path={mdiAccountMultipleOutline}
                    size={1.2}
                    style={{ marginRight: '.7rem' }}
                    className="text-primary"
                  />
                  <span>CCTV</span>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-3">
                <h5 className='pt-5'>General</h5>
                <div className="d-flex align-items-center pt-3">
                  <Icon
                    path={mdiAccountMultipleOutline}
                    size={1.2}
                    style={{ marginRight: '.7rem' }}
                    className="text-primary"
                  />
                  <span>Coffee house on site</span>
                </div>
                <div className="d-flex align-items-center pt-2">
                  <Icon
                    path={mdiAccountMultipleOutline}
                    size={1.2}
                    style={{ marginRight: '.7rem' }}
                    className="text-primary"
                  />
                  <span>Tea/Coffee maker</span>
                </div>
              </div>
              <div className="col-md-3">
                <h5 className='pt-5'>Media & Technology</h5>
                <div className="d-flex align-items-center pt-3">
                  <Icon
                    path={mdiAccountMultipleOutline}
                    size={1.2}
                    style={{ marginRight: '.7rem' }}
                    className="text-primary"
                  />
                  <span>Fire extinguishers</span>
                </div>
                <div className="d-flex align-items-center pt-2">
                  <Icon
                    path={mdiAccountMultipleOutline}
                    size={1.2}
                    style={{ marginRight: '.7rem' }}
                    className="text-primary" 
                  />
                  <span>CCTV</span>
                </div>
              </div>
            </div>
          </div>


          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default DetailBuildingUser