const path = require("path");
const express = require("express");
const http = require("http");
const dotenv = require("dotenv");

const cookieParser = require("cookie-parser");
const csurf = require("csurf");
const { environment } = require("./config");
const isProduction = process.env.NODE_ENV === "production";

const PORT = process.env.PORT || 3000;
const connectToDatabase = require("./config/databaseConfig");
const userRouter = require("./routes/userRoutes");

// get environment variable(s)
dotenv.config();
// connect to MongoDB
connectToDatabase();

// setup server to handle routing and socket
const app = express();

app.use(cookieParser());
// accept incoming request object to server as JSON
app.use(express.json());

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
  console.log(socket.id, "socketid");

  socket.on("join", (message) => {
    socket.join("room1");
    console.log(socket.rooms);
    // console.log(`${message} has joined`);
    console.log(socket.id, "socket joined");
  });

  if (io.sockets.adapter.rooms.get("room1")) {
    let room = io.sockets.adapter.rooms.get("room1");
    console.log(room);
  }

  // socket.on("whatmyid", () => {
  //   socket.emit('yourid', socket.id)
  //      io.to("room1").emit("response", "hetttt");
  // })
  // socket.emit("yourId", socket.id);
  // let count = io.of("/").on("room1").sockets.size
  // console.log(count, "people in room")
  // socket.emit("peopleinroom")
  // socket.on("playerValue", (value) => {
  //   console.log(`From client, player value is ${value}`);
  // });

  // if (io.sockets.adapter.rooms.get(`room${roomNumber}`)) {
  //   if (getNumberOfClients(`room${roomNumber}`) < 2) {
  //     console.log(`room ${roomNumber}  less than 2 if clause`);
  //     socket.join(`room${roomNumber}`);
  //     io.to(`room${roomNumber}`).emit(
  //       "message",
  //       `new player join room #${roomNumber}`
  //     );
  //   } else {
  //     // create new room
  //     roomNumber++;
  //     console.log(`room ${roomNumber}  more than 2 else clause and new room`);
  //     socket.join(`room${roomNumber}`);
  //     io.to(`room${roomNumber}`).emit(
  //       "message",
  //       `new player join room #${roomNumber}`
  //     );
  //   }
  // } else {
  //   // create new room
  //   console.log(`room ${roomNumber}  new room`);
  //   socket.join(`room${roomNumber}`);
  //   io.to(`room${roomNumber}`).emit(
  //     "message",
  //     `new player join room #${roomNumber}`
  //   );
  // }

  // when client disconnects
  socket.on("disconnect", () => {
    // send to the player that left
    socket.emit("message", "Left BlackJack Online Room");
    // send to the other player
    socket.broadcast.emit("message", "The other player left the game");
    socket.removeAllListeners();
  });
});

// mount the route(s)
app.use("/api/users", userRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("Server is running....");
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
