/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Pagination from '../../../components/admin/Pagination';
import Spinner from '../../../components/admin/Spinner';
import { useGetUsersQuery } from '../../../store/users/usersApiSlice';
import AdminItem from './AdminItem';

const Admins = () => {
  const { data: users, isLoading, isSuccess } = useGetUsersQuery({ role: 2 });
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    if (isSuccess) {
      setAdmin(users.data);
    }
  }, [isSuccess]);

  // Pagination
  const totalUsers = admin?.length;
  const userPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  // Mengatur data per page
  const lastPage = currentPage * userPerPage;
  const firstPage = lastPage - userPerPage;
  const currentAdmin = admin?.slice(firstPage, lastPage);

  const nextPage = () =>
    setCurrentPage((prev) => {
      if (prev === Math.ceil(totalUsers / userPerPage)) {
        return prev;
      }
      return prev + 1;
    });
  const prevPage = () =>
    setCurrentPage((prev) => {
      if (prev === 1) {
        return prev;
      }
      return prev - 1;
    });
  const paginate = (numPage) => setCurrentPage(numPage);
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
                {currentAdmin?.map((user) => (
                  <AdminItem user={user} key={user?.id} />
                ))}
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-center">
            <Pagination
              currentPage={currentPage}
              totalUsers={totalUsers}
              userPerPage={userPerPage}
              nextPage={nextPage}
              paginate={paginate}
              prevPage={prevPage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Admins;
