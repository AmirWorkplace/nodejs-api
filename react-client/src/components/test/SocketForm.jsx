import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addChatData } from '../../features/chat/chatSlice';
import { io } from 'socket.io-client';

export const SocketForm = () => {
  // create socket connection
  const socket = io.connect(import.meta.env.VITE_SERVER_URL);

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: '', description: '' });

  useEffect(() => {
    // received message from socket connection and set in my local redux store
    const onDataReceived = function (data) {
      if (formData.email === data.email) {
        dispatch(addChatData(data));
      }
    };

    socket.on(formData.email, onDataReceived);

    return () => socket.off(formData.email, onDataReceived);
  }, [formData, socket]);

  return (
    <div>
      <div className="sm:w-96 h-90 w-72 bg-slate-700 rounded-lg p-4">
        <h1 className="font-bold text-3xl text-cyan-500 text-center py-1">
          Socket Form
        </h1>

        <div className="m-2 flex flex-col">
          <label
            htmlFor="email"
            className="text-sm font-semibold text-slate-300 pt-2 tracking-wide"
          >
            E-Mail:
          </label>
          <input
            className="outline-none border border-solid focus:border-cyan-500 border-slate-500 px-3 py-1 font-semibold text-[16px] tracking-wide font-mono rounded bg-slate-600 shadow-[0_4px_6px_0_rgba(0,0,0,0.12)"
            placeholder="Input your E-mail address..."
            required
            type="email"
            value={formData.email}
            onChange={function (event) {
              const newFormData = {
                ...formData,
                email: event.target.value,
              };

              setFormData(newFormData);
            }}
          />
        </div>

        <div className="m-2 flex flex-col">
          <label
            htmlFor="description"
            className="text-sm font-semibold text-slate-300 pt-2 tracking-wide"
          >
            Description:
          </label>
          <textarea
            required
            value={formData.description}
            onChange={function (event) {
              const newFormData = {
                ...formData,
                description: event.target.value,
              };

              setFormData(newFormData);
            }}
            className="outline-none border border-solid focus:border-cyan-500 min-h-[120px] border-slate-500 px-3 py-1 font-semibold text-[16px] tracking-wide font-mono rounded bg-slate-600 shadow-[0_4px_6px_0_rgba(0,0,0,0.12)"
            placeholder="Write here..."
          ></textarea>
        </div>

        <div className="mt-3 px-2">
          <button
            className="uppercase font-bold text-xl py-1 text-center bg-cyan-700 rounded duration-500 hover:text-slate-900 hover:bg-cyan-500 w-full"
            onClick={function () {
              socket.emit('send_message', formData);
            }}
          >
            send
          </button>
        </div>
      </div>

      {/**
        * @param Just testing recent message!
      <div className="mt-6">
        {rcvData?.email && (
          <div className="mt-2 py-1 px-2 text-sm font-normal bg-slate-700 ring-1 ring-cyan-800 rounded-md">
            <p className="text-slate-100 leading-4">{rcvData.description}</p>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default SocketForm;
