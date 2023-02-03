import { useState } from "react";
import "./map.css";
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { Marker, Popup,useMap } from "react-leaflet"; 
import L from "leaflet";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";


function GetIcon(_iconSize){
   return L.icon({
    iconUrl:require("../../static/Icons/icon.png"),
    iconSize: [_iconSize]
   })
}

function SetViewOnChange({ coords }) {
  const map = useMap();
  map.setView(coords, map.getZoom());

  return null;
}


export default function MyMap() {

    const city = useParams().city;
    
    const [weath,setWeath] = useState("")

    const [coords,setCoords] = useState([0,0]);

    useEffect(()=>{
       const getWeather = async ()=>{
         const res= await axios.get(`https://weather-map-qbtz.vercel.app/api/weathers/${city}`);
         
         setWeath(res.data.data.weather[0].main);
         setCoords([res.data.data.coord.lat,res.data.data.coord.lon])

       };
       getWeather();
    },[]);
    
      
  return (

    
    <div className="Map">
      {coords!==null && (<MapContainer 
        center={coords}
        zoom={10}
        style={{height:"100vh",width:"100%"}}
        >
           <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  /> 
         <Marker position={coords} icon={GetIcon(53)}>
             <Popup>
              {weath}
             </Popup>
         </Marker>
      
         <SetViewOnChange coords={coords} />


        </MapContainer>)}
        
    </div>
  )
}
