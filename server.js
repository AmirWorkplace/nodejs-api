import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.js';
import errorHandler from './middlewares/errorHandler.js';
import bdGeojsonRouter from './routes/bd_geojson.js';
import mongodbConnection from './config/database.js';
import authRouter from './routes/auth.js';
import http from 'http';
import { Server } from 'socket.io';
import routerIpLocalServer from './routes/local/localServer.js';

// client domain origin route name
const origin = process.env.CLIENT_SERVER_URL;

//configuration dotenv
dotenv.config();
const app = express();

// use express server
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// allow all public's file
app.use('/public', express.static('public'));

// create http server
const server = http.createServer(app);

// create websockets connection {io}
const io = new Server(server, {
  cors: {
    origin,
    method: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'],
  },
});

// get socket data from client
io.on('connection', function (socket) {
  // print socket id in console
  // console.log(`Socket ID: ${socket.id}`.red.bold);

  // get socket connection data using `emit`
  socket.on('form_data', function (data) {
    console.log(data);
  });

  // get user data form client using socket connection
  socket.on('user_data_from_client', function (data) {
    // resend all the data into client
    io.emit('user_data_from_server', data);
  });

  // check simple message for testing;
  socket.on('message', function (message) {
    console.log(message);
  });

  // create an realtime room chat connection
  socket.on('send_message', function (data) {
    socket.broadcast.emit('rcv_message', data);
    socket.broadcast.emit(data.email, data);
  });

  // get new uploaded file data from client and send into client
  socket.on('file_uploaded', function (data) {
    io.emit('file_received', data);
    // console.log(data);
  });

  // get file data's id from client and send it into client
  socket.on('send_delete_file_id', function (id) {
    io.emit('received_delete_file_id', id);
  });
});

// get the port from env
const port = process.env.PORT || 9000;
const routerIPv4 = process.env.ROUTER_LOCAL_IPv4_ADDRESS || null;

// routing
app.get('/', function (req, res) {
  res.send({
    message: 'Welcome to my nodejs server',
  });
});

// use custom user route
app.use('/api/v1/user', userRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/bd_geojson', bdGeojsonRouter);

// use local route without api and view front-end page such as html view http://192.168.31.95:5050/public/chat
app.use('/main', routerIpLocalServer);

// use error handler
app.use(errorHandler);

// listen our project's app on a port using express server
server.listen(port, routerIPv4, function () {
  mongodbConnection();
  console.log(
    ` SERVER RUNNING: http://${routerIPv4 ? routerIPv4 : 'localhost'}:${port} `
      .bgGreen.red.bold
  );
});

/**
 * @abstract {main}
 * app.use('/routes/local/dist', express.static('routes/local/dist'));
 * 
 * 
 * import crypto from 'crypto';
app.use(express.static(path.join(__dirname, 'public')));
console.log(
  crypto.createHash('sha256').update(crypto.randomBytes(32)).digest('hex')
); 

*/
