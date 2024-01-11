import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'; // Import your CSS file for styling
import { Routes, Route, Link } from 'react-router-dom';

function Card({ imageUrl, title, tag, index }) {
    return (
        <div className="card">
            <Link
                to= {"/home/story/" + index }
                state={{
                    storyIndex: index//stories.length - 1 // Index of the newly generated story
                }}
            >
                <div className="card-image" >
                    <img src={imageUrl} alt="Card" />
                    <div className="card-overlay">
                        <h3 className="card-title">{title}</h3>
                        <p className="card-tag">{tag}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

Card.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
};

export default Card;
