const express = require('express')
const app = express()
const mongoose = require('mongoose')
const product = require("./models/product.model.js")

app.use(express.json())

app.get('/' , (req,res) => {
    res.status(200).json({"success" : "true"})
})
 
//get all products (read)
app.get('/api/products' , async (req, res) => {
    try{ 
        const products = await product.find({});
        res.status(200).json({"products" : products})

    }catch(error){
        res.status(200).json({"message" : error.message})
    }
})

//get product by id (read)
app.get('/api/products/:id', async(req,res) => {
    try{
        const { id } = req.params
        const Product = await product.findById(id);
        res.status(200).json({"product" : Product})
    }catch(error){
        res.status(400).json({"message" : error.message})
    }
})

//update product
app.put('/api/product/:id' , async(req,res) => {
    try{
        const { id } = req.params
        const Product = await product.findByIdAndUpdate(id, req.body) //mekt parameter widiyt denne update krnna one thanai updaet krna data tikai , update krna data tika
        if(!Product){
            return res.status(404).json({message: "product not found"})
        }

        //updaet krpu eka return krgnna
        const updatedProduct = await product.findById(id)
        res.status(200).json(updatedProduct)

    }catch(error){
        res.status(500).json({message: error.message})
    }
})

//create new product 
app.post('/api/create_products' , async (req,res) => { // 43:00 natrhr kale code ekaharid blnna e welwth ekkla
    try{
        const Product = await product.create(req.body) //methan simple captial akuru wena swena widiya blnna product varible names wala
        res.status(200).json(Product)
    }catch(error){
        console.log(error)
        res.status(500).json({message: error.message})
    }
})

//delete a product
app.delete('/api/product/delete/:id' , async (req,res) => {
    try{
        const deletedItem = await product.findByIdAndDelete(req.params.id) //product eka aphu penna wage one nattnm mehma varibale ekkt save krgnna one nah

        if(!deletedItem){
            return res.status(404).json({message: "cannot find the item"})
        }
        const delitem = product.findById(id)
        res.status(200).json({message: "product deletetd" })

    }catch(error){
        res.status(400).json({message: error })
    }
    
})


//methna Node-API kiyl llink eke thiyna eka api dagtta ekk eka poddk blnna
mongoose.connect("mongodb+srv://indura08:0770267931@cluster0.xxvqhdk.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    app.listen('5003' , () => console.log("server running on port 5003"))//methandi krla thiynne dtabase ekat connect unoth withrk server eka run wenna wage hdla thiynne
    console.log("connected to the atlas database")}).catch((err) => {console.log("error happend")})


//app.listen('5003' , () => console.log("server running on port 5003"))