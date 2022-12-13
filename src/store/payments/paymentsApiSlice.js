import { apiSlice } from "../../api/apiSlice";

export const paymentsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPayments: builder.query({
      query: () => {
        return {
          url: `/payments`,
        };
      },
      providesTags: ["Payments", "PaymentsDelete"],
    }),
    getPaymentDetails: builder.query({
      query: ({ id }) => {
        return {
          url: `/payments/${id}`,
        };
      },
      providesTags: ["Payments"],
    }),
    getBanks: builder.query({
      query: () => {
        return {
          url: `/payments/banks`,
        };
      },
    }),
    addPayments: builder.mutation({
      query: ({ ...body }) => {
        return {
          url: `/admin/payments`,
          method: "POST",
          body: body,
        };
      },
      invalidatesTags: ["Payments"],
    }),
    deletePayments: builder.mutation({
      query: ({ id }) => {
        return {
          url: `/admin/payments/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Payments", "PaymentsDelete"],
    }),
    updatePayments: builder.mutation({
      query: ({ buildingID, ...body }) => {
        return {
          url: `/admin/payments/${buildingID}`,
          method: "PUT",
          body: body,
        };
      },
      invalidatesTags: ["Payments"],
    }),
  }),
});

export const {
  useAddPaymentsMutation,
  useDeletePaymentsMutation,
  useUpdatePaymentsMutation,
  useGetPaymentsQuery,
  useGetBanksQuery,
  useGetPaymentDetailsQuery,
} = paymentsApiSlice;