const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require('mongoose');
require("dotenv").config();

//middleware
app.use(morgan('dev'));
//body-parser
app.use(express.json())

//router
const userrouter = require("./userRoutes");
app.use("/admin",userrouter);

const port =process.env.PORT || 5000;
app.listen(port,()=>{
    console.log("listening on 5000...")
})


// connecting mongodb
mongoose.connect(process.env.MYDB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex: true, useFindAndModify: false} , (err)=>{
    if(err) {console.log("DB not connected")}
    console.log("DB connected...")
});

