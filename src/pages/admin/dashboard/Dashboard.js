import React, { useState } from 'react';
import earnings from './../../../assets/img/earning-dashboard.png';
import buildings from './../../../assets/img/building-dashboard.png';
import './../styles.css';
import BarChart from '../../../components/admin/BarChart';
import CalendarComponent from '../../../components/admin/Calendar';
import { useGetBuildingTotalQuery } from '../../../store/building/buildingApiSLice';
import {
  useGetReservationsQuery,
  useGetReservationsRevenueQuery,
  useGetReservationsTotalQuery,
} from '../../../store/reservations/reservationsApiSlice';
import Spinner from '../../../components/admin/Spinner';
import IconStatus from '../reservations/IconStatus';

const Dashboard = () => {
  const { data: buildingTotal } = useGetBuildingTotalQuery();
  const { data: reservationTotal } = useGetReservationsTotalQuery();
  const { data: reservationRevenue } = useGetReservationsRevenueQuery();

  // Set Date Now
  const dateString = new Date().toLocaleDateString();
  const dateSplit = dateString.split('/');
  const dateJoin = [...[dateSplit[2], dateSplit[0], dateSplit[1]]].join('-');
  const [date, setDate] = useState(dateJoin);

  const convertDate = (dateCal) => {
    setDate(dateCal);
  };

  const { data: reservations, isLoading } = useGetReservationsQuery({
    page: 1,
    limit: 100,
    createdStart: date,
    createdEnd: date,
  });

  return (
    <div>
      <div className="row px-2">
        <div className="col-12 col-md-7 col-lg-8">
          <div className="row mb-3">
            <div className="col-6 p-3">
              <div className="shadow-sm row rounded p-2 align-items-center">
                <div className="col-4">
                  <img src={earnings} className="w-100" alt="earning" />
                </div>
                <div className="col-8">
                  <h3 className="fw-bold">
                    Rp. {reservationRevenue?.data?.allTime}
                  </h3>
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
                  <h3 className="fw-bold">
                    {buildingTotal?.data?.byTimeFrame?.allTime}
                  </h3>
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
                  <p className="text-lg fw-bold">
                    {reservationTotal?.data?.byStatus[0]?.count}
                  </p>
                </div>
                <span className="divider"></span>
                <div className="d-flex align-items-center flex-column">
                  <p className="text-sm text-error">Reject</p>
                  <p className="text-lg fw-bold">
                    {reservationTotal?.data?.byStatus[1]?.count}
                  </p>
                </div>
                <span className="divider"></span>
                <div className="d-flex align-items-center flex-column">
                  <p className="text-sm text-error">Cancel</p>
                  <p className="text-lg fw-bold">
                    {reservationTotal?.data?.byStatus[2]?.count}
                  </p>
                </div>
                <span className="divider"></span>
                <div className="d-flex align-items-center flex-column">
                  <p className="text-sm text-primary">Waiting Payment</p>
                  <p className="text-lg fw-bold">
                    {reservationTotal?.data?.byStatus[3]?.count}
                  </p>
                </div>
                <span className="divider"></span>
                <div className="d-flex align-items-center flex-column">
                  <p className="text-sm text-success">Active</p>
                  <p className="text-lg fw-bold">
                    {reservationTotal?.data?.byStatus[4]?.count}
                  </p>
                </div>
                <span className="divider"></span>
                <div className="d-flex align-items-center flex-column">
                  <p className="text-sm text-success">Completed</p>
                  <p className="text-lg fw-bold">
                    {reservationTotal?.data?.byStatus[5]?.count}
                  </p>
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
          <div className="mb-3">
            <CalendarComponent chooseDate={convertDate} />
          </div>
          <div className="p-3">
            <h5 className="mb-4">Reservation</h5>
            <div
              style={{
                height: '65vh',
                overflowX: 'auto',
                paddingRight: '1rem',
              }}
            >
              {isLoading ? (
                <Spinner />
              ) : reservations?.data === null ? (
                <p className="fw-bold text-center">Empty</p>
              ) : (
                reservations?.data?.map((resev) => (
                  <div key={resev?.id} className="shadow p-3 mb-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fw-bold">{resev.building.name}</span>
                      <IconStatus status={resev.status} />
                    </div>
                    <span className="text-sm text-gray-dark">
                      {resev.building.city}
                    </span>
                    <div className="d-flex justify-content-start mt-2">
                      <div style={{ width: '30%', marginRight: '1rem' }}>
                        <img
                          src={resev.building.picture}
                          alt="building-images"
                          style={{
                            width: '100%',
                            borderRadius: '12px',
                          }}
                        />
                      </div>
                      <div className="d-flex justify-content-between flex-column">
                        <span className="d-block text-gray-dark">
                          {resev.tenant.name}
                        </span>
                        <span className="d-block">
                          {resev.startDate} - {resev.endDate}
                        </span>
                        <span className="d-block text-lg fw-bold">
                          Rp. 12.000.000
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
