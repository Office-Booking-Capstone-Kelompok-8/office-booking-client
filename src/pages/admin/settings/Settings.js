import React from 'react';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Bank * */}
      <form>
        <div className="row mb-4">
          <div className="col-md-6">
            <label className="text-primary-dark" htmlFor="bank">
              Bank <span className="text-error">*</span>
            </label>
            <input
              type="text"
              className="input-field text-dark"
              id="bank"
              disabled
              value="BNI"
            />
          </div>
          <div className="col-md-6">
            <label className="text-primary-dark" htmlFor="nobank">
              Bank No <span className="text-error">*</span>
            </label>
            <input
              type="text"
              className="input-field"
              id="number"
              disabled
              value="43467890876576"
            />
          </div>
        </div>
        {/* Account Name */}
        <div className="row mb-4">
          <div className="col-md-12 col-lg-12">
            <label className="text-primary-dark" htmlFor="accountname">
              Account Name <span className="text-error">*</span>
            </label>
            <input
              type="text"
              className="input-field"
              id="account"
              disabled
              value="OFFICE ZONE"
            />
          </div>
        </div>
      </form>
      <div className="mb-2">
        <div className="col-md-12">
          <button
            to="/admin/settings/edit"
            className="btn bg-primary text-white text-sm me-5 px-5 py-2"
          >
            Add Payment
          </button>
        </div>
      </div>

      {/* Table */}
      <div
        className="card"
        style={{
          boxShadow: '0px 8px 24px rgba(112, 144, 176, 0.25)',
          borderRadius: 9,
          marginTop: '3rem',
        }}
      >
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th className="text-sm text-gray-dark">Bank</th>
                <th className="text-sm text-gray-dark">Account Number</th>
                <th className="text-sm text-gray-dark">Account Name</th>
                <th className="text-sm text-gray-dark">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-primary-dark text-sm">22/10/11</td>
                <td className="text-primary-dark text-sm">22/10/11</td>
                <td>Test</td>
                <td>
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
      </div>
    </div>
  );
};

export default Settings;
