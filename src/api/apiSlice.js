import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Auth from '../utils/auth';
import { BASE_URL } from '../utils/constants';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    if (Auth.getAccessToken()) {
      headers.set('Authorization', `Bearer ${Auth.getAccessToken()}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  // If token expired
  if (result?.error) {
    console.log('Sending refresh token');
    const dataRT = {
      refreshToken: Auth.getRefreshToken(),
    };
    const refreshResult = await fetch(`${BASE_URL}/auth/refresh`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(dataRT),
    }).then((res) => res.json());

    if (refreshResult?.data) {
      // update store
      Auth.storeUserToCookie(refreshResult.data);

      // retry original query
      result = await baseQuery(args, api, extraOptions);
    } else {
      // Auth.logOut();
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
