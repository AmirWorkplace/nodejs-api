import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const GetSocketFormData = () => {
  const getFormData = useSelector((state) => state.testFormData);
  const [allData, setAllData] = useState([]);
  const [rcvData, setRcvData] = useState('');

  useEffect(() => {
    socket.on('user_data_from_server', function (data) {
      setRcvData(data);
    });
  }, [socket]);

  useEffect(() => {
    setAllData(function (prevData) {
      // create a record of new data with it's id
      const newData = {
        ...rcvData,
        id: (function (states) {
          const maxId = states.reduce(function (acc, curr) {
            return Math.max(acc.id), curr.id;
          }, -1);

          return maxId > 0 ? maxId + 1 : 1;
        })(prevData),
      };

      // check the data will adding with same id
      const existData = prevData.some((data) => data.id === newData.id);

      // if id doesn't match with others record then add new record
      return !existData && [...prevData, newData];
    });
  }, [rcvData]);

  // console.log('Server: ', rcvData, 'All Data', allData);

  return (
    <div className="w-3/4 my-6 p-3 bg-slate-800 shadow-[0px_2px_4px_0px_rgba(255,255,255,0.12)] rounded-lg">
      <div className="w-full h-auto">
        {allData
          .slice()
          .sort((a, b) => b.id - a.id)
          .map(
            (data) =>
              data?.email && (
                <div
                  key={data.id}
                  className="mt-2 py-1 px-2 text-sm font-normal bg-slate-700 ring-1 ring-cyan-800 rounded-md"
                >
                  <p className="text-slate-100 leading-4">{data.description}</p>
                  <small className="w-full flex items-end justify-end font-mono text-cyan-500 pt-2">
                    {data.email}
                  </small>
                </div>
              )
          )}
      </div>
    </div>
  );
};

export default GetSocketFormData;
