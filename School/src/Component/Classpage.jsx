import React, { useState } from "react";
import Card from "./Card";
import Card1 from '../Photos/Card1.jfif';
import Card2 from '../Photos/Card2.jfif';
import Card3 from '../Photos/Card3.jfif';
import Card4 from '../Photos/Card4.jfif';
import Card5 from '../Photos/Card5.png';
import Card6 from '../Photos/Card6.jfif';
import Card7 from '../Photos/Card7.jpg';
import Card8 from '../Photos/Card8.jfif';
import StudentCard from "./StudentCard";

const getLocalStorageData = () => {
    let Data = localStorage.getItem('Data');
    if (Data) {
        return JSON.parse(localStorage.getItem('Data'));
    } else {
        return [];
    }
}

const ClassPage = () => {
    let countclassstudent = 0;
    const fullLocalStorageData = getLocalStorageData();
    const [display, setDisplay] = useState({ CardDiv: '', DataDiv: 'none' });
    const [studentClass, setStudentClass] = useState('');
    const studentDetail = (className) => {
        fullLocalStorageData.map((element) => {
            setDisplay({ CardDiv: 'none', DataDiv: '' });
            setStudentClass(className);
        })
        if (fullLocalStorageData.length == 0) {
            setDisplay({ CardDiv: 'none', DataDiv: '' });
            setStudentClass(className);
        }
    }

    const findStudent = () => {
        if (countclassstudent == 0) {
            return <h1>No Student Registered on Class {studentClass.toLowerCase()} </h1>
        }
    }

    return (
        <>
            <h1 className="classHeading" style={{ display: display.CardDiv }}>Class Details</h1>
            <div className="classMainDiv" style={{ display: display.CardDiv }}>
                <Card img={Card7} title={'Class-5th'} class={'5th'} studentDetail={studentDetail} />
                <Card img={Card3} title={'Class-6th'} class={'6th'} studentDetail={studentDetail} />
                <Card img={Card4} title={'Class-7th'} class={'7th'} studentDetail={studentDetail} />
                <Card img={Card2} title={'Class-8th'} class={'8th'} studentDetail={studentDetail} />
                <Card img={Card5} title={'Class-9th'} class={'9th'} studentDetail={studentDetail} />
                <Card img={Card6} title={'Class-10th'} class={'10th'} studentDetail={studentDetail} />
                <Card img={Card1} title={'Class-11th'} class={'11th'} studentDetail={studentDetail} />
                <Card img={Card8} title={'Class-12th'} class={'12th'} studentDetail={studentDetail} />
            </div>
            <div className="studentMainDiv" style={{ display: display.DataDiv }}>
                <h1>Class {studentClass} Students</h1>
                {fullLocalStorageData.map((element, index) => {
                    if (studentClass.toLowerCase() == element.Class.toLowerCase()) {
                        countclassstudent++;
                        return <StudentCard key={index} photo={Card1} name={element.Name} studentClass={element.Class} number={element.Phone} />
                    }
                })}
                {findStudent()}
            </div>
        </>
    )
};

export default ClassPage;