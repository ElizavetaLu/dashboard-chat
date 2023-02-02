import io from "socket.io-client";
const URL = "http://localhost:3003"
export const socket = io.connect(URL);





// import io from "socket.io-client";
// const URL = "http://localhost:3003"
// export const socket = io.connect(URL, { autoConnect: false });

// socket.onAny((event, ...args) => {
//     console.log(event, args);
//   });