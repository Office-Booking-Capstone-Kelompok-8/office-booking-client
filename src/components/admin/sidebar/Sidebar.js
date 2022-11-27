import React from 'react';
import { NavLink } from 'react-router-dom';
import './Styles.css';
import logo from '../../../assets/img/logo.png';
import Icon from '@mdi/react';
import {
  mdiViewDashboard,
  mdiOfficeBuilding,
  mdiAccountMultipleOutline,
  mdiLogin,
  mdiHomeRoof,
} from '@mdi/js';

const Sidebar = () => {
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
          <NavLink
            to="/admin/customers"
            className="nav-link__admin d-block d-block d-flex justify-content-center justify-content-md-start align-items-center"
          >
            <div>
              <Icon
                path={mdiAccountMultipleOutline}
                title="User Profile"
                className="m-3 w-2"
              />
            </div>
            <span className="d-none d-md-inline">Customers</span>
          </NavLink>
          {/* <li className="nav-item d-block">
            <NavLink to="/" className="nav-link__admin">
              <Icon
                path={mdiMessageTextOutline}
                title="User Profile"
                size={1}
                className="m-3"
              />
              Reviews
            </NavLink>
          </li> */}
          {/* <li className="logout d-block">
              <NavLink to="/" className="text-decoration-none">
                <Icon
                  path={mdiLogin}
                  title="User Profile"
                  size={1}
                  className="text-primary m-3"
                />
                Logout
              </NavLink>
            </li> */}
        </div>
      </div>
      <div>
        <NavLink className="nav-link__admin d-block d-block d-flex justify-content-center justify-content-md-start align-items-center">
          <Icon path={mdiLogin} title="User Profile" size={1} className="m-3" />
          <span className="d-none d-md-inline">Log Out</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
