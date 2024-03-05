// import React from "react";
// import { Component } from "react";
// import './HowItWorks.css'
// import {useEffect} from 'react';
// import {useRef} from 'react';
// import { useState } from "react";



// function HowItWorks() {
//     // const ref = useRef(null);
//     // useEffect(() => {
//     //     const element1 = document.getElementsByClassName('1st');
//     //     const element2 = document.getElementsByClassName('2nd');
//     //     const element3 = document.getElementsByClassName('3rd');
//     //     const element4 = document.getElementsByClassName('4th');
//     //   }, []);

//     // const element1 = document.getElementsByClassName('1st');
//     // const element2 = document.getElementsByClassName('2nd');
//     // const element3 = document.getElementsByClassName('3rd');
//     // const element4 = document.getElementsByClassName('4th');
//     const [first, setFirst] = useState(true);
//     const [second, setSecond] = useState(false);
//     const [third, setThird] = useState(false);
//     const [fourth, setFourth] = useState(false);
//     const [firstIMG, setFirstIMG] = useState('https://aetma.ihu.gr/studentprojects/arelements/imgs/screenshot12.png');
//     const [secondIMG, setSecondIMG] = useState(false);
//     const [thirdIMG, setThirdIMG] = useState(false);
//     const [fourthIMG, setFourthIMG] = useState(false);

//     const myFunction = (event) => {
        
//         // const element1 = document.getElementsByClassName('1st');
//         // const element2 = document.getElementsByClassName('2nd');
//         // const element3 = document.getElementsByClassName('3rd');
//         // const element4 = document.getElementsByClassName('4th');

//         // switch (event.target.classame) {
//         //     case '1st':
//         //         // event.target.className = 'selected';   
//         //         element1.className = 'selected';             
//         //         element2.className = '2nd';
//         //         element3.className = '3rd';
//         //         element4.className = '4th';
//         //     case '2nd':
//         //         element1.className = '1st';             
//         //         element2.className = 'selected';
//         //         element3.className = '3rd';
//         //         element4.className = '4th';
//         //     case '3rd':
//         //         element1.className = '1st';             
//         //         element2.className = '2nd';
//         //         element3.className = 'selected';
//         //         element4.className = '4th';
//         //     case '4th':
//         //         element1.className = '1st';             
//         //         element2.className = '2nd';
//         //         element3.className = '3rd';
//         //         element4.className = 'selected';               
//         //     default:
//         //         console.log(event.target.className);
//         //         // e.target.className = 'selected';
//         //         // element2.className = 'selected';
//         // }

//         if (event.target.className === '1st') {
//             {!first && setFirst(true)};
//             {second && setSecond(false)};
//             {third && setThird(false)};
//             {fourth && setFourth(false)};
//             setFirstIMG('https://aetma.ihu.gr/studentprojects/arelements/imgs/screenshot12.png');
//             console.log('gay');
//         }
//         else if (event.target.className === '2nd') {
//             {first && setFirst(false)};
//             {!second && setSecond(true)};
//             {third && setThird(false)};
//             {fourth && setFourth(false)};
//             setFirstIMG('https://aetma.ihu.gr/studentprojects/arelements/imgs/screenshot13.png');
//             console.log('gay2');
//         }
//         else if (event.target.className === '3rd') {
//             {first && setFirst(false)};
//             {second && setSecond(false)};
//             {!third && setThird(true)};
//             {fourth && setFourth(false)};
//             setFirstIMG('https://aetma.ihu.gr/studentprojects/arelements/imgs/screenshot14.png');
//             console.log('gay3');
//         }
//         else if (event.target.className === '4th') {
//             {first && setFirst(false)};
//             {second && setSecond(false)};
//             {third && setThird(false)};
//             {!fourth && setFourth(true)};
//             setFirstIMG('https://aetma.ihu.gr/studentprojects/arelements/imgs/screenshot15.png');
//             console.log('gay4');
//         }
//         // element1.classList.add("selected");
//         // console.log(element1);
//     }

