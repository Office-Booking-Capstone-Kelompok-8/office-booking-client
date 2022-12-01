import { mdiCloseCircle, mdiFileImagePlus } from '@mdi/js';
import Icon from '@mdi/react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';

const UpdateCustomer = () => {
  const [selectedPhotoProfile, setSelectedPhotoProfile] = useState('');
  // CONFIG FORM
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = yup.object({
    name: yup.string().required().trim(),
    email: yup.string().required().trim().email(),
    phone: yup.string().matches(/^[0-9]+$/, 'Number is invalid'),
    password: yup.string().required().trim().min(8),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'password must match')
      .required('confirm password is a required field'),
  });

  const onSubmit = (values, props) => {
    console.log(values);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(props) => (
          <Form>
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
                <Field
                  name="email"
                  type="text"
                  className="input-field"
                  id="email"
                  placeholder="Email"
                />
                <ErrorMessage name="email">
                  {(err) => <span className="text-sm text-error">{err}</span>}
                </ErrorMessage>
              </div>
            </div>

            {/* No Tlp */}
            <div className="row mb-4">
              <label className="col-3" htmlFor="noTlp">
                Nomor Tlp <span className="text-error">*</span>
              </label>
              <div className="col-9">
                <Field
                  name="phone"
                  type="text"
                  className="input-field"
                  id="noTlp"
                  placeholder="No Tlp"
                />
                <ErrorMessage name="phone">
                  {(err) => <span className="text-sm text-error">{err}</span>}
                </ErrorMessage>
              </div>
            </div>
            {/* Name */}
            <div className="row mb-4">
              <label className="col-3" htmlFor="name">
                Name <span className="text-error">*</span>
              </label>
              <div className="col-9">
                <Field
                  name="name"
                  type="text"
                  className="input-field"
                  id="name"
                  placeholder="Name"
                />
                <ErrorMessage name="name">
                  {(err) => <span className="text-sm text-error">{err}</span>}
                </ErrorMessage>
              </div>
            </div>
            {/* Password */}
            <div className="row mb-4">
              <label className="col-3" htmlFor="password">
                Password <span className="text-error">*</span>
              </label>
              <div className="col-9">
                <Field
                  name="password"
                  type="password"
                  className="input-field"
                  id="password"
                  placeholder="Password"
                />
                <ErrorMessage name="password">
                  {(err) => <span className="text-sm text-error">{err}</span>}
                </ErrorMessage>
              </div>
            </div>
            {/* Confirm Password */}
            <div className="row mb-4">
              <label className="col-3" htmlFor="ConfPassword">
                Confirm Password <span className="text-error">*</span>
              </label>
              <div className="col-9">
                <Field
                  name="confirmPassword"
                  type="password"
                  className="input-field"
                  id="ConfPassword"
                  placeholder="Confirm Password"
                />
                <ErrorMessage name="confirmPassword">
                  {(err) => <span className="text-sm text-error">{err}</span>}
                </ErrorMessage>
              </div>
            </div>
            {/* Button */}
            <div className="row justify-content-end">
              <button
                type="button"
                className="col-3 button button-outline me-4"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="col-3 button button-container me-3"
              >
                Add Customer
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UpdateCustomer;
