/* eslint-disable react-hooks/exhaustive-deps */
import { mdiCloseCircle, mdiFileImagePlus } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { useAddUsersMutation } from "../../../store/users/usersApiSlice";
import { notifyError, notifySuccess } from "../../../utils/helpers";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useUploadPictureUser from "../../../hooks/uploadPictureUser";

const AddCustomer = () => {
  const [selectedPhotoProfile, setSelectedPhotoProfile] = useState("");
  const [formDataState, setFormDataState] = useState(null);
  const [addCustomer, { error }] = useAddUsersMutation();
  const navigate = useNavigate();
  const { uploadPicture, isUpload } = useUploadPictureUser();

  useEffect(() => {
    if (error?.status === 409) {
      notifyError("Email already used");
    }
  }, [error]);

  // CONFIG FORM
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    images: "",
  };

  const validationSchema = yup.object({
    name: yup.string().required().trim(),
    images: yup.string().required(),
    email: yup.string().required().trim().email(),
    phone: yup
      .string()
      .matches(/^[0-9]+$/, "number is invalid")
      .required(),
    password: yup
      .string()
      .required()
      .trim()
      .min(8, "password must be at least 8 characters in length"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "password must match")
      .required("confirm password is a required field"),
  });

  const onSubmit = async (values, props) => {
    await addCustomer({
      name: values.name,
      email: values.email,
      phone: values.phone,
      password: values.password,
    }).then(async (res) => {
      await uploadPicture(res.data?.data.uid, formDataState);
      notifySuccess("customer created successfully");
      props.resetForm();
      setSelectedPhotoProfile("");
    });
  };

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
        validateOnBlur={false}
        validateOnChange={false}
      >
        {(props) => {
          return (
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
                          onClick={() => setSelectedPhotoProfile("")}
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
                            const formData = new FormData();
                            formData.append("picture", selectedImg);
                            setFormDataState(formData);

                            // generate url
                            const urlImg = URL.createObjectURL(selectedImg);
                            props.setFieldValue("images", urlImg);
                            setSelectedPhotoProfile(urlImg);
                          }}
                        />
                      </label>
                    )}
                  </div>
                  <div className="text-center">
                    <ErrorMessage name="images">
                      {(err) => (
                        <span className="text-sm text-error">{err}</span>
                      )}
                    </ErrorMessage>
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
                  onClick={() => navigate(-1)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="col-3 button text-white me-3 bg-primary"
                >
                  {props.isSubmitting || isUpload
                    ? "Please Wait"
                    : "Add Customer"}
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AddCustomer;
