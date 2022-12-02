import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDeleteUserMutation } from '../../../store/users/usersApiSlice';
import { notifyError, notifySuccess } from '../../../utils/helpers';

const AdminItem = ({ user }) => {
  const [deleteCustomer, { isSuccess, error }] = useDeleteUserMutation();

  useEffect(() => {
    if (error?.status === 500) {
      notifyError('Server Error');
    }
    if (isSuccess) {
      notifySuccess('Berhasil Dihapus');
    }
  }, [error, isSuccess]);

  const deleteHandler = () => {
    if (window.confirm('Delete this account?')) {
      deleteCustomer({ id: user.id });
    }
  };

  const navigate = useNavigate();
  return (
    <tr>
      <td
        onClick={() => {
          navigate('/admin/admins/detail-admin/1');
        }}
      >
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
          to="/admin/admins/edit-admin/1"
          className="btn bg-success text-sm me-4 text-white px-4 py-2"
        >
          Update
        </Link>
        <button
          to="/"
          className="btn bg-error text-sm me-4 text-white px-4 py-2"
          onClick={deleteHandler}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default AdminItem;
