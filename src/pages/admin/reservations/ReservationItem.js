import { mdiDeleteOutline } from '@mdi/js';
import Icon from '@mdi/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconStatus from './IconStatus';

const ReservationItem = ({ reservation }) => {
  const navigate = useNavigate();
  console.log(reservation);

  return (
    <tr>
      <td
        onClick={() => {
          navigate(`/admin/reservations/detail-reservation/${reservation.id}`);
        }}
        style={{ cursor: 'pointer' }}
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
      <td className="text-primary-dark text-sm">
        <IconStatus status={reservation.status} />
      </td>
      <td>
        <Icon
          path={mdiDeleteOutline}
          size={1.2}
          className="bg-error text-white p-1 rounded"
        />
      </td>
    </tr>
  );
};

export default ReservationItem;
