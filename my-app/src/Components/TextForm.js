import React, { useState } from "react";

export default function TextForm(props) {


  const [text, setText] = useState("Enter text here");


  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("Converted to UpperCase","success")
    
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    
  };

  const handleloClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("Converted to LowerCase","success")
  }

  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea 
          className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'gray',color: props.mode==='dark'?'white':'black'}} rows="8">
          </textarea>
        </div>

        <button
          className="btn btn-primary mx-1"  onClick={handleUpClick} >Convert to Uppercase
        </button>

        <button
          className="btn btn-primary" onClick={handleloClick}>Convert to Lowercase
          </button>
      </div>

      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
      </div>
    </>
  );
}