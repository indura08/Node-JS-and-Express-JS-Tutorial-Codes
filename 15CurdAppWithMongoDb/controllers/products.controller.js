const product = require("../models/product.model.js")

//get one product (read)
const getProduct = async (req, res) => {
    try{
        const { id } = req.params
        const Product = await product.findById(id);
        res.status(200).json({"product" : Product})

    }catch(error){
        res.status(400).json({"message" : error.message})
    }
}

//get all products (read)

const getAllProduct = async (req,res) => {
    try{ 
        const products = await product.find({});
        res.status(200).json({"products" : products})

    }catch(error){
        res.status(400).json({"error message" : error.message})
    }
}



//add new product (create)

const addNewProduct = async (req,res) => {
    try{
        const Product = await product.create(req.body) //methan simple captial akuru wena swena widiya blnna product varible names wala
        res.status(200).json(Product)

    }catch(error){
        console.log(error)
        res.status(500).json({message: error.message})
    }
}


//const update product (update)

const updateProduct = async (req,res) => {

    try{
        const { id } = req.params
        const Product = await product.findByIdAndUpdate(id, req.body) //mekt parameter widiyt denne update krnna one thanai updaet krna data tikai , update krna data tika
        if(!Product){
            return res.status(404).json({message: "product not found"})
        }

        //updaet krpu eka return krgnna
        const updatedProduct = await product.findById(id)
        res.status(200).json({message: "updated successfully", data: updatedProduct})

    }catch(error){
        res.status(500).json({message: error.message})
    }
}

//delete product (delete)

const deleteProduct = async (req,res) => {
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
}

module.exports = {
    getAllProduct,
    getProduct,
    updateProduct,
    addNewProduct,
    deleteProduct
}