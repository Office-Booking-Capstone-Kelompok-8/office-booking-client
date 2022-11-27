import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddBuilding from '../pages/admin/buildings/AddBuilding';
import Buildings from '../pages/admin/buildings/Buildings';
import UpdateBuilding from '../pages/admin/buildings/UpdateBuilding';
import DetailBuilding from '../pages/admin/buildings/DetailBuilding';
import AddCustomer from '../pages/admin/customers/AddCustomer';
import Customers from '../pages/admin/customers/Customers';
import UpdateCustomer from '../pages/admin/customers/UpdateCustomer';
import Dashboard from '../pages/admin/dashboard/Dashboard';
import AddReservation from '../pages/admin/reservations/AddReservation';
import Reservations from '../pages/admin/reservations/Reservations';
import UpdateReservation from '../pages/admin/reservations/UpdateReservation';
import LoginAdmin from '../pages/auth/LoginAdmin';
import LandingPage from '../pages/enduser/LandingPage';

export default function SetupRoute() {
  return (
    <Routes>
      {/* ADMIN */}
      <Route path="/admin">
        <Route index element={<Dashboard />} />
        <Route path="login" element={<LoginAdmin />} />
        {/* Buildings */}
        <Route path="buildings" element={<Buildings />} />
        <Route path="add-building" element={<AddBuilding />} />
        <Route path="edit-building/:id" element={<UpdateBuilding />} />
        <Route path="detail-building/:id" element={<DetailBuilding />} />
        {/* Reservation */}
        <Route path="reservations" element={<Reservations />} />
        <Route path="add-reservation" element={<AddReservation />} />
        <Route path="edit-reservation" element={<UpdateReservation />} />
        {/* Buildings */}
        <Route path="customers" element={<Customers />} />
        <Route path="add-customer" element={<AddCustomer />} />
        <Route path="edit-customer" element={<UpdateCustomer />} />
      </Route>

      {/* END USER */}
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}
