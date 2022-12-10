/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDeleteBuildingMutation } from '../../../store/building/buildingApiSLice';
import { notifyError, notifySuccess } from '../../../utils/helpers';

const BuildingItem = ({ building }) => {
  const navigate = useNavigate();
  const [deleteBuilding, { isSuccess, error }] = useDeleteBuildingMutation();

  useEffect(() => {
    if (error?.status === 500) {
      notifyError('Server Error');
    }
    if (isSuccess) {
      notifySuccess('Berhasil Dihapus');
    }
  }, [error, isSuccess]);

  const deleteHandler = () => {
    if (window.confirm('Delete this building?')) {
      deleteBuilding({ id: building.id });
    }
  };

  return (
    <tr>
      <td
        onClick={() => {
          navigate('/admin/buildings/detail-building/1');
        }}
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
      <td className="text-primary-dark text-sm">300m2</td>
      <td className="text-primary-dark text-sm">45 people</td>
      <td>
        <h1 className="text-primary-dark text-sm">Rp 350.000 /month</h1>
        <h1 className="text-primary-dark text-sm">Rp 11.350.000 /year</h1>
      </td>
      <td>
        <Link
          to="/admin/buildings/edit-building/1"
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
