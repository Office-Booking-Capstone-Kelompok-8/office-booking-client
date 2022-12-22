import React, { useEffect, useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";
import Icon from "@mdi/react";
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
} from "@mdi/js";
import { ToastContainer } from "react-toastify";
import { useGetReservationsDetailQuery } from "../../../store/reservations/reservationsApiSlice";
import Spinner from "../../../components/admin/Spinner";
import IconStatus from "./IconStatus";
import ButtonReservationStatus from "./ButtonReservationStatus";
import { useDeleteReservationMutation } from "../../../store/reservations/reservationsApiSlice";
import Swal from "sweetalert2";
import { dateParse, notifyError, notifySuccess } from "../../../utils/helpers";

const DetailReservation = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // QUERY
  const {
    data: reservation,
    // error,
    isLoading,
    // isSuccess,
    refetch,
  } = useGetReservationsDetailQuery({
    id: id,
  });

  // Message State
  const [message, setMessage] = useState("");

  // console.log(error);
  console.log(reservation?.data);

  const [deleteReservation, { isSuccess, errorDelete }] =
    useDeleteReservationMutation();

  useEffect(() => {
    if (errorDelete?.status === 500) {
      notifyError("Server Error");
    }
    if (isSuccess) {
      notifySuccess("reservation deleted successfully");
    }
  }, [errorDelete, isSuccess]);

  const deleteHandler = () => {
    Swal.fire({
      title: "Delete this reservation?",
      text: "this item will be removed permanently",
      confirmButtonColor: "#3085D6",
      confirmButtonText: "Delete",
      showCancelButton: true,
    }).then((window) => {
      if (window.isConfirmed) {
        deleteReservation({ id: reservation.data.id });
      }
      navigate("/admin/reservations");
    });
  };

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
        <button
          onClick={deleteHandler}
          className="btn bg-error text-white text-sm me-4 px-5 py-2"
        >
          Delete
        </button>
      </div>

      <div className="shadow p-4 rounded">
        <div
          className="d-flex justify-content-between pb-3 mb-3 text-sm"
          style={{ borderBottom: "1px #d7d7d7 solid" }}
        >
          <div className="d-flex text-gray-dark align-items-center">
            <Icon path={mdiClockTimeFourOutline} size={1} className="me-1" />
            <span>{dateParse(reservation.data.createdAt)}</span>
          </div>
          <IconStatus status={reservation?.data?.status} />
        </div>
        <div className="d-flex">
          <div className="d-flex" style={{ marginRight: "7rem" }}>
            <img
              style={{
                width: "4rem",
                height: "4rem",
                borderRadius: "10px",
                objectFit: "cover",
                objectPosition: "center",
              }}
              src={reservation?.data?.building?.picture}
              alt="image_building"
            />
            <div className="px-3">
              <h5 className="text-primary-dark">
                {reservation?.data?.building?.name}
              </h5>
              <div className="d-flex">
                <Icon
                  path={mdiMapMarkerOutline}
                  size={1}
                  style={{ marginRight: ".7rem" }}
                  className="text-primary"
                />
                <div>
                  <h3 className="text-md">
                    {reservation?.data?.building?.city}
                  </h3>
                  <span className="text-sm">
                    {reservation?.data?.building?.address}
                  </span>
                </div>
              </div>
              <div className="d-flex align-items-center mt-3">
                <Icon
                  path={mdiCalendarRange}
                  size={1}
                  style={{ marginRight: ".7rem" }}
                  className="text-primary"
                />
                <h3 className="text-md">
                  {dateParse(reservation?.data?.startDate)}
                  <span> - </span>{" "}
                  <span>{dateParse(reservation?.data?.endDate)}</span>
                </h3>
              </div>
              <Link
                className="text-primary"
                to={`/admin/buildings/detail-building/${reservation?.data?.building?.id}`}
              >
                Info Detail Building
              </Link>
            </div>
          </div>
          <div
            style={{
              border: "1px #d7d7d7 solid",
              marginRight: "2rem",
            }}
          ></div>
          <div>
            <h5 className="text-primary-dark">
              {reservation?.data?.companyName}
            </h5>
            <div className="d-flex">
              <Icon
                path={mdiAccountCircleOutline}
                size={1}
                style={{ marginRight: ".7rem" }}
                className="text-primary"
              />
              <p>{reservation?.data?.tenant?.name}</p>
            </div>
            <div className="d-flex">
              <Icon
                path={mdiEmail}
                size={1}
                style={{ marginRight: ".7rem" }}
                className="text-primary"
              />
              <p>{reservation?.data?.tenant?.email}</p>
            </div>
          </div>
        </div>
        {reservation?.data?.status?.id > 1 && (
          <div className="mt-3">
            <h6>Message</h6>
            <p className="text-sm">
              {reservation?.data?.message || "No Message"}
            </p>
          </div>
        )}
        {(reservation?.data?.status?.id === 1 ||
          reservation?.data?.status?.id === 4 ||
          reservation?.data?.status?.id === 5) && (
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message..."
            type="text"
            className="input-field mt-3"
          />
        )}
        <div className="d-flex justify-content-between bg-gray mt-3 p-2">
          <h5>Total Price</h5>
          <h5 className="fw-bold">
            Rp. {Intl.NumberFormat("en-US").format(reservation.data.amount)}
          </h5>
        </div>
        <ButtonReservationStatus
          statusId={reservation?.data?.status?.id}
          reservationId={reservation?.data?.id}
          message={message}
          refetch={refetch}
          setMessage={setMessage}
        />
      </div>
    </div>
  );
};

export default DetailReservation;
