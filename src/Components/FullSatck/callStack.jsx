// import { useParams } from "react-router-dom";
import FullStack from "./fullStack";
import { useState, useEffect } from "react";

export default function CallStack(){
    // const params = useParams();
    const [stack, setStack] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5173/stack.json")
        .then((response) => response.json())
        .then((result) => setStack(result.stack))
        .catch((error) => console.log(error));
    }, []);
    return (
        <>
            {/* {params && <FullStack/>} */}
            <div className='card-body d-flex call' style={{padding: "0px 40px 30px 40px", gap: "20px", flexWrap: "wrap"}}>
                {stack.map((stack, index) => (         
                    <FullStack stack={stack} key={`stack-key${index}`}/>
                ))}
            </div>
        </>
    )
}