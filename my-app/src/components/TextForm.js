import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('')

    const upCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Success, Converted to UpperCase');
    }

    const handleChange = (event) => {
        setText(event.target.value);

    }

    const loCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Success, Converted to LowerCase');
    }

    const clearText = () => {
        let newText = ('');
        setText(newText);

    }

    const copyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('Success, Text Copied Successfully');
    }

    const removeExtraSpaces = () => {
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert('Success, Extra spaces removed successfully');
    }
    return (
        <>
            <div className='container my-7'>
                <h2 className='mb-4'>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleChange} style={{backgroundColor: props.mode==='light'?'white':'#333954', color: props.mode === 'light'?'black':'white'}} id="my-box" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={upCase}>Convert to UpperCase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={loCase}>Convert to LowerCase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={clearText}>Clear Text</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={copyText}>Copy Text</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className='container my-3'>
                <h2>Your text Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text : "Nothing to Preview!"}</p>
            </div>
        </>
    )
}
