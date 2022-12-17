import React from 'react';

const ButtonReservationStatus = ({ statusId }) => {
  console.log(statusId);
  return (
    <div className="d-flex justify-content-end mt-4 gap-4">
      {statusId === 1 && (
        <>
          <button className="btn btn-outline-danger px-5">Reject</button>
          <button className="btn btn-primary px-5">Process Payment</button>
        </>
      )}
      {statusId === 2 && (
        <>
          <button className="btn btn-outline-danger px-5">Reject</button>
          <button className="btn btn-primary px-5">Process Payment</button>
        </>
      )}
      {statusId === 4 && (
        <>
          <button className="btn btn-outline-danger px-5">Cancel</button>
          <button className="btn btn-success px-5">Activate</button>
        </>
      )}
      {statusId === 5 && (
        <>
          <button className="btn btn-success px-5">Complete</button>
        </>
      )}
    </div>
  );
};

export default ButtonReservationStatus;
