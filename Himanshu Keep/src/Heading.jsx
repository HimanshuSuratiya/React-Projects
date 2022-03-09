import React from "react";
import logo from './logo.jpg';

const Heading = () => {
    return (
        <>
            <div className="Nav">
                <img className="img" src={logo} alt="logo" />
                <p className="himkeep">Himanshu Keep</p>
            </div>
        </>
    )
};

export default Heading;