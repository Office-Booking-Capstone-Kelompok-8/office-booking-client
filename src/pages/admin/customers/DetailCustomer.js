import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '@mdi/react';
import {
  mdiAt,
  mdiPhoneOutline,
  mdiEmoticonOutline,
  mdiClockTimeFourOutline
} from '@mdi/js';
import emptybox from './../../../assets/img/emptybox.png';

const DetailCustomer = () => {
  return (
    <div>
        <div className="row mb-4">
            <div className="col-md-12 d-flex justify-content-end">
                <Link
                    to="/admin/buildings/edit-building/1"
                    className="btn bg-success text-white text-sm me-4 px-5 py-2"
                >
                    Update
                </Link>
                <button className="btn bg-error text-white text-sm me-5 px-5 py-2">
                    Delete
                </button>
            </div>
        </div>
        <div className="row mb-4">
            <div className="col-12 col-md-12 col-lg-12">
                <div className="row mb-3">
                    <div className="col-md-3 col-lg-3 p-3">
                        <img
                            src="https://tse3.mm.bing.net/th?id=OIP.cDqgnRzfbofSK9VVDpRSeQHaHa&pid=Api&P=0"
                            alt="user"
                            className="w-100 h-100 avatar"
                            style={{ marginRight: '1rem' }}
                        />
                    </div>
                    <div className="col-md-6 col-lg-6 p-3">
                    <h3 className="text-primary-dark pt-3">
                        Melati Jaya Kusuma
                    </h3>
                    <div className="d-flex align-items-center pt-4">
                        <Icon
                        path={mdiAt}
                        size={1.2}
                        style={{ marginRight: '.7rem' }}
                        className="text-primary"
                        />
                        <div>
                        <h3 className="text-md">Melaa@gmail.com</h3>
                        </div>
                    </div>
                    <div className="d-flex align-items-center pt-4">
                        <Icon
                        path={mdiPhoneOutline}
                        size={1.2}
                        style={{ marginRight: '.7rem' }}
                        className="text-primary"
                        />
                        <div>
                        <h3 className="text-md">0853246587584</h3>
                        </div>
                    </div>
                    <div className="d-flex align-items-center pt-4">
                        <Icon
                        path={mdiEmoticonOutline}
                        size={1.2}
                        style={{ marginRight: '.7rem' }}
                        className="text-primary"
                        />
                        <h3 className="text-md">Customer</h3>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h3 className="text-primary-dark">Reservations History</h3>
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
                                <th className="text-sm text-gray-dark">Update Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                <h1 className="text-primary-dark text-sm">
                                    <img
                                    src="https://rupacita.com/wp-content/uploads/2020/11/connecticut-innovations-offices-new-haven-2-1536x919-1.jpg"
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
                                    <div className="text-warning d-flex align-items-center">
                                        <Icon
                                            path={mdiClockTimeFourOutline}
                                            size={0.8}
                                            style={{ marginRight: '.7rem' }}
                                            className="text-warning text-sm"
                                        />pending
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {
                <>  
                    <div className='justify-content-center pt-2'>
                        <img src={emptybox}  
                        className="mx-auto d-block pt-5 w-10" 
                        alt="notfound"
                        />
                        <p className='text-gray-dark text-md text-center pt-2'>Nothing to see here</p>
                    </div>  
                </>
            }
        </div>
    </div>
  )
}

export default DetailCustomer