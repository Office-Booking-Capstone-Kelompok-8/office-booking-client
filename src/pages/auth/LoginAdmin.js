import { useState } from "react";
import imgLogin from "./../../assets/img/people-admin-login.png";
import logo from "./../../assets/img/logo.png";
import Icon from "@mdi/react";
import "react-toastify/dist/ReactToastify.css";
import {
  mdiAccountOutline,
  mdiEyeOffOutline,
  mdiEyeOutline,
  mdiLockOutline,
} from "@mdi/js";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as yup from "yup";
import { useLoginMutation } from "../../store/auth/authApiSlice";
import { ToastContainer } from "react-toastify";
import { notifyError } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";
import Auth from "../../utils/auth";
import { BASE_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { setCredential } from "../../store/auth/authSlice";

const LoginAdmin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Show Password
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  // Login Mutation
  const [login] = useLoginMutation();
  // Formik Setup
  const initialValues = {
    email: "",
    password: "",
    remember: false,
  };
  const validationSchema = yup.object({
    email: yup.string().required().email().trim(),
    password: yup.string().required().min(8).trim(),
  });
  const onSubmit = async (values) => {
    try {
      const userData = await login({
        email: values.email,
        password: values.password,
      }).unwrap();
      // Store User to Cookie
      Auth.storeUserToCookie(userData.data);

      // Get User Detail
      await fetch(`${BASE_URL}/admin/users/${userData?.data?.userId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Auth.getAccessToken()}`,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          // Store user detail to local storage
          Auth.storeUserToState(res?.data);

          // Store to Redux
          dispatch(
            setCredential({
              name: res?.data?.name,
              email: res?.data?.email,
              picture: res?.data?.picture,
              phone: res?.data?.phone,
            })
          );
        });

      navigate("/admin");
    } catch (error) {
      if (error.status === 401 || error.status === 400) {
        notifyError("Email or Password Invalid");
      } else if (error.status === 500) {
        notifyError("Database Error");
      } else {
        notifyError("Server Error");
      }
    }
  };
  return (
    <>
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
      <div
        className="row vh-100"
        style={{
          overflowX: "hidden",
          display: "flex",
        }}
      >
        <div className="col d-md-flex d-none bg-gray-light justify-content-center align-items-center">
          <img src={imgLogin} alt="login-banner" className="w-75" />
        </div>
        <div className="col d-flex flex-column bg-indigo-100 justify-content-center align-items-center">
          <img src={logo} alt="Logo" />
          <Formik
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            initialValues={initialValues}
          >
            {(props) => {
              return (
                <Form className="d-flex flex-column w-75 w-md-50">
                  <div className="mb-2">
                    <label className="mb-1">Email</label>
                    <div
                      className="d-flex border align-items-center p-2 fs-6 border-primary"
                      style={{ borderRadius: 7 }}
                    >
                      <div className="w-2">
                        <Icon
                          path={mdiAccountOutline}
                          style={{ color: "#8C8C8C" }}
                        />
                      </div>
                      <Field
                        placeholder="Email"
                        type="text"
                        name="email"
                        className="border-0 w-100"
                        style={{
                          outline: "none",
                          fontSize: ".75rem",
                          marginLeft: ".3rem",
                        }}
                      />
                    </div>
                    <ErrorMessage name="email">
                      {(err) => (
                        <span className="text-sm text-error">{err}</span>
                      )}
                    </ErrorMessage>
                  </div>
                  <div className="mb-2">
                    <label className="mb-1">Password</label>
                    <div
                      className="d-flex border align-items-center p-2 fs-6 border-primary"
                      style={{ borderRadius: 7 }}
                    >
                      <div className="w-2">
                        <Icon
                          path={mdiLockOutline}
                          style={{ color: "#8C8C8C" }}
                        />
                      </div>
                      <Field
                        placeholder="Password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        className=" border-0 w-100"
                        style={{
                          outline: "none",
                          fontSize: ".75rem",
                          marginLeft: ".3rem",
                        }}
                      />
                      <div className="w-2" onClick={toggleShowPassword}>
                        {showPassword ? (
                          <Icon
                            path={mdiEyeOffOutline}
                            style={{ color: "#8C8C8C", cursor: "pointer" }}
                          />
                        ) : (
                          <Icon
                            path={mdiEyeOutline}
                            style={{ color: "#8C8C8C", cursor: "pointer" }}
                          />
                        )}
                      </div>
                    </div>
                    <ErrorMessage name="password">
                      {(err) => (
                        <span className="text-sm text-error">{err}</span>
                      )}
                    </ErrorMessage>
                  </div>
                  <button
                    type="submit"
                    className={`col-3 button text-white me-3 bg-primary`}
                    disabled={props.isSubmitting}
                  >
                    {props.isSubmitting ? "Loading" : "Log In"}
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default LoginAdmin;
