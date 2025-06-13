import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Contact.css';
import ContactCard from './ContactCard/ContactCard';
import ContactForm from './ContactForm/ContactForm';

const Contact = () => {
  return (
    <section className="contact-container" id="Contact">
      <motion.h5
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h5>

      <div className="contact-content">
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <ContactCard
            icon={<FaEnvelope />}
            text="akeditzefxak@gmail.com"
            link="mailto:akeditzefxak@gmail.com"
          />
          <ContactCard
            icon={<FaGithub />}
            text="Akashak0823"
            link="https://github.com/akashak0823"
          />
          <ContactCard
            icon={<FaLinkedin />}
            text="Akash AK"
            link="https://www.linkedin.com/in/akash-ak-6b4704251"
          />
        </motion.div>

        <motion.div
          className="contact-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
