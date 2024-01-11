import React from "react";
import "./HeroSection.css"; // Import your CSS file for styling

const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero content */}
      <div className="hero-content">
        <div className="text-container">
          <h1>Craft Your Unique Story, Your Way</h1>
          <p>Unleash Your Imagination with AI

Welcome to a world where your dreams and ideas take the spotlight. Our website harnesses the power of Artificial Intelligence to weave captivating tales. You are in control, selecting options and customizations that define your story. Watch it come alive with stunning visuals, making your narrative truly one-of-a-kind.</p>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="img-container">
          <img
            src="https://neverendingstory.ai/assets/images/image07.jpg?v=eed4e7fc" // Replace with your image source
            alt="Hero Image"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
