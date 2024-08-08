import http from "http";

const server = http.createServer();

server.listen(3000, "localhost", function () {
  console.log("Server is listening on port", 3000);
});