import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../../components/admin/sidebar/Header';
import Sidebar from '../../components/admin/sidebar/Sidebar';
import { splitBreadcumbs } from '../../utils/helpers';

const LayoutAdmin = () => {
  const location = useLocation();
  const breadcumbs = location.pathname.split('/');

  return (
    <main
      style={{
        overflowX: 'hidden',
        display: 'flex',
      }}
    >
      <Sidebar />
      <div
        className="flex-grow-1 h-full"
        style={{ overflow: 'auto', position: 'relative' }}
      >
        <Header />
        <div className="p-3">
          <div className="mb-4">
            <h2 style={{ textTransform: 'capitalize' }}>
              {splitBreadcumbs(breadcumbs)}
            </h2>
            <div className="text-gray-dark">
              <span>Office Zone</span>
              {breadcumbs.map((bread, i) => {
                return (
                  <div key={i} className="d-inline">
                    <span className="breadcrumb-arrow">&gt;</span>
                    <span style={{ textTransform: 'capitalize' }}>{bread}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default LayoutAdmin;
