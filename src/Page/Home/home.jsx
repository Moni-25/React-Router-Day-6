import { useEffect, useState } from "react";
import FullStack from "../../Components/FullSatck/fullStack";
import Listing from "../../Components/List/list";
import Cyber from "../../Components/Cyber/cyber";
import Career from "../../Components/Career/career";
import Science from "../../Components/Science/science";
import dataStack from "../../../public/stack.json"
import dataCyber from "../../../public/cyber.json"
import dataScience from "../../../public/dataScience.json"
import dataCareer from "../../../public/career.json"
// import { useParams } from "react-router-dom";

export default function Home()
{    
    const [stack, setStack] = useState(dataStack);

    const [cyber, setCyber] = useState(dataCyber);

    const [science, setScience] = useState(dataScience);

    const [career, setCareer] = useState(dataCareer);

    // const params = useParams();
    // console.log(params)


    return(
        <>
            <div className='card-body d-flex' style={{padding: "0px 40px 30px 40px", gap: "20px", flexWrap: "wrap"}}>
                {stack.stack.map((stack, index) => (
                    <FullStack stack={stack} key={`course-key${index}`}/>
                ))}
                {science.science.map((science, index) => (
                    <Science science={science} key={`science-key${index}`}/>
                ))}
                {cyber.cyber.map((cyber, index) => (
                    <Cyber cyber={cyber} key={`cyber-key${index}`}/>
                ))}
                {career.career.map((career, index) => (
                    <Career career={career} key={`career-key${index}`}/>
                ))}
            </div>
        </>
    )
}