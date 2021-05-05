import SocketIO from "socket.io-client";

const SERVER = "http://127.0.0.1:5000";

let socket = SocketIO(SERVER);

export default socket;