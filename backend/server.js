const http = require("http");
const dotenv = require("dotenv");

const PORT = 8000;
const connectToDatabase = require("./config/databaseConfig");

// get environment variable(s)
dotenv.config();
connectToDatabase();

function handleRequest(req, res) {
  res.end(`It works! Path hit: ${req.url}`);
}

const server = http.createServer(handleRequest);

server.listen(PORT, function () {
  console.log(`Server listening on http://localhost: ${PORT}`);
});
