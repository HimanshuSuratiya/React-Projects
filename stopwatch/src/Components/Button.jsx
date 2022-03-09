import React, { useState } from "react";

const Button = (props) => {


    const [showResume, setShowResume] = useState(false)
    const ab = () => {
        if (props.mSecond == 0) {
            return (
                <>
                    <button className="btnstart" to="/" onClick={props.startTime}>Start</button>
                    <button className="btnStop" to="/" onClick={() => {
                        setShowResume(true)
                        props.stop()
                    }}>Stop</button>
                </>
            )
        }
        if (props.mSecond <= 99 && !showResume) {
            return (
                <>
                    <button className="btnstart" to="/" onClick={props.startTime}>Start</button>
                    <button className="btnStop" to="/" onClick={() => {
                        setShowResume(true)
                        props.stop()
                    }}>Stop</button>
                </>
            )
        }
        if (showResume) {
            return (
                <>
                    <button className="btnReset" to="/" onClick={() => {
                        setShowResume(false)
                        props.Reset()
                    }}>Reset</button>
                    <button className="btnResume" to="/" onClick={() => {
                        setShowResume(false)
                        props.resume()
                    }}>Resume</button>
                </>
            )
        }
    }

    return (
        <>
            {ab()}
        </>
    )
};

export default Button;