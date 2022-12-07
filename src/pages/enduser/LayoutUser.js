import React from 'react';
import Navbar from '../../components/landingpage/navbar/Navbar';
import LandingPage from './landingpaage/LandingPage';
// import { Outlet, useLocation } from 'react-router-dom';

const LayoutUser = () => {
  // const location = useLocation();
  // const breadcumbs = location.pathname.split('/');
  return (
    <div style={{ position: 'relative' }}>
      <Navbar />
      <LandingPage />
    </div>
  );
};

export default LayoutUser;
