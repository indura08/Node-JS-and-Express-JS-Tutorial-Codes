const express = require("express")
const product = require("../models/product.model.js")

const route = express.Router();

const { getAllProduct, getProduct, updateProduct, addNewProduct, deleteProduct} = require("../controllers/products.controller.js")

//route.get("/:id", getProduct); //menna me wage rote ekat adlal url path eke anthima kalla eela eta passe url ekat adlwa enna one mona controller function ekd kiyl denwa
route.get("/all" , getAllProduct);
route.put("/update/:id" , updateProduct);
route.post("/addNew" , addNewProduct);
route.delete("/delete/:id" , deleteProduct);

module.exports = route