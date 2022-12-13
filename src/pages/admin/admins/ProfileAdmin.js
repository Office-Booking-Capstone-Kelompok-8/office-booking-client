import { mdiCamera } from '@mdi/js';
import Icon from '@mdi/react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import {
  useChangePasswordMutation,
  useGetCurrentUserQuery,
  useUpdateCurrentUserMutation,
} from '../../../store/currentUser/currentUserApiSlice';
import * as yup from 'yup';
import Spinner from '../../../components/admin/Spinner';
import { notifyError, notifySuccess } from '../../../utils/helpers';
import { ToastContainer } from 'react-toastify';

const ProfileAdmin = () => {
  const {
    data: currentUser,
    error,
    isError,
    isLoading,
  } = useGetCurrentUserQuery();
  const [
    updateCurrentUser,
    { isSuccess: successUpdate, isError: isErrorUpdate, error: errorUpdate },
  ] = useUpdateCurrentUserMutation();
  const [
    changePassword,
    {
      error: errorPassword,
      isSuccess: successPassword,
      isError: isErrorPassword,
    },
  ] = useChangePasswordMutation();

  if (isError || isErrorUpdate || isErrorPassword) {
    console.log(error);
    console.log(errorUpdate);
    console.log(errorPassword);
  }

  console.log(currentUser);

  useEffect(() => {
    if (isErrorUpdate || isErrorPassword) {
      notifyError('Update Failed');
    }
    if (successUpdate || successPassword) {
      notifySuccess('Update successfully');
    }
  }, [
    isErrorUpdate,
    successUpdate,
    successPassword,
    isErrorPassword,
    currentUser,
  ]);

  // CONFIG FORM PASSWORD
  const initialValuesPassword = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  const validationSchemaPassword = yup.object({
    oldPassword: yup.string().required().trim(),
    newPassword: yup.string().required().trim(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('newPassword'), null], 'password must match')
      .required('confirm password is a required field'),
  });

  const onSubmitPassword = async (values) => {
    console.log(values);
    changePassword({
      oldPassword: values.oldPassword,
      newPassword: values.newPassword,
    });
  };

  // CONFIG FORM DETAIL
  const initialValues = {
    name: currentUser?.data?.name,
    email: currentUser?.data?.email,
    phone: currentUser?.data?.phone,
  };

  const validationSchema = yup.object({
    name: yup.string().required().trim(),
    email: yup.string().required().trim().email(),
    phone: yup
      .string()
      .required()
      .matches(/^[0-9]+$/, 'number is invalid'),
  });

  const onSubmit = async (values) => {
    updateCurrentUser({
      name: values?.name,
      email: values?.email,
      phone: values?.phone,
    });
  };

  if (isLoading) return <Spinner />;

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
      <div className="profileadmin">
        <div className="profile-text row">
          <div className="col-12 col-md-12 col-lg-12">
            <div className="row mb-3">
              <div className="col-6 ">
                <div className=" row rounded align-items-center">
                  <div
                    className="col-2"
                    style={{ position: 'relative', cursor: 'pointer' }}
                  >
                    <Icon
                      path={mdiCamera}
                      style={{
                        width: '1.7rem',
                        position: 'absolute',
                        bottom: '0',
                        right: '1rem',
                      }}
                    />
                    <img
                      src="https://tse3.mm.bing.net/th?id=OIP.cDqgnRzfbofSK9VVDpRSeQHaHa&pid=Api&P=0"
                      alt="user"
                      className="w-10 h-10 avatar"
                    />
                  </div>
                  <div className="col-8">
                    <h3>Profile</h3>
                    <span className="text-md text-gray-dark">
                      update your personal details
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Email & PhoneNumber */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={onSubmit}
        >
          {(props) => {
            return (
              <Form>
                <div className="row mb-3 pt-5">
                  <h4>Update Profile</h4>
                  <div className="col-md-6">
                    <label className="text-primary-dark" htmlFor="email">
                      Email <span className="text-error">*</span>
                    </label>
                    <Field
                      name="email"
                      type="text"
                      className="input-field text-dark"
                      id="email"
                      placeholder="Email"
                    />
                    <ErrorMessage name="name">
                      {(err) => (
                        <span className="text-sm text-error">{err}</span>
                      )}
                    </ErrorMessage>
                  </div>
                  <div className="col-md-6">
                    <label className="text-primary-dark" htmlFor="notlp">
                      Phone Number <span className="text-error">*</span>
                    </label>
                    <Field
                      name="phone"
                      type="text"
                      className="input-field"
                      id="notlp"
                      placeholder="Phone"
                    />
                    <ErrorMessage name="phone">
                      {(err) => (
                        <span className="text-sm text-error">{err}</span>
                      )}
                    </ErrorMessage>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="text-primary-dark" htmlFor="username">
                      Username <span className="text-error">*</span>
                    </label>
                    <Field
                      placeholder="Username"
                      name="name"
                      type="text"
                      className="input-field text-dark"
                      id="username"
                    />
                    <ErrorMessage name="username">
                      {(err) => (
                        <span className="text-sm text-error">{err}</span>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary text-sm mb-4">
                  Update Profile
                </button>
              </Form>
            );
          }}
        </Formik>
        {/* New Password Confirm Password * */}
        <Formik
          onSubmit={onSubmitPassword}
          validationSchema={validationSchemaPassword}
          initialValues={initialValuesPassword}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {(props) => {
            return (
              <Form>
                <div className="row mb-3">
                  <h4>Change Password</h4>
                  <div className="col-md-6 mb-3">
                    <label className="text-primary-dark" htmlFor="newpass">
                      Old Password <span className="text-error">*</span>
                    </label>
                    <Field
                      name="oldPassword"
                      type="password"
                      className="input-field text-dark"
                      id="newpass"
                      placeholder="update your password"
                    />
                    <ErrorMessage name="oldPassword">
                      {(err) => (
                        <span className="text-sm text-error">{err}</span>
                      )}
                    </ErrorMessage>
                  </div>
                  <div className="col-md-6">
                    <label className="text-primary-dark" htmlFor="newPass">
                      New Password <span className="text-error">*</span>
                    </label>
                    <Field
                      name="newPassword"
                      type="password"
                      className="input-field"
                      id="newPass"
                      placeholder="same as new password"
                    />
                    <ErrorMessage name="newPassword">
                      {(err) => (
                        <span className="text-sm text-error">{err}</span>
                      )}
                    </ErrorMessage>
                  </div>
                  <div className="col-md-6">
                    <label className="text-primary-dark" htmlFor="confpass">
                      Confirm Password <span className="text-error">*</span>
                    </label>
                    <Field
                      name="confirmPassword"
                      type="password"
                      className="input-field"
                      id="confpass"
                      placeholder="same as new password"
                    />
                    <ErrorMessage name="confirmPassword">
                      {(err) => (
                        <span className="text-sm text-error">{err}</span>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <button className="btn btn-primary text-sm mb-4" type="submit">
                  Update Password
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default ProfileAdmin;
