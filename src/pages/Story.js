import React from "react";
import StoryPage from "./StoryPage"; // Adjust the import path based on your project structure
import "./StoryPage.css"; // Import your CSS file for styling
import { useLocation } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useState } from "react";

// class Story extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             currentStoryIndex: 0,
//             title: props.title,
//             content: props.content,
//             image: props.image
//         };
//     }

//     handleNextChapter = () => {
//         // Move to the next story when the "Next Chapter" button is clicked
//         this.setState((prevState) => ({
//             currentStoryIndex: prevState.currentStoryIndex + 1,
//         }));
//     };

//     render() {
//         const { currentStoryIndex } = this.state;
        
//         // Check if the currentStoryIndex is within the bounds of the stories array
//         const currentStory = stories[currentStoryIndex] || null;

//         return (
//             <div>
//                 {currentStory && (
//                     <StoryPage
//                         image={this.props.image}
//                         title={this.props.title}
//                         content={this.props.content}
//                     />
//                 )}
//                 <button onClick={this.handleNextChapter}>Next Chapter</button>
//             </div>
//         );
//     }
// }

const Story = (props) => {

    const [pageIndex, setPageIndex] = useState(0);
    const [start, setStart] = useState(true);
    const [end, setEnd] = useState(false);


    const {state} = useParams();

    // Retrieve stored stories from localStorage or initialize an empty array
    const storedStories = JSON.parse(localStorage.getItem("stories")) || [];

    // Retrieve the story index passed as state from the link or route
    const storyIndex = state;

    // Get the displayed story based on the index
    const displayedStory = storedStories[storyIndex] || props;
    const size = Object.keys(displayedStory).length;

    console.log(state);
    console.log(storedStories);

    const updateIndex = (btn) => {
        console.log("Button clicked:", btn);
        console.log("Previous page index:", pageIndex);
        console.log(displayedStory);

        if (btn === "next" && pageIndex < size - 1) {
            setPageIndex(prevPageIndex => {
                const newIndex = prevPageIndex + 1;
                setStart(newIndex === 0);
                setEnd(newIndex === size - 1);
                return newIndex;
            });
            console.log("next");
        } else if (btn === "prev" && pageIndex > 0) {
            setPageIndex(prevPageIndex => {
                const newIndex = prevPageIndex - 1;
                setStart(newIndex === 0);
                setEnd(newIndex === size - 1);
                return newIndex;
            });
        }
    
        console.log("Updated page index:", pageIndex);
    
        // setStart(pageIndex === 0);
        // setEnd(pageIndex === size - 1);
    };
    
    
    

    return (
        // <div>            
        //     <StoryPage
        //         image={image}
        //         title={title}
        //         content={content}
        //     />
        // </div>        
        <div className="story-page">
            {displayedStory && (
                <div>
                    <div className="story-header">
                        <img className="story-image" src={displayedStory[pageIndex].image} alt="Story Cover"></img>
                        <h1 className="chapter-title">{displayedStory[pageIndex].title}</h1>
                    </div>
                    <div className="story-content">
                        <span className="story-text">
                            {displayedStory[pageIndex].content}
                            {start && (<p>start</p>)}
                            {end && (<p>end</p>)}
                        </span>
                    </div>
                    {pageIndex}
                    <div className="navigation">
                    <button className="next-chapter-button" disabled={start} onClick={() => updateIndex("prev")}>Previous Chapter</button>
                    <button className="next-chapter-button" disabled={end} onClick={() => updateIndex("next")}>Next Chapter</button>
                    </div>
                </div>
            )}
        </div>   
    );
}

Story.defaultProps = {
    image: 'https://neverendingstory.ai/assets/images/image08.jpg?v=eed4e7fc',
    title: 'Title',
    content: "In a world of magic and men, begets a simple village where our tale begins. A young and bulky man named Foo resides here, living a life of labor and straightforward honesty. At 24, Foo is strong both in body and character. His physique, sculpted from years of rigorous farm work, speaks volumes of his resolute nature. Yet, in his heart stirs an undeniable yearning for something beyond his humble existence. Wandering towards the forest on the outskirts of his village, he steps onto an unmarked path. Unbeknownst to him, this would be the beginning of his great odyssey."
}

const stories = [
    {
        // image: 'story1.jpg',
        title: 'Chapter 1: The Beginning',
        content: 'In a world of magic and men, begets a simple village where our tale begins. A young and bulky man named Foo resides here, living a life of labor and straightforward honesty. At 24, Foo is strong both in body and character. His physique, sculpted from years of rigorous farm work, speaks volumes of his resolute nature. Yet, in his heart stirs an undeniable yearning for something beyond his humble existence. Wandering towards the forest on the outskirts of his village, he steps onto an unmarked path. Unbeknownst to him, this would be the beginning of his great odyssey.',
    },
    {
        // image: 'story2.jpg',
        title: 'Chapter 2: The Adventure Continues',
        content: 'In the heart of the forest...',
    },
    // Add more story objects here...
];

export default Story;