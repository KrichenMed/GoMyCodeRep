const http = require("http");
http
  .createServer((request, response) => {
    response.end("<h1>Hello Node</h1>");
  })
  .listen(3000);
