import React, { useState } from 'react';

export const FileSendBySocket = ({ file, setFile }) => {
  // const [file, setFile] = useState(null);
  // console.log(file);

  return (
    <div className="my-3 w-full flex items-center justify-center">
      <form
        method="post"
        onSubmit={async function (event) {
          event.preventDefault();

          const url = import.meta.env.VITE_SERVER_URL + '/main/file';

          const body = new FormData();
          body.append('filename', 'No, File name are available here!');
          body.append('file', file);
          body.append('filename', new Date().toISOString() + file.filename);
          const headers = {
            'Content-Type': 'application/json',
          };

          try {
            const response = await fetch(url, {
              // headers,
              method: 'POST',
              body: body,
            });

            console.log(response);
          } catch (error) {
            console.log(error);
          }
        }}
        className="sm:w-96 h-90 w-72 bg-slate-700 rounded-lg p-4"
      >
        <h1 className="font-bold text-2xl text-cyan-500 text-center py-1">
          Socket File Transfer Form
        </h1>

        <div className="m-2 flex flex-col">
          <label
            htmlFor="file"
            className="text-sm font-semibold text-slate-300 pt-2 tracking-wide"
          >
            Sender's File:
          </label>
          <input
            className="outline-none border border-solid focus:border-cyan-500 border-slate-500 px-3 py-1 font-semibold text-[16px] tracking-wide font-mono rounded bg-slate-600 shadow-[0_4px_6px_0_rgba(0,0,0,0.12)"
            required
            type="file"
            onChange={function (event) {
              setFile(event.target.files[0]);
            }}
          />
        </div>

        <div className="m-2 flex flex-col">
          <label
            htmlFor="description"
            className="text-sm font-semibold text-slate-300 pt-2 tracking-wide"
          >
            View File:
            <span className="text-red-300 pl-1">
              {file ? file.name : 'No file selected here!'}
            </span>
          </label>
          {file && (
            <div className="outline-none border border-solid focus:border-cyan-500  h-72 border-slate-500 p-3 font-semibold text-[16px] tracking-wide font-mono rounded bg-slate-600 shadow-[0_4px_6px_0_rgba(0,0,0,0.12) p-1">
              <img
                className="w-full h-full rounded-md"
                alt="view file"
                src={URL.createObjectURL(file)}
              />
            </div>
          )}
        </div>

        <div className="mt-3 px-2">
          <button
            type="submit"
            className="uppercase font-bold text-xl py-1 text-center bg-cyan-700 rounded duration-500 hover:text-slate-900 hover:bg-cyan-500 w-full"
            onClick={function () {
              // socket.emit('send_message', formData);
            }}
          >
            send
          </button>
        </div>
      </form>

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

export default FileSendBySocket;
