/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Icon from '@mdi/react';
import {
  mdiAt,
  mdiPhoneOutline,
  mdiEmoticonOutline
} from '@mdi/js';
import emptybox from './../../../assets/img/emptybox.png';
import { useDetailCustomerQuery } from '../../../store/users/usersApiSlice';
import Spinner from '../../../components/admin/Spinner';
import NotFound from '../../error/NotFound';
import { notifyError, notifySuccess } from '../../../utils/helpers';
import { useDeleteUserMutation } from '../../../store/users/usersApiSlice';
import Swal from 'sweetalert2';
import { useGetReservationsQuery } from '../../../store/reservations/reservationsApiSlice';
import IconStatus from '../reservations/IconStatus';

const DetailCustomer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    isLoading,
    data: customer,
    errorDetail,
    isErrorDetail,
  } = useDetailCustomerQuery({ id: id });

  const {
    data: reservations,
    isLoadinReserv
  } = useGetReservationsQuery({ page: 1, limit: 20, userId: customer?.data?.id });

  const [deleteCustomer, { isSuccess, error }] = useDeleteUserMutation();

  useEffect(() => {
    if (error?.status === 500) {
      notifyError('Server Error');
    }
    if (error?.status === 409) {
      notifyError('User has active reservation');
    }
    if (isSuccess) {
      notifySuccess('customer deleted successfully');
    }
  }, [error, isSuccess]);

  const deleteHandler = () => {
    Swal.fire({
        title: "Delete this account?",
        text: "this item will be removed permanently",
        confirmButtonColor: "#3085D6",
        confirmButtonText: "Delete",
        showCancelButton: true
    })
    .then((window) => {
      if (window.isConfirmed) {
        deleteCustomer({ id: customer.data.id })
      }    
      navigate('/admin/customers');
    })
  };

  if (isErrorDetail) {
    if (errorDetail.status === 404) {
      return <NotFound />;
    }
  }

  if (isLoading) return <Spinner />;
  if (isLoadinReserv) return <Spinner />;

  return (
    <div>
      <div className="row mb-4">
        <div className="col-md-12 d-flex justify-content-end">
          <Link
            to={`/admin/customers/edit-customer/${customer?.data?.id}`}
            className="btn bg-success text-white text-sm me-4 px-5 py-2"
          >
            Update
          </Link>
          <button
            onClick={deleteHandler}
            className="btn bg-error text-white text-sm me-5 px-5 py-2"
          >
            Delete
          </button>
        </div>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="row mb-4">
          <div className="col-12 col-md-12 col-lg-12">
            <div className="row mb-3">
              <div className="col-md-3 col-lg-3 p-3">
                <img
                  src={customer?.data?.picture}
                  alt="user"
                  className="w-100 h-100 avatar"
                  style={{ marginRight: '1rem' }}
                />
              </div>
              <div className="col-md-6 col-lg-6 p-3">
                <h3 className="text-primary-dark pt-3">
                  {customer?.data?.name}
                </h3>
                <div className="d-flex align-items-center pt-4">
                  <Icon
                    path={mdiAt}
                    size={1.2}
                    style={{ marginRight: '.7rem' }}
                    className="text-primary"
                  />
                  <div>
                    <h3 className="text-md">{customer?.data?.email}</h3>
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
                    <h3 className="text-md">{customer?.data?.phone}</h3>
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
      )}

      <div>
        <h3 className="text-primary-dark">Reservations History</h3>
        { isLoadinReserv ? (
          <Spinner />
        ) : reservations?.data === null ? (
          <>
            <div className="justify-content-center pt-2">
              <img
                src={emptybox}
                className="mx-auto d-block pt-5 w-10"
                alt="notfound"
              />
              <p className="text-gray-dark text-md text-center pt-2">
                Nothing to see here
              </p>
            </div>
          </>
        ) : (
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
                  {reservations?.data?.map((list) => (
                    <tr key={list.id}>
                      <td>
                      <h1 className="text-primary-dark text-sm">
                          <img
                          src={list?.building?.picture}
                          alt="building"
                          className="img-building 4 h-4 m-2"
                          />
                          {list?.building?.name}
                      </h1>
                      </td>
                      <td className="text-primary-dark text-sm">
                      {list?.tenant?.email}
                      </td>
                      <td className="text-primary-dark text-sm">{list?.startDate}</td>
                      <td className="text-primary-dark text-sm">{list?.endDate}</td>
                      <td className="text-primary-dark text-sm">Rp {list?.amount}</td>
                      <td>
                      <div className="text-warning d-flex align-items-center">
                        <IconStatus status={list?.status}/>
                      </div>
                      </td>  
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default DetailCustomer;
