import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectCard.css';
import { ArrowRight, X } from 'lucide-react';

const ProjectCard = ({ details }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        className='project-card'
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <img src={details.image || '/Assets/default.jpg'} alt={details.title} className='project-thumb' />

        <h3>{details.title?.trim()}</h3>
        <p className='project-domain'>{details.domain?.trim()}</p>

        <div className='project-link' onClick={() => setIsOpen(true)}>
          <span>Learn More</span>
          <ArrowRight size={20} />
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='project-modal'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className='modal-content'
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <button className='modal-close' onClick={() => setIsOpen(false)}>
                <X />
              </button>

              <img src={details.image || '/Assets/default.jpg'} alt='project' className='modal-image' />
              <h2>{details.title}</h2>
              <p className='project-domain'>{details.domain}</p>
              <ul>
                {(details.Description || []).map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
