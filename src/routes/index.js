import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/admin/Dashboard';
import LandingPage from '../pages/enduser/LandingPage';

export default function SetupRoute() {
  return (
    <Routes>
      {/* ADMIN */}
      <Route path="/admin" element={<Dashboard />} />

      {/* END USER */}
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}
