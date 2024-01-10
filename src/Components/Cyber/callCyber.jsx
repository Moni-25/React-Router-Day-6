import { useParams } from "react-router-dom";
import Cyber from "./cyber";
import { useState, useEffect } from "react";

export default function CallCyber(){
    // const params = useParams();
    const [cyber, setCyber] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:5173/cyber.json")
        .then((res) => res.json())
        .then((result) => setCyber(result.cyber))
        .catch((error) => console.log(error));
    }, []);

    return (
        <>
            {/* {params && <Cyber/>} */}
            <div className='card-body d-flex call' style={{padding: "0px 40px 30px 40px", gap: "20px", flexWrap: "wrap"}}>
                {cyber.map((cyber, index) => (         
                    <Cyber cyber={cyber} key={`cyber-key${index}`}/>
                ))}
            </div>
        </>
    )
}