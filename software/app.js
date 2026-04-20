 const express =require('express');
 const app=express();
 const path=require('path');
 const mongoose = require('mongoose');
const { log } = require('console');
const seedDB = require('./seed');
const productRoutes=require('./routes/products');
const ejsMate=require('ejs-mate');


 mongoose.connect('mongodb://127.0.0.1:27017/shopping-app')
 .then (()=>{console.log("DB is connected")
})
 .catch ((err)=>{
    console.log("DB have error");
    console.log(err); 
})

//seeding database (dummy data )
//seedDB()

app.use(productRoutes);  //soo that every request k baad chalega


app.engine('ejs',ejsMate)
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'));  //viws folder 
app.use(express.static(path.join(__dirname,'public'))); // public folder 



app.listen(8080 , ()=>{
    console.log("server connected at port 8080")
})
