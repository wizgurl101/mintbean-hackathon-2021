const http = require("http");

const PORT = 8000;

function handleRequest(req, res) {
    res.end(`It works! Path hit: ${req.url}`)
}

const server = http.createServer(handleRequest);

server.listen(PORT, function() {
    console.log(`Server listening on http://localhost: ${PORT}`);
})