import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiPencil } from '@mdi/js';

const Settings = () => {
  const [picture, setPicture] = useState(null);
  const img = useRef();
  return (
    <div>
      <div className="mb-2">
        <div className="row mb-3">
          <div className="col-md-12 d-flex justify-content-end">
            <Link
              to="/admin/settings/edit"
              className="btn bg-primary text-white text-sm me-5 px-5 py-2"
            >
              Edit profile
            </Link>
          </div>
        </div>
      </div>

      {/* Bank * */}
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
    </div>
  );
};

export default Settings;
