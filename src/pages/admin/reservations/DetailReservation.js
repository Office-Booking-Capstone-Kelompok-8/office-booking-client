import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Icon from '@mdi/react';
import {
  mdiAccountCircleOutline,
  // mdiCurrencyUsd,
  mdiMapMarkerOutline,
  mdiCalendarRange,
  mdiClockTimeFourOutline,
  mdiEmail,
  // mdiProgressCheck,
  // mdiCloseCircleOutline,
  // mdiAccountCreditCardOutline,
} from '@mdi/js';
import { ToastContainer } from 'react-toastify';
import { useGetReservationsDetailQuery } from '../../../store/reservations/reservationsApiSlice';
import Spinner from '../../../components/admin/Spinner';
import IconStatus from './IconStatus';
import ButtonReservationStatus from './ButtonReservationStatus';

const DetailReservation = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // QUERY
  const {
    data: reservation,
    error,
    isLoading,
  } = useGetReservationsDetailQuery({
    id: id,
  });
  console.log(error);
  console.log(reservation);

  if (isLoading) return <Spinner />;
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="colored"
      />
      <div className="mb-4 d-flex justify-content-between">
        <button
          className="btn bg-primary text-white text-sm me-4 px-5 py-2"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <button className="btn bg-error text-white text-sm me-4 px-5 py-2">
          Delete
        </button>
      </div>

      <div className="shadow p-4 rounded">
        <div
          className="d-flex justify-content-between pb-3 mb-3 text-sm"
          style={{ borderBottom: '1px #d7d7d7 solid' }}
        >
          <div className="d-flex text-gray-dark align-items-center">
            <Icon path={mdiClockTimeFourOutline} size={1} className="me-1" />
            <span>{reservation.data.createdAt}</span>
          </div>
          <IconStatus status={reservation.data.status} />
        </div>
        <div className="d-flex">
          <div className="d-flex" style={{ marginRight: '7rem' }}>
            <img
              style={{
                width: '4rem',
                height: '4rem',
                borderRadius: '10px',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              src={reservation.data.building.picture}
              alt="image_building"
            />
            <div className="px-3">
              <h5 className="text-primary-dark">
                {reservation.data.building.name}
              </h5>
              <div className="d-flex">
                <Icon
                  path={mdiMapMarkerOutline}
                  size={1}
                  style={{ marginRight: '.7rem' }}
                  className="text-primary"
                />
                <div>
                  <h3 className="text-md">{reservation.data.building.city}</h3>
                  <span className="text-sm">
                    {reservation.data.building.address}
                  </span>
                </div>
              </div>
              <div className="d-flex align-items-center mt-3">
                <Icon
                  path={mdiCalendarRange}
                  size={1}
                  style={{ marginRight: '.7rem' }}
                  className="text-primary"
                />
                <h3 className="text-md">
                  {reservation.data.startDate}
                  <span> - </span> <span>{reservation.data.endDate}</span>
                </h3>
              </div>
              <Link className="text-primary">Info Detail Building</Link>
            </div>
          </div>
          <div
            style={{
              border: '1px #d7d7d7 solid',
              marginRight: '2rem',
            }}
          ></div>
          <div>
            <h5 className="text-primary-dark">
              {reservation.data.companyName}
            </h5>
            <div className="d-flex">
              <Icon
                path={mdiAccountCircleOutline}
                size={1}
                style={{ marginRight: '.7rem' }}
                className="text-primary"
              />
              <p>{reservation.data.tenant.name}</p>
            </div>
            <div className="d-flex">
              <Icon
                path={mdiEmail}
                size={1}
                style={{ marginRight: '.7rem' }}
                className="text-primary"
              />
              <p>{reservation.data.tenant.email}</p>
            </div>
          </div>
        </div>
        <textarea
          placeholder="Message..."
          type="text"
          className="input-field mt-3"
        />
        <div className="d-flex justify-content-between bg-gray mt-3 p-2">
          <h5>Total Price</h5>
          <h5 className="fw-bold">Rp. {reservation.data.amount}</h5>
        </div>
        <ButtonReservationStatus statusId={reservation.data?.status?.id} />
      </div>
    </div>
  );
};

export default DetailReservation;
