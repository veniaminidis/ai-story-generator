import React from 'react';
import '../styles/main.css';

function HomeInfo(props) {
    return (
        <section className={props.name}>
            <div className='infoText'>                
                <h2>{props.title}</h2>
                <p>{props.content}</p>
            </div>
            <div className='infoImg'>
                <img src={props.url}></img>
            </div>
        </section>
    );
}

export default HomeInfo;
