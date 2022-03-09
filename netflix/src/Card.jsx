import React from "react";

function Card(Props) {
    return (
        <>
            <div className="div">
                <img className="image" src={Props.imgsrc} alt="Darkpic" />
                <p className="para">{Props.title}</p>
                <h3 className="name">{Props.name}</h3>
                <a href={Props.link} target='_blank'>
                    <button className="btn">WATCH NOW</button>
                </a>
            </div>
        </>
    )
}

export default Card;