// src/Components/WorkDetail/WorkDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getWorkById } from '../../data/artData';
import './WorkDetail.css';

const WorkDetail = () => {
  const { id } = useParams();
  const work = getWorkById(id);

  if (!work) {
    return <div>Work not found</div>;
  }

  return (
    <div className="work-detail-container">
      <div className="work-detail-image">
        <img src={work.image} alt={work.title} />
      </div>
      <div className="work-detail-content">
        <h1>{work.title}</h1>
        <div className="work-meta">
          <span className="category">{work.category}</span>
          <span className="date">{work.date}</span>
        </div>
        <p className="description">{work.description}</p>
        <div className="work-info">
          <h3>Client</h3>
          <p>{work.client}</p><br/>
          <h3>Tools Used</h3>
          <ul>
            {work.tools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        </div>
        <Link to="/" className="back-button">
          Back to Works
        </Link>
      </div>
    </div>
  );
};

export default WorkDetail;