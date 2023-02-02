import { useEffect, useState } from "react"
import "./home.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Home() {

    const history = useHistory();
    
    const [cities,setCities] = useState([]);


   useEffect(()=>{
     const getcities= async ()=>{
        try {
            const res = await axios.get("https://weather-map-qbtz.vercel.app//api/cities");
            setCities(res.data);

        } catch (err) {
            console.log(err)
        }
     };
     getcities();
   },[]);

   
  return (
    <div className="Home">
        <div className="HomeWrapper">
            {cities.map((c)=>(
                <div className="cityContainer" key={c}>
                <span className="cityName">{c}</span>
                <button className="cityButton" onClick={()=>{
                    history.push("/map/"+c);
                    window.location.reload();
                }} > <span style={{margin:"auto"}}>GO to Map</span></button>
                </div>
            ))}
            
            
        </div>
    </div>
  )
}
