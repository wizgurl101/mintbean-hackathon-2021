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
// Get the sockets of the people in the room
const getPeopleInRoom = (roomName) => {
  return io.sockets.adapter.rooms.get(roomName);
};

// we need to keep track of the first player in each room so player 2 can see them
let playerOne;
io.on("connection", (socket) => {
  socket.on("join", (user) => {
    // if room exists then continue here by checking number of people in room
    if (io.sockets.adapter.rooms.get(`room${roomNumber}`)) {
      // If amount of people in the room is less than 2 then join the room (player 2)
      if (getNumberOfClients(`room${roomNumber}`) < 2) {
        console.log(playerOne)
        // console.log(getPeopleInRoom(`room${roomNumber}`)); // shows people in room
        socket.join(`room${roomNumber}`);
        io.in(`room${roomNumber}`).emit("playerOneJoin", playerOne);
        io.in(`room${roomNumber}`).emit("playerTwoJoin", user);
        io.in(`room${roomNumber}`).emit(
          "message",
          `${user} has joined room #${roomNumber}`
        );
      }
      // if there are already 2 people in the room then join a new room
      else {
        roomNumber++;
        playerOne = user;
        socket.join(`room${roomNumber}`);
        io.in(`room${roomNumber}`).emit("playerOneJoin", user);
        // console.log(getPeopleInRoom(`room${roomNumber}`)); // shows people in room
        io.in(`room${roomNumber}`).emit(
          "message",
          `${user} has joined room #${roomNumber}`
        );
      }
      // if room does not exist then create the room and have socket join that room
    } else {
      playerOne = user;
      // create new room
      socket.join(`room${roomNumber}`);
      io.in(`room${roomNumber}`).emit("playerOneJoin", user);
      // emits to everyone in the same room if someone new has joined
      io.in(`room${roomNumber}`).emit(
        "message",
        `${user} has joined room #${roomNumber}`
      );
    }
    // Send back data or rooms we are in
    io.emit("myroom", `room${roomNumber}`);
  });

  // when client disconnects
  io.on("disconnect", () => {
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
