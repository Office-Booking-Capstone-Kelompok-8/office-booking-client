import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDeleteUserMutation } from '../../../store/users/usersApiSlice';
import { notifyError, notifySuccess } from '../../../utils/helpers';
import Swal from 'sweetalert2';

const CustomerItem = ({ user }) => {
  const [deleteCustomer, { isSuccess, error }] = useDeleteUserMutation();

  useEffect(() => {
    if (error?.status === 500) {
      notifyError('Server Error');
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
        deleteCustomer({ id: user.id })
      }    
    })
  };

  const navigate = useNavigate();
  return (
    <tr>
      <td
        onClick={() => {
          navigate(`/admin/customers/detail-customer/${user.id}`);
        }}
        style={{ cursor: 'pointer' }}>
        <h1 className="text-primary-dark text-sm">
          <img
            src={user?.picture}
            alt="name"
            className="img-building 4 h-4 m-2 rounded"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          {user.name}
        </h1>
      </td>
      <td className="text-primary-dark text-sm">{user.email}</td>
      <td className="text-primary-dark text-sm">{user.phone}</td>
      <td>
        <Link
          to={`/admin/customers/edit-customer/${user.id}`}
          className="btn bg-success text-sm me-4 text-white px-4 py-2"
        >
          Update
        </Link>
        <button
          to="/"
          className="btn bg-error text-sm me-4 text-white px-4 py-2"
          // data-bs-toggle="modal"
          // data-bs-target="#exampleModal"
          onClick={deleteHandler}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default CustomerItem;
