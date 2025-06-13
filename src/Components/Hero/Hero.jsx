import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import './Hero.css';

const Hero = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('Contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="hero">
      <div className="hero-wrapper">
        {/* Left Side Text */}
        <motion.div
          className="hero-text-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="glitch-text" data-text="Hi, I'm Akash">
            Hi, I'm Akash
          </h1>

          <div className="typewriter">
            <Typewriter
              options={{
                strings: [
                  'AI Developer 👾',
                  'Web Developer 🧑‍💻',
                  'UI/UX Designer 🎨',
                  'Dream Builder 🚀',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 40,
              }}
            />
          </div>

          <p className="hero-description">
            I fuse intelligence, design, and motion into interactive digital experiences.
            From idea to reality — built with AI, web tech & heart.
          </p>

          <div className="hero-buttons">
            {/* Changed from <a> to <button> for better control */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="hero-btn filled"
              onClick={handleScrollToContact}
            >
              Let’s Collaborate
            </motion.button>

            <a href="/Assets/Akash_Resume.pdf" download>
              <motion.button whileHover={{ scale: 1.1 }} className="hero-btn outline">
                Get Resume
              </motion.button>
            </a>
          </div>
        </motion.div>

        {/* Right Side Image & Logos */}
        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="hero-image-card tilt-effect">
            <img src="/Assets/avatar.jpg" alt="Akash" />
          </div>

          <div className="logo-grid">
            <img src="/Assets/img logo 01.png" alt="Logo 1" />
            <img src="/Assets/icon logo 2.png" alt="Logo 2" />
            <img src="/Assets/img logo 03.png" alt="Logo 3" />
            <img src="/Assets/img logo 07.png" alt="Logo 4" />
            <img src="/Assets/icon logo 1.png" alt="Logo 5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
