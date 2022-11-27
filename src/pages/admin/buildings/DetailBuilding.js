import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import {
  mdiMapMarkerOutline,
  mdiCurrencyUsd,
  mdiArrowExpandAll,
  mdiAccountMultipleOutline,
  mdiElevatorPassengerOutline,
} from '@mdi/js';

const DetailBuilding = () => {
  return (
    <div>
      <div className="row mb-4">
        <div className="col-md-12 d-flex justify-content-end">
          <Link
            to="/admin/buildings/edit-building"
            className="btn bg-success text-white text-sm me-4 px-5 py-2"
          >
            Update
          </Link>
          <button className="btn bg-error text-white text-sm me-5 px-5 py-2">
            Delete
          </button>
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
                  path={mdiCurrencyUsd}
                  size={1.2}
                  style={{ marginRight: '.7rem' }}
                  className="text-primary"
                />
                <div>
                  <h3 className="text-md">
                    <span>Rp </span>350.000<span> /month</span>
                  </h3>
                  <h3 className="text-md">
                    <span>Rp </span>350.000<span> /year</span>
                  </h3>
                </div>
              </div>
              <div className="d-flex align-items-center pt-4">
                <Icon
                  path={mdiArrowExpandAll}
                  size={1.2}
                  style={{ marginRight: '.7rem' }}
                  className="text-primary"
                />
                <h3 className="text-md">
                  350<span> m2</span>
                </h3>
              </div>
              <div className="d-flex align-items-center pt-4">
                <Icon
                  path={mdiAccountMultipleOutline}
                  size={1.2}
                  style={{ marginRight: '.7rem' }}
                  className="text-primary"
                />
                <h3 className="text-md">
                  50<span> people</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="descriptions pt-3 mb-3">
        <h3 className="text-primary-dark">Descriptions</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Sed massa velit faucibus
          vitae. Sed adipiscing egestas amet scelerisque. At aenean at sed
          commodo consectetur volutpat. Venenatis tristique facilisi accumsan
          vitae amet morbi justo eu aliquam. Sed tellus id placerat ipsum felis
          mauris eu convallis. Ac scelerisque urna id at lectus sed amet nunc.
          Duis velit sit consectetur lacus aenean accumsan amet aliquam. Hac eu
          neque sodales vitae commodo. Natoque morbi tortor aliquam nisi felis.
          Consectetur viverra sagittis nulla dictum scelerisque.
        </p>
      </div>
      <div className="facilities pt-5 mb-3">
        <h3 className="text-primary-dark">Facilities</h3>
        <div className="d-flex align-items-center pt-4">
          <Icon
            path={mdiElevatorPassengerOutline}
            size={1.1}
            style={{ marginRight: '.7rem' }}
            className="text-primary"
          />
          <h3 className="text-md me-5">Elevator</h3>
          <Icon
            path={mdiElevatorPassengerOutline}
            size={1.1}
            style={{ marginRight: '.7rem' }}
            className="text-primary"
          />
          <h3 className="text-md">Elevator</h3>
        </div>
        <div className="d-flex align-items-center pt-4">
          <Icon
            path={mdiElevatorPassengerOutline}
            size={1.1}
            style={{ marginRight: '.7rem' }}
            className="text-primary"
          />
          <h3 className="text-md me-5">Elevator</h3>
          <Icon
            path={mdiElevatorPassengerOutline}
            size={1.1}
            style={{ marginRight: '.7rem' }}
            className="text-primary"
          />
          <h3 className="text-md">Elevator</h3>
        </div>
        <div className="d-flex align-items-center pt-4">
          <Icon
            path={mdiElevatorPassengerOutline}
            size={1.1}
            style={{ marginRight: '.7rem' }}
            className="text-primary"
          />
          <h3 className="text-md me-5">Elevator</h3>
          <Icon
            path={mdiElevatorPassengerOutline}
            size={1.1}
            style={{ marginRight: '.7rem' }}
            className="text-primary"
          />
          <h3 className="text-md">Elevator</h3>
        </div>
        <div className="d-flex align-items-center pt-4">
          <Icon
            path={mdiElevatorPassengerOutline}
            size={1.1}
            style={{ marginRight: '.7rem' }}
            className="text-primary"
          />
          <h3 className="text-md me-5">Elevator</h3>
          <Icon
            path={mdiElevatorPassengerOutline}
            size={1.1}
            style={{ marginRight: '.7rem' }}
            className="text-primary"
          />
          <h3 className="text-md">Elevator</h3>
        </div>
        <div className="d-flex align-items-center pt-4">
          <Icon
            path={mdiElevatorPassengerOutline}
            size={1.1}
            style={{ marginRight: '.7rem' }}
            className="text-primary"
          />
          <h3 className="text-md me-5">Elevator</h3>
          <Icon
            path={mdiElevatorPassengerOutline}
            size={1.1}
            style={{ marginRight: '.7rem' }}
            className="text-primary"
          />
          <h3 className="text-md">Elevator</h3>
        </div>
      </div>
    </div>
  );
};

export default DetailBuilding;
