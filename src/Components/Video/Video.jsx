import React from 'react';
import './Video.css';
import Vid from '../../Assets/vid.mp4'; 

const Video = () => {
  return (
    <section className="video-section">
      <div className="video-container">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="full-width-video"
        >
          <source src={Vid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Video;