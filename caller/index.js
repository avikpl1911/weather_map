const express = require("express");
const cors = require("cors");
const axios = require("axios");
const dotenv = require("dotenv");

const app = express();

app.use(cors());

dotenv.config()

setInterval(async()=>{

    await axios.post("https://weather-map-qbtz.vercel.app/api/weathers/")

},500000);

//for first call

async()=>{
    await axios.post("https://weather-map-qbtz.vercel.app/api/weathers/")
}

PORT = 2000 || process.env.PORT

app.listen(PORT,(err)=>{
    if(!err){
        console.log("app is listning on port "+PORT)
    }
})