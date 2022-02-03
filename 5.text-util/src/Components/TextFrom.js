import React,{useState} from 'react';
import PropTypes from 'prop-types';
import './txtForm.css';

export default function TextFrom(props) {

    const handleUpClick = ()=>{
        // console.log("Upper case button clicked "+text);
        let newTxt = text.toUpperCase();
        setText(newTxt);
    }

    const handleLowClick = ()=>{
        // console.log("Lower case button clicked "+text);
        let newTxt = text.toLowerCase();
        setText(newTxt);
    }

    //this add the typing functionality
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className='container my-5'>
            <h1>{props.heading}</h1>
            <div className="mb-3 container">
                <textarea className="form-control" onChange={handleOnChange} placeholder={props.txt} value={text} id="textArea" rows="8"></textarea>
            </div> 
            <button className="btn btn-primary my-3 mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary my-3 mx-3" onClick={handleLowClick}>Convert to Lowercase</button>
            
        </div>
        <div className="summ container" >
            <h2>Text Summary</h2>
            <p>Character count : {text.length}</p>
            <p>Word count : {text.split(" ").length}</p>
            <p>Time to read : {Math.round(0.008*text.split(" ").length)} min</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}

TextFrom.propTypes = {
    heading: PropTypes.string.isRequired
}
