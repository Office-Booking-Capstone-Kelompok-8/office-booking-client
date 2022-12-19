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
    updateReservations: builder.mutation({
      query: ({ id, ...body }) => {
        return {
          url: `/admin/reservations/${id}`,
          method: 'PUT',
          body: body,
        };
      },
      invalidatesTags: ['Reservations'],
    }),
    updateReservationsStatus: builder.mutation({
      query: ({ id, ...body }) => {
        return {
          url: `/admin/reservations/${id}/status`,
          method: 'PUT',
          body: body,
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

export const {
  useGetReservationsQuery,
  useGetReservationsDetailQuery,
  useUpdateReservationsMutation,
  useUpdateReservationsStatusMutation,
  useDeleteReservationMutation,
} = reservationsApiSlice;
