import { mdiDeleteOutline } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import IconStatus from "./IconStatus";
import { useDeleteReservationMutation } from "../../../store/reservations/reservationsApiSlice";
import Swal from "sweetalert2";
import { dateParse, notifyError, notifySuccess } from "../../../utils/helpers";

const ReservationItem = ({ reservation }) => {
  const [deleteReservation, { isSuccess, error }] =
    useDeleteReservationMutation();

  useEffect(() => {
    if (error?.status === 500) {
      notifyError("Server Error");
    }
    if (isSuccess) {
      notifySuccess("reservation deleted successfully");
    }
  }, [error, isSuccess]);

  const deleteHandler = () => {
    Swal.fire({
      title: "Delete this reservation?",
      text: "this item will be removed permanently",
      confirmButtonColor: "#3085D6",
      confirmButtonText: "Delete",
      showCancelButton: true,
    }).then((window) => {
      if (window.isConfirmed) {
        deleteReservation({ id: reservation.id });
      }
    });
  };

  const navigate = useNavigate();
  return (
    <tr>
      <td
        onClick={() => {
          navigate(`/admin/reservations/detail-reservation/${reservation.id}`);
        }}
        style={{ cursor: "pointer" }}
      >
        <h1 className="text-primary-dark text-sm">
          <img
            src={reservation.building.picture}
            alt="name"
            className="img-building 4 h-4 m-2"
          />
          {reservation.building.name}
        </h1>
      </td>
      <td className="text-primary-dark text-sm">{reservation.tenant.email}</td>
      <td className="text-primary-dark text-sm">
        {dateParse(reservation.startDate)}
      </td>
      <td className="text-primary-dark text-sm">
        {dateParse(reservation.endDate)}
      </td>
      <td className="text-primary-dark text-sm">
        Rp. {Intl.NumberFormat("en-US").format(reservation.amount)}
      </td>
      <td className="text-primary-dark text-sm">
        <IconStatus status={reservation.status} />
      </td>
      <td>
        <Icon
          path={mdiDeleteOutline}
          onClick={deleteHandler}
          size={1.2}
          className="bg-error text-white p-1 rounded"
          style={{ cursor: "pointer" }}
        />
      </td>
    </tr>
  );
};

export default ReservationItem;
