import React from 'react'
import { Link } from 'react-router-dom';
import reservation from './../../../assets/img/reservation.png';
import Icon from '@mdi/react';
import { 
  mdiClockTimeFourOutline,
  mdiProgressCheck,
  mdiCloseCircleOutline,
  mdiAccountCreditCardOutline,
} from '@mdi/js';

const Reservations = () => {
  return (
    <div>
      <div className="mb-2">
        <h2>Dashboard</h2>
        <div className="text-gray-dark">
          <span>Office Zone</span>
          <span className="breadcrumb-arrow">&gt;</span>
          <span>Dashboard</span>
        </div>
      </div>
      <div className="row px-2">
        <div className="col-12 col-md-7 col-lg-8">
          <div className="row mb-3">
            <div className="col-6 p-3">
              <div className="shadow-sm row rounded p-2 align-items-center">
                <div className="col-4">
                  <img src={reservation} className="w-100" alt="reservation" />
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
                      style={{ marginRight: '.7rem' }}
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
                        style={{ marginRight: '.7rem' }}
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
                        style={{ marginRight: '.7rem' }}
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
                        style={{ marginRight: '.7rem' }}
                      />
                      <span className="text-gray-dark text-sm">waiting payment</span>
                    </div>
                    <h3 className="fw-bold text-md">45</h3>
                  </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card" style={{boxShadow: "0px 8px 24px rgba(112, 144, 176, 0.25)", borderRadius: 9}}>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th className='text-sm text-gray-dark'>Building Name</th>
                <th className='text-sm text-gray-dark'>Email</th>
                <th className='text-sm text-gray-dark'>Date/Time</th>
                <th className='text-sm text-gray-dark'>Booking</th>
                <th className='text-sm text-gray-dark'>Price</th>
                <th className='text-sm text-gray-dark'></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h1 className='text-primary-dark text-sm'>
                    <img src="https://tse3.mm.bing.net/th?id=OIP.cDqgnRzfbofSK9VVDpRSeQHaHa&pid=Api&P=0"  alt="name" className='img-building 4 h-4 m-2'/>
                    Melati meeting room
                  </h1>
                </td>
                <td className='text-primary-dark text-sm'>panjangmail@gmail.com</td>
                <td>
                  <h1 className='text-primary-dark text-sm'>22/10/11</h1>
                  <h1 className='text-primary-dark text-sm'>13:10:11</h1>
                </td>
                <td className='text-primary-dark text-sm'>22/10/11</td>
                <td className='text-primary-dark text-sm'>Rp 11.350.000</td>
                <td>
                  <Link to="/" className="btn bg-success text-sm me-4 text-white px-4 py-2">Update</Link>
                  <button to="/" className="btn bg-error text-sm me-4 text-white px-4 py-2">Delete</button>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-center">
          <nav aria-label="...">
            <ul className="pagination">
              <li className="page-item disabled">
                <Link className="page-link">Previous</Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">1</Link>
              </li>
              <li className="page-item active" aria-current="page">
                <Link className="page-link" to="#">2</Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">3</Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">Next</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Reservations