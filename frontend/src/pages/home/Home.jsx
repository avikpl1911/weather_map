import { useEffect, useState } from "react"
import "./home.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Home() {

    const history = useHistory();
    
    const [cities,setCities] = useState([]);
    const [page,setPage] = useState(1);


   useEffect(()=>{
     const getcities= async ()=>{
        try {
            const res = await axios.get("http://localhost:8800/api/cities?page="+page);
            setCities(res.data.results);

        } catch (err) {
            console.log(err)
        }
     };
     getcities();
   },[page]);

   
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

 <div class="pagination">
               {page !== 1 && <button onClick={()=>{setPage(page - 1 )}}  >&laquo;</button>}
               <button onClick={()=>{setPage(1)}} className={page === 1 ? "active" : ""}>1</button>
               <button onClick={()=>{setPage(2)}} className={page === 2 ? "active" : ""}>2</button>
               <button onClick={()=>{setPage(3)}} className={page === 3 ? "active" : ""}>3</button> 
               {page !== 3 && <button onClick={()=>{setPage(page + 1 )}} >&raquo;</button>}
</div>
            
            
        </div>
    </div>
  )
}
