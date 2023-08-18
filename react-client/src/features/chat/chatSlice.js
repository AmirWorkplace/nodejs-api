import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messageData: [
    // {
    //   description: "I'm From Development here, And Where are you from!",
    //   email: 'amirralli300400@gmail.com',
    //   id: 1,
    // },
  ],
};

const chatSlice = createSlice({
  name: 'chat/chatSlice',
  initialState,
  reducers: {
    addChatData: function (state, action) {
      // create new record of chat
      const newData = {
        ...action.payload,
        id: (function () {
          const maxId = state.messageData.reduce(function (acc, curr) {
            return Math.max(acc.id), curr.id;
          }, -1);

          return maxId > 0 ? maxId + 1 : 1;
        })(),
      };

      // check the data will adding with same id
      const existData = state.messageData.some(
        (data) => data.id === newData.id
      );

      // if id doesn't match with others record then add new record
      !existData && state.messageData.push(newData);
    },

    removeSingleChat: function (state, action) {
      // const state = states.messageData;
      const removeChatId = action.payload.id;

      // find the remover chat from our local state
      const findChat = state.messageData.find(
        (chat) => chat.id === removeChatId
      );

      // find the index from our local state of remove's chat
      const removeChatIndex = state.messageData.indexOf(findChat);

      // if chat is exist the splice to remove it from our local state
      if (removeChatIndex !== -1) {
        state.messageData.splice(removeChatIndex, 1);
      }
    },
  },
});

export default chatSlice.reducer;
export const { addChatData, removeSingleChat } = chatSlice.actions;
