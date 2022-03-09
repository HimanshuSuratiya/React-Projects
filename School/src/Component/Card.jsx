import React, { useState } from "react";

const Card = (props) => {
    return (
        <>
            <div className="card">
                <div className="ImgDiv">
                    <img className="Img" src={props.img} alt="Image Not Found" />
                </div>
                <h5 className="cardTitle">{props.title}</h5>
                <button className="classbtn" onClick={() => { props.studentDetail(props.class) }}>Students Details</button>
            </div>
        </>
    )
};

export default Card;