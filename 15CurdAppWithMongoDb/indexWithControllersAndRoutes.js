const express = require('express')
const mongoose = require('mongoose')

const product = require("./models/product.model.js")
const productRoute = require("./routes/products.route.js")

const app = express()

app.use(express.json())

app.use(express.urlencoded({extended: false}))

app.use("/api/product", productRoute);

mongoose.connect("mongodb+srv://indura08:0770267931@cluster0.xxvqhdk.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("connect to database")
    app.listen(5003, () => console.log("server is running on port 5003"))
}).catch((error) => {
    console.log("connection failed!")
})

//1:26:24 nawattuwe

