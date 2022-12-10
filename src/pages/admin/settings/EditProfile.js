import React from 'react';

const EditProfile = () => {
  return (
    <div>
      {/* Bank * */}
      <div className="row mb-4">
        <div className="col-md-6">
          <label className=" text-primary-dark" htmlFor="bank">
            Bank <span className="text-error">*</span>
          </label>
          <select className="form-select text-dark input-field" id="bank">
            <option>BNI</option>
            <option>BRI</option>
            <option>Mandiri</option>
            <option>BCA</option>
          </select>
        </div>
        <div className="col-md-6">
          <label className="text-primary-dark" htmlFor="nobank">
            Bank No <span className="text-error">*</span>
          </label>
          <input type="text" className="input-field" id="number" />
        </div>
      </div>
      {/* Account Name */}
      <div className="row mb-4">
        <div className="col-md-12 col-lg-12">
          <label className="text-primary-dark" htmlFor="accountname">
            Account Name <span className="text-error">*</span>
          </label>
          <input type="text" className="input-field" id="account" />
        </div>
      </div>
      {/* Button */}
      <div className="row justify-content-end">
        <button type="button" className="col-3 button button-outline me-4">
          Cancel
        </button>
        <button type="submit" className="col-3 button button-container me-3">
          Save
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
