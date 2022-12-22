import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import buildings from "./../../../assets/img/building-dashboard.png";
import {
  useGetBuildingQuery,
  useGetBuildingTotalQuery,
} from "../../../store/building/buildingApiSLice";
import Pagination from "../../../components/admin/Pagination";
import BuildingItem from "./BuildingItem";
import Spinner from "../../../components/admin/Spinner";
import { ToastContainer } from "react-toastify";

const Buildings = () => {
  const { data, isSuccess } = useGetBuildingQuery({
    page: 1,
    limit: 20,
  });
  const { data: dataTotal, error: errorTotal } = useGetBuildingTotalQuery();
  const [buildingData, setBuildingData] = useState(null);

  console.log(dataTotal, errorTotal);

  useEffect(() => {
    if (isSuccess) {
      setBuildingData(data.data);
    }
  }, [isSuccess, data]);

  // Pagination
  const totalBuilding = buildingData?.length;
  const buildingPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  // Mengatur data per page
  const lastPage = currentPage * buildingPerPage;
  const firstPage = lastPage - buildingPerPage;
  const currentBuilding = buildingData?.slice(firstPage, lastPage);

  const nextPage = () =>
    setCurrentPage((prev) => {
      if (prev === Math.ceil(totalBuilding / buildingPerPage)) {
        return prev;
      }
      return prev + 1;
    });
  const prevPage = () =>
    setCurrentPage((prev) => {
      if (prev === 1) {
        return prev;
      }
      return prev - 1;
    });
  const paginate = (numPage) => setCurrentPage(numPage);

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="colored"
      />
      <div className="mb-2">
        <div className="row mb-3">
          <div className="col-md-12 d-flex justify-content-end">
            <Link
              to="/admin/buildings/add-building"
              className="btn bg-primary text-white text-sm me-5 px-5 py-2"
            >
              Add building
            </Link>
          </div>
        </div>
      </div>
      <div className="row px-2">
        <div className="col-12 col-md-7 col-lg-8">
          <div className="row mb-3">
            <div className="col-md-6 col-lg-6 p-3">
              <div className="shadow-sm row rounded p-2 align-items-center">
                <div className="col-md-4 col-lg-4">
                  <img src={buildings} className="w-100" alt="buildings" />
                </div>
                <div className="col-md-8 col-lg-8">
                  <h3 className="fw-bold">
                    {dataTotal?.data?.byTimeFrame?.allTime}
                  </h3>
                  <span className="text-sm ">Total Buildings</span>
                  <div className="justify-content-between rounded d-flex flex-column flex-lg-row">
                    <h3
                      className="text-primary text-sm px-2 py-2"
                      style={{
                        background: "rgba(202, 222, 251, 0.6)",
                        borderRadius: 9,
                      }}
                    >
                      + {dataTotal?.data?.byTimeFrame?.thisMonth}
                    </h3>
                    <span className="text-sm text-gray-dark me-4 pt-2">
                      new buildings this month
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 d-flex flex-column pt-3 p-5">
              <div className="col-md-12 col-lg-12 align-items-center d-flex flex-lg-row">
                {dataTotal?.data?.byCity?.map((city) => (
                  <div
                    className="col-md-3 col-lg-3 me-5 shadow-sm row rounded w-15 h-6"
                    key={city?.cityId}
                  >
                    <h3 className="fw-bold text-md">{city.total}</h3>
                    <span className="text-sm">{city.cityName}</span>
                  </div>
                ))}
              </div>
              <div className="justify-content-between pt-3">
                <div className="shadow-sm row rounded w-15 h-6">
                  <h3 className="fw-bold text-md">14</h3>
                  <span className="text-sm ">Jakarta Barat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="card"
        style={{
          boxShadow: "0px 8px 24px rgba(112, 144, 176, 0.25)",
          borderRadius: 9,
        }}
      >
        <div className="card-body">
          {currentBuilding ? (
            <table className="table">
              <thead>
                <tr>
                  <th className="text-sm text-gray-dark">Name</th>
                  <th className="text-sm text-gray-dark">District</th>
                  <th className="text-sm text-gray-dark">Price</th>
                  <th className="text-sm text-gray-dark"></th>
                </tr>
              </thead>
              <tbody>
                {currentBuilding?.map((build) => (
                  <BuildingItem key={build.id} building={build} />
                ))}
              </tbody>
            </table>
          ) : (
            <Spinner />
          )}
        </div>
        {currentBuilding && (
          <div className="d-flex justify-content-center">
            <Pagination
              currentPage={currentPage}
              totalUsers={totalBuilding}
              userPerPage={buildingPerPage}
              nextPage={nextPage}
              paginate={paginate}
              prevPage={prevPage}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Buildings;
