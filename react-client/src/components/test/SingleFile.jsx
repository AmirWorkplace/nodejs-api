import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteFileData } from '../../features/chat/chatSlice';
import { io } from 'socket.io-client';

export const SingleFile = ({ url, fileData }) => {
  const { name } = fileData;

  const src = url + fileData.path;
  const dispatch = useDispatch();
  const socket = io.connect(url);
  const id = fileData?._id;

  // Add the event listener when the component mounts
  useEffect(() => {
    const receivedDeleteFileId = (data) => {
      dispatch(deleteFileData(data));
    };

    socket.on('received_delete_file_id', receivedDeleteFileId);

    return () => {
      // Clean up the event listener when the component unmounts
      socket.off('received_delete_file_id', receivedDeleteFileId);
    };
  }, [socket, dispatch]);

  // Emit the event when needed
  function deleteFileBySocketConnection() {
    socket.emit('send_delete_file_id', id);
  }

  // delete file functionality
  async function deleteFileById() {
    const confirmation = confirm('Are you sure to permanently deleted it!');

    if (confirmation) {
      const response = await fetch(`${url}/main/file/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();

      deleteFileBySocketConnection();
    }
  }

  // download file button handler
  async function downloadFile() {
    try {
      const response = await fetch(`${url}/main/file/download`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(fileData),
      });

      if (!response.ok) {
        console.error('Failed to fetch file:', response.statusText);
        return;
      }

      const blob = await response.blob();

      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      const pathArr = fileData.path.split('/');
      a.download = pathArr[pathArr.length - 1];
      a.click();
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div className="p-1 bg-transparent mb-1">
        <p className="text-xs font-bold text-slate-300 w-72">
          File Name:
          <span className="font-medium pl-1 text-red-200">{name}</span>
        </p>
      </div>
      <div className="outline-none border border-solid focus:border-cyan-500 w-72 h-64 border-slate-500 font-semibold text-[16px] tracking-wide font-mono rounded bg-slate-600 shadow-[0_4px_6px_0_rgba(0,0,0,0.12) p-1 relative">
        <div className="absolute right-2 top-2 flex flex-row gap-2 items-end justify-end">
          <button
            onClick={downloadFile}
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
            onClick={deleteFileById}
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
        <img className="w-full h-full rounded-md" alt="view file" src={src} />
      </div>
    </div>
  );
};

export default SingleFile;
