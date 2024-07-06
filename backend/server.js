const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");

const corsOptions = { optionsSuccessStatus: 200, credentials: true };
app.use(cors(corsOptions));

const io = new Server(server, {
  cors: corsOptions
});

app.get('/', (req, res) => {
  res.send("Hello World");
});


const users = {}
io.on('connection', (socket) => {
  console.info('NEW USER CONNECTED :: ');

  socket.on('join-me', (payload) => {
    users[payload.username] = socket;
    socket.join(payload.roomName)
    io.to(payload.roomName).emit('users-updated', { users: Object.keys(users) })
  })
});



server.listen(3000, () => {
  console.log('listening on *:3000');
});