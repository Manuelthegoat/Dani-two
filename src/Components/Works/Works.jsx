// src/Components/Works/Works.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Works.css';
import { worksData } from '../../data/artData'; // Import from data.js

const Works = () => {
  return (
    <section className="works-section">
      <div className="works-header">
        <h2 className="works-title">Featured Works</h2>
        <span className="works-year">2019 - 2025</span>
      </div>
      
      <div className="works-grid">
        {worksData.map((work) => (
          <a 
            href={`/work/${work.id}`} 
            key={work.id} 
            className="work-card-link" // Add this class
          >
            <div className="work-card">
              <div className="card-image-container">
                <img 
                  src={work.image} 
                  alt={work.title} 
                  className="card-image"
                />
              </div>
              <div className="card-details">
                <div className="card-meta">
                  <span className="card-category">{work.category}</span>
                  <span className="card-date">{work.date}</span>
                </div>
                <h3 className="card-title">{work.title}</h3>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="view-more-container">
        <button className="view-more-button">View More</button>
      </div>
    </section>
  );
};

export default Works;