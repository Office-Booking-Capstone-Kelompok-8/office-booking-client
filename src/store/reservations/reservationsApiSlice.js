import { apiSlice } from "../../api/apiSlice";

export const reservationsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getReservations: builder.query({
      query: ({ ...body }) => {
        return {
          url: `/admin/reservations`,
          params: body,
        };
      },
      providesTags: ["Reservations"],
    }),
  }),
});

export const { useGetReservationsQuery } = reservationsApiSlice;
