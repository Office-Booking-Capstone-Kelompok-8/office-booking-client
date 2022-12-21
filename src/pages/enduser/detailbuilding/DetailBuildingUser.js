import React from 'react';
import Navbar from '../../../components/landingpage/navbar/Navbar';
import Footer from '../../../components/landingpage/navbar/Footer';
import backuser from './../../../assets/img/backuser.png';
import Icon from '@mdi/react';
import {
  mdiMapMarker,
  mdiArrowExpandAll,
  mdiAccountMultipleOutline,
} from '@mdi/js';
import { useParams } from 'react-router-dom';
import '../styles.css';
import { useGetBuildingDetailEndUserQuery } from '../../../store/building/buildingApiSLice';

const DetailBuildingUser = () => {
  const { id } = useParams();
  const { data: building } = useGetBuildingDetailEndUserQuery({ id: id });
  return (
    <div style={{ position: 'relative' }}>
      <Navbar />
      <div className="mt-5" style={{ backgroundColor: '#FAFAFA' }}>
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-8 col-lg-8">
              <img
                src={building?.data?.pictures[0]?.url}
                className="card-img"
                alt="office"
                style={{ width: 860, height: 460, borderRadius: 8 }}
              />
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="col-md-2">
                <img
                  src={building?.data?.pictures[0]?.url}
                  className="card-img"
                  alt="office"
                  style={{ width: 450, height: 225, borderRadius: 8 }}
                />
              </div>
              <div
                className="col-md-2 col-lg-2 mt-2"
                style={{
                  width: 450,
                  height: 225,
                  borderRadius: 8,
                  background:
                    'linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(' +
                    backuser +
                    ')',
                }}
              >
                <div
                  style={{ paddingTop: 90 }}
                  className="d-flex justify-content-center"
                >
                  <button
                    type="button"
                    className="btn bg-gray"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    See all photos
                  </button>
                  <div
                    className="modal modal-lg fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title fw-bold"
                            id="exampleModalLabel"
                          >
                            Buildings Office picture
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="row pt-2">
                            {building?.data?.pictures?.map((pic) => (
                              <div className="col-md-6 col-lg-6" key={pic.id}>
                                <img
                                  src={pic?.url}
                                  className="card-img"
                                  alt="office"
                                  style={{ borderRadius: 8 }}
                                />
                              </div>
                            ))}
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
            <h2 className="fw-bold">{building?.data?.name}</h2>
            <div className="col-md-8">
              <div className="d-flex align-items-center">
                <Icon
                  path={mdiMapMarker}
                  size={1.2}
                  style={{ marginRight: '.7rem' }}
                />
                <p className="text-md pt-3">
                  {building?.data?.location?.address}
                </p>
              </div>
            </div>
            <div
              className="col-md-4 justify-content-end pt-3"
              style={{
                backgroundColor: 'white',
                width: 400,
                height: 80,
                marginLeft: 40,
              }}
            >
              <button
                className="btn bg-primary text-white text-md"
                style={{ width: 370, height: 45 }}
              >
                Booking now
              </button>
            </div>
          </div>

          <div className="row pt-4">
            <div
              className="col-md-8"
              style={{ border: '0.5px solid #BFBFBF' }}
            ></div>
            <h4 className="fw-bold pt-5">Building specifications</h4>
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
            <div
              className="col-md-8"
              style={{ border: '0.5px solid #BFBFBF' }}
            ></div>
            <h4 className="fw-bold pt-5">Description</h4>
            <div className="col-md-8 pt-4">
              <p>{building?.data?.description}</p>
            </div>
          </div>

          <div className="row pt-4">
            <div
              className="col-md-8"
              style={{ border: '0.5px solid #BFBFBF' }}
            ></div>
            <h4 className="fw-bold pt-5">Facilities</h4>
            <div className="row">
              {building?.data?.facilities?.map((fac) => (
                <div className="col-md-3" key={fac.id}>
                  <h5 className="pt-4">{fac.name}</h5>
                  <div className="d-flex align-items-center gap-2 pt-3">
                    <img src={fac.icon} alt="icon" />
                    <span>{fac.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
};

export default DetailBuildingUser;
