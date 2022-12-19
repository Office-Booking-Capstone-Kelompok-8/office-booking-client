import React, { useEffect } from 'react';
import Spinner from '../../../components/admin/Spinner';
import {
  useUpdateReservationsMutation,
  useUpdateReservationsStatusMutation,
} from '../../../store/reservations/reservationsApiSlice';

const ButtonReservationStatus = ({
  statusId,
  reservationId,
  message,
  refetch,
}) => {
  const [updateReservation, { error, isLoading, isError }] =
    useUpdateReservationsMutation();
  const [
    updateReservationStatus,
    { error: errorStatus, isLoading: isLoadingSTatus, isError: isErrorStatus },
  ] = useUpdateReservationsStatusMutation();
  console.log(error);
  console.log(isLoadingSTatus);

  return (
    <div className="d-flex justify-content-end mt-4 gap-4">
      {isLoadingSTatus && isLoading ? (
        <Spinner />
      ) : (
        statusId === 1 && (
          <>
            <button
              className="btn btn-outline-danger px-5"
              onClick={async () => {
                if (message) {
                  await updateReservation({
                    id: reservationId,
                    message: message,
                  });
                }
                await updateReservationStatus({
                  id: reservationId,
                  statusId: statusId + 1,
                });
                await refetch();
              }}
            >
              Reject
            </button>
            <button
              className="btn btn-primary px-5"
              onClick={async () => {
                if (message) {
                  await updateReservation({
                    id: reservationId,
                    message: message,
                  });
                }
                await updateReservationStatus({
                  id: reservationId,
                  statusId: statusId + 3,
                });
                await refetch();
              }}
            >
              Process Payment
            </button>
          </>
        )
      )}
      {statusId === 4 && (
        <>
          <button
            className="btn btn-outline-danger px-5"
            onClick={async () => {
              if (message) {
                await updateReservation({
                  id: reservationId,
                  message: message,
                });
              }
              await updateReservationStatus({
                id: reservationId,
                statusId: statusId - 1,
              });
              await refetch();
            }}
          >
            Cancel
          </button>
          <button
            className="btn btn-success px-5"
            onClick={async () => {
              if (message) {
                await updateReservation({
                  id: reservationId,
                  message: message,
                });
              }
              await updateReservationStatus({
                id: reservationId,
                statusId: statusId + 1,
              });
              await refetch();
            }}
          >
            Activate
          </button>
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
