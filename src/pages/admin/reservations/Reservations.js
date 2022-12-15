import React, { useState, useEffect } from "react";
import reserva from "./../../../assets/img/reservation.png";
import Icon from "@mdi/react";
import {
  mdiClockTimeFourOutline,
  mdiProgressCheck,
  mdiCloseCircleOutline,
  mdiAccountCreditCardOutline,
} from "@mdi/js";
import Pagination from "../../../components/admin/Pagination";
import { useGetReservationsQuery } from "../../../store/reservations/reservationsApiSlice";
import ReservationItem from "./ReservationItem";
import Spinner from "../../../components/admin/Spinner";

const Reservations = () => {
  const {
    data: reservations,
    isLoading,
    isSuccess,
    error,
  } = useGetReservationsQuery({ page: 1, limit: 20 });
  const [reservation, setReservation] = useState(null);
  console.log(error);

  // Pagination
  const totalReservations = reservation?.length;
  const reservationPerPage = 20;
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

  console.log(reservations);

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
      <div className="row px-2">
        <div className="col-12 col-md-7 col-lg-8">
          <div className="row mb-3">
            <div className="col-6 p-3">
              <div className="shadow-sm row rounded p-2 align-items-center">
                <div className="col-4">
                  <img src={reserva} className="w-100" alt="reservation" />
                </div>
                <div className="col-8">
                  <h3 className="fw-bold">750</h3>
                  <span className="text-sm ">Total reservation</span>
                </div>
              </div>
            </div>
            <div className="col-6 d-flex flex-column pt-3 p-5">
              <div className="col-12 align-items-center d-flex flex-lg-row">
                <div className="col-3 me-5 shadow-sm row rounded w-15 h-6">
                  <div className="text-warning d-flex align-items-center">
                    <Icon
                      path={mdiClockTimeFourOutline}
                      size={1}
                      style={{ marginRight: ".7rem" }}
                    />
                    <span className="text-gray-dark text-sm">pending</span>
                  </div>
                  <h3 className="fw-bold text-md">45</h3>
                </div>
                <div className="col-3 me-5 shadow-sm row rounded w-15 h-6">
                  <div className="text-success d-flex align-items-center">
                    <Icon
                      path={mdiProgressCheck}
                      size={1}
                      style={{ marginRight: ".7rem" }}
                    />
                    <span className="text-gray-dark text-sm">accepted</span>
                  </div>
                  <h3 className="fw-bold text-md">45</h3>
                </div>
                <div className="col-3 me-5 shadow-sm row rounded w-15 h-6">
                  <div className="text-error d-flex align-items-center">
                    <Icon
                      path={mdiCloseCircleOutline}
                      size={1}
                      style={{ marginRight: ".7rem" }}
                    />
                    <span className="text-gray-dark text-sm">reject</span>
                  </div>
                  <h3 className="fw-bold text-md">45</h3>
                </div>
                <div className="col-3 me-5 shadow-sm row rounded w-15 h-6">
                  <div className="text-primary d-flex align-items-center">
                    <Icon
                      path={mdiAccountCreditCardOutline}
                      size={1}
                      style={{ marginRight: ".7rem" }}
                    />
                    <span className="text-gray-dark text-sm">
                      waiting payment
                    </span>
                  </div>
                  <h3 className="fw-bold text-md">45</h3>
                </div>
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
            boxShadow: "0px 8px 24px rgba(112, 144, 176, 0.25)",
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
              totalReservations={totalReservations}
              reservationPerPage={reservationPerPage}
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
