import React from 'react';
import './ContactCard.css';

const ContactCard = ({ icon, text, link }) => {
  return (
    <a
      href={link}
      className="contact-card"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="contact-icon">{icon}</div>
      <p>{text}</p>
    </a>
  );
};

export default ContactCard;
