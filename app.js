const express = require("express");
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
const mongoose = require("mongoose");

const productRoutes = require("./api/routes/products");

mongoose.connect(
    "mongodb+srv://node-shop:node-shop@node-shop-xnjfj.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }
);


app.use("/products", productRoutes);

module.exports = app;
