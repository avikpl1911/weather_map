const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cityRoute = require("./routes/cities");



const app = express();

app.use(cors());
dotenv.config();

app.use("/api/cities",cityRoute);




app.use(express.json());

const PORT = 8800 || process.env.PORT;

app.listen(PORT,(err)=>{
    if(!err){
        console.log("app is listning to port "+PORT);

    }else{
        console.log(err);
    }
});