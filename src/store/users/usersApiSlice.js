import { apiSlice } from '../../api/apiSlice';

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: ({ role }) => {
        return {
          url: `/admin/users?role=${role}`,
        };
      },
    }),
  }),
});

export const { useGetUsersQuery } = usersApiSlice;
