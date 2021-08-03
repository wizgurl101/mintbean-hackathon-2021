const path = require("path");
const express = require("express");
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

app.use(
  csurf({
    cookie: {
      secure: isProduction,
      sameSite: isProduction && "Lax",
      httpOnly: true,
    },
  })
);

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
