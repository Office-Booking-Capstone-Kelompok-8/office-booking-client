import { apiSlice } from '../../api/apiSlice';

export const reservationsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getReservations: builder.query({
      query: ({ ...body }) => {
        return {
          url: `/admin/reservations`,
          params: body,
        };
      },
      providesTags: ['Reservations'],
    }),
    getReservationsDetail: builder.query({
      query: ({ id }) => {
        return {
          url: `/admin/reservations/${id}`,
        };
      },
      invalidatesTags: ['Reservations'],
    }),
    deleteReservation: builder.mutation({
      query: ({ id }) => {
        return {
          url: `/admin/reservations/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Reservations', 'ReservationDelete'],
    }),
  }),
});

export const { useGetReservationsQuery, useGetReservationsDetailQuery, useDeleteReservationMutation } =
  reservationsApiSlice;
