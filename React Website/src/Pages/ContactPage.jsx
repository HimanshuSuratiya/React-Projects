import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const ContactPage = () => {
    const [Data, setData] = useState({
        FullName: "",
        Phone: "",
        Email: "",
        Message: "",
    });

    const Event = (event) => {
        const { name, value } = event.target;
        console.log(event.target.value);
        setData((oldValue) => {
            return {
                ...oldValue,
                [name]: value,
            };
        });
    };

    const Submit = () => {
        if (Data.FullName.length >= 4 && Data.Phone.length == 10)
            alert(`your Name is : ${Data.FullName} Mobile No is = ${Data.Phone} And Email is : ${Data.Email} Message : ${Data.Message}
        Your Form is Submitted Succesfully`);
        else {
            alert("Your Form is Not Submitted Due SomeError");
            setData(() => {
                return {
                    FullName: "",
                    Phone: "",
                    Email: "",
                    Message: "",
                }
            })
        }
    }

    return (
        <>
            <div className="conHeadingDiv">
                <h1>Contact Us</h1>
            </div>
            <div className="conFormDiv">
                <div className="formDiv">
                    <label>FullName </label>
                    <input name="FullName" value={Data.FullName} onChange={Event} type="text" placeholder="Enter Your Name" />
                    <label>Phone </label>
                    <input name="Phone" value={Data.Phone} onChange={Event} type="number" placeholder="Enter Your Mobile Number" />
                    <label>Email </label>
                    <input name="Email" value={Data.Email} onChange={Event} type="email" placeholder="Enter Your Email" />
                    <label>Message </label>
                    <textarea name="Message" onChange={Event} value={Data.Message} />
                    <NavLink to="" className="submitForm" onClick={Submit}>Submit Form</NavLink>
                </div>

            </div>
        </>
    )
};

export default ContactPage;
