import React, { useState, useEffect } from "react";

const getData = () => {
    let Data = localStorage.getItem('Data');
    if (Data) {
        return JSON.parse(localStorage.getItem('Data'));
    } else {
        return [];
    }
}

const HomePage = () => {
    const [nameplaceholdercolor, setnamePlaceHolderColor] = useState('');
    const [classplaceholdercolor, setclassPlaceHolderColor] = useState('');
    const [phoneplaceholdercolor, setphonePlaceHolderColor] = useState('');
    const [localStorageData, setLocalStorageData] = useState(getData());
    const [Values, setValues] = useState({ Name: '', Class: '', Phone: '', Address: '' });
    const [placeholder, setPlaceHolder] = useState({ Nplaceholder: 'Enter Your Name', CplaceHolder: 'Enter Your Class like 5th to 12th', PplaceHolder: '91' });

    useEffect(() => {
        localStorage.setItem('Data', [JSON.stringify(localStorageData)]);
    }, [localStorageData])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...Values, [name]: value });
    }

    const submitNow = () => {
        let AleartVar = false;
        if (Values.Name.length > 25 || Values.Name.length == 0) {
            placeholder.Nplaceholder = 'Please Enter Name less than 25 charracter';
            setnamePlaceHolderColor('setclassPlaceHolderColor');
            Values.Name = '';
        } else {
            placeholder.CplaceHolder = 'Enter Your Name';
            setclassPlaceHolderColor('');
        }
        if (Values.Class.length != 4 && Values.Class.length != 3) {
            placeholder.CplaceHolder = 'Please Enter Valid Class Name';
            setclassPlaceHolderColor('setclassPlaceHolderColor');
            Values.Class = '';
        } else {
            placeholder.CplaceHolder = 'Enter Your Class like 5th to 12th';
            setclassPlaceHolderColor('');
            AleartVar = true;
        }
        if (Values.Phone.length == 12) {
            placeholder.PplaceHolder = '91';
            setphonePlaceHolderColor('');
        } else {
            placeholder.PplaceHolder = 'Please Enter Valid Phone-No And use 91';
            setphonePlaceHolderColor('setphonePlaceHolderColor');
            Values.Phone = '';
        }
        if (AleartVar == true && Values.Phone.length == 12 && Values.Name.length <= 25) {
            alert(`Hy ${Values.Name} Your Registration is Successfully Submitted`);
            setValues({ Name: '', Class: '', Phone: '', Address: '' });
            setLocalStorageData((Data) => [...Data, Values]);
        }
    }

    return (
        <>
            <h1 className="RegisterNow">Register Now</h1>
            <div className="RegisterFormDiv">
                <div className="formDiv">
                    <label>Full Name </label>
                    <input className={nameplaceholdercolor} type="text" name='Name' placeholder={placeholder.Nplaceholder} onChange={handleChange} value={Values.Name} />
                    <label>Class </label>
                    <input className={classplaceholdercolor} type="text" name='Class' placeholder={placeholder.CplaceHolder} onChange={handleChange} value={Values.Class} />
                    <label>Phone </label>
                    <input className={phoneplaceholdercolor} type="number" name='Phone' placeholder={placeholder.PplaceHolder} onChange={handleChange} value={Values.Phone} />
                    <label>Picture </label>
                    <input type="picture" placeholder="Please upload Your Picture" />
                    <label>Address </label>
                    <textarea name='Address' placeholder="Enter Your Address" type="text" onChange={handleChange} value={Values.Address} />
                    <button className="submitForm" onClick={submitNow}>Submit Now</button>
                </div>
            </div>
        </>
    )
};

export default HomePage;