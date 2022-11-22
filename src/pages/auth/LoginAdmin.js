import React from 'react';
import imgLogin from './../../assets/img/people-admin-login.png';
import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js';

const LoginAdmin = () => {
  return (
    <div className="row vh-100">
      <div className="col d-flex bg-gray-light justify-content-center align-items-center">
        <img src={imgLogin} alt="login-banner" className="w-75" />
      </div>
      <div className="col d-flex bg-indigo-100 justify-content-center align-items-center">
        <div className="w-5">
          <Icon path={mdiAccount} className="text-primary" />
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
