import React, { useState } from 'react';
import './quickStory.css';

const QuickStory = (props) => {
    const [customValue, setCustomValue] = useState('');

    const handleCustomInputChange = (e) => {
        setCustomValue(e.target.textContent);
    };

    const handleCustomSubmit = () => {
        // setCustomValue();
        if (customValue.trim() !== '') {
            props.onSelect(customValue);
        }      
    };

    return (
        <div className="quickStoryDiv">
            <div className="inputContainer">
                <label>Generate a story about...</label>
                {/* <textarea className="quickInput"
                    type="text"
                    // value={customValue}
                    onChange={handleCustomInputChange}
                    placeholder="A magical cat.">
                </textarea> */}
                <span className="textarea" role="textbox" contentEditable onInput={handleCustomInputChange}></span>
            </div>
            <button className="quickButton" disabled={!customValue} onClick={handleCustomSubmit}>Generate Story</button>
            {/* <p>{customValue}</p> */}
            {/* <p>{prompt}</p> */}
            {/* <button>
                <span>Generate Story</span>
            </button> */}
        </div>
    );

}

export default QuickStory