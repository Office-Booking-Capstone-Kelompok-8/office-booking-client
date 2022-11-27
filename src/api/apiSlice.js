import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logout, setCredential } from '../store/auth/authSlice';
import { BASE_URL } from '../utils/constants';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  // If token expired
  if (result.error?.originalStatus === 403) {
    console.log('sending refresh token');
    const refreshResult = await baseQuery('/refresh', api, extraOptions);
    console.log(refreshResult);
    if (refreshResult?.data) {
      // update store
      const user = api.getState().auth.user;
      api.dispatch(setCredential({ ...refreshResult.data, user }));

      // retry original query
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});

// export const {} = baseQuery;
