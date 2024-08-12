import React,{useState} from 'react'

export default function Text(props) {
    
    const handleupChange=(event)=>{
        console.log("success")
        setText(event.target.value);
    }
    const handleonClick=()=>{
        let textset=text.toUpperCase();
        setText(textset);
        

    }
    const handleonClick1=()=>{
        let lettext1=text.toLowerCase();
        setText(lettext1);
    }
    const handleonClick2=()=>{
        setText("")
    }
    const handleonClick3=()=>{
        let text = document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const [text , setText]=useState("");
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <label  className="form-label">Example textarea</label>
        <textarea className="form-control" value={text} id="mybox" onChange={handleupChange} rows="8"></textarea>
        </div>
        <button type="button" className="btn btn-danger mx-2"   onClick={handleonClick}>Lower To Upper</button>
        <button type="button" className="btn btn-warning mx-2"  onClick={handleonClick1}>Upper To Lower</button>
        <button type="button" className="btn btn-success mx-2"  onClick={handleonClick2}>Clear</button>
        <button type="button" className="btn btn-danger mx-2"  onClick={handleonClick3}>Copy</button>
    </div>
    <div className="container">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} word and {text.length}  character</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
