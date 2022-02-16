import React, {useState} from 'react'

export const TextForm = (props) => {
    const [text, setText] = useState()
    const [words, setWords] = useState()
    const [characters, setCharacters] = useState()

    const handleUpClick = (e) => {
        let newText =  text.toUpperCase();
        setText(newText)
        
    }

    const handleClearClick = () => {
        let newText = ''
        setText(newText)
        props.showAlert("Texbox is cleared", "success")
    }

    const handleLowClick = (e) => {
        let newText =  text.toLowerCase();
        setText(newText)
        props.showAlert("Converted into Lowercase", "success")
    }

    const handleOnChange = (e) => {
        setText(e.target.value)  
        setWords(text.split(" ")?.length)
        setCharacters(text.length)
        props.showAlert("Converted into Uppercase", "success")
    }

    const handleCopy = (e) => {
        let copyText = document.getElementById("myBox")
        copyText.select()
        navigator.clipboard.writeText(copyText.value)
        props.showAlert("Copied to Clipboard", "success")
    }
  return (
    <>
        <div className="container my-5" style= {{color: props.mode === 'light' ? '#383838': '#f8f9fa'}}>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label"> <b>Enter Text Here...</b> </label>
                <textarea className="form-control" id="myBox" value={text} onChange = {handleOnChange} style= {{backgroundColor: props.mode === 'light' ? '#f8f9fa': '#383838', color: props.mode === 'light' ? '#383838': '#f8f9fa'}} rows="8" placeholder="Enter Text here..."></textarea>
                <button className="btn btn-dark my-2 mx-4" onClick={handleUpClick} > -> UPPERCASE </button>
                <button className="btn btn-dark my-2 mx-4" onClick={handleLowClick} > -> lowercase </button>
                <button className="btn btn-dark my-2 mx-4" onClick={handleClearClick} > Clear </button>
                <button className="btn btn-dark my-2 mx-4" onClick={handleCopy} > Copy to clipboard </button>
            </div>
            <h4> Your text summary is {words} and total characters are {characters} </h4>
            <h4> {0.008 * words} minutes read </h4> 
            <h2>Preview</h2>
            <p> {text?.length>0 ? text : "Enter your text"} </p>
        </div>
    </>
  )
}
// export default TextForm