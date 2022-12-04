import { apiSlice } from '../../api/apiSlice';

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: ({ role }) => {
        return {
          url: `/admin/users?role=${role}`,
        };
      },
      providesTags: ['Users', 'UserDelete'],
    }),
    addUsers: builder.mutation({
      query: ({ role, ...body }) => {
        return {
          url: `/admin/users/new-${role}`,
          method: 'POST',
          body: body,
        };
      },
      invalidatesTags: ['Users'],
    }),
    deleteUser: builder.mutation({
      query: ({ id }) => {
        return {
          url: `/admin/users/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Users', 'UserDelete'],
    }),
    detailCustomer: builder.query({
      query: ({ id }) => ({
        url: `/admin/users/${id}`,
      }),
      providesTags: ['Users'],
    }),
    updateUser: builder.mutation({
      query: ({ userID, ...body }) => {
        return {
          url: `/admin/users/${userID}`,
          method: 'PUT',
          body: body,
        };
      },
      invalidatesTags: ['Users'],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useAddUsersMutation,
  useDeleteUserMutation,
  useDetailCustomerQuery,
  useUpdateUserMutation,
} = usersApiSlice;
