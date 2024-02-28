console.log("This is App.js");
const http = require("http");
http
  .createServer((request, response) => {
    response.end("Hello from the server");
  })
  .listen(8000);

console.log("The server is running at http://127.0.0.1:8000");
//File system
const fs = require("fs");
//Create file with fs
fs.writeFile("gomycode.txt", "Node workshop", function (error) {
  if (error) throw error;
  console.log("file created successfully!");
});
//Reading with fs
fs.readFile("helloworld.js", "utf-8", (err, data) => {
  if (err) {
    console.error;
    ("Error reading file");
    return;
  }
  console.log("File Content : ",data);
});
