import { apiSlice } from '../../api/apiSlice';

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: ({ role }) => {
        return {
          url: `/admin/users?role=${role}`,
        };
      },
      providesTags: ['Users'],
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
      invalidatesTags: ['Users'],
    }),
    detailCustomer: builder.query({
      query: ({ id }) => ({
        url: `/admin/users/${id}`,
      }),
    }),
    uploadPhoto: builder.mutation({
      query: ({ userID, ...picture }) => {
        console.log({ userID, picture });
        return {
          url: `/admin/users/${userID}/picture`,
          method: 'PUT',
          // headers: {
          //   'Content-Type': 'multipart/form-data',
          // },
          body: picture,
        };
      },
    }),
  }),
});

export const {
  useGetUsersQuery,
  useAddUsersMutation,
  useDeleteUserMutation,
  useDetailCustomerQuery,
  useUploadPhotoMutation,
} = usersApiSlice;
