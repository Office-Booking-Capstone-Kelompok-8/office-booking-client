import React from "react";
import { useNavigate } from "react-router-dom";

const ReservationItem = ({ reservation }) => {
  const navigate = useNavigate();
  console.log(reservation);

  return (
    <tr>
      <td
        onClick={() => {
          navigate("/admin/reservations/detail-reservation/:id");
        }}
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
      <td className="text-primary-dark text-sm">{reservation.startDate}</td>
      <td className="text-primary-dark text-sm">{reservation.endDate}</td>
      <td className="text-primary-dark text-sm">{reservation.amount}</td>
      <td className="p-2">
        <span className={`py-1 px-4 rounded text-white text-sm `}>
          {reservation.status.status}
        </span>
      </td>
      <td>
        <button
          to="/"
          className="btn bg-error text-sm me-4 text-white px-4 py-2"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReservationItem;
