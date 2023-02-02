const router = require('express').Router();

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

     router.get("/",(req,res)=>{
        try {
            res.status(200).json(cities);
        } catch (err) {
            res.status(500).json(err)
        }
        
     });

     module.exports=router;