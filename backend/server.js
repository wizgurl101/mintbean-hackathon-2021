const express = require("express");
const http = require("http");
const dotenv = require("dotenv");

const cookieParser = require("cookie-parser");
const csurf = require("csurf");
const { environment } = require("./config");
const isProduction = environment === "production";

const PORT = 8000;
const connectToDatabase = require("./config/databaseConfig");
const userRouter = require("./routes/userRoutes");

// get environment variable(s)
dotenv.config();
// connect to MongoDB
connectToDatabase();

// setup server to handle routing and socket
const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});
// handle multiplayer

// roomNumber changes to create a new room for the next two players
let roomNumber = 1;

// function to get current number of clients in a room
const getNumberOfClients = (roomName) => {
  return io.sockets.adapter.rooms.get(roomName).size;
};

io.on("connection", (socket) => {
  const message = "Blackjack Server Websocket Connection";
  socket.emit("message", message);

  console.log("client socket connected");

  // socket.on("playerValue", (value) => {
  //   console.log(`From client, player value is ${value}`);
  // });

  if (io.sockets.adapter.rooms.get(`room${roomNumber}`)) {
    if (getNumberOfClients(`room${roomNumber}`) < 2) {
      console.log(`room ${roomNumber}  less than 2 if clause`);
      socket.join(`room${roomNumber}`);
      io.to(`room${roomNumber}`).emit(
        "message",
        `new player join room #${roomNumber}`
      );
    } else {
      // create new room
      roomNumber++;
      console.log(`room ${roomNumber}  more than 2 else clause and new room`);
      socket.join(`room${roomNumber}`);
      io.to(`room${roomNumber}`).emit(
        "message",
        `second player join room #${roomNumber}`
      );
    }
  } else {
    // create new room
    console.log(`room ${roomNumber}  new room`);
    socket.join(`room${roomNumber}`);
    io.to(`room${roomNumber}`).emit(
      "message",
      `new player join room #${roomNumber}`
    );
  }

  // when client disconnects
  socket.on("disconnect", () => {
    // send to the player that left
    socket.emit("message", "Left BlackJack Online Room");
    // send to the other player
    socket.broadcast.emit("message", "The other player left the game");
  });
});

app.use(cookieParser());
// accept incoming request object to server as JSON
app.use(express.json());
``;
// server.use(
//   csurf({
//     cookie: {
//       secure: isProduction,
//       sameSite: isProduction && "Lax",
//       httpOnly: true,
//     },
//   })
// );
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// mount the route(s)
app.use("/api/users", userRouter);

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
