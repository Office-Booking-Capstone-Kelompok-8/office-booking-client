import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useGetBuildingDetailQuery } from '../../../store/building/buildingApiSLice';
import Icon from '@mdi/react';
import {
  mdiMapMarkerOutline,
  mdiCurrencyUsd,
  mdiAccountMultipleOutline
} from '@mdi/js';
import Spinner from '../../../components/admin/Spinner';
import NotFound from '../../error/NotFound';
import { useDeleteBuildingMutation } from '../../../store/building/buildingApiSLice';
import Swal from 'sweetalert2';
import { notifyError, notifySuccess } from '../../../utils/helpers';

const DetailBuilding = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { 
    isLoading,
    data: building,  
    errorDetail,
    isErrorDetail,
  } = useGetBuildingDetailQuery({id: id});
  

  const [deleteBuilding, { isSuccess, error }] = useDeleteBuildingMutation();

  useEffect(() => {
    if (error?.status === 500) {
      notifyError('Server Error');
    }
    if (error?.status === 409) {
      notifyError('Building has active reservation');
    }
    if (isSuccess) {
      notifySuccess('building deleted successfully');
    }
  }, [error, isSuccess]);

  const deleteHandler = () => {
    Swal.fire({
      title: "Delete this building?",
      text: "this item will be removed permanently",
      confirmButtonColor: "#3085D6",
      confirmButtonText: "Delete",
      showCancelButton: true
    })
    .then((window) => {
      if (window.isConfirmed) {
        deleteBuilding({ id: building.data.id })
      }    
      navigate('/admin/buildings');
    })
  };

  if (isErrorDetail) {
    if (errorDetail.status === 404) {
        console.log(errorDetail);
        return <NotFound />;
    }
  }

  if (isLoading) return <Spinner />;

  return (
    <div>
      <div className="row mb-4">
        <div className="col-md-12 d-flex justify-content-end">
          <Link
            to="/admin/buildings/edit-building/1"
            className="btn bg-success text-white text-sm me-4 px-5 py-2"
          >
            Update
          </Link>
          <button onClick={deleteHandler} className="btn bg-error text-white text-sm me-5 px-5 py-2">
            Delete
          </button>
        </div>
      </div>
      {isLoading ? (
            <Spinner/>
      ) : (
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
                {building?.data?.picture?.length !== 0
                  ? building?.data?.picture?.map((urlImg, i) => (
                    <div key={i}>
                      <img
                        src={urlImg?.url}
                        className="d-block w-100"
                        alt="office"
                      />
                    </div>
                  
                  ))
                : null}
                </div>
                {/* <div className="carousel-item">
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
                </div> */}
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
                  {building?.data?.name}
                </h3>
                <div className="d-flex align-items-center pt-4">
                  <Icon
                    path={mdiMapMarkerOutline}
                    size={1.2}
                    style={{ marginRight: '.7rem' }}
                    className="text-primary"
                  />
                  <div>
                    <h3 className="text-md">{building?.data?.location?.city?.name}</h3>
                    <span className="text-md">
                      {building?.data?.location?.address}
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
                      <span>Rp </span>{building?.data?.price?.monthly}<span> /month</span>
                    </h3>
                    <h3 className="text-md">
                      <span>Rp </span>{building?.data?.price?.annual}<span> /year</span>
                    </h3>
                  </div>
                </div>
                <div className="d-flex align-items-center pt-4">
                  <Icon
                    path={mdiAccountMultipleOutline}
                    size={1.2}
                    style={{ marginRight: '.7rem' }}
                    className="text-primary"
                  />
                  <h3 className="text-md">
                    {building?.data?.capacity}<span> people</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        )}
        <div className="descriptions pt-3 mb-3">
          <h3 className="text-primary-dark">Descriptions</h3>
          <p>
            {building?.data?.description}
          </p>
        </div>
        <div className="facilities pt-5 mb-3">
          <h3 className="text-primary-dark">Facilities</h3>
          <div className='row'>
            {building?.data?.facilities?.length !== 0
            ? building?.data?.facilities?.map((list, i) => (
              <div className='col-md-2 d-flex align-items-center pt-4'>
                <div
                    key={i}
                    style={{marginBottom: '1rem'}}
                  >
                    <div
                      className="title-facility fw-bold d-flex"
                      style={{
                        gap: '.5rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <div>
                        <div
                          style={{
                            gap: '.5rem',
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          <img
                            src={list?.icon}
                            alt="icons"
                            style={{
                              width: '1.5rem',
                            }}
                          />
                          <span>{list?.name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
            ))
          : null}
            </div>
        </div>
    </div>
  );
};

export default DetailBuilding;
