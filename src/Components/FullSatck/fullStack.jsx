import "./stack.css"   

export default function FullStack({stack = {}})
{
    return(
        <> 
            <div className="card stack" style={{border : "2px solid black", width: "406px", height: "450px", borderRadius: "12px"}}>        
                <img className="card-img-top" src={stack.img} alt="..." />
                            
                <div className="card-body course">
                    <h5 className="card-title">{stack.title}</h5>
                    <p className="card-text">{stack.desc}</p>
                </div>
                            
                <div className="card-footer d-flex">
                    <p>{stack.date}</p>
                    <p><i className="bi bi-dot"></i>{stack.comm}</p>
                </div>
            </div>
        </>
    )
}