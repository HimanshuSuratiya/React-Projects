import React, { useState } from "react";
import Button from "./Button";

const StopBox = () => {

    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [milliSecond, setmilliSecond] = useState(0);
    const [stopInterval, startInterval] = useState();

    const startTimeInterval = () => {
        setmilliSecond((preMilliSecond) => preMilliSecond + 1);
    }

    const startTime = () => {
        startInterval(setInterval(() => {
            startTimeInterval()
        }, 10));
    }

    if (milliSecond > 99) {
        setSecond((preSecond) => preSecond + 1);
        setmilliSecond(0);
    }
    if (second > 59) {
        setMinute((preMinute) => preMinute + 1);
        setSecond(0);
    }

    const stop = () => {
        clearInterval(stopInterval);
    };

    const resume = () => {
        startTime();
    }

    const Reset = () => {
        setmilliSecond(0);
        setSecond(0);
        setMinute(0);
    }

    return (
        <>
            <div className="mainDiv">
                <div className="Box">
                    <h1 className="BoxHeading">
                        {(minute >= 10) ? minute : "0" + minute}:
                        {(second >= 10) ? second : "0" + second}:
                        {(milliSecond >= 10) ? milliSecond : "0" + milliSecond}
                    </h1>
                    <div className="buttonDiv">
                        <Button mSecond={milliSecond} startTime={startTime} stop={stop} resume={resume} Reset={Reset} />
                    </div>
                </div>
            </div>
        </>
    )
};

export default StopBox;