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
        const page = parseInt(req.query.page);
        const limit=10;

        const startIndex =  (page - 1 ) * limit;
        const endIndex =  page * limit;

        const results = {};
        if(endIndex < cities.length){
            results.next={
                page: page + 1,
                limit: limit
            }
        }
        
        
        if(startIndex>0){
            results.previous={
                page: page - 1,
                limit: limit
            }
    
        }
        
        results.results= cities.slice(startIndex,endIndex)
        
        try {
            res.status(200).json(results);
        } catch (err) {
            res.status(500).json(err)
        }
        
     });

     module.exports=router;