import React from 'react';
import { Link } from 'react-router-dom';
import { useDeleteUserMutation } from '../../../store/users/usersApiSlice';
import { notifySuccess } from '../../../utils/helpers';

const CustomerItem = ({ user }) => {
  const [deleteCustomer, { isSuccess }] = useDeleteUserMutation();

  const deleteHandler = () => {
    if (window.confirm('Delete this account?')) {
      deleteCustomer({ id: user.id });
    }
  };

  if (isSuccess) {
    notifySuccess('Berhasil Dihapus');
  }

  return (
    <tr>
      <td>
        <h1 className="text-primary-dark text-sm">
          <img
            src={user.picture}
            alt="name"
            className="img-building 4 h-4 m-2 rounded"
          />
          {user.name}
        </h1>
      </td>
      <td className="text-primary-dark text-sm">{user.email}</td>
      <td className="text-primary-dark text-sm">{user.phone}</td>
      <td>
        <Link
          to="/admin/customers/edit-customer"
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
