import React from "react";
import Card from "./Card";
import Data from "./Data";

const ServicePage = () => {
    return (
        <>
            <div className="serHeading">
                <h1>Our Services</h1>
            </div>
            <div className="cardDiv">
                {Data.map((element, index) => {
                    return <Card
                        key={index}
                        imgsrc={element.imgsrc}
                        title={element.title}
                    />
                })}
            </div>
        </>
    )
};

export default ServicePage;
