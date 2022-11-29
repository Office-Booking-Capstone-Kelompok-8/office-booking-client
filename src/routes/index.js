import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddBuilding from '../pages/admin/buildings/AddBuilding';
import Buildings from '../pages/admin/buildings/Buildings';
import UpdateBuilding from '../pages/admin/buildings/UpdateBuilding';
import DetailBuilding from '../pages/admin/buildings/DetailBuilding';
import AddCustomer from '../pages/admin/customers/AddCustomer';
import Customers from '../pages/admin/customers/Customers';
import UpdateCustomer from '../pages/admin/customers/UpdateCustomer';
import DetailCustomer from '../pages/admin/customers/DetailCustomer';
import Dashboard from '../pages/admin/dashboard/Dashboard';
import LayoutAdmin from '../pages/admin/LayoutAdmin';
import Reservations from '../pages/admin/reservations/Reservations';
import SearchResults from '../pages/admin/SearchResults';
import LoginAdmin from '../pages/auth/LoginAdmin';
import LandingPage from '../pages/enduser/LandingPage';
import NotFound from '../pages/error/NotFound';
import ServerUnavailable from '../pages/error/ServerUnavailable';

export default function SetupRoute() {
  return (
    <Routes>
      {/* ADMIN */}
      <Route path="/admin" element={<LayoutAdmin />}>
        <Route path="search" element={<SearchResults />} />
        <Route index element={<Dashboard />} />
        <Route path="login" element={<LoginAdmin />} />
        {/* Buildings */}
        <Route path="buildings">
          <Route index element={<Buildings />} />
          <Route path="add-building" element={<AddBuilding />} />
          <Route path="edit-building/:id" element={<UpdateBuilding />} />
          <Route path="detail-building/:id" element={<DetailBuilding />} />
        </Route>
        {/* Reservation */}
        <Route path="reservations" element={<Reservations />} />
        {/* Customer */}
        <Route path="customers">
          <Route index element={<Customers />} />
          <Route path="add-customer" element={<AddCustomer />} />
          <Route path="edit-customer" element={<UpdateCustomer />} />
          <Route path="detail-customer/:id" element={<DetailCustomer />} />
        </Route>
      </Route>

      {/* END USER */}
      <Route path="/" element={<LandingPage />} />

      {/* Not Found */}
      <Route path="*" element={<NotFound />} />
      <Route path="/admin/server-error" element={<ServerUnavailable />} />
    </Routes>
  );
}
