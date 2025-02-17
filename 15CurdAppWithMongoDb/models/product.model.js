const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        name: {type: String, required: [true, "please enter a product name"]},
        quantity: {type: Number, required: true, default: 0},
        price:{type:Number,required: true, default : 0},
        image:{type: String, required: false}

    },

    {
        timeStamps: true, //this tells mongo db to automatically manage two 
    }
)

const product = mongoose.model("product", productSchema) //meken mongoose ekn schema ekk model ekk krnwa. me model function eke paramter deki , singular namak dnwa meke nm products eta passe udin define krpu schema eka denwa

module.exports = product 