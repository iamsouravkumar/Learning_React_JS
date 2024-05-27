import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('')

    const upCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleChange = (event) => {
        setText(event.target.value);

    }

    const loCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const clearText = () => {
        let newText = ('');
        setText(newText);

    }
    return (
        <>
            <div className='container my-7'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleChange} id="my-box" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={upCase}>Convert to UpperCase</button>
                <button className='btn btn-primary mx-1' onClick={loCase}>Convert to LowerCase</button>
                <button className='btn btn-primary mx-1' onClick={clearText}>Clear Text</button>
            </div>
            <div className='container my-3'>
                <h2>Your text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
