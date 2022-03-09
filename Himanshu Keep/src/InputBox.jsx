import React, { useState } from "react";
import Card from "./Card";

const InputBox = () => {
    const [input, setInput] = useState('');
    const [text, setText] = useState('');
    const [data, setData] = useState([])
    const [inputPlaceHold, setInputPlaceHold] = useState('Title');
    const [textPlaceHold, setTextPlaceHold] = useState('Write a Note');


    const Event = (event) => {
        setInput(event.target.value);
    }

    const textArea = (event) => {
        setText(event.target.value);
    }

    const addCard = () => {
        if (input.length > 3 && text.length > 3) {
            setData([...data, {
                input: input,
                value: text
            }])
            setInput('');
            setText('');
        } else {
            setInput('');
            setInputPlaceHold('Please Valid Title');
            setText('');
            setTextPlaceHold('Please Enter more than 3 charracter');
        }

    }

    const removeBtn = (id) => {
        data.splice(id, 1);
        setData([...data]);
    }

    return (
        <>
            <div className="outerInputDiv">
                <div className="inputDiv">
                    <input onChange={Event} className="title" type='text' placeholder={inputPlaceHold} value={input} />
                    <textarea onChange={textArea} className="note" placeholder={textPlaceHold} value={text} />
                    <div className="addBtn">
                        <button onClick={addCard}> + </button>
                    </div>
                </div>
            </div>
            {data.map((element, index) => {
                return <Card input={element.input} value={element.value} key={index} id={index} onSelect={removeBtn} />
            })}
        </>
    )
};

export default InputBox;