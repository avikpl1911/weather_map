const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cityRoute = require("./routes/cities");
const weatherRoute = require("./routes/Weathers")
const mongoose = require("mongoose")


const app = express();

app.use(cors());
dotenv.config();

app.use("/api/cities",cityRoute);
app.use("/api/Weathers",weatherRoute);



mongoose.connect("mongodb+srv://avk:avk@cluster0.v55duzn.mongodb.net/?retryWrites=true&w=majority",
(err)=>{
    if(!err){console.log("database connected")}
    else{console.log(err)}
    
})

app.use(express.json());

const PORT = 8800 || process.env.PORT;

app.listen(PORT,(err)=>{
    if(!err){
        console.log("app is listning to port "+PORT);

    }else{
        console.log(err);
    }
});

