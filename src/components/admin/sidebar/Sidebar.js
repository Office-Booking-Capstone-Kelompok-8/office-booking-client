import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Styles.css';
import logo from '../../../assets/img/logo.png';
import Icon from '@mdi/react';
import {
  mdiViewDashboard,
  mdiOfficeBuilding,
  mdiAccountMultipleOutline,
  mdiLogin,
  mdiHomeRoof,
  mdiCog,
} from '@mdi/js';
import Auth from '../../../utils/auth';

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div
      className="d-flex flex-column justify-content-between shadow sidebar"
      style={{
        backgroundColor: 'white',
        zIndex: 10,
        width: '20vw',
      }}
    >
      <div>
        <div className="text-logo text-center mb-4 p-2">
          <img src={logo} alt="logo" className="w-8" />{' '}
          <span className="text-primary fw-bold d-none d-md-inline">
            OfficeZone
          </span>
        </div>

        <div className="px-3 text-md">
          <NavLink
            end
            to="/admin"
            className="nav-link__admin d-block d-flex justify-content-center justify-content-md-start align-items-center"
          >
            <div>
              <Icon
                path={mdiViewDashboard}
                title="User Profile"
                className="m-3 w-2"
              />
            </div>
            <span className="d-none d-md-inline">Dashboard</span>
          </NavLink>
          <NavLink
            to="/admin/buildings"
            className="nav-link__admin d-block d-block d-flex justify-content-center justify-content-md-start align-items-center"
          >
            <div>
              <Icon
                path={mdiOfficeBuilding}
                title="User Profile"
                className="m-3 w-2"
              />
            </div>
            <span className="d-none d-md-inline">Buildings</span>
          </NavLink>
          <NavLink
            to="/admin/reservations"
            className="nav-link__admin d-block d-block d-flex justify-content-center justify-content-md-start align-items-center"
          >
            <div>
              <Icon
                path={mdiHomeRoof}
                title="User Profile"
                className="m-3 w-2"
              />
            </div>
            <span className="d-none d-md-inline">Reservations</span>
          </NavLink>
          <div className="nav-item dropdown">
            <div className="sidenav-item">
              <NavLink
                className="nav-link__admin dropdown-toggle d-block d-block d-flex justify-content-center justify-content-md-start align-items-center"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
              >
                <div>
                  <Icon
                    path={mdiAccountMultipleOutline}
                    title="User Profile"
                    className="m-3 w-2"
                  />
                  <span className="d-none d-md-inline">Users</span>
                </div>
              </NavLink>
              <div className="dropdown-menu">
                <div className="nav-link__admin dropdown-item">
                  <NavLink
                    className="sidenav_link d-block d-block d-flex justify-content-center justify-content-md-start align-items-center"
                    to="/admin/customers"
                  >
                    <span className="d-none d-md-inline">Customers</span>
                  </NavLink>
                </div>
                <div className="nav-link__admin dropdown-item">
                  <NavLink
                    className="sidenav_link d-block d-block d-flex justify-content-center justify-content-md-start align-items-center"
                    to="/admin/admins"
                  >
                    <span className="d-none d-md-inline">Admins</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <NavLink
            to="/admin/settings"
            className="nav-link__admin d-block d-block d-flex justify-content-center justify-content-md-start align-items-center"
          >
            <div>
              <Icon path={mdiCog} title="User Profile" className="m-3 w-2" />
            </div>
            <span className="d-none d-md-inline">Settings</span>
          </NavLink>
        </div>
      </div>
      <div
        className="nav-link__admin d-block d-block d-flex justify-content-center justify-content-md-start align-items-center"
        style={{ cursor: 'pointer' }}
        onClick={() => {
          Auth.logOut(navigate);
        }}
      >
        <Icon path={mdiLogin} title="User Profile" size={1} className="m-3" />
        <span className="d-none d-md-inline">Log Out</span>
      </div>
    </div>
  );
};

export default Sidebar;
