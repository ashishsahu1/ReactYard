import React, { useState } from "react";
import PropTypes from "prop-types";
import "./txtForm.css";

export default function TextFrom(props) {
    const handleUpClick = () => {
        // console.log("Upper case button clicked "+text);
        let newTxt = text.toUpperCase();
        setText(newTxt);
    };

    const handleLowClick = () => {
        // console.log("Lower case button clicked "+text);
        let newTxt = text.toLowerCase();
        setText(newTxt);
    };

    const handleClear = () => {
        setText("");
    };

    const handleCapital = () => {
        let newTxt = text[0].toUpperCase();
        newTxt += text[1];
        for (let i = 2; i < text.length; i++) {
            if (text[i - 2] === ".") {
                newTxt += text[i].toUpperCase();
            } else {
                newTxt += text[i];
            }
        }
        setText(newTxt);
    };

    //copy functionality
    const copyTxt = () => {
        var copyText = document.getElementById("textArea");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        // alert("Copied the text: " + copyText.value);
    };

    //remove extra spaces
    const handleSpace = ()=>{

        let newTxt = text.replace(/\s+/g,'').trim();
        setText(newTxt); 
    }

    //this add the typing functionality
    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    const [text, setText] = useState("");
    return (
        <>
            <div className="container my-5">
                <h1>{props.heading}</h1>
                <div className="mb-3 container">
                    <textarea
                        className="form-control"
                        onChange={handleOnChange}
                        placeholder={props.txt}
                        value={text}
                        id="textArea"
                        rows="8"
                    ></textarea>
                </div>
                <button className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>
                    Uppercase
                </button>
                <button className="btn btn-primary my-3 mx-1" onClick={handleLowClick}>
                    Lowercase
                </button>
                <button className="btn btn-primary my-3 mx-1" onClick={handleClear}>
                    Clear Text
                </button>
                <button className="btn btn-primary my-3 mx-1" onClick={handleCapital}>
                    Capitalize
                </button>
                <button className="btn btn-primary my-3 mx-1" onClick={copyTxt}>
                    Copy
                </button>
                <button className="btn btn-primary my-3 mx-1" onClick={handleSpace}>
                    Clean
                </button>
            </div>
            <div className="summ container">
                <h2>Text Summary</h2>
                <p>Character count : {text.length}</p>
                <p>Word count : {text.split(" ").length}</p>
                <p>Time to read : {Math.round(0.008 * text.split(" ").length)} min</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}

TextFrom.propTypes = {
    heading: PropTypes.string.isRequired,
};
