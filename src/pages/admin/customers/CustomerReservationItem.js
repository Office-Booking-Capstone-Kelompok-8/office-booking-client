import React from 'react'
import IconStatus from '../reservations/IconStatus'

const CustomerReservationItem = ({reservation, i}) => {
  return (
    <tr >
      <td>
      <h1 className="text-primary-dark text-sm">
          <img
          src={reservation?.building?.picture}
          alt="building"
          className="img-building 4 h-4 m-2"
          />
          {reservation?.building?.name}
      </h1>
      </td>
      <td className="text-primary-dark text-sm">
      {reservation?.tenant?.email}
      </td>
      <td className="text-primary-dark text-sm">{reservation?.startDate}</td>
      <td className="text-primary-dark text-sm">{reservation?.endDate}</td>
      <td className="text-primary-dark text-sm">Rp {reservation?.amount}</td>
      <td>
      <div className="text-warning d-flex align-items-center">
          <IconStatus status={reservation?.status}/>
          
      </div>
      </td>
    </tr>
  )
}

export default CustomerReservationItem