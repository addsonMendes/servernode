const mongoose = require("mongoose"); 

const Product = mongoose.model(
    "Products",
    new mongoose.Schema({
        codigo: String,
        nome : String,
        preco: String,
        saldo : String
    })
);

module.exports = Product;