// import { useParams } from "react-router-dom";
import FullStack from "./fullStack";
import dataStack from "../../../public/stack.json"
import { useState, useEffect } from "react";

export default function CallStack(){
    // const params = useParams();
    /*const d = {
        "stack" : [
            {
                "id" : 1,
                "img" : "https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
                "title" : "7 Best Full-Stack Development Online Courses [2024]",
                "desc" : "Today’s world is rapidly evolving into a technological landscape. Owing to these dynamics, the demand and scope for full-stack developers.",
                "date" : "Augest 31, 2023",
                "comm" : "No Comments"
            }
        ]
    }*/
    const [stack, setStack] = useState(dataStack);
    // console.log(stack.stack)
    // const fullstack = stack.stack;
    {stack.stack.map((e) => console.log(e.id, e.title))}
    
    /*useEffect(() => {
        fetch("https://peppy-biscochitos-517b43.netlify.app/stack.json", {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Vary": "Origin"
            }
        })
        .then((response) => response.json())
        .then((result) => setStack(result.stack))
        .catch((error) => console.log(error));
    }, []);*/
    return (
        <>
            {/* {params && <FullStack/>} */}
            <div className='card-body d-flex call' style={{padding: "0px 40px 30px 40px", gap: "20px", flexWrap: "wrap"}}>
                {stack.stack.map((stack, index) => (         
                    <FullStack stack={stack} key={`stack-key${index}`}/>
                ))}
            </div>
        </>
    )
}