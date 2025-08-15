import React from 'react';
import './Embed.css';

const Embed = () => {
  return (
    <section className="embed-section">
      <div className="video-container">
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/DDjywfXtC-o?si=iuv11qTadhpqKzR0"
            title="Rema - Calm Down (Visualizer)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="video-caption">Rema - Calm Down (Visualizer)</p>
      </div>
    </section>
  );
};

export default Embed;