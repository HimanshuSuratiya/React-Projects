import React, { useState } from "react";
import StudentCard from "./StudentCard";
import Card1 from '../Photos/Card1.jfif';

const getData = () => {
    let Data = localStorage.getItem('Data');
    if (Data) {
        return JSON.parse(localStorage.getItem('Data'));
    } else {
        return [];
    }
}

const StudentPage = () => {
    const fullData = getData();

    return (
        <>
            <h1 className="studentHeading">Registered Students</h1>
            <div className="studentMainDiv">
                {fullData.map((element, index) => {
                    return <StudentCard key={index} photo={Card1} name={element.Name} studentClass={element.Class} number={element.Phone} />
                })}
            </div>
        </>
    )
};

export default StudentPage;