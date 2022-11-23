import React from 'react';
import earnings from './../../../assets/img/earning-dashboard.png';
import buildings from './../../../assets/img/building-dashboard.png';
import './styles.css';
import BarChart from '../../../components/admin/BarChart';
import CalendarComponent from '../../../components/admin/Calendar';

const Dashboard = () => {
  return (
    <div>
      <div className="mb-2">
        <h2>Dashboard</h2>
        <div>
          <span>Office Zone</span>
          <span className="breadcrumb-arrow">&gt;</span>
          <span>Dashboard</span>
        </div>
      </div>
      <div className="row px-2">
        <div className="col-12 col-md-7 col-lg-8">
          <div className="row mb-3">
            <div className="col-6 p-3">
              <div className="shadow-sm row rounded p-2 align-items-center">
                <div className="col-4">
                  <img src={earnings} className="w-100" alt="earning" />
                </div>
                <div className="col-8">
                  <h3 className="fw-bold">Rp. 12.000.000</h3>
                  <span className="text-sm ">Total Earnings</span>
                </div>
              </div>
            </div>
            <div className="col-6 p-3">
              <div className="shadow-sm row rounded p-2 align-items-center">
                <div className="col-4">
                  <img src={buildings} className="w-100" alt="earning" />
                </div>
                <div className="col-8">
                  <h3 className="fw-bold">750</h3>
                  <span className="text-sm ">Total Buildings</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row px-1 mb-4">
            <div className="shadow-sm justify-content-between align-items-center rounded d-flex flex-column flex-lg-row px-4 py-3">
              <div className="d-flex align-items-center">
                <span className="text-lg fw-bold me-3">170</span>
                <span>Reservations</span>
              </div>
              <div className="d-flex align-items-center mt-3">
                <div className="d-flex align-items-center flex-column">
                  <p className="text-sm text-warning">Pending</p>
                  <p className="text-lg fw-bold">7</p>
                </div>
                <span className="divider"></span>
                <div className="d-flex align-items-center flex-column">
                  <p className="text-sm text-success">Accept</p>
                  <p className="text-lg fw-bold">7</p>
                </div>
                <span className="divider"></span>
                <div className="d-flex align-items-center flex-column">
                  <p className="text-sm text-error">Reject</p>
                  <p className="text-lg fw-bold">7</p>
                </div>
                <span className="divider"></span>
                <div className="d-flex align-items-center flex-column">
                  <p className="text-sm text-primary">Waiting Payment</p>
                  <p className="text-lg fw-bold">7</p>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow p-4 rounded">
            <div>
              <p>Total Customer</p>
              <h3 className="fw-bold">12.000</h3>
            </div>
            <BarChart />
          </div>
        </div>
        <div className="col-12 col-md-5 col-lg-4">
          <CalendarComponent />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
