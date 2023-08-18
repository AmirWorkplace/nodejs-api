import React from 'react';
import { useDispatch } from 'react-redux';
import { removeSingleChat } from '../../features/chat/chatSlice';

export const MessageBox = ({ chatData }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-3/4 my-6 p-3 bg-slate-800 shadow-[0px_2px_4px_0px_rgba(255,255,255,0.12)] rounded-lg">
      <div className="w-full h-auto">
        {chatData.length ? (
          chatData
            .slice()
            .sort((a, b) => b.id - a.id)
            .map(
              (data) =>
                data?.email && (
                  <div
                    key={data.id}
                    className="mt-2 py-1 px-2 text-sm font-normal bg-slate-700 ring-1 ring-cyan-800 rounded-md relative"
                  >
                    <div className="absolute top-1.5 right-1.5 z-10 flex flex-row gap-2 bg-slate-700 p-1">
                      <button
                        onClick={function () {
                          // dispatch action to remove a chat from redux-store!
                          navigator.clipboard.writeText(data.description);
                        }}
                        className="w-5 h-5 flex items-center justify-center hover:bg-green-500 rounded-full duration-300 cursor-pointer bg-green-300 text-slate-900 hover:text-slate-100"
                      >
                        <span className="text-xs font-light">📋</span>
                      </button>

                      <button
                        onClick={function () {
                          // dispatch action to remove a chat from redux-store!
                          dispatch(removeSingleChat(data));
                        }}
                        className="w-5 h-5 flex items-center justify-center hover:bg-red-500 rounded-full duration-300 cursor-pointer bg-red-300 text-slate-900 hover:text-slate-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                        >
                          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                        </svg>
                      </button>
                    </div>
                    <p className="text-slate-100 leading-4">
                      {data.description}
                    </p>
                    <small className="w-full flex items-end justify-end font-mono text-cyan-500 pt-2">
                      {data.email}
                    </small>
                  </div>
                )
            )
        ) : (
          <div className="mt-2 py-1 px-2 text-sm font-normal bg-slate-700 ring-1 ring-cyan-800 rounded-md">
            <p className="text-cyan-500 leading-4 font-medium text-xl p-3">
              No chat are available here!
            </p>
            <small className="w-full flex items-end justify-end font-mono pt-2 text-red-400">
              no-replay@gmail.com
            </small>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBox;
