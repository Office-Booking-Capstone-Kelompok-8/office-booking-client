import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import {
  mdiAccountCircleOutline,
  mdiCurrencyUsd,
  mdiMapMarkerOutline,
  mdiCalendarRange,
  mdiClockTimeFourOutline,
  mdiProgressCheck,
  mdiCloseCircleOutline,
  mdiAccountCreditCardOutline
} from '@mdi/js';

const DetailReservation = () => {
    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState("");
  return (
    <div>
      <div className="row mb-4">
        <div className="col-md-12 d-flex justify-content-end">
          <button className="btn bg-error text-white text-sm me-4 px-5 py-2">
            Delete
          </button>
          <Link
            to="/admin/reservations"
            className="btn bg-primary text-white text-sm me-4 px-5 py-2"
          >
            Save
          </Link>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-12 col-md-12 col-lg-12">
          <div className="row mb-3">
            <div className="col-md-6 col-lg-6 p-3">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner" style={{ borderRadius: 12 }}>
                  <div className="carousel-item active" style={{ zIndex: -1 }}>
                    <img
                      src="https://rupacita.com/wp-content/uploads/2020/11/connecticut-innovations-offices-new-haven-2-1536x919-1.jpg"
                      className="d-block w-100"
                      alt="office"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://rupacita.com/wp-content/uploads/2020/11/centaline-property-offices-shenzhen-6-1200x802-1.jpg"
                      className="d-block w-100"
                      alt="office"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://rupacita.com/wp-content/uploads/2020/11/skyscanner-office-design-1-1080x716.jpg"
                      className="d-block w-100"
                      alt="office"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 p-3">
              <h3 className="text-primary-dark pt-3">
                Melati Jaya Meeting Room
              </h3>
              <div className="d-flex align-items-center ">
                <Icon
                  path={mdiAccountCircleOutline}
                  size={1.2}
                  style={{ marginRight: '.7rem' }}
                  className="text-primary"
                />
                <div>
                  <h3 className="text-md">Mr. Robert</h3>
                  <span className="text-md text-gray-dark">
                    robert@mail.com
                  </span>
                </div>
              </div>
              <div className="align-items-center pt-4">
                <h3 className="text-md">Status</h3>
                <div className="dropdown">
                    <div 
                      className="dropdown-btn dropdown-toggle" 
                      onClick={(e) => setIsActive(!isActive)}>
                      {selected}
                    </div>
                    {isActive && (
                      <div className="dropdown-content" 
                        onClick={e => {
                            setSelected(e.target.textContent)
                            setIsActive(false)}}>
                          <div className="dropdown-item">
                            <div className="text-warning d-flex align-items-center">
                              <Icon
                                path={mdiClockTimeFourOutline}
                                size={0.8}
                                style={{ marginRight: '.7rem' }}
                                className="text-warning text-sm"
                              />pending
                            </div>
                          </div>
                          <div className="dropdown-item">
                            <div className="text-success d-flex align-items-center">
                              <Icon
                                path={mdiProgressCheck}
                                size={0.8}
                                style={{ marginRight: '.7rem' }}
                              />accept
                            </div>
                          </div>
                          <div className="dropdown-item">
                            <div className="text-error d-flex align-items-center">
                              <Icon
                                path={mdiCloseCircleOutline}
                                size={0.8}
                                style={{ marginRight: '.7rem' }}
                              />reject
                            </div>
                          </div>
                          <div className="dropdown-item">
                            <div className="text-primary d-flex align-items-center">
                              <Icon
                                path={mdiAccountCreditCardOutline}
                                size={0.8}
                                style={{ marginRight: '.7rem' }}
                              />waiting payment
                            </div>
                          </div>
                      </div>
                    )}
                  </div>
                
              </div>
              <div className="d-flex align-items-center pt-4">
                <Icon
                  path={mdiMapMarkerOutline}
                  size={1.2}
                  style={{ marginRight: '.7rem' }}
                  className="text-primary"
                />
                <div>
                  <h3 className="text-md">Jakarta Pusat</h3>
                  <span className="text-md">
                    Jl Mekar Raya no 13 RT 12 RW 3, Mieduy
                  </span>
                </div>
              </div>
              <div className="d-flex align-items-center pt-4">
                <Icon
                  path={mdiCalendarRange}
                  size={1.2}
                  style={{ marginRight: '.7rem' }}
                  className="text-primary"
                />
                <h3 className="text-md">
                    13 October<span> - </span> <span>13 December</span>
                </h3>
              </div>
              <div className="d-flex align-items-center pt-4">
                <Icon
                  path={mdiCurrencyUsd}
                  size={1.2}
                  style={{ marginRight: '.7rem' }}
                  className="text-primary"
                />
                <div>
                    <h3 className="text-md">
                        <span>Rp </span>2.700.000
                    </h3>
                    <h3 className="text-md">
                        <span>Rp </span>1. 350.000<span> /month</span>
                    </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailReservation