let io;
const { Server } = require("socket.io");
const config = require("../config");

const init = (server) => {
  io = new Server(server, {
    cors: {
      origin: [config.APP_URL, config.ADMIN_URL, "https://hugolamoureux.github.io"],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    socket.on("join", (userId) => {
      if (userId) {
        socket.join(`user_${userId}`);
        console.log(`User ${userId} joined their sync room`);
      }
    });
  });

  return io;
};

const getIO = () => {
  if (!io) {
    throw new Error("Socket.io not initialized!");
  }
  return io;
};

const emitToUser = (userId, event, data) => {
  if (io) {
    io.to(`user_${userId}`).emit(event, data);
  }
};

module.exports = { init, getIO, emitToUser };
