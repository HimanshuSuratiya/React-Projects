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

const SearchPage = () => {
    let number = 0;
    const fullData = getData();
    const [Values, setValues] = useState({ Name: '', Phone: '' })
    const [Error, setError] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...Values, [name]: value });
        setError('Finding Student...');
    }

    const checkStudentisvalid = () => {
        searchStudent();
    }

    const searchStudent = () => {
        if (Values.Name == 0 && Values.Phone == 0) {
            setError('Some error occured name or phone');
        } else {
            setError('Your Results');
        }
        if (number == 0 && Values.Name != 0) {
            setError('Student Not Found')
        }
    }
    return (
        <>
            <h1 className="searchHeading">Search-Student</h1>
            <div className="searchMainDiv">
                <div className="searchDiv">
                    <label>Name :</label>
                    <input name="Name" type="text" placeholder="Enter Registered Student Name" onChange={handleChange} value={Values.Name} onBlur={checkStudentisvalid} />
                    <br />
                    <label>Phone :</label>
                    <input name="Phone" className="phoneInput" type="number" placeholder="Enter Registered Student Number" onChange={handleChange} value={Values.Phone} onBlur={checkStudentisvalid} />
                    <br />
                    <button className="searchbtn" onClick={searchStudent}> Search Student</button>
                </div>
                <div className="ErrorDetails">
                    <h3>{Error}</h3>
                </div>
                <div className="searchedstudent">
                    {fullData.map((element, index) => {
                        if (Values.Name != 0 || Values.Phone != 0) {
                            if (element.Name.toLowerCase().includes(Values.Name.toLowerCase()) && element.Phone.toLowerCase().includes(Values.Phone.toLowerCase())) {
                                { number++ }
                                return <StudentCard key={index} photo={Card1} name={element.Name} studentClass={element.Class} number={element.Phone} />
                            }
                        }
                    })}
                </div>
            </div>
        </>
    )
};

export default SearchPage;