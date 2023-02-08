const express = require("express");
const cors = require("cors");
const axios = require("axios");
const dotenv = require("dotenv");

const app = express();

app.use(cors());

dotenv.config()

setInterval(async()=>{

    try{await axios.post("https://weather-map-api.vercel.app/api/weathers/")}

},500000);

//for first call

async()=>{
try{await axios.post("https://weather-map-api.vercel.app/api/weathers/")}
    
}

PORT = 2000 || process.env.PORT

app.listen(PORT,(err)=>{
    if(!err){
        console.log("app is listning on port "+PORT)
    }
})
