import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Spinner from '../../../components/admin/Spinner';
import { useGetUsersQuery } from '../../../store/users/usersApiSlice';
import AdminItem from './AdminItem';

const Admins = () => {
  const { data: users, isLoading } = useGetUsersQuery({ role: 2 });
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="colored"
      />
      <div className="mb-2">
        <div className="row mb-3">
          <div className="col-md-12 d-flex justify-content-end">
            <Link
              to="/admin/admins/add-admin"
              className="btn bg-primary text-white text-sm me-5 px-5 py-2"
            >
              Add admin
            </Link>
          </div>
        </div>
      </div>

      {isLoading ? (
        <Spinner />
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
                  <th className="text-sm text-gray-dark">Name</th>
                  <th className="text-sm text-gray-dark">Email</th>
                  <th className="text-sm text-gray-dark">No. Telp</th>
                  <th className="text-sm text-gray-dark"></th>
                </tr>
              </thead>
              <tbody>
                {users?.data?.map((user) => (
                  <AdminItem user={user} key={user?.id} />
                ))}
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
                  <Link className="page-link" to="#">
                    1
                  </Link>
                </li>
                <li className="page-item active" aria-current="page">
                  <Link className="page-link" to="#">
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    3
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#">
                    Next
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admins;
