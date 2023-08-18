import React from 'react';
import { useSelector } from 'react-redux';
import SocketForm from './test/SocketForm';
import MessageBox from './test/MessageBox';
import FileSender from './test/FileSender';

export const Chat = () => {
  const { messageData } = useSelector((state) => state.chat);

  return (
    <div className="w-full h-auto flex items-center justify-center flex-col">
      <FileSender /> <SocketForm />
      <MessageBox chatData={messageData} />
    </div>
  );
};

export default Chat;
