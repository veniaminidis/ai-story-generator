import React from 'react';
import Card from './Card';
import './CardContainer.css'; // Import your CSS file for styling

const cardData = [
    {
        imageUrl: 'https://neverendingstory.ai/assets/images/image05.jpg?v=eed4e7fc',
        title: 'Card Title 1',
        tag: 'Tag 1',
    },
    {
        imageUrl: 'https://neverendingstory.ai/assets/images/image05.jpg?v=eed4e7fc',
        title: 'Card Title 2',
        tag: 'Tag 2',
    },
    {
        imageUrl: 'path-to-image1.jpg',
        title: 'Card Title 1',
        tag: 'Tag 1',
    },
    {
        imageUrl: 'path-to-image2.jpg',
        title: 'Card Title 2',
        tag: 'Tag 2',
    },
    {
        imageUrl: 'path-to-image1.jpg',
        title: 'Card Title 1',
        tag: 'Tag 1',
    },
    {
        imageUrl: 'path-to-image2.jpg',
        title: 'Card Title 2',
        tag: 'Tag 2',
    },
    {
        imageUrl: 'path-to-image1.jpg',
        title: 'Card Title 1',
        tag: 'Tag 1',
    },
    {
        imageUrl: 'path-to-image2.jpg',
        title: 'Card Title 2',
        tag: 'Tag 2',
    },
    {
        imageUrl: 'path-to-image1.jpg',
        title: 'Card Title 1',
        tag: 'Tag 1',
    },
    {
        imageUrl: 'path-to-image2.jpg',
        title: 'Card Title 2',
        tag: 'Tag 2',
    },
    // Add more card data objects as needed
];

// function CardContainer() {
//     return (
//         <div className="card-container">
//             {cardData.map((card, index) => (
//                 <Card
//                     key={index}
//                     imageUrl={card.imageUrl}
//                     title={card.title}
//                     tag={card.tag}
//                 />
//             ))}
//         </div>
//     );
// }

// function CardContainer() {
//     return (
//         <div className="card-container">
//             <div className="card-scroll">
//                 {cardData.map((card, index) => (
//                     <Card
//                         key={index}
//                         imageUrl={card.imageUrl}
//                         title={card.title}
//                         tag={card.tag}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// }

function CardContainer() {
    return (
        <section className='featured'>
            <h1>Featured Stories</h1>
            <div className="card-container">
                <div className="card-scroll">
                    {cardData.map((card, index) => (
                        <Card
                            key={index}
                            imageUrl={card.imageUrl}
                            title={card.title}
                            tag={card.tag}
                        />
                    ))}
                </div>
            </div>
        </section>
        
    );
}



export default CardContainer;
