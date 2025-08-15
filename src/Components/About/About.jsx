import React from 'react';
import './About.css';


const About = () => {
  
  const aboutText = "As a freelance digital artist, I've partnered with brands across the globe to create unique visuals that tell their story and captivate their audience.";

  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">About</h2>
        <div className="about-content">
          <p className="about-text">
            {aboutText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;