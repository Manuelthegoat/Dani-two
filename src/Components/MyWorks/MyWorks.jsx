import React from 'react';
import './MyWorks.css';
import Art1 from "../../Assets/art-1.jpg";
import Art2 from "../../Assets/art-2.jpg";
import Art3 from "../../Assets/art-3.jpg";
import Art4 from "../../Assets/art-4.jpg";
import Art5 from "../../Assets/art-5.jpg";
import Art6 from "../../Assets/art-6.jpg";
import Art7 from "../../Assets/art-7.jpg";
import Art8 from "../../Assets/art-8.jpg";
import Art9 from "../../Assets/art-9.jpg";
import Art10 from "../../Assets/art-10.jpg";
import Art12 from "../../Assets/art-11.jpg";
import Art11 from "../../Assets/art-12.jpg";

const artworks = [Art1, Art2, Art3, Art4, Art5, Art6, Art7, Art8, Art9, Art10, Art11, Art12];

const MyWorks = () => {
  // Duplicate the array to create seamless looping
  const doubleArtworks = [...artworks, ...artworks];

  return (
    <section className="my-works-section">
      <h2 className="section-title">My Works</h2>
      
      {/* Marquee moving right */}
      <div className="marquee marquee-right">
        <div className="marquee-content">
          {doubleArtworks.map((art, index) => (
            <div key={`right-${index}`} className="artwork">
              <img 
                src={art} 
                alt={`Artwork ${index % artworks.length + 1}`} 
                className="artwork-image"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Marquee moving left */}
      <div className="marquee marquee-left">
        <div className="marquee-content">
          {doubleArtworks.map((art, index) => (
            <div key={`left-${index}`} className="artwork">
              <img 
                src={art} 
                alt={`Artwork ${index % artworks.length + 1}`} 
                className="artwork-image"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="view-all-container">
        <button className="view-all-button">View All Works</button>
      </div>
    </section>
  );
};

export default MyWorks;