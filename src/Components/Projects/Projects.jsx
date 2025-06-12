import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project_details } from '../../utils/data.js';
import './Projects.css';

const domainTitles = ['Web Development', 'UI & UX Design', 'Machine Learning'];

const Projects = () => {
  const [activeDomain, setActiveDomain] = useState('Web Development');
  const [modalProject, setModalProject] = useState(null);

  const openModal = (project) => setModalProject(project);
  const closeModal = () => setModalProject(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section className="experience-container" id="projects">
      <h5>Projects by Domain</h5>

      <div className="experience-content">
        <div className="domain-cards">
          {domainTitles.map((domain) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={domain}
              className={`domain-card ${activeDomain === domain ? 'active' : ''}`}
              onClick={() => setActiveDomain(domain)}
            >
              {domain}
            </motion.div>
          ))}
        </div>

        <div className="project-grid">
          {Project_details
            .filter((project) => project.domain.trim() === activeDomain)
            .map((project, index) => (
              <motion.div
                className="property-card"
                key={index}
                whileHover={{ scale: 1.02 }}
                onClick={() => openModal(project)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') openModal(project);
                }}
              >
                <div className="property-img-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="property-img"
                    loading="lazy"
                  />

                  {/* Overlay with title + button */}
                  <div className="overlay-info">
                    <div className="property-title">{project.title}</div>
                    <button
                      className="know-more-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(project);
                      }}
                    >
                      Know More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        <AnimatePresence>
          {modalProject && (
            <motion.div
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              aria-modal="true"
              role="dialog"
              tabIndex={-1}
            >
              <motion.div
                className="modal-content"
                initial={{ y: '-100vh' }}
                animate={{ y: '0' }}
                exit={{ y: '-100vh' }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="close-btn"
                  onClick={closeModal}
                  aria-label="Close modal"
                >
                  ×
                </button>
                <h2>{modalProject.title}</h2>

                <div className="modal-description" tabIndex={0}>
                  {modalProject.Description?.map((point, i) => (
                    <p key={i}>• {point}</p>
                  ))}
                </div>

                {modalProject.images?.length > 0 && (
                  <div className="modal-gallery">
                    {modalProject.images.map((img, idx) => (
                      <img
                        src={img}
                        alt={`Screenshot ${idx + 1}`}
                        key={idx}
                        className="modal-image"
                        loading="lazy"
                      />
                    ))}
                  </div>
                )}

                <div className="modal-links">
                  {modalProject.liveLink && (
                    <a
                      href={modalProject.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="link-btn"
                    >
                      🔗 Live Demo
                    </a>
                  )}
                  {modalProject.codeLink && (
                    <a
                      href={modalProject.codeLink}
                      target="_blank"
                      rel="noreferrer"
                      className="link-btn"
                      iconUrl="./assets/github-logo.png"
                    >
                  
                     🌐 GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
