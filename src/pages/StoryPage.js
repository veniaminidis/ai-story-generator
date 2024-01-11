import React from "react";
import "./StoryPage.css"; // Import your CSS file for styling

class StoryPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="story-page">
                <div className="story-header">
                    <img className="story-image" src={this.props.image} alt="Story Cover"></img>
                    <h1 className="chapter-title">{this.props.title}</h1>
                </div>
                <div className="story-content">
                    <p className="story-text">
                        {this.props.content}
                    </p>
                </div>
                <div className="navigation">
                    <button className="next-chapter-button">Next Chapter</button>
                </div>
            </div>            
        );
    }
}

// StoryPage.defaultProps = {
//     image: 'https://neverendingstory.ai/assets/images/image08.jpg?v=eed4e7fc',
//     title: 'Title',
//     content: "In a world of magic and men, begets a simple village where our tale begins. A young and bulky man named Foo resides here, living a life of labor and straightforward honesty. At 24, Foo is strong both in body and character. His physique, sculpted from years of rigorous farm work, speaks volumes of his resolute nature. Yet, in his heart stirs an undeniable yearning for something beyond his humble existence. Wandering towards the forest on the outskirts of his village, he steps onto an unmarked path. Unbeknownst to him, this would be the beginning of his great odyssey."
// }

export default StoryPage;
