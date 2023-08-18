import React from 'react';
import Chat from './components/Chat';

export const App = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-slate-900 text-slate-100 text-lg font-normal">
      <Chat />
    </div>
  );
};

export default App;
