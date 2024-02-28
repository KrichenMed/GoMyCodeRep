// Required Express
const express = require("express");
const {
  addProduct,
  getProducts,
  editProduct,
  deleteProduct,
} = require("../Controllers/Product");
// Require Router
const router = express.Router();
//Add new product
router.post("/addProduct", addProduct);
//Getting all the products
router.get("/getProducts", getProducts);
//Edit
router.put("/editProduct/:_id", editProduct);
//Delete
router.delete("/deleteProduct/:_id", deleteProduct);
//Export Router
module.exports = router;
