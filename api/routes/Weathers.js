const router = require('express').Router();
const weather = require('../models/weather');
const axios = require("axios");

const cities = ["MUMBAI",
     "DELHI",
     "BENGALURU",
     "PUNE",
     "KOLKATA",
     "CHENNAI",
     "AHMEDABAD",
     "HYDERABAD",
     "VADODARA",
     "JAIPUR",
     "SURAT",
     "LUCKNOW",
     "UDAIPUR",
     "KANPUR",
     "NASHIK",
     "NAGPUR",
     "LUDHIANA",
     "COIMBATORE",
     "INDORE",
     "CHANDIGARH",
     "BHOPAL",
     "PATNA",
     "RAJKOT",
     "RAIPUR",
     "GUWAHATI",
     "RANCHI",
     "BHUBANESHWAR",
     "JAMSHEDPUR",
     "DEHRADUN",
     "AURANGABAD"];

     router.post("/",async (req,res)=>{
          const respse = [{}]
          
          weather.remove({}, function(err) { 
               console.log('collection removed') 
            });
            try {
               cities.map(async (c)=>{
                        
                    

                    const responseu= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${c}&appid=de3b3dbfae66682a0fe0d96012133c6b`);
                    
                    const dataa = responseu.data;
                    const newWeather = new weather(
                         {
                              cityname: c,
                              data: dataa
                         }
                    
                    ) 
                    console.log(newWeather)
                    const w = newWeather.save()
                  respse.push(newWeather);
               });
               res.status(200).json(respse);
            } catch (err) {
               res.status(500).json(err);
            } 
          

        
     });


     router.get("/:city",async(req,res)=>{
         const city = req.params.city;

         const rem = await weather.findOne({cityname:req.params.city});
         
         res.status(200).json(rem);
     });

     module.exports=router;