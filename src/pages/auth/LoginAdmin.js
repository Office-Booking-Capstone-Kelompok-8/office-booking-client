import { useState } from 'react';
import imgLogin from './../../assets/img/people-admin-login.png';
import logo from './../../assets/img/logo.png';
import Icon from '@mdi/react';
import {
  mdiAccountOutline,
  mdiEyeOffOutline,
  mdiEyeOutline,
  mdiLockOutline,
} from '@mdi/js';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as yup from 'yup';

const LoginAdmin = () => {
  // Show Password
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  // Formik Setup
  const initialValues = {
    email: '',
    password: '',
    remember: false,
  };
  const validationSchema = yup.object({
    email: yup.string().required().email().trim(),
    password: yup.string().required().min(6).trim(),
  });
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="row vh-100">
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
                    className={`d-flex border align-items-center p-2 fs-6 ${
                      props.errors.email ? 'border-danger' : 'border-primary'
                    }`}
                    style={{ borderRadius: 7 }}
                  >
                    <div className="w-2">
                      <Icon
                        path={mdiAccountOutline}
                        style={{ color: '#8C8C8C' }}
                      />
                    </div>
                    <Field
                      placeholder="Email"
                      type="text"
                      name="email"
                      className="border-0 w-100"
                      style={{
                        outline: 'none',
                        fontSize: '.75rem',
                        marginLeft: '.3rem',
                      }}
                    />
                  </div>
                  <ErrorMessage name="email">
                    {(err) => <span className="text-sm text-error">{err}</span>}
                  </ErrorMessage>
                </div>
                <div className="mb-2">
                  <label className="mb-1">Password</label>
                  <div
                    className={`d-flex border align-items-center p-2 fs-6 ${
                      props.errors.password && props.handleBlur
                        ? 'border-danger'
                        : 'border-primary'
                    }`}
                    style={{ borderRadius: 7 }}
                  >
                    <div className="w-2">
                      <Icon
                        path={mdiLockOutline}
                        style={{ color: '#8C8C8C' }}
                      />
                    </div>
                    <Field
                      placeholder="Password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      className=" border-0 w-100"
                      style={{
                        outline: 'none',
                        fontSize: '.75rem',
                        marginLeft: '.3rem',
                      }}
                    />
                    <div className="w-2" onClick={toggleShowPassword}>
                      {showPassword ? (
                        <Icon
                          path={mdiEyeOffOutline}
                          style={{ color: '#8C8C8C', cursor: 'pointer' }}
                        />
                      ) : (
                        <Icon
                          path={mdiEyeOutline}
                          style={{ color: '#8C8C8C', cursor: 'pointer' }}
                        />
                      )}
                    </div>
                  </div>
                  <ErrorMessage name="password">
                    {(err) => <span className="text-sm text-error">{err}</span>}
                  </ErrorMessage>
                </div>
                <div className="mb-3 d-flex align-items-center">
                  <Field type="checkbox" name="remember" id="remember" />
                  <label htmlFor="remember" className="text-sm d-block mx-1 ">
                    Remember Me
                  </label>
                </div>
                <button type="submit" className="btn bg-primary text-white">
                  Log In
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default LoginAdmin;
