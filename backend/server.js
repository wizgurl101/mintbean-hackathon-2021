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

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// roomNumber changes to create a new room for the next two players
let roomNumber = 1;

// function to get current number of clients in a room
const getNumberOfClients = (roomName) => {
  return io.sockets.adapter.rooms.get(roomName).size;
};

io.on("connection", (socket) => {
  // console.log(socket.id, "socketid");

  socket.on("join", () => {
    console.log(`-----------------JOIN-----------------------`);
    console.log(socket.id, "socket joined");
    // if room exists then continue here by checking number of people in room
    if (io.sockets.adapter.rooms.get(`room${roomNumber}`)) {
      console.log("the room exists");
      // If amount of people in the room is less than 2 then join the room
      if (getNumberOfClients(`room${roomNumber}`) < 2) {
        console.log(`room ${roomNumber}  less than 2 if clause`);
        socket.join(`room${roomNumber}`);
        console.log(socket.rooms, " rooms this user is in");
        io.to(`room${roomNumber}`).emit(
          "message",
          `new player join room #${roomNumber}`
        );
      }
      // if there is already 2 people in the room then join a new room
      else {
        // create new room
        roomNumber++;
        console.log(`room ${roomNumber}  more than 2 else clause and new room`);
        socket.join(`room${roomNumber}`);
        console.log(socket.rooms, " rooms this user is in");

        io.to(`room${roomNumber}`).emit(
          "message",
          `new player join room #${roomNumber}`
        );
      }
      // if room does not exist then create the room and have socket join that room
    } else {
      // create new room
      console.log(`room ${roomNumber}  new room`);
      socket.join(`room${roomNumber}`);
      console.log(socket.rooms, " rooms this user is in");

      io.to(`room${roomNumber}`).emit(
        "message",
        `new player join room #${roomNumber}`
      );
    }
  });

  // if (io.sockets.adapter.rooms.get("room1")) {
  //   let room = io.sockets.adapter.rooms.get("room1");
  //   console.log(room);
  // }

  // let count = io.of("/").on("room1").sockets.size

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

app.use(cookieParser());
// accept incoming request object to server as JSON
app.use(express.json());

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

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
