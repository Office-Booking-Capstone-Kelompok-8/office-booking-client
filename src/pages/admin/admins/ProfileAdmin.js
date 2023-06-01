/* eslint-disable react-hooks/exhaustive-deps */
import { mdiCamera } from "@mdi/js";
import Icon from "@mdi/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useChangePasswordMutation } from "../../../store/currentUser/currentUserApiSlice";
import * as yup from "yup";
import Spinner from "../../../components/admin/Spinner";
import { notifyError, notifySuccess } from "../../../utils/helpers";
import { ToastContainer } from "react-toastify";
import {
  useDetailCustomerQuery,
  useUpdateUserMutation,
} from "../../../store/users/usersApiSlice";
import useUploadPictureUser from "../../../hooks/uploadPictureUser";
import { useDispatch } from "react-redux";
import { setPhoto } from "../../../store/auth/authSlice";

const ProfileAdmin = () => {
  const dispatch = useDispatch();
  const {
    data: currentUser,
    error,
    isError,
    isLoading,
  } = useDetailCustomerQuery({ id: Cookies.get("id") });

  const [
    updateCurrentUser,
    { isSuccess: successUpdate, isError: isErrorUpdate, error: errorUpdate },
  ] = useUpdateUserMutation();

  const [
    changePassword,
    {
      error: errorPassword,
      isSuccess: successPassword,
      isError: isErrorPassword,
    },
  ] = useChangePasswordMutation();

  const { uploadPicture } = useUploadPictureUser();
  // Store picture
  const [profileBlob, setProfileBlob] = useState("");

  useEffect(() => {
    dispatch(setPhoto({ picture: currentUser?.data?.picture }));
    if (isErrorUpdate) {
      if (errorUpdate.status === 409) {
        notifyError("Email already in use");
      } else {
        notifyError("Update Failed");
      }
    }
    if (successUpdate || successPassword) {
      notifySuccess("admin updated successfully");
    }
  }, [isErrorUpdate, successUpdate, successPassword, errorUpdate]);

  // CONFIG FORM PASSWORD
  const initialValuesPassword = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const validationSchemaPassword = yup.object({
    oldPassword: yup.string().required().trim(),
    newPassword: yup.string().required().trim(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("newPassword"), null], "password must match")
      .required("confirm password is a required field"),
  });

  const onSubmitPassword = async (values, props) => {
    changePassword({
      oldPassword: values.oldPassword,
      newPassword: values.newPassword,
    });
    props.resetForm();
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
      .matches(/^[0-9]+$/, "number is invalid"),
  });

  const onSubmit = async (values) => {
    updateCurrentUser({
      userID: Cookies.get("id"),
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
                  <input
                    type="file"
                    hidden
                    id="profilePic"
                    accept="image/*"
                    onChange={async (e) => {
                      // get file
                      const selectedImg = e.target.files[0];
                      // add values images
                      const formData = new FormData();
                      formData.append("picture", selectedImg);

                      // Add blob file
                      const urlImg = URL.createObjectURL(selectedImg);
                      setProfileBlob(urlImg);

                      // Upload picture
                      await uploadPicture(currentUser?.data?.id, formData);

                      // Update store picture
                      dispatch(
                        setPhoto({ picture: currentUser?.data?.picture })
                      );
                      localStorage.removeItem("picture");
                      localStorage.setItem(
                        "picture",
                        currentUser?.data?.picture
                      );
                    }}
                  />
                  <label
                    htmlFor="profilePic"
                    className="col-2"
                    style={{ position: "relative", cursor: "pointer" }}
                  >
                    <Icon
                      path={mdiCamera}
                      style={{
                        width: "1.7rem",
                        position: "absolute",
                        bottom: "0",
                        right: "1rem",
                      }}
                    />
                    <img
                      src={profileBlob || currentUser?.data?.picture}
                      alt="user"
                      className="w-10 h-10 avatar"
                    />
                  </label>
                  <div className="col-8">
                    <h3>{currentUser?.data?.name}</h3>
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
