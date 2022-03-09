import React from "react";

const StudentCard = (props) => {
    return (
        <>
            <div className="sCardDiv">
                <img src={props.photo} />
                <div className="ncpdiv">
                    <h1>Name: {props.name}</h1>
                    <h1>Class: {props.studentClass}</h1>
                    <h1>Phone: {props.number}</h1>
                </div>
            </div>
        </>
    )
};

export default StudentCard;