import React, { useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Icon from '@mdi/react';
import {
  mdiAt,
  mdiPhoneOutline,
  mdiEmoticonOutline
} from '@mdi/js';
import { useDetailCustomerQuery } from '../../../store/users/usersApiSlice';
import { notifySuccess, notifyError } from './../../../utils/helpers';
import Spinner from '../../../components/admin/Spinner';
import NotFound from '../../error/NotFound';
import { useDeleteUserMutation } from '../../../store/users/usersApiSlice';

const DetailAdmin = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const {
        isLoading,
        data: admin,
        errorDetail,
        isErrorDetail
    } = useDetailCustomerQuery({ id: id });

    const [deleteCustomer, { isSuccess, error }] = useDeleteUserMutation();
    useEffect(() => {
        if (error?.status === 500) {
            notifyError('Server Error');
        }
        if (isSuccess) {
            notifySuccess('Berhasil Dihapus');
            navigate('/admin/admins');
        }
    }, [error, isSuccess]);

    const deleteHandler = () => {
        if (window.confirm('Delete this account?')) {
            deleteCustomer({ id: admin.data.id });
        }
    };

    if (isErrorDetail) {
        if (errorDetail.status === 404) {
          console.log(errorDetail);
          return <NotFound />;
        }
      }
    
      if (isLoading) return <Spinner />;
      
  return (
    <div>
        <div className="row mb-4">
            <div className="col-md-12 d-flex justify-content-end">
                <Link
                    to={`/admin/admins/edit-admin/${admin?.data?.id}`}
                    className="btn bg-success text-white text-sm me-4 px-5 py-2"
                >
                    Update
                </Link>
                <button onClick={deleteHandler} className="btn bg-error text-white text-sm me-5 px-5 py-2">
                    Delete
                </button>
            </div>
        </div>
        <div className="row mb-4">
            <div className="col-12 col-md-12 col-lg-12">
                <div className="row mb-3">
                    <div className="col-md-3 col-lg-3 p-3">
                        <img
                            src={admin?.data?.picture}
                            alt="user"
                            className="w-100 h-100 avatar"
                            style={{ marginRight: '1rem' }}
                        />
                    </div>
                    <div className="col-md-6 col-lg-6 p-3">
                    <h3 className="text-primary-dark pt-3">
                        {admin?.data?.name}
                    </h3>
                    <div className="d-flex align-items-center pt-4">
                        <Icon
                        path={mdiAt}
                        size={1.2}
                        style={{ marginRight: '.7rem' }}
                        className="text-primary"
                        />
                        <div>
                        <h3 className="text-md">{admin?.data?.email}</h3>
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
                        <h3 className="text-md">{admin?.data?.phone}</h3>
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