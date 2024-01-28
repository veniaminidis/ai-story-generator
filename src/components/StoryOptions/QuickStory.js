import React, { useState } from 'react';
import './quickStory.css';

const QuickStory = (props) => {
    const [customValue, setCustomValue] = useState('');
    // const [prompt, setPrompt] = useState('');

    // let customValue

    const handleCustomInputChange = (e) => {
        setCustomValue(e.target.value);
    };

    const handleCustomSubmit = () => {
        if (customValue.trim() !== '') {
            props.onSelect(customValue);
        }
        // setPrompt(`
        // Create a kids story about ${customValue}.

        // Split the story in 5 pages or chapters. For each chapter, write a description of an image that is the most relevant. The image description should be appropriate for eficient use in image generation AI models.
        // Split the images and the actual story by putting the image inside {} , the chapter title inside [] and the story inside <>.

        // `);        
    };

    return(
        <div>
            <label>Generate a story about...</label>
            <input 
                type="text"
                value={customValue}
                onChange={handleCustomInputChange}
                placeholder="A magical cat.">                    
            </input>
            <button onClick={handleCustomSubmit}>Submit</button>
            {/* <p>{prompt}</p> */}
            {/* <button>
                <span>Generate Story</span>
            </button> */}
        </div>
    );

}

export default QuickStory