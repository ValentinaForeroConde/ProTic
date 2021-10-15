import React from "react"

function Card({title, imageSource, text}) {

    return (
        <div className="card" style={{height:"500px"}}>
            
            <img className="photo" src={imageSource} alt="" style={{height:"200px"}}/>
            
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">{text}</p>

            </div>
        </div>
    )
}


export default Card