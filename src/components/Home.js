import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import '../styles/main.css';
//import bannerImage from '../images/banner-image.jpg'; // Import your banner image

function Home() {
    return (
        <div className="home">
            {/* <Header />
            <Navigation /> */}
            <section className="banner">
                <div className="logo">Your Logo</div>
                <div className="sign-up">Sign Up</div>
                <div className="banner-content">
                    <div className="text">
                        <h2>Welcome to Your AI-Generated Stories!</h2>
                        <p>Create and explore magical stories.</p>
                        <button className="cta-button">Get Started</button>
                    </div>
                    <div className="image">
                        <h2>img</h2>
                        {/* <img src='https://neverendingstory.ai/assets/images/image08.jpg?v=eed4e7fc' alt="Banner" /> */}
                    </div>
                </div>
            </section>            
        </div>
    );
}

export default Home;