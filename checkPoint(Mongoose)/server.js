//Require Express
const express = require("express");
const connect = require("./Config/ConnectDB");
//Create instance
const app = express();
//Middleware
app.use(express.json());
//Connection to DB
connect();
//Create PORT
const port = 8000;
//Create server
app.listen(port, (error) => {
  error
    ? console.log(error)
    : console.log(`The server is running on port ${8000}`);
});
app.use("/api/Product", require("./Routes/ProductRoutes"));
//Packages to learn about and explain
//"dotenv"folla
//"nodemon" Mohamed Abcha
//"toastify" khribi
//"Jsonwebtoken" lotfi
//"bcrypt" Mouhiba
//"concurrently" aymen
//"express validator" younes
