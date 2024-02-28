// Required Mongoose
const mongoose = require("mongoose");
//Connect function
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://krichenmed:Mk11114804@mohamedcluster.4jnx3le.mongodb.net/"
    );
    console.log("Connection to DB successfull");
  } catch (error) {
    console.log(error);
  }
};
//Exports
module.exports = connectDB;
