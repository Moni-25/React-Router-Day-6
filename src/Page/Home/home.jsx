import { useEffect, useState } from "react";
import FullStack from "../../Components/FullSatck/fullStack";
import Listing from "../../Components/List/list";
import Cyber from "../../Components/Cyber/cyber";
import Career from "../../Components/Career/career";
import Science from "../../Components/Science/science";
// import { useParams } from "react-router-dom";

export default function Home(){
    const [stack, setStack] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5173/stack.json")
        .then((response) => response.json())
        .then((result) => setStack(result.stack))
        .catch((error) => console.log(error));
    }, []);

    const [cyber, setCyber] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:5173/cyber.json")
        .then((res) => res.json())
        .then((result) => setCyber(result.cyber))
        .catch((error) => console.log(error));
    }, []);

    const [science, setScience] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:5173/dataScience.json")
        .then((res) => res.json())
        .then((result) => setScience(result.science))
        .catch((error) => console.log(error));
    }, []);

    const [career, setCareer] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:5173/career.json")
        .then((res) => res.json())
        .then((result) => setCareer(result.career))
        .catch((error) => console.log(error));
    }, []);

    // const params = useParams();
    // console.log(params)


    return(
        <>
            <div className='card-body d-flex' style={{padding: "0px 40px 30px 40px", gap: "20px", flexWrap: "wrap"}}>
                {stack.map((stack, index) => (
                    <FullStack stack={stack} key={`course-key${index}`}/>
                ))}
                {cyber.map((cyber, index) => (
                    <Cyber cyber={cyber} key={`cyber-key${index}`}/>
                ))}
                {science.map((science, index) => (
                    <Science science={science} key={`science-key${index}`}/>
                ))}
                {career.map((career, index) => (
                    <Career career={career} key={`career-key${index}`}/>
                ))}
            </div>
        </>
    )
}