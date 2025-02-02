const mongoose = require("mongoose")

const TransactionSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
    },
    description:{
        type:String,
        required:true,
    },
    datetime:{
        type:Date,
        required:true
    }
})

const TransactionModel = mongoose.model('Transaction',TransactionSchema)
module.exports = TransactionModel