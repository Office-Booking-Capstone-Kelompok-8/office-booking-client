import React from "react";
import { Route, Routes } from "react-router-dom";
import AddBuilding from "../pages/admin/buildings/AddBuilding";
import Buildings from "../pages/admin/buildings/Buildings";
import UpdateBuilding from "../pages/admin/buildings/UpdateBuilding";
import DetailBuilding from "../pages/admin/buildings/DetailBuilding";
import AddCustomer from "../pages/admin/customers/AddCustomer";
import Customers from "../pages/admin/customers/Customers";
import UpdateCustomer from "../pages/admin/customers/UpdateCustomer";
import DetailCustomer from "../pages/admin/customers/DetailCustomer";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import LayoutAdmin from "../pages/admin/LayoutAdmin";
import Reservations from "../pages/admin/reservations/Reservations";
import DetailReservation from "../pages/admin/reservations/DetailReservation";
import SearchResults from "../pages/admin/SearchResults";
import LoginAdmin from "../pages/auth/LoginAdmin";
import NotFound from "../pages/error/NotFound";
import ServerUnavailable from "../pages/error/ServerUnavailable";
import Admins from "../pages/admin/admins/Admins";
import AddAdmin from "../pages/admin/admins/AddAdmin";
import UpdateAdmin from "../pages/admin/admins/UpdateAdmin";
import DetailAdmin from "../pages/admin/admins/DetailAdmin";
import ProtectedRoute from "./ProtectedRoute";
import PrivateRoute from "./PrivateRoute";
import ProfileAdmin from "../pages/admin/admins/ProfileAdmin";
import SearchBuilding from "../pages/enduser/SearchBuilding";
import DetailBuildingUser from "../pages/enduser/detailbuilding/DetailBuildingUser";
import LandingPage from "../pages/enduser/landingpaage/LandingPage";
import Payments from "../pages/admin/settings/Payments";
import UpdatePayment from "../pages/admin/settings/UpdatePayment";

export default function SetupRoute() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="auth" element={<LoginAdmin />} />
      </Route>
      {/* ADMIN */}
      <Route element={<PrivateRoute />}>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route path="search/:input" element={<SearchResults />} />
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<ProfileAdmin />} />
          {/* Buildings */}
          <Route path="buildings">
            <Route index element={<Buildings />} />
            <Route path="add-building" element={<AddBuilding />} />
            <Route path="edit-building/:id" element={<UpdateBuilding />} />
            <Route path="detail-building/:id" element={<DetailBuilding />} />
          </Route>
          {/* Reservation */}
          <Route path="reservations">
            <Route index element={<Reservations />} />
            <Route
              path="detail-reservation/:id"
              element={<DetailReservation />}
            />
          </Route>
          {/* Customer */}
          <Route path="customers">
            <Route index element={<Customers />} />
            <Route path="add-customer" element={<AddCustomer />} />
            <Route path="edit-customer/:id" element={<UpdateCustomer />} />
            <Route path="detail-customer/:id" element={<DetailCustomer />} />
          </Route>
          {/* Admins */}
          <Route path="admins">
            <Route index element={<Admins />} />
            <Route path="add-admin" element={<AddAdmin />} />
            <Route path="edit-admin/:id" element={<UpdateAdmin />} />
            <Route path="detail-admin/:id" element={<DetailAdmin />} />
          </Route>
          {/* Settings */}
          <Route path="payments">
            <Route index element={<Payments />} />
            <Route path="update/:id" element={<UpdatePayment />} />
          </Route>
        </Route>
      </Route>

      {/* END USER */}
      <Route path="/" element={<LandingPage />} />
      <Route path="search-building" element={<SearchBuilding />} />
      <Route path="detail-building-user" element={<DetailBuildingUser />} />

      {/* Not Found */}
      <Route path="*" element={<NotFound />} />
      <Route path="/admin/server-error" element={<ServerUnavailable />} />
    </Routes>
  );
}
