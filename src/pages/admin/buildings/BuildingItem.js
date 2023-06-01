/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDeleteBuildingMutation } from "../../../store/building/buildingApiSLice";
import { notifyError, notifySuccess } from "../../../utils/helpers";
import Swal from "sweetalert2";

const BuildingItem = ({ building }) => {
  const navigate = useNavigate();
  const [deleteBuilding, { isSuccess, error }] = useDeleteBuildingMutation();

  useEffect(() => {
    if (error?.status === 500) {
      notifyError("Server Error");
    }
    if (error?.status === 409) {
      notifyError("Building has active reservation");
    }
    if (isSuccess) {
      notifySuccess("building deleted successfully");
    }
  }, [error, isSuccess]);

  const deleteHandler = () => {
    Swal.fire({
      title: "Delete this building?",
      text: "this item will be removed permanently",
      confirmButtonColor: "#3085D6",
      confirmButtonText: "Delete",
      showCancelButton: true,
    }).then((window) => {
      if (window.isConfirmed) {
        deleteBuilding({ id: building.id });
      }
    });
  };

  return (
    <tr>
      <td
        onClick={() => {
          navigate(`/admin/buildings/detail-building/${building.id}`);
        }}
        style={{ cursor: "pointer" }}
      >
        <h1 className="text-primary-dark text-sm">
          <img
            src={building.pictures}
            alt="name"
            className="img-building 4 h-4 m-2"
          />
          {building.name}
        </h1>
      </td>
      <td className="text-primary-dark text-sm">
        {building.location.district}
      </td>
      <td>
        <h1 className="text-primary-dark text-sm">
          Rp {Intl.NumberFormat("id-ID").format(building.price.monthly)} /month
        </h1>
        <h1 className="text-primary-dark text-sm">
          Rp {Intl.NumberFormat("id-ID").format(building.price.annual)} /year
        </h1>
      </td>
      <td>
        <Link
          to={`/admin/buildings/edit-building/${building.id}`}
          className="btn bg-success text-sm me-4 text-white px-4 py-2"
        >
          Update
        </Link>
        <button
          to="/"
          className="btn bg-error text-sm me-4 text-white px-4 py-2"
          onClick={deleteHandler}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default BuildingItem;
