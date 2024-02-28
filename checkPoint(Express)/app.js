// require Express
const express = require("express");
//create instance
const app = express();
//Midlleware
const restrictAccessDuringWorkingHours = (req, res, next) => {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const currentHour = currentDate.getHours();

  if (
    currentDay >= 1 &&
    currentDay <= 5 &&
    currentHour >= 9 &&
    currentHour < 17
  ) {
    next();
  } else {
    res
      .status(403)
      .send(
        "Access forbidden outside working hours (Monday to Friday, 9 AM to 5 PM)."
      );
  }
};

app.use(restrictAccessDuringWorkingHours);
//create server
const PORT = "8000";
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`The server is running on port ${PORT}`);
});
app.set("view engine", "pug");
app.set("views", "./views");
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/service", (req, res) => {
  res.render("service");
});
