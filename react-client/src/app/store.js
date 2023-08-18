import { configureStore } from '@reduxjs/toolkit';
import testReducer from '../features/test/testSlice';
import chatReducer from '../features/chat/chatSlice';
import apiSlice from '../features/api/apiSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    chat: chatReducer,
    testFormData: testReducer,
  },

  devTools: import.meta.NODE_ENV !== 'production',

  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});

export default store;
