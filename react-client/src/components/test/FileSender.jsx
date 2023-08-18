import React, { useState } from 'react';
import FileSendBySocket from './FileSendBySocket';

export const FileSender = () => {
  const [file, setFile] = useState(null);
  const [fileSender, setFileSender] = useState(false);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="fixed right-0 top-0 m-5 z-10">
        <button
          className={`${
            fileSender
              ? 'bg-red-500 fill-slate-100'
              : 'bg-cyan-500 fill-slate-900'
          } duration-500 w-14 h-14 flex items-center justify-center rounded-full border border-solid border-slate-700 shadow-secondary-dark`}
          onClick={function () {
            setFileSender(!fileSender);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // fill={fileSender ? '#fff' : '#000'}
            viewBox="0 0 576 512"
            width="32"
            height="32"
          >
            <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384v38.6C310.1 219.5 256 287.4 256 368c0 59.1 29.1 111.3 73.7 143.3c-3.2 .5-6.4 .7-9.7 .7H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zm48 96a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm16 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H368c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16V384h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H448V304z" />
          </svg>
        </button>
      </div>
      <div
        className={
          fileSender
            ? 'w-full min-h-screen h-auto flex flex-col items-center justify-center'
            : '!h-0 !w-0 !overflow-hidden'
        }
        style={{ transition: '2s' }}
      >
        <div className="w-full flex items-center justify-center">
          <FileSendBySocket file={file} setFile={setFile} />
        </div>

        <div className="my-4 border border-solid border-cyan-700 rounded-md p-4 w-auto h-auto max-w-full grid gap-3 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array(8)
            .fill()
            .map((_, i) => (
              <div key={i + 1}>
                {file && (
                  <>
                    <div className="p-1 bg-transparent mb-1">
                      <p className="text-xs font-bold text-slate-300 w-72">
                        File Name:
                        <span className="font-medium pl-1 text-red-200">
                          {file.name}
                        </span>
                      </p>
                    </div>
                    <div className="outline-none border border-solid focus:border-cyan-500 w-72 h-64 border-slate-500 font-semibold text-[16px] tracking-wide font-mono rounded bg-slate-600 shadow-[0_4px_6px_0_rgba(0,0,0,0.12) p-1 relative">
                      <div className="absolute right-2 top-2 flex flex-row gap-2 items-end justify-end">
                        <button
                          onClick={function () {
                            // dispatch action to remove a chat from redux-store!
                            // dispatch(removeSingleChat(data));
                          }}
                          className="w-10 h-10 flex items-center justify-center hover:bg-cyan-700 rounded-full duration-300 cursor-pointer bg-cyan-500 fill-slate-900 hover:fill-slate-100 pr-1.5"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                            width={24}
                            height={24}
                          >
                            <path
                              xmlns="http://www.w3.org/2000/svg"
                              d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={function () {
                            // dispatch action to remove a chat from redux-store!
                            // dispatch(removeSingleChat(data));
                          }}
                          className="w-10 h-10 flex items-center justify-center hover:bg-red-500 rounded-full duration-300 cursor-pointer bg-red-300 fill-slate-900 hover:fill-slate-100"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                            width={32}
                            height={32}
                          >
                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                          </svg>
                        </button>
                      </div>
                      <img
                        className="w-full h-full rounded-md"
                        alt="view file"
                        src={URL.createObjectURL(file)}
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FileSender;
