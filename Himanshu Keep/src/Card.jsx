import React, { useState } from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Card = (props) => {
    return (
        <>
            <div className="Card">
                <h3 className="inputHeading">{props.input}</h3>
                <div className="text">{props.value}</div>
                <div className="deleteBtn">
                    <button onClick={() => { props.onSelect(props.id) }}><DeleteOutlineIcon /></button>
                </div>
            </div>
        </>
    )
}

export default Card;