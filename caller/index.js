const express = require("express");
const cors = require("cors");
const axios = require("axios");
const dotenv = require("dotenv");

const app = express();

app.use(cors());

dotenv.config()

setInterval(async()=>{

    axios.post("http://localhost:8800/api/weathers/")

},50000)

PORT = 2000 || process.env.PORT

app.listen(PORT,(err)=>{
    if(!err){
        console.log("app is listning on port "+PORT)
    }
})