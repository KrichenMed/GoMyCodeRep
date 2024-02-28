const Product = require("../Models/Product");
const product = require("../Models/Product");
//Adding Product
exports.addProduct = async (req, res) => {
  try {
    const { title, description, price, posterUrl } = req.body; //Hedhi lwech ?
    const newProduct = new product({ title, description, price, posterUrl });
    await newProduct.save();
    res.status(200).send({ msg: "Add successful" });
  } catch (error) {
    res.status(500).send({ msg: "Error, Adding new product", error });
  }
};
//Getting All the Products
exports.getProducts = async (req, res) => {
  try {
    const findProduct = await product.find();
    res.status(200).send({ msg: "Products Found !!!", findProduct });
  } catch (error) {
    res.status(500).send({ msg: "Error, can't find product", error });
  }
};
//Edit a Product
exports.editProduct = async (req, res) => {
  try {
    const { _id } = req.param;
    const { title, description, price, posterUrl } = req.body;
    const findProduct = await Product.updateOne({ _id }, { $set: req.body });
    res.status(200).send({ msg: "Edit complete", findProduct });
  } catch (error) {
    res.status(500).send({ msg: "Error, can't edit product", error });
  }
};
//Delete Product
exports.deleteProduct = async (req, res) => {
  try {
    const { _id } = req.params;
    await Product.findByIdAndDelete({ _id });
    res.status(200).send({ msg: "Delete successful" });
  } catch (error) {
    res.status(500).send({ msg: "Error, can't delete product", error });
  }
};
