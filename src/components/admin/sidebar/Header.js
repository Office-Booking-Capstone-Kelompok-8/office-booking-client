import React, { useState } from 'react';
import './Styles.css';

import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';
import { useNavigate } from 'react-router-dom';
import { useDetailCustomerQuery } from '../../../store/users/usersApiSlice';
import Cookies from 'js-cookie';

const Header = () => {
  const navigate = useNavigate();
  const [inputSearch, setInputSearch] = useState('');
  const { data: currentUser } = useDetailCustomerQuery({
    id: Cookies.get('id'),
  });

  return (
    <nav
      className="d-flex shadow-sm p-3 justify-content-between"
      style={{
        position: 'sticky',
        top: 0,
        right: 0,
        left: 0,
        backgroundColor: 'white',
        zIndex: 100,
      }}
    >
      <form
        className="d-sm-flex justify-content-start border align-items-center border-primary p-2 input-search"
        onSubmit={(e) => {
          e.preventDefault();
          if (inputSearch.trim().length < 3 && inputSearch.trim().length > 0) {
            alert('input must be at least 3 characters in length');
          } else if (inputSearch.trim().length >= 3) {
            navigate(`/admin/search/${inputSearch}`);
            setInputSearch('');
          }
        }}
      >
        <button
          style={{ backgroundColor: 'transparent', border: 'none' }}
          className="w-4 text-gray-dark d-none d-md-block"
          type="submit"
        >
          <Icon path={mdiMagnify} />
        </button>
        <input
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          className="search"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
      <div className="d-flex align-items-center">
        <div
          onClick={() => {
            navigate('/admin/profile');
          }}
          style={{ cursor: 'pointer' }}
          className="d-flex justify-content-center align-items-center"
        >
          <img
            src={currentUser?.data?.picture}
            alt="user"
            className="w-4 h-4 avatar"
            style={{ marginRight: '1rem' }}
          />
          <div className="d-lg-flex d-none flex-column justify-content-center">
            <h4 className="text-md fw-bold">{currentUser?.data?.name}</h4>
            <small style={{ fontSize: '0.85rem' }}>Super admin</small>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
