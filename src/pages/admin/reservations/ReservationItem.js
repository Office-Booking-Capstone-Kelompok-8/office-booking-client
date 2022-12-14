import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@mdi/react';
import {
    mdiClockTimeFourOutline,
    mdiProgressCheck,
    mdiCloseCircleOutline,
    mdiAccountCreditCardOutline
} from '@mdi/js';

const ReservationItem = ({ reservation }) => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState("");

    return (
        <tr>
            <td onClick={() => {
                navigate('/admin/reservations/detail-reservation/:id');
                }}>
                <h1 className="text-primary-dark text-sm">
                <img
                    src={reservation?.picture}
                    alt="name"
                    className="img-building 4 h-4 m-2"
                />
                Melati meeting room
                </h1>
            </td>
            <td className="text-primary-dark text-sm">
                panjangmail@gmail.com
            </td>
            <td className="text-primary-dark text-sm">
                22/10/11
            </td>
            <td className="text-primary-dark text-sm">
                22/10/11
            </td>
            <td className="text-primary-dark text-sm">
                Rp 11.350.000
            </td>
            <td>
                <div className="dropdown">
                <div 
                    className="dropdown-btn dropdown-toggle" 
                    onClick={(e) => setIsActive(!isActive)}>
                    {selected}
                </div>
                {isActive && (
                    <div className="dropdown-content" 
                    onClick={e => {
                    setSelected(e.target.textContent)
                    setIsActive(false)}}>
                        <div className="dropdown-item">
                        <div className="text-warning d-flex align-items-center">
                            <Icon
                            path={mdiClockTimeFourOutline}
                            size={0.8}
                            style={{ marginRight: '.7rem' }}
                            className="text-warning text-sm"
                            />pending
                        </div>
                        </div>
                        <div className="dropdown-item">
                        <div className="text-success d-flex align-items-center">
                            <Icon
                            path={mdiProgressCheck}
                            size={0.8}
                            style={{ marginRight: '.7rem' }}
                            />accept
                        </div>
                        </div>
                        <div className="dropdown-item">
                        <div className="text-error d-flex align-items-center">
                            <Icon
                            path={mdiCloseCircleOutline}
                            size={0.8}
                            style={{ marginRight: '.7rem' }}
                            />reject
                        </div>
                        </div>
                        <div className="dropdown-item">
                        <div className="text-primary d-flex align-items-center">
                            <Icon
                            path={mdiAccountCreditCardOutline}
                            size={0.8}
                            style={{ marginRight: '.7rem' }}
                            />waiting payment
                        </div>
                        </div>
                    </div>
                )}
                </div>
            </td>
            <td>
                <button
                to="/"
                className="btn bg-error text-sm me-4 text-white px-4 py-2">
                Delete
                </button>
            </td>
        </tr>
  )
}

export default ReservationItem