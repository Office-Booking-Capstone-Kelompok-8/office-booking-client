import React, { useState, useEffect } from 'react';
import reserva from './../../../assets/img/reservation.png';
import Pagination from '../../../components/admin/Pagination';
import {
  useGetReservationsQuery,
  useGetReservationsTotalQuery,
} from '../../../store/reservations/reservationsApiSlice';
import ReservationItem from './ReservationItem';
import Spinner from '../../../components/admin/Spinner';
import { ToastContainer } from 'react-toastify';
import IconStatus from './IconStatus';

const Reservations = () => {
  const {
    data: reservations,
    isLoading,
    isSuccess,
  } = useGetReservationsQuery({ page: 1, limit: 20 });
  const [reservation, setReservation] = useState(null);

  const { data: reservationTotal, error: reservationTotalError } =
    useGetReservationsTotalQuery();
  console.log(reservationTotal, reservationTotalError);
  // Pagination
  const totalReservations = reservation?.length;
  const reservationPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  // Mengatur data per page
  const lastPage = currentPage * reservationPerPage;
  const firstPage = lastPage - reservationPerPage;
  const currentReservation = reservation?.slice(firstPage, lastPage);

  useEffect(() => {
    if (isSuccess) {
      setReservation(reservations.data);
    }
  }, [isSuccess, reservations]);

  const nextPage = () =>
    setCurrentPage((prev) => {
      if (prev === Math.ceil(totalReservations / reservationPerPage)) {
        return prev;
      }
      return prev + 1;
    });
  const prevPage = () =>
    setCurrentPage((prev) => {
      if (prev === 1) {
        return prev;
      }
      return prev - 1;
    });
  const paginate = (numPage) => setCurrentPage(numPage);

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
      <div className="row px-2">
        <div className="col-12  col-md-7 w-100 col-lg-8">
          <div className="row mb-3">
            <div className="col-6 p-3">
              <div className="shadow-sm row rounded p-2 align-items-center">
                <div className="col-4">
                  <img src={reserva} className="w-100" alt="reservation" />
                </div>
                <div className="col-8">
                  <h3 className="fw-bold">
                    {reservationTotal?.data?.byTimeframe?.allTime}
                  </h3>
                  <span className="text-sm ">Total reservation</span>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex flex-column pt-3 p-5">
              <div className="col-12 row align-items-center d-flex gap-5 flex-lg-row">
                {reservationTotal?.data?.byStatus?.map((status) => (
                  <div
                    className="col-2 row rounded w-15 h-6"
                    key={status.statusId}
                  >
                    <IconStatus
                      status={{
                        id: status.statusId,
                        status: status.statusName,
                      }}
                      total={true}
                      count={status.count}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div
          className="card"
          style={{
            boxShadow: '0px 8px 24px rgba(112, 144, 176, 0.25)',
            borderRadius: 9,
          }}
        >
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th className="text-sm text-gray-dark">Building Name</th>
                  <th className="text-sm text-gray-dark">Email</th>
                  <th className="text-sm text-gray-dark">Start Date</th>
                  <th className="text-sm text-gray-dark">End Date</th>
                  <th className="text-sm text-gray-dark">Price</th>
                  <th className="text-sm text-gray-dark">Status</th>
                  <th className="text-sm text-gray-dark"></th>
                </tr>
              </thead>
              <tbody>
                {currentReservation?.map((reservation) => (
                  <ReservationItem
                    reservation={reservation}
                    key={reservation?.id}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-center">
            <Pagination
              currentPage={currentPage}
              totalUsers={totalReservations}
              userPerPage={reservationPerPage}
              nextPage={nextPage}
              paginate={paginate}
              prevPage={prevPage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Reservations;
