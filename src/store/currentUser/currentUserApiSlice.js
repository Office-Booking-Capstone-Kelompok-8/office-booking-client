import { apiSlice } from '../../api/apiSlice';

export const currentUserApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: () => {
        return {
          url: `/users`,
        };
      },
      providesTags: ['UsersLogin'],
    }),
    updateCurrentUser: builder.mutation({
      query: ({ ...body }) => {
        return {
          url: `/users`,
          method: 'PUT',
          body: body,
        };
      },
      invalidatesTags: ['UsersLogin'],
    }),
    changePassword: builder.mutation({
      query: ({ ...body }) => {
        return {
          url: `/users/change-password`,
          method: 'PUT',
          body: body,
        };
      },
    }),
  }),
});

export const {
  useGetCurrentUserQuery,
  useUpdateCurrentUserMutation,
  useChangePasswordMutation,
} = currentUserApiSlice;
