import React from 'react';
import Card from './Card';
import './FeaturedStories.css';

const storedStories = JSON.parse(localStorage.getItem("stories")) || [];

const cardData = []
//     {
//         imageUrl: 'https://neverendingstory.ai/assets/images/image05.jpg?v=eed4e7fc',
//         title: 'Card Title 1',
//         tag: 'Tag 1',
//     },
//     {
//         imageUrl: 'https://neverendingstory.ai/assets/images/image05.jpg?v=eed4e7fc',
//         title: 'Card Title 2',
//         tag: 'Tag 2',
//     },
//     {
//         imageUrl: '/imgs/info1.png',
//         title: 'Card Title 1',
//         tag: 'Tag 1',
//     },
//     {
//         imageUrl: '/imgs/info2.png',
//         title: 'Card Title 2',
//         tag: 'Tag 2',
//     },
//     {
//         imageUrl: '/imgs/info4.png',
//         title: 'Card Title 1',
//         tag: 'Tag 1',
//     },
//     {
//         imageUrl: '/imgs/info1.png',
//         title: 'Card Title 2',
//         tag: 'Tag 2',
//     },
//     {
//         imageUrl: '/imgs/info2.png',
//         title: 'Card Title 1',
//         tag: 'Tag 1',
//     },
//     {
//         imageUrl: '/imgs/info4.png',
//         title: 'Card Title 2',
//         tag: 'Tag 2',
//     },
//     // Add more card data objects as needed
// ];

for(let i = 0; i < 8; i++) {
    // cardData[i].imageUrl = storedStories[i].image;
    // cardData[i].title = storedStories[i].title;
    // cardData[i].tag = storedStories[i].content;
    cardData[i] = storedStories[i] || [];
}

function FeaturedStories() {
    return (
        <section className='featured'>
            <h1>Featured Stories</h1>
            <div className='container'>
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        imageUrl={card.image}
                        title={card.title}
                        tag={card.content}
                        index={index}
                    />
                ))}
            </div>
            <div className="card-container">
                <div className="card-scroll">
                    {cardData.map((card, index) => (
                        <Card
                            key={index}
                            imageUrl={card.image}
                            title={card.title}
                            tag={card.content}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
        
    );    
}

export default FeaturedStories;