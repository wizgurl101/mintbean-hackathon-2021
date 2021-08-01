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

io.on("connection", (socket) => {
  console.log("New websocket client connection");

  const message = "Blackjack Server Websocket Connection";
  socket.emit("message", message);
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