//     return (
//         <section>
//             <div className='imgs bounce'>
//                 <img className={first ? "on" : "off"} src='https://aetma.ihu.gr/studentprojects/arelements/imgs/screenshot10.png'></img>
//                 <img className={second ? "on" : "off"} src='https://aetma.ihu.gr/studentprojects/arelements/imgs/screenshot12.png'></img>
//                 <img className={third ? "on" : "off"} src='https://aetma.ihu.gr/studentprojects/arelements/imgs/screenshot13.png'></img>
//                 <img className={fourth ? "on" : "off"} src='https://aetma.ihu.gr/studentprojects/arelements/imgs/screenshot14.png'></img>
//             </div>
//             <div className="bullets">
//                 <ul>
//                     {/* <li className='1st' onClick={event => myFunction(event)}>Customize your story</li>
//                     <li className='2nd' onClick={(event) => myFunction(event)}>Create the story with the power of AI</li>
//                     <li className='3rd' onClick={(event) => myFunction(event)}>Enjoy reading</li>
//                     <li className='4th' onClick={(event) => myFunction(event)}>Explore other creators stories</li> */}
//                     <li className={first ? "selected" : "1st"} onClick={event => myFunction(event)}>Customize your story</li>
//                     <li className={second ? "selected" : "2nd"} onClick={(event) => myFunction(event)}>Create the story with the power of AI</li>
//                     <li className={third ? "selected" : "3rd"} onClick={(event) => myFunction(event)}>Enjoy reading</li>
//                     <li className={fourth ? "selected" : "4th"} onClick={(event) => myFunction(event)}>Explore other creators stories</li>
//                 </ul>
//             </div>
//         </section>
//     )
// }


// export default HowItWorks;

import React, { useState, useEffect } from 'react';
import './HowItWorks.css'

const HowItWorks = () => {
    const [selectedItem, setSelectedItem] = useState(0);
    const [timer, setTimer] = useState(0);

    // Define the list items and corresponding images
    const listItems = ['Customize your story', 'Create the story with the power of AI', 'Enjoy reading', 'Explore other creators stories'];
    const images = [
        'https://aetma.ihu.gr/studentprojects/arelements/imgs/screenshot10.png', // Corresponds to 'Item 1'
        'https://aetma.ihu.gr/studentprojects/arelements/imgs/screenshot11.png', // Corresponds to 'Item 2'
        'https://aetma.ihu.gr/studentprojects/arelements/imgs/screenshot12.png', // Corresponds to 'Item 3'
    ];

    const handleItemClick = (itemIndex) => {
        // Update the selected item and corresponding image when a list item is clicked
        setSelectedItem(itemIndex);
        setTimer(0);
    };

    useEffect(() => {
        // Set up a timer to change the selection every 3 seconds
        const timerId = setInterval(() => {
            setSelectedItem((prevSelectedItem) => {
                // Loop back to the first item when reaching the end
                // console.log(prevSelectedItem); // Log the actual value
                return prevSelectedItem === listItems.length - 1 ? 0 : prevSelectedItem + 1;
            });
            setTimer(0);
        }, 3000);

        // Increment the timer every 100 milliseconds while the component is mounted
        const timerIncrement = setInterval(() => {
            setTimer((prevTimer) => {
                if (prevTimer >= 3) {
                    // Reset the timer to 0 after 3 seconds
                    return 0;
                }
                return prevTimer + 0.1;
            });
        }, 100);

        // Clear the timer increment when the component unmounts
        return () => {
            clearInterval(timerId);
            clearInterval(timerIncrement);
        };
    }, [selectedItem]);

    // useEffect(() => {
    //     // When a user clicks an item, clear the timer and select the clicked item
    //     setTimer(0);
    // }, [selectedItem]);

    // Calculate the timer progress as a percentage
    const timerProgress = (timer/3) * 100;

    return (
        <div>
            <div className="timer">
                <div
                    className="timer-bar"
                    style={{ width: `${timerProgress}%` }}
                ></div>
            </div>
            <div className="image-list-section">
            {/* Left side: Image */}
            <div className="image-container">
                {/* Display the image based on the selected item */}
                {selectedItem !== null && (
                    <img
                        src={images[selectedItem]}
                        alt={`Image ${selectedItem + 1}`}
                        className={selectedItem !== null ? 'fade-in' : ''}
                    />
                )}
            </div>

            {/* Right side: Bullet List */}
            <ul className="bullet-list">
                {listItems.map((item, index) => (
                    <li
                        key={index}
                        className={index === selectedItem ? 'selected' : ''}
                        onClick={() => handleItemClick(index)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
        </div>
        
    );
};

export default HowItWorks;

