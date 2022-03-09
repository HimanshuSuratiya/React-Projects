import React, { useState } from "react";
import Style from './HomeScreen.module.css';
import './index.css';

function HomeScreen() {
    const [data, setData] = useState([]);
    const [string, setString] = useState('');
    const [placeHold, setPlaceHold] = useState('Add a Items');

    const ph = 'Invalid List'
    const Event = (event) => {
        setString(event.target.value)
    }

    const addItem = () => {
        console.log(string.length);
        console.log(data);
        if (3 <= string.length) {
            setData([...data, string])
            setString('');
            setPlaceHold('Add a Items')
        }
        else {
            setString('');
            setPlaceHold(ph)
        }
    }

    const deleteItem = (index) => {
        data.splice(index, 1);
        setData([...data]);
    }

    return (
        <>
            <div className={Style.home}>
                <div className={Style.whitecontainer}>
                    <div className={Style.todo}>
                        ToDo List
                    </div>
                    <div className={Style.Type}>
                        <input onChange={Event} placeholder={placeHold} value={string} />
                        <i onClick={addItem} className="fas fa-plus-circle" />
                    </div>
                    <div className={Style.scroll}>
                        {data.map((element, index) => {
                            return <div className={Style.Remove}>
                                <i onClick={() => deleteItem(index)} className="fas fa-times-circle"></i>
                                <p>{element}</p>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeScreen;