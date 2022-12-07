import React from 'react';
import './styles.css';
import Icon from '@mdi/react';
import { mdiEmailOutline, mdiBellOutline } from '@mdi/js';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/img/logo.png';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
        <nav
            className="fixed-top d-flex shadow-sm p-2 justify-content-between px-5"
            style={{
                position: 'sticky',
                top: 0,
                right: 0,
                left: 0,
                backgroundColor: 'white', 
            }}
        >
            <div className="text-logo text-center mb-4 p-2 ">
                <img src={logo} alt="logo" className="w-5" />{' '}
                <span className="text-primary fw-bold d-none d-md-inline">
                OfficeZone
                </span>
            </div>
            <div className="d-flex align-items-center">
                <Icon
                path={mdiBellOutline}
                title="User Profile"
                size={1}
                className="icons"
                />
                <Icon
                path={mdiEmailOutline}
                title="User Profile"
                size={1}
                className="icons m-3"
                />
                <div onClick={() => {navigate('/admin/profile');
                }} style={{ cursor: 'pointer' }} className="d-flex justify-content-center align-items-center">
                <img
                    src="https://tse3.mm.bing.net/th?id=OIP.cDqgnRzfbofSK9VVDpRSeQHaHa&pid=Api&P=0"
                    alt="user"
                    className="w-4 h-4 avatar"
                    style={{ marginRight: '1rem' }}
                />
                <div className="d-lg-flex d-none flex-column justify-content-center me-5">
                    <h4 className="text-md fw-bold">Melati Jaya Kusuma</h4>
                    <small style={{ fontSize: '0.85rem' }}>user</small>
                </div>
                </div>
            </div>
        </nav>
    </div>
    
  );
};

export default Navbar;
