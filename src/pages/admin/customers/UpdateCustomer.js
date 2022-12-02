/* eslint-disable react-hooks/exhaustive-deps */
import { mdiCloseCircle, mdiFileImagePlus } from '@mdi/js';
import Icon from '@mdi/react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as yup from 'yup';
import Spinner from '../../../components/admin/Spinner';
import { useDetailCustomerQuery } from '../../../store/users/usersApiSlice';
import NotFound from '../../error/NotFound';

const UpdateCustomer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    isLoading,
    data: customer,
    error,
    isError,
    isSuccess,
  } = useDetailCustomerQuery({ id: id });
  // const [updateCustomer, { error: errorUpload }] = useUpdateUserMutation();
  const [selectedPhotoProfile, setSelectedPhotoProfile] = useState('');
  // const [formDataState, setFormDataState] = useState(null);
  // const { uploadPicture, isUpload } = useUploadPictureUser();
  console.log(customer);

  useEffect(() => {
    if (isSuccess) {
      setSelectedPhotoProfile(customer?.data?.picture);
    }
  }, [isSuccess]);

  // CONFIG FORM
  const initialValues = {
    name: customer?.data?.name,
    email: customer?.data?.email,
    phone: customer?.data?.phone,
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
    console.log(values);
    await UpdateCustomer({ userID: id, name: values.name });
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
                  !props.isValid || props.isSubmitting
                    ? 'bg-primary-light'
                    : 'bg-primary'
                }`}
                disabled={!props.isValid || props.isSubmitting}
              >
                {props.isSubmitting ? 'Please Wait' : 'Update Customer'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UpdateCustomer;
