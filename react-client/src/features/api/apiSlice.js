import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = {
  baseUrl: import.meta.env.VITE_SERVER_URL,
  prepareHeaders: async function (headers, { getState, endpoints }) {
    const token = getState()?.auth?.accessToken;

    if (token) {
      headers.set('Authorization', `Bearar ${token}`);
    }

    return headers;
  },
};

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: (builder) => ({}),
});

export default apiSlice;
