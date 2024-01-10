import Home from '../../Page/Home/home';
import CallCyber from '../Cyber/callCyber';
import CallStack from '../FullSatck/callStack';
import FullStack from '../FullSatck/fullStack'
import './list.css'
import {Link, useParams} from "react-router-dom"

export default function Listing(){
    // React Hook helps to access the Url Param
    // const params = useParams();
    // console.log(params)
    return(
        <>
        <div className="card"> 
            <div className="card-header">
            <ul className="list-link" style={{marginTop: "5px"}}>
                <li>
                    <Link to="/all">
                        ALL
                    </Link>
                </li>
                <li>
                    <Link to="/full">
                        FULL STACK DEVELOPMENT
                    </Link>
                </li>
                <li>
                    <Link to="/science">
                        DATA SCIENCE
                    </Link>
                </li>
                <li>
                    <Link to="/cyber">
                        CYBER SECURITY
                    </Link>
                </li>
                <li>
                    <Link to="/career">
                        CAREER
                    </Link>
                </li>
            </ul>
            </div>

            <div className='card-body d-flex' style={{padding: "0px 40px 30px 40px", gap: "20px", flexWrap: "wrap"}}>
                {/* Access Url param value here

                {params && <FullStack/>}                */}
                {/* <CallStack/> */}
            </div>
        </div>
        </>
    )
}