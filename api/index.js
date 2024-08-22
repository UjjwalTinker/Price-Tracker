const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.urlencoded({extended:true}));

app.use(cors({origin:'http://localhost:3000'}))
app.use(express.json());
const Transaction = require('./models/transaction');
const mongoose= require("mongoose");


app.get('/api/text',(req,res)=>{
    res.json('test ok')
})

app.post("/api/transaction",async (req,res)=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/mern").then(() =>
  console.log("MongoDbConnected"));
   const{name,description,datetime,price}=req.body
 const transaction =  await Transaction.create({
    name,description,datetime,price});
    res.json(transaction)
})


app.get("/api/transaction", async(req,res)=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/mern")
    const transactions = await Transaction.find()
    res.json(transactions);
})

app.listen(4000,()=>{
    console.log("started");
    
})

