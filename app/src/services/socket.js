import { io } from "socket.io-client"
import { apiURL } from "../config"

let socket

export const initSocket = userId => {
  if (socket) {
    if (userId) socket.emit("join", userId)
    return socket
  }

  socket = io(apiURL, {
    withCredentials: true
  })

  socket.on("connect", () => {
    console.log("Connected to socket server")
    if (userId) {
      socket.emit("join", userId)
    }
  })

  return socket
}

export const getSocket = () => socket

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect()
    socket = null
  }
}
