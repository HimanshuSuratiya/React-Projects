import React from "react";
import Common from "./Common";
import imgPath from "../Images/img2.png";

const AboutPage = () => {
    return (
        <>
            <Common Heading="Welcome To About Page" Name=" Please Click Contact Now" bName="Contact Now" Title="We are the team of talented developer making website" imgsrc={imgPath} goto="/Contact" />
        </>
    )
};

export default AboutPage;
