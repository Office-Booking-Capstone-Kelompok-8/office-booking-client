import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Styles.css';
import logo from '../../../assets/img/logo.png';
import Icon from '@mdi/react'
import { 
    mdiViewDashboard, 
    mdiOfficeBuilding, 
    mdiAccountMultipleOutline,
    mdiMessageTextOutline } 
from '@mdi/js';

const Sidebar = () => {
    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const activeLink = "text-primary text-decoration-none";
    const normalLink = "text-primary-light text-decoration-none";
  return (
    <div>
        <div className='sidebar' id='side_nav'>
            <div className='header-box px-5 pt-3 pb-4 d-flex justify-content-center'>
                <h1 className='text-logo'><img src={logo}  alt="logo" className='logo'/> <span className='text-primary'>OfficeZone</span></h1>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" onClick={toggle}></span>
            </button>
            <div className="navbar-collapse" id="navbarNav">
                <ul className='navbar-link px-3'>
                    <li className='nav-item text-decoration-none d-block'>
                        <NavLink to="/admin"
                            className={({ isActive }) =>
                            isActive ? activeLink : normalLink}>
                            <Icon path={mdiViewDashboard}
                                title="User Profile"
                                size={1}
                                className=' m-3'
                            />
                            Dashboard
                        </NavLink>
                    </li>
                    <li className='nav-item text-decoration-none d-block'>
                        <NavLink to="/"
                            className={({ isActive }) =>
                            isActive ? activeLink : normalLink}>
                            <Icon path={mdiOfficeBuilding}
                                title="User Profile"
                                size={1}
                                className='m-3'
                            />
                            Buildings
                        </NavLink>
                    </li>
                    <li className='nav-item text-decoration-none d-block'>
                        <NavLink to="/"
                            className={({ isActive }) =>
                            isActive ? activeLink : normalLink}>
                            <Icon path={mdiAccountMultipleOutline}
                                title="User Profile"
                                size={1}
                                className='m-3'
                            />
                            Reservation
                        </NavLink>
                    </li>
                    <li className='nav-item text-decoration-none d-block'>
                        <NavLink to="/"
                            className={({ isActive }) =>
                            isActive ? activeLink : normalLink}>
                            <Icon path={mdiAccountMultipleOutline}
                                title="User Profile"
                                size={1}
                                className='m-3'
                            />
                            Customers
                        </NavLink>
                    </li>
                    <li className='nav-item text-decoration-none d-block'>
                        <NavLink to="/"
                            className={({ isActive }) =>
                            isActive ? activeLink : normalLink}>
                            <Icon path={mdiMessageTextOutline}
                                title="User Profile"
                                size={1}
                                className='m-3'
                            />
                            Reviews
                        </NavLink>
                    </li>
                </ul>
            </div>   
        </div>
    </div>  
  )
}

export default Sidebar