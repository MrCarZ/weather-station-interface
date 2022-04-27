import socketio from "socket.io-client";

const socket = socketio.connect(`${process.env.REACT_APP_API_PATH}`);

const socketOn = (message, callback) => socket.on("rasp-message", callback);

const socketDisconnect = () => socket.disconnect();

const socketConnect = () => socket.connect();

export const socketService = {
    socketOn,
    socketDisconnect,
    socketConnect
};
