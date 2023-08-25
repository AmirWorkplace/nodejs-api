import React, { useEffect, useState } from 'react';
import FileSendBySocket from './FileSendBySocket';
import SingleFile from './SingleFile';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFilesData } from '../../features/chat/chatSlice';

const url = import.meta.env.VITE_SERVER_URL;

export const FileSender = () => {
  const dispatch = useDispatch();
  const { allFiles } = useSelector((state) => state.chat);
  const [fileSender, setFileSender] = useState(false);

  useEffect(() => {
    (async function () {
      const response = await fetch(url + '/main/file');
      const data = await response.json();

      dispatch(getAllFilesData(data));
    })();
  }, []);

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
          <FileSendBySocket /* file={file} setFile={setFile} ref={fileFormRef} */
          />
        </div>

        {allFiles.length && (
          <div className="my-4 border border-solid border-cyan-700 rounded-md p-4 w-auto h-auto max-w-full grid gap-3 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {allFiles
              .slice()
              .sort((a, b) => a.updatedAt - b.updatedAt)
              .map((fileData, i) => (
                <div key={i + 1}>
                  <SingleFile url={url} fileData={fileData} />
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FileSender;
