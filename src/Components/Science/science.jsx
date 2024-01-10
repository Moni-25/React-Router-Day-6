import { useState, useEffect } from "react";

export default function Science({science = {}})
{
    return(
        <> 
            <div className="card stack" style={{border : "2px solid black", width: "406px", height: "450px", borderRadius: "12px"}}>        
                <img className="card-img-top" src={science.img} alt="..." />
                            
                <div className="card-body course">
                    <h5 className="card-title">{science.title}</h5>
                    <p className="card-text">{science.desc}</p>
                </div>
                            
                <div className="card-footer d-flex">
                    <p>{science.date}</p>
                    <p><i className="bi bi-dot"></i>{science.comm}</p>
                </div>
            </div>
        </>
    )
}