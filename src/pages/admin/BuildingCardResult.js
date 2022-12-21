import React from 'react';
import { useNavigate } from 'react-router-dom';

const BuildingCardResult = ({ building }) => {
  const navigate = useNavigate();
  return (
    <div className="col-md-3 mb-3" style={{ cursor: 'pointer' }}>
      <div
        className="card"
        style={{
          boxShadow: '0 8 24 rgba(112, 144, 176, 0.15)',
          borderRadius: 10,
          overflow: 'hidden',
        }}
        onClick={() => {
          navigate(`/admin/buildings/detail-building/${building.id}`);
        }}
      >
        <img
          src={building.pictures}
          // className="card-img"
          style={{ width: '100%', height: '100%' }}
          alt="office"
        />
        <div className="card-body">
          <h3 className="text-md fw-bold">{building.name}</h3>
          <p className="card-text">{building.location.city}</p>
        </div>
      </div>
    </div>
  );
};

export default BuildingCardResult;
