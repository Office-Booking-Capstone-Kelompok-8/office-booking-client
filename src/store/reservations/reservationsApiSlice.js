import { apiSlice } from "../../api/apiSlice";

export const reservationsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getReservations: builder.query({
      query: () => {
        return {
          url: `/admin/reservations`
        };
      },
      providesTags: ["Reservations"],
    }),
  }),
});

export const {
  useGetReservationsQuery
} = reservationsApiSlice;
