export default function Career({career = {}})
{
    return(
        <>
            <div className="card stack" style={{border : "2px solid black", width: "406px", height: "450px", borderRadius: "12px"}}>        
                <img className="card-img-top" src={career.img} alt="..." />
                            
                <div className="card-body course">
                    <h5 className="card-title">{career.title}</h5>
                    <p className="card-text">{career.desc}</p>
                </div>
                            
                <div class="card-footer d-flex">
                    <p>{career.date}</p>
                    <p><i class="bi bi-dot"></i>{career.comm}</p>
                </div>
            </div>
        </>
    )
}