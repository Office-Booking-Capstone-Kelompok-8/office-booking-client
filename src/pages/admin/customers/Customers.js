/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Pagination from '../../../components/admin/Pagination';
import Spinner from '../../../components/admin/Spinner';
import { useGetUsersQuery } from '../../../store/users/usersApiSlice';
import customers from './../../../assets/img/customers.png';
import CustomerItem from './CustomerItem';

const Customers = () => {
  const {
    data: users,
    isLoading,
    isSuccess,
  } = useGetUsersQuery({
    role: 1,
  });

  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    if (isSuccess) {
      setCustomer(users.data);
    }
  }, [isSuccess]);

  // Pagination
  const totalUsers = customer?.length;
  const userPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  // Mengatur data per page
  const lastPage = currentPage * userPerPage;
  const firstPage = lastPage - userPerPage;
  const currentCustomer = customer?.slice(firstPage, lastPage);

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
      <div className="row px-2">
        <div className="row d-flex mb-3 justify-content-between">
          <div className="col-5 p-3">
            <div className="shadow-sm row rounded p-2 align-items-center">
              <div className="col-4">
                <img src={customers} className="w-100" alt="customers" />
              </div>
              <div className="col-8">
                <h3 className="fw-bold">12.000</h3>
                <span className="text-sm mb-2 d-inline-block">
                  Total Customers
                </span>
                <div className="rounded d-flex flex-column flex-lg-row">
                  <h3
                    className="text-primary text-sm px-2 py-2"
                    style={{
                      background: 'rgba(202, 222, 251, 0.6)',
                      borderRadius: 9,
                      marginRight: '1rem',
                    }}
                  >
                    + 100
                  </h3>
                  <span className="text-sm text-gray-dark me-4 pt-2">
                    new customers this month
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 ">
            <div className="d-flex justify-content-end">
              <Link
                to="/admin/customers/add-customer"
                className="btn bg-primary text-white text-sm me-5 px-5 py-2"
              >
                Add customers
              </Link>
            </div>
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
                {currentCustomer?.map((user) => (
                  <CustomerItem user={user} key={user?.id} />
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

export default Customers;
