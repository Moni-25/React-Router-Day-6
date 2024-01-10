export default function Cyber({cyber = {}})
{
    return(
        <>
            <div className="card stack" style={{border : "2px solid black", width: "406px", height: "450px", borderRadius: "12px"}}>        
                <img className="card-img-top" src={cyber.img} alt="..." />
                            
                <div className="card-body cyber">
                    <h5 className="card-title">{cyber.title}</h5>
                    <p className="card-text">{cyber.desc}</p>
                </div>
                            
                <div class="card-footer d-flex">
                    <p>{cyber.date}</p>
                    <p><i class="bi bi-dot"></i>{cyber.comm}</p>
                </div>
            </div>
        </>
    )
}