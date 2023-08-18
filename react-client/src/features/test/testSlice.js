import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalFormData: [],
  formData: {},
};

const testSlice = createSlice({
  name: 'test/testSlice',
  initialState,
  reducers: {
    addTotalFormData: function (state, action) {
      const data = {
        ...action.payload,
        id: (function () {
          const maxId = state.totalFormData.reduce(function (acc, curr) {
            return Math.max(acc.id), curr.id;
          }, -1);

          return maxId > 0 ? maxId + 1 : 1;
        })(),
      };
      state.totalFormData.push(data);
    },

    addFormData: function (state, action) {
      state.formData = action.payload;
    },
  },
});

export default testSlice.reducer;
export const { addFormData, addTotalFormData } = testSlice.actions;
