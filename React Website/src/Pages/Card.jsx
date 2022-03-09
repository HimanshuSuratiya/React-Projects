import React from "react";
import { NavLink } from "react-router-dom"

const Card = (props) => {
    return (
        <>
            <div className="card">
                <div className="serImaDiv">
                    <img className="serImg" src={props.imgsrc} alt="Image Not Found" />
                </div>
                <h5 className="cardTitle">{props.title}</h5>
                <p className="cardPara">Hy My name is Himanshu Suratiya and what is Your Name</p>
                <NavLink to="/about" className="moreBtn">More Details</NavLink>
            </div>
        </>
    )
}

export default Card;