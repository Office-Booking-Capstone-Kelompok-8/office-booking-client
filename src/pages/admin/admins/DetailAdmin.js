import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '@mdi/react';
import {
  mdiAt,
  mdiPhoneOutline,
  mdiEmoticonOutline
} from '@mdi/js';

const DetailAdmin = () => {
  return (
    <div>
        <div className="row mb-4">
            <div className="col-md-12 d-flex justify-content-end">
                <Link
                    to="/admin/admins/edit-admin/1"
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
                        <h3 className="text-md">Admin</h3>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailAdmin;