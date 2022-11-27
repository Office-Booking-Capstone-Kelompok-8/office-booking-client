import { mdiCloseCircle, mdiFileImagePlus } from '@mdi/js';
import Icon from '@mdi/react';
import React, { useState } from 'react';

const UpdateCustomer = () => {
  const [selectedPhotoProfile, setSelectedPhotoProfile] = useState('');

  return (
    <div>
      <form>
        <div className="row mb-4">
          <label className="col-3" htmlFor="nameBuilding">
            Photo Profile <span className="text-error">*</span>
          </label>
          <div className="col-9">
            <div className="d-flex justify-content-center">
              {selectedPhotoProfile && (
                <div className="img-wrap">
                  <img
                    src={selectedPhotoProfile}
                    alt="images-preview"
                    className="img-preview"
                  />
                  <div
                    className="delete-img"
                    onClick={() => setSelectedPhotoProfile('')}
                  >
                    <Icon path={mdiCloseCircle} />
                  </div>
                </div>
              )}
              {Boolean(!selectedPhotoProfile) && (
                <label
                  htmlFor="image"
                  className="img-upload d-flex flex-column align-items-center text-gray-dark text-sm"
                >
                  <Icon path={mdiFileImagePlus} size={1} />
                  <span>Photo Profile</span>
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={(e) => {
                      // get file
                      const selectedImg = e.target.files[0];
                      // add values images
                      // props.setFieldValue('images', [{ index: 0 }]);
                      const urlImg = URL.createObjectURL(selectedImg);
                      setSelectedPhotoProfile(urlImg);
                    }}
                  />
                </label>
              )}
            </div>
          </div>
        </div>
        {/* Email */}
        <div className="row mb-4">
          <label className="col-3" htmlFor="email">
            Email <span className="text-error">*</span>
          </label>
          <div className="col-9">
            <input
              type="text"
              className="input-field"
              id="email"
              placeholder="Email"
            />
          </div>
        </div>

        {/* No Tlp */}
        <div className="row mb-4">
          <label className="col-3" htmlFor="noTlp">
            Nomor Tlp <span className="text-error">*</span>
          </label>
          <div className="col-9">
            <input
              type="text"
              className="input-field"
              id="noTlp"
              placeholder="No Tlp"
            />
          </div>
        </div>
        {/* Name */}
        <div className="row mb-4">
          <label className="col-3" htmlFor="name">
            Name <span className="text-error">*</span>
          </label>
          <div className="col-9">
            <input
              type="text"
              className="input-field"
              id="name"
              placeholder="Name"
            />
          </div>
        </div>
        {/* Password */}
        <div className="row mb-4">
          <label className="col-3" htmlFor="password">
            Password <span className="text-error">*</span>
          </label>
          <div className="col-9">
            <input
              type="text"
              className="input-field"
              id="password"
              placeholder="Password"
            />
          </div>
        </div>
        {/* Confirm Password */}
        <div className="row mb-4">
          <label className="col-3" htmlFor="ConfPassword">
            Confirm Password <span className="text-error">*</span>
          </label>
          <div className="col-9">
            <input
              type="text"
              className="input-field"
              id="ConfPassword"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        {/* Role */}
        <div className="row mb-4">
          <label className="col-3">
            Role <span className="text-error">*</span>
          </label>
          <div className="col-9 d-flex">
            <label className="d-flex align-items-center me-4">
              <input
                className="me-2"
                name="role"
                type="radio"
                id="ConfPassword"
                placeholder="Confirm Password"
              />
              <span>Customer</span>
            </label>
            <label className="d-flex align-items-center">
              <input
                className="me-2"
                name="role"
                type="radio"
                id="ConfPassword"
                placeholder="Confirm Password"
              />
              <span>Admin</span>
            </label>
          </div>
        </div>
        {/* Button */}
        <div className="row justify-content-end">
          <button type="button" className="col-3 button button-outline me-4">
            Cancel
          </button>
          <button type="submit" className="col-3 button button-container me-3">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCustomer;
