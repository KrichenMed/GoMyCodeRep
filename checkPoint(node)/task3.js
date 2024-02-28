//File system
const fs = require("fs");
//Create file with fs
fs.writeFile("welcome.txt", "Hello Node", function (error) {
  if (error) throw error;
  console.log("file created successfully!");
});
//Reading with fs
fs.readFile("welocme.js", "utf-8", (err, data) => {
  if (err) {
    console.error;
    ("Error reading file");
    return;
  }
  console.log("File Content : ",data);
});
