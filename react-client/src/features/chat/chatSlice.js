import { createSlice } from '@reduxjs/toolkit';
const url = import.meta.env.VITE_SERVER_URL;

const initialState = {
  url,
  message: 'File Uploader!',
  messageData: [],
  allFiles: [],
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

    getAllFilesData: function (state, action) {
      state.allFiles = action.payload;
    },

    getAllLatestFilesData: function (state, action) {
      const newFileId = action.payload._id;

      //check existing file id
      const isExistFile = state.allFiles.some((file) => file._id === newFileId);
      !isExistFile && state.allFiles.push(action.payload);
    },

    deleteFileData: function (state, action) {
      const dltFileId = action.payload;

      const findDltFileData = state.allFiles.find(
        (file) => file._id === dltFileId
      );

      if (findDltFileData) {
        const dltFileIndex = state.allFiles.indexOf(findDltFileData);

        if (dltFileIndex !== -1) {
          state.allFiles.splice(dltFileIndex, 1);
          return;
        }
      }
    },

    setMessage: function (state, action) {
      state.message = action.payload;
    },
  },
});

export default chatSlice.reducer;
export const {
  addChatData,
  removeSingleChat,
  getAllFilesData,
  getAllLatestFilesData,
  deleteFileData,
  setMessage,
} = chatSlice.actions;
