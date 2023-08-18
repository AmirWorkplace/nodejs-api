import {} from '@reduxjs/toolkit';
import apiSlice from '../api/apiSlice';

const chatApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // addFile:builder.mutation({query:(data)=>({url})})
  }),
});
