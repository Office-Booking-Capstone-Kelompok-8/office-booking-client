import React from 'react';
import { Link } from 'react-router-dom';
import buildings from './../../../assets/img/building-dashboard.png';
import { useNavigate } from 'react-router-dom';

const Buildings = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="mb-2">
        <div className="row mb-3">
          <div className="col-md-12 d-flex justify-content-end">
            <Link
              to="/admin/buildings/add-building"
              className="btn bg-primary text-white text-sm me-5 px-5 py-2"
            >
              Add building
            </Link>
          </div>
        </div>
      </div>
      <div className="row px-2">
        <div className="col-12 col-md-7 col-lg-8">
          <div className="row mb-3">
            <div className="col-md-6 col-lg-6 p-3">
              <div className="shadow-sm row rounded p-2 align-items-center">
                <div className="col-md-4 col-lg-4">
                  <img src={buildings} className="w-100" alt="buildings" />
                </div>
                <div className="col-md-8 col-lg-8">
                  <h3 className="fw-bold">750</h3>
                  <span className="text-sm ">Total Buildings</span>
                  <div className="justify-content-between rounded d-flex flex-column flex-lg-row">
                    <h3
                      className="text-primary text-sm px-2 py-2"
                      style={{
                        background: 'rgba(202, 222, 251, 0.6)',
                        borderRadius: 9,
                      }}
                    >
                      + 23
                    </h3>
                    <span className="text-sm text-gray-dark me-4 pt-2">
                      new buildings this month
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 d-flex flex-column pt-3 p-5">
              <div className="col-md-12 col-lg-12 align-items-center d-flex flex-lg-row">
                <div className="col-md-3 col-lg-3 me-5 shadow-sm row rounded w-15 h-6">
                  <h3 className="fw-bold text-md">55</h3>
                  <span className="text-sm">Jakarta Pusat</span>
                </div>
                <div className="col-md-3 col-lg-3 me-5 shadow-sm row rounded w-15 h-6">
                  <h3 className="fw-bold text-md">45</h3>
                  <span className="text-sm">Jakarta Timur</span>
                </div>
                <div className="col-md-3 col-lg-3 me-5 shadow-sm row rounded w-15 h-6">
                  <h3 className="fw-bold text-md">67</h3>
                  <span className="text-sm">Jakarta Selatan</span>
                </div>
                <div className="col-md-3 col-lg-3 me-5 shadow-sm row rounded w-15 h-6">
                  <h3 className="fw-bold text-md">5</h3>
                  <span className="text-sm">Jakarta Utara</span>
                </div>
              </div>
              <div className="justify-content-between pt-3">
                <div className="shadow-sm row rounded w-15 h-6">
                  <h3 className="fw-bold text-md">14</h3>
                  <span className="text-sm ">Jakarta Barat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                <th className="text-sm text-gray-dark">District</th>
                <th className="text-sm text-gray-dark">Size</th>
                <th className="text-sm text-gray-dark">Capacity</th>
                <th className="text-sm text-gray-dark">Price</th>
                <th className="text-sm text-gray-dark"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  onClick={() => {
                    navigate('/admin/detail-building/:id');
                  }}
                >
                  <h1 className="text-primary-dark text-sm">
                    <img
                      src="https://tse3.mm.bing.net/th?id=OIP.cDqgnRzfbofSK9VVDpRSeQHaHa&pid=Api&P=0"
                      alt="name"
                      className="img-building 4 h-4 m-2"
                    />
                    Melati meeting room
                  </h1>
                </td>
                <td className="text-primary-dark text-sm">Jakarta Selatan</td>
                <td className="text-primary-dark text-sm">300m2</td>
                <td className="text-primary-dark text-sm">45 people</td>
                <td>
                  <h1 className="text-primary-dark text-sm">
                    Rp 350.000 /month
                  </h1>
                  <h1 className="text-primary-dark text-sm">
                    Rp 11.350.000 /year
                  </h1>
                </td>
                <td>
                  <Link
                    to="/admin/buildings/edit-building/1"
                    className="btn bg-success text-sm me-4 text-white px-4 py-2"
                  >
                    Update
                  </Link>
                  <button
                    to="/"
                    className="btn bg-error text-sm me-4 text-white px-4 py-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <h1 className="text-primary-dark text-sm">
                    <img
                      src="https://tse3.mm.bing.net/th?id=OIP.cDqgnRzfbofSK9VVDpRSeQHaHa&pid=Api&P=0"
                      alt="name"
                      className="img-building 4 h-4 m-2"
                    />
                    Melati meeting room
                  </h1>
                </td>
                <td className="text-primary-dark text-sm">Jakarta Selatan</td>
                <td className="text-primary-dark text-sm">300m2</td>
                <td className="text-primary-dark text-sm">45 people</td>
                <td>
                  <h1 className="text-primary-dark text-sm">
                    Rp 350.000 /month
                  </h1>
                  <h1 className="text-primary-dark text-sm">
                    Rp 11.350.000 /year
                  </h1>
                </td>
                <td>
                  <Link
                    to="/"
                    className="btn bg-success text-sm me-4 text-white px-4 py-2"
                  >
                    Update
                  </Link>
                  <button
                    to="/"
                    className="btn bg-error text-sm me-4 text-white px-4 py-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <h1 className="text-primary-dark text-sm">
                    <img
                      src="https://tse3.mm.bing.net/th?id=OIP.cDqgnRzfbofSK9VVDpRSeQHaHa&pid=Api&P=0"
                      alt="name"
                      className="img-building 4 h-4 m-2"
                    />
                    Melati meeting room
                  </h1>
                </td>
                <td className="text-primary-dark text-sm">Jakarta Selatan</td>
                <td className="text-primary-dark text-sm">300m2</td>
                <td className="text-primary-dark text-sm">45 people</td>
                <td>
                  <h1 className="text-primary-dark text-sm">
                    Rp 350.000 /month
                  </h1>
                  <h1 className="text-primary-dark text-sm">
                    Rp 11.350.000 /year
                  </h1>
                </td>
                <td>
                  <Link
                    to="/"
                    className="btn bg-success text-sm me-4 text-white px-4 py-2"
                  >
                    Update
                  </Link>
                  <button
                    to="/"
                    className="btn bg-error text-sm me-4 text-white px-4 py-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
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
    </div>
  );
};

export default Buildings;
