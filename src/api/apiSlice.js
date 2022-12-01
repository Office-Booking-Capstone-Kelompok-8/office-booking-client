import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logout, setCredential } from '../store/auth/authSlice';
import { BASE_URL } from '../utils/constants';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    console.log(token);
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  console.log(result);
  // If token expired
  if (result?.error?.status === 401) {
    console.log('sending refresh token');

    const dataRT = {
      refreshToken: api.getState().auth.refresh,
    };
    const refreshResult = await fetch(
      'https://dev.fortyfourvisual.com/v1/auth/refresh',
      {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(dataRT),
      }
    ).then((res) => res.json());

    console.log({ refreshResult });
    if (refreshResult?.data) {
      // update store
      const email = api.getState().auth.email;
      api.dispatch(setCredential({ ...refreshResult.data, email }));

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
