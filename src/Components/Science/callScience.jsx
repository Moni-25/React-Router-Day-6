import { useState, useEffect } from "react";
import Science from "./science";

export default function CallScience(){
    // const params = useParams();
    const [science, setScience] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:5173/dataScience.json")
        .then((res) => res.json())
        .then((result) => setScience(result.science))
        .catch((error) => console.log(error));
    }, []);

    return (
        <>
            {/* {params && <FullStack/>} */}
            <div className='card-body d-flex call' style={{padding: "0px 40px 30px 40px", gap: "20px", flexWrap: "wrap"}}>
                {science.map((science, index) => (        
                    <Science science={science} key={`science-key${index}`}/>
                ))}
            </div>
        </>
    )
}