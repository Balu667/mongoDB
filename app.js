/** @format */

const express = require("express");
const bodyParser = require("body-parser");
const { getProducts, createProduct } = require("./mongoose");
const port = 5000;

const app = express();

app.use(bodyParser.json());

app.post("/products", createProduct);

console.log(port);

app.get("/products", getProducts);

app.listen(port);
