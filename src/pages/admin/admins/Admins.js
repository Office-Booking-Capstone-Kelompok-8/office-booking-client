import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiDeleteOutline } from '@mdi/js';
import { useNavigate } from 'react-router-dom';

const Admins = () => {
  const navigate = useNavigate();
  return (
    <div>
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
              <tr>
                <td  onClick={() => {
                    navigate('/admin/admins/detail-admin/1');
                  }}>
                  <h1 className="text-primary-dark text-sm">
                    <img
                      src="https://tse3.mm.bing.net/th?id=OIP.cDqgnRzfbofSK9VVDpRSeQHaHa&pid=Api&P=0"
                      alt="name"
                      className="img-building 4 h-4 m-2"
                    />
                    Ningsih Widiyati
                  </h1>
                </td>
                <td className="text-primary-dark text-sm">mail@gmail.com</td>
                <td className="text-primary-dark text-sm">0858462598657</td>
                <td>
                  <Link
                    to="/admin/admins/edit-admin/1"
                    className="btn bg-success text-sm me-4 text-white px-4 py-2"
                  >
                    Update
                  </Link>
                  <button
                    to="/"
                    className="btn bg-error text-sm me-4 text-white">
                    <Icon
                        path={mdiDeleteOutline}
                        size={1}
                        style={{ marginRight: '.2rem' }}
                      />
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

export default Admins;
