/** @format */

const mongoose = require("mongoose");

const Product = require("./models/product");

mongoose
  .connect(
    "mongodb+srv://admin-balu:VfsCjkuMJW3aO69G@cluster0.mwhrt.mongodb.net/first?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database is connected to backend!");
  })
  .catch(() => {
    console.log("Database connection failed due to some reasons!");
  });

const createProduct = async (req, res, next) => {
  const createProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });
  const result = await createProduct.save();
  res.json(result);
};

const getProducts = async (req, res, next) => {
  const products = await Product.find().exec();
  res.json(products);
};

exports.createProduct = createProduct;

exports.getProducts = getProducts;
