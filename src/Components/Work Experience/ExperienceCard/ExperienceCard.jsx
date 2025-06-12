import React, { useState } from 'react';
import './ExperienceCard.css';

const ExperienceCard = ({ details }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className='work-experience-card'>
      <h6>{details.title}</h6>
      <span className='domain-tag'>{details.domain}</span>
      <div className='work-duration'>{details.date}</div>

      {showMore && (
        <ul>
          {details.responsibilities.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}

      <button className='know-more-btn' onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Hide Details' : 'Know More'}
      </button>
    </div>
  );
};

export default ExperienceCard;
