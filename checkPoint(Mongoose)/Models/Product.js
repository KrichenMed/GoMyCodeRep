//Require Mongoose to get schema
const mongoose = require("mongoose");
const connect = require("../Config/ConnectDB");
//Create schema
const schema = mongoose.Schema;
const productSchema = new schema({
  title: { type: String, required: true },
  description: {
    type: String,
  },
  price: { type: Number, default: 100 },
  posterUrl: { type: String, required: true },
});
//Export
module.exports = connectDB = mongoose.model("Product", productSchema);
