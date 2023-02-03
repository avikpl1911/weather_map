const mongoose = require("mongoose");

const weatherSchema = new mongoose.Schema({
    cityname:{
        type:String,
        required:true
    },
    data:{
        type:Object,
        required:true
    }
},
{    timestamps: true   }
);

module.exports = mongoose.model("Weather",weatherSchema);