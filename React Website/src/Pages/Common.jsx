import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
    return (
        <>
            <div className="homeDiv">
                <div className="textDiv">
                    <h1>{props.Heading}<strong className="name">{props.Name}</strong></h1>
                    <h2>{props.Title}</h2>
                    <NavLink to={props.goto} className="getStarted">{props.bName}</NavLink>
                </div>
                <div className="imgDiv">
                    <img src={props.imgsrc} className="animation" />
                </div>
            </div>
        </>
    )
};

export default Common;
