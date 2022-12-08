import React from 'react';
import './styles.css';
import logo from '../../../assets/img/logo.png';

const Navbar = () => {

  return (
    <div>
      <nav
        className="shadow-sm px-5 py-2"
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          backgroundColor: 'white',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="text-logo text-center p-2">
          <img src={logo} alt="logo" className="w-5" />{' '}
          <span style={{fontSize: 24}} className="text-primary fw-bold d-none d-md-inline">
            OfficeZone
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
