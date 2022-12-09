/* eslint-disable react-hooks/exhaustive-deps */
import { mdiCloseCircle, mdiFileImagePlus } from '@mdi/js';
import Icon from '@mdi/react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../../../components/admin/Spinner';
import useUploadPictureUser from '../../../hooks/uploadPictureUser';
import {
  useDetailCustomerQuery,
  useUpdateUserMutation,
} from '../../../store/users/usersApiSlice';
import { notifySuccess } from '../../../utils/helpers';
import NotFound from '../../error/NotFound';
import * as yup from 'yup';
import { ToastContainer } from 'react-toastify';

const UpdateAdmin = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    isLoading,
    data: admin,
    error,
    isError,
    isSuccess,
  } = useDetailCustomerQuery({ id: id });
  const [updateCustomer, { isSuccess: successUpdate }] =
    useUpdateUserMutation();
  const [selectedPhotoProfile, setSelectedPhotoProfile] = useState('');
  const { uploadPicture, isUpload } = useUploadPictureUser();

  useEffect(() => {
    if (isSuccess) {
      setSelectedPhotoProfile(admin?.data?.picture);
    }
    if (successUpdate) {
      notifySuccess('Admin Updated');
    }
  }, [admin]);

  // CONFIG FORM
  const initialValues = {
    name: admin?.data?.name,
    email: admin?.data?.email,
    phone: admin?.data?.phone,
  };

  const validationSchema = yup.object({
    name: yup.string().required().trim(),
    email: yup.string().required().trim().email(),
    phone: yup
      .string()
      .matches(/^[0-9]+$/, 'number is invalid')
      .required(),
  });

  const onSubmit = async (values, props) => {
    await updateCustomer({
      userID: id,
      name: values.name,
      email: values.email,
      phone: values.phone,
    });
  };

  if (isError) {
    if (error.status === 404) {
      console.log(error);
      return <NotFound />;
    }
  }

  if (isLoading) {
    return <Spinner />;
  }

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
                  {isUpload && <Spinner />}
                  {selectedPhotoProfile && !isUpload && (
                    <div className="img-wrap">
                      <img
                        src={selectedPhotoProfile}
                        alt="images-preview"
                        className="img-preview"
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                      />
                      <div
                        className="delete-img"
                        onClick={() => setSelectedPhotoProfile('')}
                      >
                        <Icon path={mdiCloseCircle} />
                      </div>
                    </div>
                  )}
                  {Boolean(!selectedPhotoProfile) && !isUpload && (
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
                        onChange={async (e) => {
                          // get file
                          const selectedImg = e.target.files[0];
                          // add values images
                          const formData = new FormData();
                          formData.append('picture', selectedImg);

                          // Upload picture
                          await uploadPicture(id, formData);

                          // generate url
                          const urlImg = URL.createObjectURL(selectedImg);
                          if (!isUpload) {
                            setSelectedPhotoProfile(urlImg);
                          }
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
            {/* Button */}
            <div className="row justify-content-end">
              <button
                type="button"
                className="col-3 button button-outline me-4"
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`col-3 button text-white me-3 ${
                  !props.isValid || props.isSubmitting || isUpload
                    ? 'bg-primary-light'
                    : 'bg-primary'
                }`}
                disabled={!props.isValid || props.isSubmitting || isUpload}
              >
                {props.isSubmitting || isUpload
                  ? 'Please Wait'
                  : 'Update Admin'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UpdateAdmin;
