import React from 'react';
import Icon from '@mdi/react';
import { 
  mdiPhoneOutline, 
  mdiEmailOutline, 
  mdiMapMarkerOutline,
  mdiInstagram, 
  mdiFacebook,
  mdiTwitter,
  mdiYoutube
} from '@mdi/js';

const Footer = () => {
  return (
    <div>
      <div id="workspace" style={{ background: '#F0F0F0'}}>
        <div className="container" style={{marginTop:100}}>
          <div className="row mb-3">
            <div className="col-md-12 col-lg-12 pt-5">
              <div className="row">
                <div className="col-md-6 col-lg-6 pe-5">
                  <h5 className="fw-bold">Office Zone</h5>
                  <p className='pt-3'>We help you find the right workspace for your business, downtown or close to home. Corporate workspaces, unique, luxury, or affordable. 
                    Whatever and wherever you need. We provide a variety of business class office spaces to accommodate your budget and business needs. No extra fees or incidentals.</p>
                </div>
                <div className="col-md-3 col-lg-3 pe-5">
                  <h6>Informasi Kontak</h6>
                  <div className="d-flex align-items-center pt-3">
                    <Icon
                      path={mdiPhoneOutline}
                      size={1}
                      style={{ marginRight: '.7rem' }}
                    />
                    <span className='text-md'>0351 2345 678</span>
                  </div>
                  <div className="d-flex align-items-center pt-2">
                    <Icon
                      path={mdiEmailOutline}
                      size={1}
                      style={{ marginRight: '.7rem' }}
                    />
                    <span className='text-md'>officezone@mail.com</span>
                  </div>
                  <div className="d-flex align-items-center pt-2">
                    <Icon
                      path={mdiMapMarkerOutline}
                      size={1}
                      style={{ marginRight: '.7rem' }}
                    />
                    <span className='text-md'>Jl. Kenangan No. 99 Planet Mars</span>
                  </div>
                </div>
                <div className="col-md-3 col-lg-3">
                  <h6 className='d-flex justify-content-end'>Ikuti Sosial Media Kami</h6>
                  <div className="row d-flex justify-content-end pt-3">
                    <div className='col-md-3 col-lg-3 me-2' style={{background: "#FFFFFF",
                        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.06)", width: 44, height: 44,
                        borderRadius: 8}}>
                      <Icon
                        path={mdiInstagram}
                        size={1}
                        style={{ marginRight: '.6rem', marginTop:".6rem"}}
                      />
                    </div>
                    <div className='col-md-3 col-lg-3 me-2' style={{background: "#FFFFFF",
                        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.06)", width: 44, height: 44,
                        borderRadius: 8}}>
                      <Icon
                        path={mdiFacebook}
                        size={1}
                        style={{ marginRight: '.6rem', marginTop:".6rem"}}
                      />
                    </div>
                    <div className='col-md-3 col-lg-3 me-2' style={{background: "#FFFFFF",
                        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.06)", width: 44, height: 44,
                        borderRadius: 8}}>
                      <Icon
                        path={mdiTwitter}
                        size={1}
                        style={{ marginRight: '.6rem', marginTop:".6rem"}}
                      />
                    </div>
                    <div className='col-md-3 col-lg-3 me-2' style={{background: "#FFFFFF",
                        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.06)", width: 44, height: 44,
                        borderRadius: 8}}>
                      <Icon
                        path={mdiYoutube}
                        size={1}
                        style={{ marginRight: '.6rem', marginTop:".6rem"}}
                      />
                    </div>
                    
                  </div>
                </div>
              </div> 
            </div>
          </div>
          <div style={{border: "0.5px solid #BFBFBF"}}></div>
          <div className="row mb-3">
            <div className='col-md-12 col-lg-12'>
              <div className='row'>
                <div className="col-md-6 col-lg-6 pt-3 text-gray-dark">
                  <p>Copyright &copy; 2022. <span className='fw-bold'>Office Zone.</span> All Right Reserved. </p>
                </div>
                <div className="col-md-6 col-lg-6 pt-3 d-flex justify-content-end text-gray-dark">
                  <span>Indonesia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer