// import { useParams } from "react-router-dom";
import Career from "./career"
import { useState, useEffect } from "react";

export default function CallCareer(){
    // const params = useParams();
    const [career, setCareer] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5173/career.json")
        .then((response) => response.json())
        .then((result) => setCareer(result.career))
        .catch((error) => console.log(error));
    }, []);
    return (
        <>
            {/* {params && <FullStack/>} */}
            <div className='card-body d-flex call' style={{padding: "0px 40px 30px 40px", gap: "20px", flexWrap: "wrap"}}>
                {career.map((career, index) => (         
                    <Career career={career} key={`career-key${index}`}/>
                ))}
            </div>
        </>
    )
}