/** @format */

const { MongoClient, ServerApiVersion } = require("mongodb");

const url =
  "mongodb+srv://admin-balu:VfsCjkuMJW3aO69G@cluster0.mwhrt.mongodb.net/first?retryWrites=true&w=majority";

const getProducts = async (req, res, next) => {
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });
  let products;
  try {
    await client.connect();

    products = client.db().collection("sample").find().toArray();
    console.log(products);
  } catch (error) {
    console.log(error);
    return res.json({ message: "Could not get data from store" });
  }
  client.close();
  return res.json({ products: products });
};

const createProduct = async (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price,
  };
  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db();
    const result = db
      .collection("two")
      .insertOne(newProduct)
      .then(() => {
        console.log("Data inserted successfully");
      });
  } catch (error) {
    console.log(error);
    return res.send({ message: "Could not store the data." });
  }

  setTimeout(() => {
    client.close();
  }, 1500);
  res.json(newProduct);
};

exports.getProducts = getProducts;

exports.createProduct = createProduct;
