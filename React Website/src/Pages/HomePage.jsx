import React from "react";
import Common from "./Common";
import imgPath from "../Images/img1.svg";

const HomePage = () => {
    return (
        <>
            <Common Heading="Grow Your Business With" Name=" Himanshu Suratiya" bName="Get Started" Title="We are the team of talented developer making website" imgsrc={imgPath} goto="/Service" />
        </>
    )
};

export default HomePage;