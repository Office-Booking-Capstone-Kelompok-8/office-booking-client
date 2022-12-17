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
  }),
});

export const { useGetReservationsQuery, useGetReservationsDetailQuery } =
  reservationsApiSlice;
