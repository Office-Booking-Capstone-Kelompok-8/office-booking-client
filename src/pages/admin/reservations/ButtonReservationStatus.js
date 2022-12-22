import React from 'react';
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
  setMessage,
}) => {
  const [updateReservation, { error, isLoading }] =
    useUpdateReservationsMutation();
  const [updateReservationStatus, { isLoading: isLoadingSTatus }] =
    useUpdateReservationsStatusMutation();
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
                setMessage('');
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
                setMessage('');
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
              setMessage('');
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
              setMessage('');
            }}
          >
            Activate
          </button>
        </>
      )}
      {statusId === 5 && (
        <>
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
              setMessage('');
            }}
          >
            Complete
          </button>
        </>
      )}
    </div>
  );
};

export default ButtonReservationStatus;
