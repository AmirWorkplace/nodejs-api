import io from 'socket.io-client';
// server domain url
const serverUrl = import.meta.env.VITE_SERVER_URL;

// create a socket connection
const socket = io.connect(serverUrl);

export default function useSocket(emitName, data) {
  socket.emit(emitName, data);
}
