const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile("msg.txt", "utf8", (err, data) => {
    if (err) {
      res.writeHead(500, { "content-type": "text/plain" });
      res.end("server down");
    } else {
      res.writeHead(200, { "content-type": "text/plain" });
      res.end(data);
    }
  });
});

const port = 3000;
const host = "127.0.0.1";

server.listen(port, host, () => {
  console.log(`server is running on port ${port} and host ${host}`);
});
