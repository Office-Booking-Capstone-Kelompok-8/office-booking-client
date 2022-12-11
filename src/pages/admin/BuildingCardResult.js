import React from 'react';

const BuildingCardResult = ({ building }) => {
  console.log(building);
  return (
    <div className="col-md-3 mb-3">
      <div
        className="card"
        style={{
          zIndex: -1,
          boxShadow: '0 8 24 rgba(112, 144, 176, 0.15)',
          borderRadius: 10,
          overflow: 'hidden',
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
