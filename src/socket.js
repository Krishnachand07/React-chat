import SocketIO from "socket.io-client";

const SERVER = "https://reactsocketapi.herokuapp.com/";

let socket = SocketIO(SERVER);

export default socket;