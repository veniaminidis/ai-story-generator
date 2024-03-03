import React, { useState } from 'react';
import './quickStory.scss';

const QuickStory = (props) => {
    const [customValue, setCustomValue] = useState('');
    const [loading, setLoading] = useState(false);

    const handleCustomInputChange = (e) => {
        setCustomValue(e.target.textContent);
    };

    const handleCustomSubmit = () => {
        // setCustomValue();
        if (customValue.trim() !== '') {
            props.onSelect(customValue);
            setLoading(true);
        }      
    };

    return (
        <div className="quickStoryDiv">
            {loading &&
            <div className="loading">
                <img src="/imgs/dinoGif.gif"></img>
            </div>
            }
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